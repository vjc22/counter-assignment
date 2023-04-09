import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

describe('Counter component', () => {
  beforeEach(() => {
    render(<Counter />);
  });

  test('should display the counter message', () => {
    const counterMessage = screen.getByText(/counter/i);
    expect(counterMessage).toBeInTheDocument();
  });

  test('should display initial count with value of 0', () => {
    const countValue = screen.getByText('0');
    expect(countValue).toBeInTheDocument();
  });

  test('should increment the count when the + button is clicked', () => {
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);
    const countValue = screen.getByText('1');
    expect(countValue).toBeInTheDocument();
  });

  test('should decrement the count when the - button is clicked', () => {
    const decrementButton = screen.getByText('-');
    fireEvent.click(decrementButton);

    const countValue = screen.getByText('-1');
    expect(countValue).toBeInTheDocument();
  });
});