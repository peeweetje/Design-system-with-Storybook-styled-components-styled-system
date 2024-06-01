import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from '../Button';

describe('Testing the button functionality', async () => {
  it('should trigger onClick handler when clicked', () => {
    const onClickMock = vi.fn();
    render(<Button label='Click Me' onClick={onClickMock} />);
    fireEvent.click(screen.getByText('Click Me'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
