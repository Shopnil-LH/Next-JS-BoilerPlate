// Internal Importstypes
import { IForm, FormElementType } from '@src/types/root';

// Internal formData
export const formData: IForm = {
  formTitle: 'Send Us Message',
  formFields: [
    {
      elementType: FormElementType.Input,
      type: 'text',
      name: 'firstName',
      placeholder: 'First Name',
      isRequired: true,
      space: 0.5,
    },
    {
      elementType: FormElementType.Input,
      type: 'text',
      name: 'lastName',
      placeholder: 'Last Name',
      isRequired: true,
      space: 0.5,
    },
    {
      elementType: FormElementType.Input,
      type: 'text',
      name: 'email',
      placeholder: 'Enter Email Address',
      isRequired: true,
      space: 1,
    },
    {
      elementType: FormElementType.Input,
      type: 'text',
      name: 'phone',
      placeholder: 'Phone number',
      isRequired: false,
      space: 1,
    },
    {
      elementType: FormElementType.TextArea,
      name: 'message',
      placeholder: 'Write Your Message Here',
      isRequired: true,
      space: 1,
      type: 'text',
    },
    {
      label: 'Terms & Condition',
      type: 'checkbox',
      elementType: FormElementType.Checkbox,
      name: 'terms',
      isRequired: true,
      space: 1,
    },
  ],
  buttonInfo: {
    buttonText: 'Send Now',
    colorScheme: 'skyblue-over-gSkyblueLight',
    size: 'btn-sm',
    'data-testid': 'submit-button',
  },
};
