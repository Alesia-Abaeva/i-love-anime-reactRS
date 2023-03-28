import { FormKeys } from './validate-form-keys';

export const errorMessageTitile: Record<FormKeys, string> = {
  [FormKeys.TITLE]: 'the name must be more than 2 characters',
  [FormKeys.DATE]: 'Flag creation date',
  [FormKeys.FILE]: 'Upload flag',
  [FormKeys.SELECT]: 'select values',
  [FormKeys.CHECK]: 'Show you name',
  [FormKeys.RADIO]: 'Is the official flag',
  [FormKeys.DECSRIPTIONS]: 'describe a little more (more than 10 characters)',
};
