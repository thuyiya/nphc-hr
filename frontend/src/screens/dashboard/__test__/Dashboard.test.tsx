import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../Dashboard';

test('renders learn react link', () => {
  render(<Dashboard />);
  const linkElement = screen.getByText(/Welcome HR Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
