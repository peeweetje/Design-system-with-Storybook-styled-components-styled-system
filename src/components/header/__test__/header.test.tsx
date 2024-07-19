import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import { Header } from '../Header';

describe('Testing the Header functionality', async () => {
  it('should render correctly when user is logged in', () => {
    const user = { name: 'John Doe' };
    const { getByText } = render(<Header user={user} />);
    expect(getByText('John Doe')).toBeInTheDocument();
  });
});
