import { FormKeys } from './validate-form-keys';

export const titleForms: Record<FormKeys, string> = {
  [FormKeys.TITLE]: 'Name of the flag',
  [FormKeys.DATE]: 'Flag creation date',
  [FormKeys.FILE]: 'Upload flag',
  [FormKeys.SELECT]: 'Type flag',
  [FormKeys.CHECK]: 'I consent to my personal data',
  [FormKeys.RADIO]: 'Is the official flag',
  [FormKeys.DECSRIPTIONS]: 'Descriprion of the flag',
};
