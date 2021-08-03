import { Box, CircularProgress, Typography } from '@material-ui/core';
import styled from 'styled-components';

const LoadingIndicatorWrapper = styled(Box)`
    height: 100%;
    width: 100%;
    background-color: grey;
    opacity: 0.8;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

type LoadingIndicatorProps = {
    title: string;
};

function LoadingIndicator({ title }: LoadingIndicatorProps): JSX.Element {
    return (
        <LoadingIndicatorWrapper>
            <CircularProgress />
            <Typography variant="caption">{title}</Typography>
        </LoadingIndicatorWrapper>
    );
}

export default LoadingIndicator;
