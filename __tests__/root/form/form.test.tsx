// External Imports
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

// Internal Imports
import { Form } from '@src/components/root';
import { formData } from '@root/__mock-props__/components/root/form';
import {
  generalInputValidationTest,
  emailInputValidationTest,
  checkBoxInputValidationTest,
  errorBorder,
  errorText,
  normalText,
  normalBorder,
} from '@root/__tests__/root/form/config';
import { IForm } from '@src/types/root/form/index';

const specialFields = ['email', 'checkbox'];

/**
 * Test if the form is rendering correctly
 */
describe('Form Render Test', () => {
  it('renders a form correctly', () => {
    const { getByTestId } = render(<Form {...formData} />);
    const form = getByTestId('form');

    expect(form).toBeInTheDocument();
    expect(form).toMatchSnapshot();
  });
});

/**
 * Test if the form fields updating correctly
 */
describe.each(formData.formFields)(
  'Form input onChange test',
  ({ type, name }) => {
    const updatedInputString = 'Test String';

    it(`${name} change event triggers correctly`, () => {
      const { getByTestId } = render(<Form {...formData} />);
      const element = getByTestId(name) as HTMLInputElement;

      if (type === 'text') {
        fireEvent.change(element, {
          target: { value: updatedInputString },
        });
        expect(element.value).toBe(updatedInputString);
      } else if (type === 'checkbox') {
        expect(element.checked).toEqual(false);
        fireEvent.click(element);
        expect(element.checked).toEqual(true);
      }
    });
  }
);

/**
 * Test input validation for general text input fields
 */
describe.each(generalInputValidationTest)(
  'General input validation Tests with value: $value',
  ({ value, expectError }) => {
    describe.each(formData.formFields)(
      'Given Form Fields',
      ({ type, name }) => {
        /**
         * We only want to test generic text inputs
         */

        const isGeneralInputField = !specialFields.some((item) =>
          [type, name].includes(item)
        );

        if (isGeneralInputField) {
          let formFields, modifiedFormData: IForm;
          beforeAll(() => {
            /**
             * In order to run validation checks for general text fields
             * we must set isRequired to true for those fields
             */
            formFields = formData.formFields.map((item) => {
              return { ...item, isRequired: true };
            });

            modifiedFormData = {
              ...formData,
              formFields,
            };
          });

          it(`Input element for ${name} should  have ${
            expectError ? 'error' : 'normal'
          } border`, () => {
            const { getByTestId } = render(<Form {...modifiedFormData} />);
            const submitButton = getByTestId(
              modifiedFormData.buttonInfo['data-testid']
            );
            const element = getByTestId(name) as HTMLInputElement;

            fireEvent.change(element, {
              target: { value: value },
            });
            fireEvent.click(submitButton);

            if (expectError) {
              expect(element).toHaveClass(errorBorder);
            } else {
              expect(element).not.toHaveClass(errorBorder);
            }
          });
        }
      }
    );
  }
);

/**
 * Test email input validation
 */
describe.each(emailInputValidationTest)(
  'Email input validation Tests with value: $value',
  ({ value, expectError }) => {
    /**
     * We only want to test for email input
     */
    let formFields, modifiedFormData: IForm;
    beforeAll(() => {
      /**
       * In order to run validation checks for general text fields
       * we must set isRequired to true for those fields
       */
      formFields = formData.formFields.map((item) => {
        return { ...item, isRequired: true };
      });

      modifiedFormData = {
        ...formData,
        formFields,
      };
    });

    it(`Input element for email should  have ${
      expectError ? 'error' : 'normal'
    } border`, () => {
      const { getByTestId } = render(<Form {...modifiedFormData} />);
      const submitButton = getByTestId(
        modifiedFormData.buttonInfo['data-testid']
      );
      const element = getByTestId('email') as HTMLInputElement;

      fireEvent.change(element, {
        target: { value: value },
      });
      fireEvent.click(submitButton);

      if (expectError) {
        expect(element).toHaveClass(errorBorder);
      } else {
        expect(element).toHaveClass(normalBorder);
      }
    });
  }
);

/**
 * Test checkbox input validation
 */
describe.each(checkBoxInputValidationTest)(
  'Checkbox validation Tests with value: $value',
  ({ value, expectError }) => {
    let formFields, modifiedFormData: IForm;
    beforeAll(() => {
      /**
       * In order to run validation checks for general text fields
       * we must set isRequired to true for those fields
       */
      formFields = formData.formFields.map((item) => {
        return { ...item, isRequired: true };
      });

      modifiedFormData = {
        ...formData,
        formFields,
      };
    });

    it(`Checkbox box and label should  have ${
      expectError ? 'error' : 'normal'
    } styles`, () => {
      const { getByTestId } = render(<Form {...modifiedFormData} />);
      const submitButton = getByTestId(
        modifiedFormData.buttonInfo['data-testid']
      );
      const checkboxInputElement = getByTestId('terms') as HTMLInputElement;
      const checkboxBox = getByTestId('checkbox-box');
      const checkboxLabel = getByTestId('checkbox-label');

      if (value) {
        fireEvent.click(checkboxInputElement);
      }
      fireEvent.click(submitButton);

      if (expectError) {
        expect(checkboxBox).toHaveClass(errorBorder);
        expect(checkboxLabel).toHaveClass(errorText);
      } else {
        expect(checkboxBox).toHaveClass('border-secondary');
        expect(checkboxLabel).toHaveClass(normalText);
      }
    });
  }
);
