import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputText } from './InputText';
import { FormKeys } from '../../../const/validate-form-keys';
import { FieldError } from 'react-hook-form';

describe('Test Input components', () => {
  const inputValue = 'banana';
  const validate = {
    message: 'the name must be more than 2 characters',
    type: 'validate',
  } as FieldError;

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should type some value in title', async () => {
    render(<InputText />);
    const inputName = screen.getByTestId<HTMLInputElement>(FormKeys.TITLE);
    await userEvent.type(inputName, inputValue);
    expect(inputName.value).toBe(inputValue);
  });

  it('check invalide date', async () => {
    render(<InputText validate={validate} />);
    const inputName = screen.getByTestId<HTMLInputElement>(FormKeys.TITLE);
    expect(inputName).toHaveClass('input_text error');
  });
});
