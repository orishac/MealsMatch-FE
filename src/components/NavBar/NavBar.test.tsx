import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './index';
import { vi, describe, it, expect } from 'vitest';

vi.mock('../../assets/profile-2.svg?react', () => ({
  default: () => <div data-testid="profile-icon">Profile</div>,
}));

vi.mock('../../assets/heart-2.svg?react', () => ({
  default: () => <div data-testid="heart-icon">Heart</div>,
}));

const NavBarWithRouter = () => (
  <BrowserRouter>
    <NavBar />
  </BrowserRouter>
);

describe('NavBar', () => {
  it('renders without crashing', () => {
    render(<NavBarWithRouter />);
    
    const container = document.querySelector('.navbar__container');
    expect(container).toBeInTheDocument();
  });

  it('contains all main sections', () => {
    render(<NavBarWithRouter />);
    
    const container = document.querySelector('.navbar__container');
    expect(container).toBeInTheDocument();
    
    const leftSide = document.querySelector('.navbar__left_side');
    const center = document.querySelector('.navbar__center');
    const rightSide = document.querySelector('.navbar__right_side');
    
    expect(leftSide).toBeInTheDocument();
    expect(center).toBeInTheDocument();
    expect(rightSide).toBeInTheDocument();
  });

  it('renders profile and heart links', () => {
    render(<NavBarWithRouter />);
    
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
    
    links.forEach(link => {
      expect(link).toHaveAttribute('href', '/');
    });
    
    expect(screen.getByTestId('profile-icon')).toBeInTheDocument();
    expect(screen.getByTestId('heart-icon')).toBeInTheDocument();
  });

  it('renders search bar in center', () => {
    render(<NavBarWithRouter />);
    
    const center = document.querySelector('.navbar__center');
    expect(center).toBeInTheDocument();
    
    const searchContainer = document.querySelector('.searchbar__container');
    expect(searchContainer).toBeInTheDocument();
  });

  it('renders logo on right side', () => {
    render(<NavBarWithRouter />);
    
    const rightSide = document.querySelector('.navbar__right_side');
    expect(rightSide).toBeInTheDocument();
  });
});