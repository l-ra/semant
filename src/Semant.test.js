import React from 'react';
import ReactDOM from 'react-dom';
import Semant from './Semant';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Semant />, div);
  ReactDOM.unmountComponentAtNode(div);
});
