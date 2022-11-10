/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */

import { RedirectButton } from '@src/components/root';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Root/Button/RedirectButton',
  component: RedirectButton,
  argTypes: {
    // ButtonText
    buttonText: { control: 'text' },

    // General
    link: { control: 'text', defaultValue: 'https://www.google.com' },

    // BackgroundType
    colorScheme: {
      control: 'inline-radio',
      options: [
        'blue-over-gBlueLight',
        'white-over-blue',
        'gSkyblue-over-reverseGradient',
      ],
    },

    // ButtonSize
    size: {
      control: 'inline-radio',
      options: ['btn-lg', 'btn-md', 'btn-sm'],
    },

    // linkOpenNewTab
    linkOpenNewTab: {
      control: 'boolean',
    },

    iconName: {
      control: 'inline-radio',
      options: [
        'FiCornerUpRight',
        'FiCornerUpLeft',
        'FiSend',
        'FiNavigation',
        'FiCalendar',
        null,
      ],
    },

    iconIsLeft: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof RedirectButton>;

/**
 * Template
 */
const Template: ComponentStory<typeof RedirectButton> = (args) => (
  <div
    style={{
      padding: '80px',
      background: '#dddddd',
    }}
  >
    <RedirectButton {...args} />
  </div>
);

/**
 * colorScheme - blue-over-gBlueLight
 */
export const blueOvergBlueLight = Template.bind({});
blueOvergBlueLight.args = {
  // General
  buttonText: 'View our sponsors',

  // clickHandler with value
  clickHandler: (e, link) => alert(link),

  // colorScheme
  colorScheme: 'blue-over-gBlueLight',

  //Size
  size: 'btn-lg',

  // linkOpenNewTab
  linkOpenNewTab: false,

  // Icon
  iconName: 'FiSend',
};

/**
 * colorScheme - white-over-blue
 */
export const whiteOverBlue = Template.bind({});
whiteOverBlue.args = {
  // General
  buttonText: 'View our sponsors',

  // colorScheme
  colorScheme: 'white-over-blue',

  //Size
  size: 'btn-md',

  // linkOpenNewTab
  linkOpenNewTab: false,

  // Icon
  iconName: 'FiCornerUpRight',
};

/**
 * colorScheme - gSkyblue-over-reverseGradient
 */
export const gSkyblueOverReverseGradient = Template.bind({});
gSkyblueOverReverseGradient.args = {
  // General
  buttonText: 'View our sponsors',

  // colorScheme
  colorScheme: 'gSkyblue-over-reverseGradient',

  //Size
  size: 'btn-sm',

  // linkOpenNewTab
  linkOpenNewTab: false,
};
