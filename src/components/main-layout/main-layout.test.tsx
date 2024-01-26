import { render, screen, prettyDOM } from '@testing-library/react';
import { MainLayout } from './main-layout.component';
import '@testing-library/jest-dom/extend-expect';

describe('MainLayout', () => {
  it('renders its children', () => {
    const { container } = render(<MainLayout>Test Child</MainLayout>);
    console.log(prettyDOM(container));
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });
});
