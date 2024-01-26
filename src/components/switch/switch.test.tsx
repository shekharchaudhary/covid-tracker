import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Switch } from '../../components';
import '@testing-library/jest-dom/extend-expect';

describe('Switch Component', () => {
  const mockHandleChange = jest.fn();

  test('renders with correct label', () => {
    const testLabel = 'Test Label';
    render(
      <Switch
        checked={false}
        label={testLabel}
        handleChange={mockHandleChange}
      />
    );

    expect(screen.getByText(testLabel)).toBeInTheDocument();
  });

  test('triggers handleChange on click', () => {
    render(
      <Switch checked={false} label='Test' handleChange={mockHandleChange} />
    );

    const switchElement = screen.getByRole('checkbox');
    fireEvent.click(switchElement);

    expect(mockHandleChange).toHaveBeenCalled();
  });

  test('reflects the correct state', () => {
    render(
      <Switch checked={true} label='Test' handleChange={mockHandleChange} />
    );

    const switchElement = screen.getByRole('checkbox');
    expect(switchElement).toBeChecked();
  });
});
