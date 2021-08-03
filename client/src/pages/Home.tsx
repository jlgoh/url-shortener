import { Box, Button, TextField, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoadingIndicator from '../components/LoadingIndicator';
import validURL from '../utils/checkUrl';

const HomeContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Form = styled.form`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Input = styled(TextField)`
    && {
        width: 40%;
        margin: 10px;
    }
`;
export const SubmitButton = styled(Button)`
    && {
        margin: 10px;
    }
`;

function Home(): JSX.Element {
    // original url
    const [urlInput, setUrlInput] = useState('');
    // shortened url
    const [urlOutput, setUrlOutput] = useState('');
    // error
    const [error, setError] = useState('');
    // loading
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!urlInput) {
            setError('Required');
            return;
        }

        if (!validURL(urlInput)) {
            setError('Please enter a valid URL');
            return;
        }

        // clear error
        if (error) {
            setError('');
        }

        // create shortened URL
        try {
            setLoading(true);
            const { data } = await axios.post('/api/shorten', { originalUrl: urlInput });
            setUrlOutput(data.shortUrl);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <HomeContainer>
            <Typography variant="overline">Say goodbye to long URLs!</Typography>

            <Form onSubmit={(e) => handleSubmit(e)}>
                <Input
                    error={error.length > 0}
                    helperText={error}
                    label="Shorten your URL here"
                    onChange={(e) => setUrlInput(e.target.value)}
                    value={urlInput}
                />
                <SubmitButton color="primary" type="submit" variant="contained">
                    Shorten
                </SubmitButton>
            </Form>

            {loading && <LoadingIndicator title="Attemping to shorten the URL..." />}

            {urlOutput && (
                <Alert severity="success">
                    This is your shortened URL:{' '}
                    <Link to={urlOutput}>
                        {window.location.href}
                        {urlOutput}
                    </Link>
                </Alert>
            )}
        </HomeContainer>
    );
}

export default Home;
