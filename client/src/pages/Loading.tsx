import { Alert } from '@material-ui/lab';
import { Method } from 'axios';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingIndicator from '../components/LoadingIndicator';
import useAxios from '../hooks/useAxios';

function Loading(): JSX.Element {
    const location = useLocation();

    const params = useMemo(
        () => ({
            method: 'GET' as Method,
            url: `/api/shorten?shortUrl=${location.pathname.slice(1)}`,
        }),
        [location]
    );

    const { response, error } = useAxios(params);

    if (response && response.data) {
        if (response.data.originalUrl.includes('http')) {
            window.location.href = `${response.data.originalUrl}`;
        } else {
            window.location.href = `https://${response.data.originalUrl}`;
        }
    }

    return (
        <>
            {!error && <LoadingIndicator title="Taking you to your destination..." />}

            {error && <Alert severity="error">This short URL does not map to any URL </Alert>}
        </>
    );
}

export default Loading;
