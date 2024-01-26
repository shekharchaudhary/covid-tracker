import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MainLayout } from './components';

describe('MainLayout', () => {
  it('renders its children', () => {
    render(<MainLayout>Test Child</MainLayout>);

    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });
});
