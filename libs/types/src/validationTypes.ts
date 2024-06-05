export type ValidationErrors = {
  [key: string]: string | ValidationErrors;
};

export type Validation = {
  isValid: boolean;
  length: number;
  errors: ValidationErrors;
};
