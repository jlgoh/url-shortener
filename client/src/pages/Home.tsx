import { Box, Button, TextField, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
const SubmitButton = styled(Button)`
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!error) {
            setError('Required');
            return;
        }

        // TODO: isEmail check

        // clear error
        setError('');

        // TODO: Create shortened URL in BE
        setUrlOutput('some-shortened-url-here');
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
