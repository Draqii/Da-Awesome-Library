import type { Meta, StoryObj } from '@storybook/react';
import "../../styles/fontfaces.scss";
import DropDown from './DropDown';
import { fn } from '@storybook/test';

// Component Story
const meta: Meta<typeof DropDown> = {
  title: "Atoms/DropDown",
  component: DropDown,

  // Layout
  parameters: {
    layout: 'centered',
  },

  // Default Arguments
  args: {
    options: ["optionA", "optionB", "optionC"],
    onChange: () => null
  },

  // Autodocs
  tags: ['autodocs'],
  argTypes: {
    options: {
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
type Story = StoryObj<typeof DropDown>;


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