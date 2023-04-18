import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import { FormKeys } from '../../const/form-keys';
import { Forms } from './Forms';
import { InputFile } from './Inputs/InputFile';
import { renderWithProvider } from '../../utils/test-util';

describe('Test Form component', () => {
  const addCard = vi.fn();
  const showModal = vi.fn();
  const file = new File(['(⌐□_□)gfdgdgd'], 'chucknorris.png', { type: 'image/png' });
  const descriptions =
    'Well, Prince, so Genoa and Lucca are now just family estates of the Buonapartes';

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('check input text area', async () => {
    renderWithProvider(<Forms addCard={addCard} showModal={showModal} />);
    const inputDesc = screen.getByTestId<HTMLInputElement>(FormKeys.DESCRIPTIONS);

    await userEvent.type(inputDesc, descriptions);
    expect(inputDesc.value).toBe(descriptions);
  });

  it('check input date', async () => {
    renderWithProvider(<Forms addCard={addCard} showModal={showModal} />);
    const inputDate = screen.getByTestId<HTMLInputElement>(FormKeys.DATE);

    await userEvent.type(inputDate, '2020-01-02');
    expect(inputDate).toHaveValue('2020-01-02');
  });

  it('type input checkbox', async () => {
    renderWithProvider(<Forms addCard={addCard} showModal={showModal} />);
    const inputCheck = screen.getByTestId<HTMLInputElement>(FormKeys.CHECK);

    await userEvent.click(inputCheck);
    expect(inputCheck).toBeChecked();
  });

  it('file upload', async () => {
    window.URL.createObjectURL = vi.fn();
    render(<InputFile />);
    const inputFile = screen.getByLabelText<HTMLInputElement>(/upload image/i);

    await userEvent.upload(inputFile, file);
    expect(inputFile.files).toHaveLength(1);
  });

  it('check modal open', async () => {
    window.URL.createObjectURL = vi.fn().mockImplementation(() => 'file');
    renderWithProvider(<Forms addCard={addCard} showModal={showModal} />);
    const inputDesc = screen.getByTestId<HTMLInputElement>(FormKeys.DESCRIPTIONS);
    const inputTitle = screen.getByTestId<HTMLInputElement>(FormKeys.TITLE);
    const InputSelect = screen.getByTestId<HTMLSelectElement>(FormKeys.SELECT);
    const inputCheck = screen.getByTestId<HTMLInputElement>(FormKeys.CHECK);
    const inputRadio = screen.getByTestId<HTMLInputElement>(FormKeys.RADIO);
    const inputFile = screen.getByTestId<HTMLInputElement>(FormKeys.FILE);
    const inputDate = screen.getByTestId<HTMLInputElement>(FormKeys.DATE);

    const button = screen.getByTestId<HTMLButtonElement>('button');

    await userEvent.type(inputTitle, 'Title');
    await userEvent.type(
      inputDesc,
      'Well, Prince, so Genoa and Lucca are now just family estates of the Buonapartes'
    );

    await userEvent.type(inputDate, '2023-03-20');
    await userEvent.selectOptions(InputSelect, 'Sports flags');
    await userEvent.upload(inputFile, file);
    await userEvent.click(inputCheck);
    await userEvent.click(inputRadio);
    await userEvent.click(button);

    expect(showModal).toHaveBeenCalledTimes(1);
    expect(addCard).toHaveBeenCalledTimes(1);
  });
});
