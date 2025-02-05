import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import HomePage from './HomePage';

describe('App Component', () => {
  it('renders the heading and paragraph', () => {
    render(<HomePage />);
    expect(screen.getByText("$$appInstance$$ 🩵 I'm alive")).toBeInTheDocument();
    expect(
      screen.getByText("Let's get the party started...")
    ).toBeInTheDocument();
  });

  it('increments the counter when the button is clicked', () => {
    render(<HomePage />);
    const button = screen.getByText('Click me 0');

    fireEvent.click(button);
    fireEvent.click(button);

    expect(screen.getByText('Click me 2')).toBeInTheDocument();
  });
});
