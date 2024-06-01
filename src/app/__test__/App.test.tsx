import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
// this import is needed so `toBeInTheDocument()` works and doesn't fail the test.
import '@testing-library/jest-dom/vitest';

import App from '../App';

describe('Renders main page correctly', async () => {
  it('Should render the page correctly', async () => {
    render(<App />);
    const h1 = await screen.queryByText('Work in progress');

    expect(h1).toBeInTheDocument();
  });
});
