import { Box } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import Loading from './pages/Loading';

const MainContainer = styled(Box)`
    padding: 30px;
`;

function App(): JSX.Element {
    return (
        <MainContainer>
            <Router>
                <Switch>
                    <Route component={Home} path="/" exact />
                    <Route component={Loading} />
                </Switch>
            </Router>
        </MainContainer>
    );
}

export default App;
