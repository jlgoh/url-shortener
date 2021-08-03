import { shallow } from 'enzyme';
import Home, { SubmitButton } from '../pages/Home';

it('renders a submit button', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.find(SubmitButton).length).toBe(1);
});
