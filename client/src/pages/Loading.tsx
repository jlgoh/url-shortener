import { useLocation } from 'react-router-dom';

function Loading(): JSX.Element {
    // TODO: Given the shortened URL, fetch from BE the original URL, and redirect user to the original URL
    const location = useLocation();
    console.log('🚀 | file: Home.tsx | line 37 | Home | location', location);

    return <h1>Loading</h1>;
}

export default Loading;
