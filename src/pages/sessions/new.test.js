import React from 'react';
import ReactDOM from 'react-dom';
import SessionsNew from './new';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SessionsNew />, div);
});
