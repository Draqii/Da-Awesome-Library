import type { Meta, StoryObj } from '@storybook/react';
import "../../styles/fontfaces.scss";
import Radio from './Radio';
import { fn } from '@storybook/test';

// Component Story
const meta: Meta<typeof Radio> = {
  title: "Atoms/Radio",
  component: Radio,

  // Layout
  parameters: {
    layout: 'centered',
  },

  // Default Arguments
  args: {
    items: ["optionA", "optionB", "optionC"],
    onChange: () => null
  },

  // Autodocs
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: "radio",
      description: "options to choose from.",
    },
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
type Story = StoryObj<typeof Radio>;


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