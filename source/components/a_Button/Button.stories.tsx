import type { Meta, StoryObj } from '@storybook/react';
import "../../styles/fontfaces.scss";
import Button from './Button';

// Component Story
const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,

  // Layout
  parameters: {
    layout: 'centered',
  },

  // Default Arguments
  args: {
    children: "Click Me!",
    onClick: () => null
  },

  // Autodocs
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: "text",
      description: "content displayed on button.",
    },
    theme: {
      control: "select",
      options: ["light", "dark"],
      description: "wether button is light or dark."
    },
    isPrimary: {
      control: "boolean",
      description: "wether button is primary or secondary."
    },
    onClick: {
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
type Story = StoryObj<typeof Button>;


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

export const PrimaryLight: Story = {
  args: {
    theme: "light",
    isPrimary: true
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

export const PrimaryDark: Story = {
  args: {
    theme: "dark",
    isPrimary: true
  },
  parameters: {
    backgrounds: {default: "dark"}
  }
};