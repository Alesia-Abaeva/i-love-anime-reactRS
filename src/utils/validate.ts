export const dateValidate = (value: string): boolean => {
  const dataValue = new Date(value);
  const currentDay = new Date();
  return dataValue <= currentDay || !value;
};
