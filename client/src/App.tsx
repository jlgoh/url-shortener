import { Box } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import Loading from './pages/Loading';

const MainContainer = styled(Box)`
    padding: 30px;
`;

const theme = createTheme({
    palette: {
        type: 'dark',
    },
});

function App(): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MainContainer>
                <Router>
                    <Switch>
                        <Route component={Home} path="/" exact />
                        <Route component={Loading} />
                    </Switch>
                </Router>
            </MainContainer>
        </ThemeProvider>
    );
}

export default App;
