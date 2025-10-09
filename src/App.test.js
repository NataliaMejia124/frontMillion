import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock the child components
jest.mock('./pages/Home', () => () => <div data-testid="home-page">Home Page</div>);
jest.mock('./pages/DetailPage', () => () => <div data-testid="detail-page">Detail Page</div>);
jest.mock('./components/Navbar', () => ({ onSearch }) => <div data-testid="navbar">Navbar</div>);

test('renders app with navbar and home page', () => {
  render(<App />);
  const navbar = screen.getByTestId('navbar');
  const homePage = screen.getByTestId('home-page');
  
  expect(navbar).toBeInTheDocument();
  expect(homePage).toBeInTheDocument();
});
