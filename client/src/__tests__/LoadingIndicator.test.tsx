import { Typography } from '@material-ui/core';
import { shallow } from 'enzyme';
import LoadingIndicator from '../components/LoadingIndicator';

it('renders a loading indicator with the correct title props', () => {
    const wrapper = shallow(<LoadingIndicator title="Test if this is correct" />);

    expect(wrapper.find(Typography).text()).toBe('Test if this is correct');
});
