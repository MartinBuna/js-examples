import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('string will be reversed', () => {
  expect(App.prototype.reverseString("hello")).toBe("olleh");
});

test('string will be reversed', () => {
  expect(App.prototype.arrayLength([1, 2])).toBe(2);
});