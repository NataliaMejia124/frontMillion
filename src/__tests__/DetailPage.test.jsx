import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailPage from '../pages/DetailPage'; // importa siempre al principio
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { getPropertyDetail } from '../services/propertyService'; // también al inicio

jest.mock('../services/propertyService', () => ({
  getPropertyDetail: jest.fn(),
}));

jest.mock('react-image-gallery', () => () => (
  <div data-testid="image-gallery">Mock Image Gallery</div>
));

describe('DetailPage', () => {
  const mockProperty = {
    name: 'Casa Bonita',
    year: 2020,
    address: 'Calle Falsa 123',
    formattedPrice: '$300,000',
    description: 'Una casa bonita en las afueras.',
    propertyAge: 5,
    images: ['img1.jpg', 'img2.jpg'],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('fetches and displays property details correctly', async () => {
    getPropertyDetail.mockResolvedValueOnce(mockProperty);

    render(
      <MemoryRouter initialEntries={['/detail/123']}>
        <Routes>
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(getPropertyDetail).toHaveBeenCalledWith('123');

    expect(await screen.findByText('Casa Bonita 2020')).toBeInTheDocument();
    expect(await screen.findByText(/Calle Falsa 123/)).toBeInTheDocument();
    expect(await screen.findByText('$300,000')).toBeInTheDocument();
    expect(await screen.findByText('Una casa bonita en las afueras.')).toBeInTheDocument();
    expect(await screen.findByText(/Property age: 5/)).toBeInTheDocument();
    expect(await screen.findByTestId('image-gallery')).toBeInTheDocument();
  });

  test('handles error when fetch fails', async () => {
    getPropertyDetail.mockRejectedValueOnce(new Error('Error al cargar'));

    render(
      <MemoryRouter initialEntries={['/detail/999']}>
        <Routes>
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(getPropertyDetail).toHaveBeenCalledWith('999');

    expect(screen.queryByText('Casa Bonita 2020')).not.toBeInTheDocument();
    expect(screen.queryByTestId('image-gallery')).not.toBeInTheDocument();
  });
});
