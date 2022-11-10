// External Imports
import { useState } from 'react';
import Link from 'next/link';

// Internal Imports
import { dataValidation } from '@src/utils';
import { IFormValues, IForm } from '@src/types/root';
import { RedirectButton } from '@src/components/root';
import { FormField } from './form-field';

/**
 * @param {object} IForm
 * @returns JSX.Element
 */
export const Form = ({
  formTitle,
  formFields,
  buttonInfo,
  privacyInfo,
}: IForm) => {
  const [formValues, setFormValues] = useState<IFormValues>({});
  const [formErrors, setFormErrors] = useState<IFormValues>({});

  const handleFormChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | any>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormValues({
        ...formValues,
        [name]: e.target.checked,
      });
    } else {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
  };

  // submitHandler
  const submitHandler = (
    e: React.MouseEvent<HTMLElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const currentFormErrors = dataValidation(formFields, formValues);
    setFormErrors(currentFormErrors);

    if (Object.keys(currentFormErrors).length == 0) {
      /**
       * Todo: Update form submission method
       */
      alert(JSON.stringify(formValues));
      setFormValues({});
    }
  };

  return (
    <form data-testid="form" className={`form grid gap-4 lg:grid-cols-2`}>
      {formTitle && (
        <div className="mb-[.5rem] md:mb-[.75rem] col-start-1 col-end-3">
          <h3 className="text-[1.75rem] font-medium leading-[1.3] md:text-[3rem] md:font-bold md:leading-[1.1] capitalize text-secondary">
            {formTitle}
          </h3>
        </div>
      )}

      {formFields &&
        formFields.map((field, index) => {
          const halfWidth = 'max-sm:col-start-1 max-sm:col-end-3';
          const fullWidth = 'col-start-1 col-end-3';
          return (
            <div
              key={index}
              className={field.space === 0.5 ? halfWidth : fullWidth}
            >
              <FormField
                fieldProps={field}
                value={formValues[field.name] ? formValues[field.name] : ''}
                onChange={handleFormChange}
                formErrors={formErrors}
              />
            </div>
          );
        })}

      {privacyInfo && (
        <div className="col-start-1 col-end-3">
          <Link href={`${privacyInfo?.link}`} passHref>
            <a className="inline-flex focus:outline-0 focus:shadow-none focus-visible:outline-0 text-[.9375rem] text-secondary underline uppercase transition-colors duration-300 hover:text-secondaryLight">
              {privacyInfo?.linkText}
            </a>
          </Link>
        </div>
      )}

      {buttonInfo.buttonText && (
        <div className="col-start-1 col-end-3">
          <RedirectButton {...buttonInfo} clickHandler={submitHandler} />
        </div>
      )}
    </form>
  );
};
