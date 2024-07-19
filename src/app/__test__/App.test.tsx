import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Renders main page correctly', async () => {
  it('Should render the page correctly', async () => {
    render(<App />);
    const sidebarItem = await screen.queryByText('Button');

    expect(sidebarItem).toBeInTheDocument();
  });
});
