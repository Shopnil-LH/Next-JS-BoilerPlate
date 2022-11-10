/**
 * An array of values to apply to input fields before testing
 * validation
 */

export const generalInputValidationTest = [
  {
    value: '',
    expectError: true,
  },
  {
    value: 'as',
    expectError: true,
  },
  {
    value: 'asd',
    expectError: false,
  },
];

export const emailInputValidationTest = [
  {
    type: 'text',
    name: 'email',
    value: '',
    expectError: true,
  },
  {
    type: 'text',
    name: 'email',
    value: 'asd@',
    expectError: true,
  },
  {
    type: 'text',
    name: 'email',
    value: 'asd@asd.com',
    expectError: false,
  },
];

export const checkBoxInputValidationTest = [
  {
    value: true,
    expectError: false,
  },
  {
    value: false,
    expectError: true,
  },
];

/**
 * Used for input/textarea
 */
export const errorBorder = 'border-dangerLight';
export const normalBorder = 'border-transparent';

/**
 * Used for coloring label text
 */
export const errorText = 'text-dangerLight';
export const normalText = 'text-blackLight';
