export const dateValidate = (value?: string): boolean => {
  if (!value) {
    return true;
  }
  const dataValue = new Date(value);
  const currentDay = new Date();
  return dataValue <= currentDay;
};

export const fileValidate = (value: string): boolean => {
  return value.length <= 0 || !value;
};

export const agreeValidate = (value: string): boolean => {
  return value !== 'on' || !value;
};

export const textValidate = (value: string): boolean =>
  !value.trim().length || value.trim().length >= 3 || !value;

export const textDescrValidate = (value: string): boolean =>
  !value.trim().length || value.trim().length >= 10 || !value;
