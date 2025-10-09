import { render, screen } from '@testing-library/react';
import Home from '../pages/Home'; 
import React from 'react';

jest.mock('../components/Carousel', () => () => <div data-testid="property-carousel">Mock Carousel</div>);
jest.mock('../components/PropertyList', () => ({ filters }) => (
  <div data-testid="property-list">Mock PropertyList - Filters: {JSON.stringify(filters)}</div>
));

describe('Home component', () => {
  test('renders PropertyCarousel and PropertyList with correct props', () => {
    const mockFilters = { city: 'Madrid', price: '1000-2000' };

    render(<Home filters={mockFilters} />);

    expect(screen.getByTestId('property-carousel')).toBeInTheDocument();

    const propertyList = screen.getByTestId('property-list');
    expect(propertyList).toBeInTheDocument();
    expect(propertyList.textContent).toContain('Madrid');
    expect(propertyList.textContent).toContain('1000-2000');
  });
});
