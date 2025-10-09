import React from 'react';

const mockNavigate = jest.fn();
const mockUseParams = jest.fn(() => ({ id: '1' }));
const mockUseLocation = jest.fn(() => ({ pathname: '/' }));

export const BrowserRouter = ({ children }) => <div>{children}</div>;
export const MemoryRouter = ({ children, initialEntries }) => <div>{children}</div>;
export const Routes = ({ children }) => <div>{children}</div>;
export const Route = ({ element }) => element;
export const Link = ({ children, to, ...props }) => <a href={to} {...props}>{children}</a>;
export const useNavigate = () => mockNavigate;
export const useParams = mockUseParams;
export const useLocation = mockUseLocation;

export default {
  BrowserRouter,
  MemoryRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
  useLocation
};