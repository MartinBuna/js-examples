import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <App/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("Otestování funkce reverseString", () => {
  test('Toto by mělo projít.', () => {
    expect(App.prototype.reverseString("abcd")).toBe("dcba");
  });

  test('Toto by mělo selhat.', () => {
        expect(App.prototype.reverseString("abcd")).toBe("acdb");
  });
})

test('array length', () => {
  expect(App.prototype.arrayLength([1, 2])).toBe(2);
});