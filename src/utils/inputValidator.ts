// Internal Imports
import { IFormValues, IFormFieldProp } from '@src/types/root';
/**
 * @method lengthCheck
 * @param {string} data
 * @returns {boolean}
 * @description this method will return true if data length is greater-than two else false
 */
export const lengthCheck = (data: string) => {
  if (data.length >= 3) return true;
  else return false;
};

/**
 * @method isValidMail
 * @param {string} mail
 * @returns {boolean}
 * @description this method will check, a mail valid or not. if valid it will return true else false
 */
export const isValidMail = (mail: string) => {
  const regexPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexPattern.test(mail);
};

// dataValidation
export const dataValidation = (
  formFields: IFormFieldProp[],
  formValues: IFormValues
) => {
  const errors: IFormValues = {};

  formFields.forEach(({ name, isRequired }) => {
    if (isRequired && !formValues[name]) {
      /**
       * Check if required fields are filled
       */

      /**
       * Todo : Update this as name attribute is not valid output to
       * show the user, i.e. Better to show First Name rather than firstName
       */
      errors[name] = `${name} is required`;
    } else {
      /**
       * Check if provided form inputs have valid character
       * length
       */
      if (formValues[name]) {
        if (name == 'email') {
          const isValid = isValidMail(`${formValues[name]}`);
          if (!isValid) errors[name] = 'Email is not valid';
          else delete errors[name];
        } else {
          const length = lengthCheck(`${formValues[name]}`);
          if (!length) errors[name] = `${name} at least 3 characters`;
        }
      }
    }
  });
  return errors;
};
