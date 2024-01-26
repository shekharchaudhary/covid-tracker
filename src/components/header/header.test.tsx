import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './header.component';

describe('Header', () => {
  it('renders a heading', () => {
    render(<Header />);
    const headingElement = screen.getByRole('heading', {
      name: /covid-19 tracker/i,
    });
    expect(headingElement).toBeInTheDocument();
  });
});
