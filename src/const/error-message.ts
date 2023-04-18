import { FormKeys } from './form-keys';

export const VALIDATE_MESSAGE: Record<FormKeys, string> = {
  [FormKeys.TITLE]: 'the name must be more than 2 characters',
  [FormKeys.DATE]: 'we cant travel into the future',
  [FormKeys.FILE]: 'upload the image',
  [FormKeys.SELECT]: 'select values',
  [FormKeys.CHECK]: 'oooops you need to agree with the claims',
  [FormKeys.RADIO]: 'you have to fill in the field',
  [FormKeys.DESCRIPTIONS]: 'describe a little more (more than 10 characters)',
};

export enum REQUEST_ERROR {
  NOT_FOUND = 'nothing was found',
  SERVER_ERR = 'server error',
}
