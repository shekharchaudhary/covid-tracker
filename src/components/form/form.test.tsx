import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Form } from './form.component';

describe('Form Component', () => {
  const mockOnChange = jest.fn();
  const options = ['AL', 'AK', 'AR'];

  it('renders without crashing', () => {
    render(<Form options={options} disabled={false} onChange={mockOnChange} />);
    expect(screen.getByLabelText(/u.s. states/i)).toBeInTheDocument();
  });

  it('handles disabled state correctly', () => {
    render(<Form options={options} disabled={true} onChange={mockOnChange} />);
    expect(screen.getByLabelText(/u.s. states/i)).toBeDisabled();
  });

  it('calls onChange when an option is selected', async () => {
    render(<Form options={options} disabled={false} onChange={mockOnChange} />);
    const input = screen.getByLabelText('U.S. STATES'); // Adjust this to match your label
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' }); // To open the dropdown
    await waitFor(() => {
      // eslint-disable-next-line testing-library/no-wait-for-side-effects
      fireEvent.click(screen.getByText('AL')); // Replace 'AL' with the actual text of the option
    });
    expect(mockOnChange).toHaveBeenCalled();
  });
});
