export const dateValidate = (value: string): boolean => {
  const dataValue = new Date(value);
  const currentDay = new Date();
  return dataValue >= currentDay || !value;
};

export const fileValidate = (value: string): boolean => {
  return value.length <= 0 || !value;
};

export const textValidate = (value: string): boolean =>
  !value.trim().length || value.trim().length <= 2 || !value;
