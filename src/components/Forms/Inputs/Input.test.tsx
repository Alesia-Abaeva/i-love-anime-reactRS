import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputText } from './InputText';
import { FormKeys } from '../../../const/validate-form-keys';

describe('Test Input components', () => {
  const inputValue = 'banana';
  const inputInvalideValue = 'l';

  beforeEach(() => {
    vi.resetAllMocks();
  });

  const handleInputTextChange = vi.fn();

  it('should type some value in title', async () => {
    render(<InputText onChange={handleInputTextChange} validate={true} />);
    const inputName = screen.getByTestId<HTMLInputElement>(FormKeys.TITLE);

    await userEvent.type(inputName, inputValue);

    expect(inputName.value).toBe(inputValue);
  });

  it('should invoke onChange function in title', async () => {
    render(<InputText onChange={handleInputTextChange} validate={true} />);
    const inputName = screen.getByTestId<HTMLInputElement>(FormKeys.TITLE);

    await userEvent.type(inputName, inputValue);

    expect(handleInputTextChange).toHaveBeenCalledTimes(inputValue.length);
  });

  it('check invalide date', async () => {
    render(<InputText onChange={handleInputTextChange} validate={false} />);
    const inputName = screen.getByTestId<HTMLInputElement>(FormKeys.TITLE);

    await userEvent.type(inputName, inputInvalideValue);

    expect(inputName).toHaveClass('input_text error');
  });
});
