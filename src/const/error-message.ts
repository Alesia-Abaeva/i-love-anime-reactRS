import { FormKeys } from './validate-form-keys';

export const errorMessageTitile: Record<FormKeys, string> = {
  [FormKeys.TITLE]: 'the name must be more than 2 characters',
  [FormKeys.DATE]: 'the flag could not be created in the future',
  [FormKeys.FILE]: 'upload the image',
  [FormKeys.SELECT]: 'select values',
  [FormKeys.CHECK]: 'Show you name',
  [FormKeys.RADIO]: 'we cannot make a choice for you, choose',
  [FormKeys.DECSRIPTIONS]: 'describe a little more (more than 10 characters)',
};
