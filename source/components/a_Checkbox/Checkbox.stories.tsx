import type { Meta, StoryObj } from '@storybook/react';
import "../../styles/fontfaces.scss";
import Checkbox from './Checkbox';

// Component Story
const meta: Meta<typeof Checkbox> = {
  title: "Atoms/Checkbox",
  component: Checkbox,

  // Layout
  parameters: {
    layout: 'centered',
  },

  // Default Arguments
  args: {
    children: "Check Me!",
    checked: false
  },

  // Autodocs
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: "text",
      description: "content displayed next to checkbox.",
    },
    checked: {
      control: "boolean",
      description: "state of checkbox."
    },
    theme: {
      control: "select",
      options: ["light", "dark"],
      description: "wether checkbox is light or dark."
    },
    onChange: {
      control: false,
      description: "function executed when clicked on."
    },
    className: {
      control: false,
      description: "optional classname to append."
    }
  },
};

// Export Story
export default meta;
type Story = StoryObj<typeof Checkbox>;


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