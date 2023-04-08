import { FormKeys } from './validate-form-keys';

export const VALIDATE_MESSAGE: Record<FormKeys, string> = {
  [FormKeys.TITLE]: 'the name must be more than 2 characters',
  [FormKeys.DATE]: 'the flag could not be created in the future',
  [FormKeys.FILE]: 'upload the image',
  [FormKeys.SELECT]: 'select values',
  [FormKeys.CHECK]: 'oooops you need to agree with the claims',
  [FormKeys.RADIO]: 'we cannot make a choice for you, choose',
  [FormKeys.DESCRIPTIONS]: 'describe a little more (more than 10 characters)',
};
