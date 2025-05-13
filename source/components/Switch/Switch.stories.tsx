import type { Meta, StoryObj } from '@storybook/react';
import "../../styles/fontfaces.scss";
import Switch from './Switch';

// Component Story
const meta: Meta<typeof Switch> = {
  title: "Atoms/Switch",
  component: Switch,

  // Layout
  parameters: {
    layout: 'centered',
  },
  args: {
    onChange: () => null,
    value: false
  },

  // Autodocs
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: false,
      description: "state of textbox."
    },
    theme: {
      control: "select",
      options: ["light", "dark"],
      description: "wether textbox is light or dark."
    },
    onChange: {
      control: false,
      description: "function executed when value changed."
    },
    className: {
      control: false,
      description: "optional classname to append."
    }
  },
};

// Export Story
export default meta;
type Story = StoryObj<typeof Switch>;


// ++++++++++++++++++++++++++++++++++++
// Story Variants 

export const CommonLight: Story = {
  args: {
    theme: "light"
  },
  parameters: {
    backgrounds: {default: "light"}
  }
};

export const CommonDark: Story = {
  args: {
    theme: "dark"
  },
  parameters: {
    backgrounds: {default: "dark"}
  }
};