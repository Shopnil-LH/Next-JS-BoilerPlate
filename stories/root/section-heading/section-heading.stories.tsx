/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */

//  External Imports
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Internal Imports
import { SectionHeading } from '@src/components/root';
import { sectionHeadingData } from '@root/__mock-props__/components/root/section-heading';

export default {
  title: 'Components/Root/SectionHeading',
  component: SectionHeading,
  argTypes: {
    subTitle: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    isCenter: {
      control: 'boolean',
    },
    colorScheme: {
      control: 'inline-radio',
      options: ['blue', 'skyblue', 'white', 'black'],
    },
  },
} as ComponentMeta<typeof SectionHeading>;

/**
 * Template1
 */
const Template1: ComponentStory<typeof SectionHeading> = (args) => (
  <div className="bg-body section-padding-primary">
    <div className="container">
      <SectionHeading {...args} />
    </div>
  </div>
);
/**
 * Template2
 */
const Template2: ComponentStory<typeof SectionHeading> = (args) => (
  <div className="bg-primaryLight section-padding-primary">
    <div className="container">
      <SectionHeading {...args} />
    </div>
  </div>
);

/**
 * BlueVariant
 */
export const BlueVariant = Template1.bind({});
BlueVariant.args = {
  subTitle: sectionHeadingData?.subTitle,
  title: sectionHeadingData?.title,
  description: sectionHeadingData?.description,
  isCenter: sectionHeadingData?.isCenter,
  colorScheme: 'blue',
  isBottomSpacing: false,
};

/**
 * WhiteVariant
 */
export const WhiteVariant = Template2.bind({});
WhiteVariant.args = {
  subTitle: sectionHeadingData?.subTitle,
  title: sectionHeadingData?.title,
  colorScheme: 'white',
  isBottomSpacing: false,
};
/**
 * SkyBlueVariant
 */
export const SkyBlueVariant = Template1.bind({});
SkyBlueVariant.args = {
  subTitle: sectionHeadingData?.subTitle,
  title: sectionHeadingData?.title,
  colorScheme: 'skyblue',
  isCenter: true,
  isBottomSpacing: false,
};
/**
 * BlackVariant
 */
export const BlackVariant = Template1.bind({});
BlackVariant.args = {
  subTitle: sectionHeadingData?.subTitle,
  title: sectionHeadingData?.title,
  colorScheme: 'black',
  isBottomSpacing: false,
};
