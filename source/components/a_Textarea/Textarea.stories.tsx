import type { Meta, StoryObj } from '@storybook/react';
import "../../styles/fontfaces.scss";
import Textarea from './Textarea';

// Component Story
const meta: Meta<typeof Textarea> = {
  title: "Atoms/Textarea",
  component: Textarea,

  // Layout
  parameters: {
    layout: 'centered',
  },

  // Default Arguments
  args: {
    placeholder: "Click Me!",
    rows: 3
  },

  // Autodocs
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: "text",
      description: "placeholder displayed in place of a value.",
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
type Story = StoryObj<typeof Textarea>;


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