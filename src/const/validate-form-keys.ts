import { dateValidate, fileValidate, textDescrValidate, textValidate } from '../utils/validate';

export enum FormKeys {
  TITLE = 'title',
  DATE = 'date',
  FILE = 'file',
  SELECT = 'select',
  CHECK = 'check',
  RADIO = 'radio',
  DECSRIPTIONS = 'descriprion',
}

export const validateMap: Record<FormKeys, (value: string) => boolean> = {
  [FormKeys.TITLE]: textValidate,
  [FormKeys.DATE]: dateValidate,
  [FormKeys.FILE]: fileValidate,
  [FormKeys.SELECT]: fileValidate,
  [FormKeys.CHECK]: fileValidate,
  [FormKeys.RADIO]: fileValidate,
  [FormKeys.DECSRIPTIONS]: textDescrValidate,
};
