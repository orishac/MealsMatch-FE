import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RestaurantPage from './index';

// Mock the SVG imports
jest.mock('../../assets/star.svg?react', () => () => <div data-testid="star-icon">⭐</div>);
jest.mock('../../assets/heart-2.svg?react', () => () => <div data-testid="heart-icon">❤️</div>);
jest.mock('../../assets/wolt.svg?react', () => () => <div data-testid="wolt-logo">Wolt</div>);
jest.mock('../../assets/cibus.svg?react', () => () => <div data-testid="cibus-logo">Cibus</div>);
jest.mock('../../assets/tenbis.svg?react', () => () => <div data-testid="tenbis-logo">Tenbis</div>);
jest.mock('../../assets/tabit.svg?react', () => () => <div data-testid="tabit-logo">Tabit</div>);

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('RestaurantPage', () => {
  it('renders restaurant name', () => {
    renderWithRouter(<RestaurantPage />);
    expect(screen.getByText('שם המסעדה')).toBeInTheDocument();
  });

  it('renders rating information', () => {
    renderWithRouter(<RestaurantPage />);
    expect(screen.getByText('4.2')).toBeInTheDocument();
    expect(screen.getByText('(127 ביקורות)')).toBeInTheDocument();
  });

  it('renders restaurant tags', () => {
    renderWithRouter(<RestaurantPage />);
    expect(screen.getByText('איטלקי')).toBeInTheDocument();
    expect(screen.getByText('פיצה')).toBeInTheDocument();
    expect(screen.getByText('פסטה')).toBeInTheDocument();
  });

  it('renders delivery information', () => {
    renderWithRouter(<RestaurantPage />);
    expect(screen.getByText('זמן משלוח: 30-45 דקות')).toBeInTheDocument();
    expect(screen.getByText('עלות משלוח: ₪15')).toBeInTheDocument();
  });

  it('renders delivery companies', () => {
    renderWithRouter(<RestaurantPage />);
    expect(screen.getByText('הזמנה דרך:')).toBeInTheDocument();
    expect(screen.getByTestId('cibus-logo')).toBeInTheDocument();
    expect(screen.getByTestId('tabit-logo')).toBeInTheDocument();
    expect(screen.getByTestId('tenbis-logo')).toBeInTheDocument();
    expect(screen.getByTestId('wolt-logo')).toBeInTheDocument();
  });

  it('renders additional details section', () => {
    renderWithRouter(<RestaurantPage />);
    expect(screen.getByText('פרטים נוספים')).toBeInTheDocument();
    expect(screen.getByText('שעות פעילות')).toBeInTheDocument();
    expect(screen.getByText('כתובת')).toBeInTheDocument();
    expect(screen.getByText('טלפון')).toBeInTheDocument();
  });
});
