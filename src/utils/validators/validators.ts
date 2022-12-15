export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value)=> {
  if (value) return undefined;
  return "Field is required";
};

export const maxLength30: FieldValidatorType = (value) => {
  if (value && value.length > 30) return "Max length is 30";
  return undefined;
};

export const maxLengthCreator = (maxLength : number) : FieldValidatorType=> (value) => {
  if (value && value.length > maxLength) return `Max length is ${maxLength}`;
  return undefined;
};
