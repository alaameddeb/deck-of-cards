import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../js/App';

configure({ adapter: new Adapter() });

const app = mount(<App />);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('52 displayed cards', () => {
  expect(app.find('.cards .card')).toHaveLength(52);
});

it('display the picked card', () => {
  expect(app.find('aside .card')).toHaveLength(0);
  app.find('#pick').simulate('click');
  expect(app.find('aside .card')).toHaveLength(1);
});
