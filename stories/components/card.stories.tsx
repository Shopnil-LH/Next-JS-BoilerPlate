/**
 * This story enables controls in storybook where user can
 * change props and see how the component reacts
 */
import Card from '@src/components/card';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    link: { control: 'text' },
    header: { control: 'text' },
    paragraph: { control: 'text' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

/**
 * Primary Card
 */
export const Primary = Template.bind({});

Primary.args = {
  header: 'Header One',
  paragraph: 'Paragraph',
  link: '#',
};
