import type { Meta, StoryObj } from '@storybook/react';
import "../../styles/fontfaces.scss";
import Paragraph from './Paragraph';

// Component Story
const meta: Meta<typeof Paragraph> = {
  title: "Atoms/Paragraph",
  component: Paragraph,

  // Layout
  parameters: {
    layout: 'centered',
  },

  // Default Arguments
  args: {
    children: "Paragraph Text"
  },

  // Autodocs
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      control: false,
      description: "function executed when clicked on."
    },
    children: {
      control: "text",
      description: "content displayed in the paragraph.",
    },
    theme: {
      control: "select",
      options: ["light", "dark"],
      description: "wether paragraph is light or dark."
    },
    size: {
      control: "select",
      options: ["large", "medium", "small"],
      description: "size of the paragraph."
    },
    className: {
      control: false,
      description: "optional classname to append."
    }
  },
};

// Export Story
export default meta;
type Story = StoryObj<typeof Paragraph>;


// ++++++++++++++++++++++++++++++++++++
// Story Variants 

export const LargeLight: Story = {
  args: {
    size: "large",
    theme: "light"
  },
  parameters: {
    backgrounds: {default: "light"}
  }
};

export const MediumLight: Story = {
  args: {
    size: "medium",
    theme: "light"
  },
  parameters: {
    backgrounds: {default: "light"}
  }
};

export const SmallLight: Story = {
  args: {
    size: "small",
    theme: "light"
  },
  parameters: {
    backgrounds: {default: "light"}
  }
};

export const LargeDark: Story = {
  args: {
    size: "large",
    theme: "dark"
  },
  parameters: {
    backgrounds: {default: "dark"}
  }
};

export const MediumDark: Story = {
  args: {
    size: "medium",
    theme: "dark"
  },
  parameters: {
    backgrounds: {default: "dark"}
  }
};

export const SmallDark: Story = {
  args: {
    size: "small",
    theme: "dark"
  },
  parameters: {
    backgrounds: {default: "dark"}
  }
};