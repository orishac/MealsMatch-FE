import { render, screen } from '@testing-library/react';
import Card from './index';
import { describe, it, expect } from 'vitest';

describe('Card', () => {
  it('renders the restaurant name', () => {
    render(<Card />);
    expect(screen.getByRole('heading', { name: 'שם המסעדה' })).toBeInTheDocument();
  });

  it('shows the rating', () => {
    render(<Card />);
    expect(screen.getByText('3.4')).toBeInTheDocument();
  });

  it('renders the star icon', () => {
    render(<Card />);
    expect(screen.getByTestId('star-icon')).toBeInTheDocument();
  });

  it('renders the heart icon', () => {
    render(<Card />);
    expect(screen.getByTestId('heart-icon')).toBeInTheDocument();
  });
});
