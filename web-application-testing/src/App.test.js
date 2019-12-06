import React from 'react';
import { render } from '@testing-library/react';
import App, { addBall, addStrike, addFoul, addHit } from './App';

test('The App Exists', () => {
  render(<App />);
});

test('ball is found', () => {
  const { getByText } = render(<App />);
  const dashboardElement = getByText(/balls/i);
  expect(dashboardElement).toBeInTheDocument();
});

test('strike is found', () => {
  const { getByText } = render(<App />);
  const dashboardElement = getByText(/strikes/i);
  expect(dashboardElement).toBeInTheDocument();
});


test('hit is found', () => {
  const { getByText } = render(<App />);
  const dashboardElement = getByText(/hit/i);
  expect(dashboardElement).toBeInTheDocument();
});

test('foul is found', () => {
  const { getByText } = render(<App />);
  const dashboardElement = getByText(/foul/i);
  expect(dashboardElement).toBeInTheDocument();
});

