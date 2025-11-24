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

  it('should render correctly with default props and be visible', () => {
    const { container } = render(<Button label='Default Button' />);
    expect(container.firstChild).toHaveClass(
      'font-medium rounded text-sm px-1.5 py-1.5 bg-grey-80 hover:bg-grey-70 text-white'
    );
    expect(container.firstChild).toBeVisible();
  });
});
