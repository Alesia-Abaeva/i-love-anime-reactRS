import { FormState } from 'components/Forms/Forms';

export const initialStateForm: FormState = {
  title: { value: '', isError: false },
  descriprion: { value: '', isError: false },
  date: { value: '', isError: false },
  file: { value: '', isError: false },
  select: { value: '', isError: false },
  check: { value: '', isError: false },
  radio: { value: '', isError: false },
};
