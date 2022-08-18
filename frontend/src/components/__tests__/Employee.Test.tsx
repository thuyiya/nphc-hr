import renderer from 'react-test-renderer';
import Employee from "../Employee";

describe('<Employee />', () => {
    it('Snapshot', () => {
        const component = renderer.create(<Employee />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})