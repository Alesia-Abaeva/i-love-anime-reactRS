import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FormKeys, Forms } from './Forms';
import userEvent from '@testing-library/user-event';

describe('Test Form component', () => {
  const addCard = vi.fn();
  const showModal = vi.fn();
  const file = new File(['(⌐□_□)gfdgdgd'], 'chucknorris.png', { type: 'image/png' });
  // const inputTitle = screen.getByTestId<HTMLInputElement>(FormKeys.TITLE);
  const descriptions =
    'Well, Prince, so Genoa and Lucca are now just family estates of the Buonapartes';
  // const InputSelect = screen.getByTestId<HTMLSelectElement>(FormKeys.SELECT);
  // const inputCheck = screen.getByTestId<HTMLInputElement>(FormKeys.CHECK);
  // const inputRadio = screen.getByTestId<HTMLInputElement>(FormKeys.RADIO);
  // const inputFile = screen.getByTestId<HTMLInputElement>(FormKeys.FILE);

  // const button = screen.getByTestId<HTMLButtonElement>('button');

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('check input text area', async () => {
    render(<Forms addCard={addCard} showModal={showModal} />);
    const inputDesc = screen.getByTestId<HTMLInputElement>(FormKeys.DECSRIPTIONS);

    await userEvent.type(inputDesc, descriptions);
    expect(inputDesc.value).toBe(descriptions);
  });

  it('check input date', async () => {
    render(<Forms addCard={addCard} showModal={showModal} />);
    const inputDate = screen.getByTestId<HTMLInputElement>(FormKeys.DATE);

    await userEvent.type(inputDate, '2020-01-02');
    expect(inputDate).toHaveValue('2020-01-02');
  });

  it('type input checkbox', async () => {
    render(<Forms addCard={addCard} showModal={showModal} />);
    const inputCheck = screen.getByTestId<HTMLInputElement>(FormKeys.CHECK);

    await userEvent.click(inputCheck);
    expect(inputCheck).toBeChecked;
  });

  // it('file upload', async () => {
  //   render(<Forms addCard={addCard} showModal={showModal} />);
  //   console.log(file, 'file');
  //   const inputFile = screen.getByLabelText(/Upload flag/i);

  //   await userEvent.upload(inputFile, file);
  //   // expect((screen.getByLabelText(/Upload flag/i) as HTMLInputElement).files[0]).toEqual(file);

  //   // const inputFile = screen.getByTestId<HTMLInputElement>(FormKeys.FILE);
  //   // await userEvent.upload(inputFile, file);
  //   // console.log(inputFile.files);
  //   // expect(inputFile.files).toHaveLength(1);
  // });

  // =====

  // it('check modal open', async () => {
  //   render(<Forms addCard={addCard} showModal={showModal} />);

  //   await userEvent.type(inputTitle, 'Title');
  //   await userEvent.type(
  //     inputDesc,
  //     'Well, Prince, so Genoa and Lucca are now just family estates of the Buonapartes'
  //   );

  //   await userEvent.type(inputDate, '2023-03-20');
  //   await userEvent.selectOptions(InputSelect, 'Sports flags');
  //   await userEvent.upload(inputFile, file);
  //   await userEvent.click(inputCheck);
  //   await userEvent.click(inputRadio);
  //   await userEvent.click(button);

  //   console.log(inputDate.value);
  //   console.log(inputTitle.value);
  //   console.log(inputDesc.value);
  //   console.log(InputSelect.value);
  //   console.log(inputFile.files[0]);
  //   console.log(inputRadio.value);
  //   console.log(inputCheck.value);

  //   screen.logTestingPlaygroundURL();
  //   expect(showModal).toHaveBeenCalledTimes(1);
  //   expect(addCard).toHaveBeenCalledTimes(1);
  // });
});
