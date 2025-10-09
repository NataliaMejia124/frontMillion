import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import DetailPage from '../pages/DetailPage';
import { useParams } from 'react-router-dom';
import { getPropertyDetail } from '../services/propertyService';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

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
    useParams.mockReturnValue({ id: '123' });
    getPropertyDetail.mockResolvedValueOnce(mockProperty);

    render(<DetailPage />);

    await waitFor(() => {
      expect(getPropertyDetail).toHaveBeenCalledWith('123');
    });

    expect(await screen.findByText('Casa Bonita 2020')).toBeInTheDocument();
    expect(await screen.findByText(/Calle Falsa 123/)).toBeInTheDocument();
    expect(await screen.findByText('$300,000')).toBeInTheDocument();
    expect(await screen.findByText('Una casa bonita en las afueras.')).toBeInTheDocument();
    expect(await screen.findByText(/Property age: 5/)).toBeInTheDocument();
    expect(await screen.findByTestId('image-gallery')).toBeInTheDocument();
  });

  test('handles error when fetch fails', async () => {
    useParams.mockReturnValue({ id: '999' });
    getPropertyDetail.mockRejectedValueOnce(new Error('Error al cargar'));

    render(<DetailPage />);

    await waitFor(() => {
      expect(getPropertyDetail).toHaveBeenCalledWith('999');
    });

    // El componente siempre renderiza la galería, pero sin datos mostraría valores vacíos o undefined
    expect(screen.queryByText('Casa Bonita 2020')).not.toBeInTheDocument();
    // La galería se renderiza pero sin imágenes
    expect(screen.getByTestId('image-gallery')).toBeInTheDocument();
  });
});
