import type { Meta, StoryObj } from '@storybook/react';
import "../../styles/fontfaces.scss";
import Text from './Text';

// Component Story
const meta: Meta<typeof Text> = {
  title: "Atoms/Text",
  component: Text,

  // Layout
  parameters: {
    layout: 'centered',
  },

  // Default Arguments
  args: {
    children: "Click Me!"
  },

  // Autodocs
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: "text",
      description: "content displayed in the text.",
    },
    theme: {
      control: "select",
      options: ["light", "dark"],
      description: "wether text is light or dark."
    },
    size: {
      control: "select",
      options: ["large", "medium", "small"],
      description: "size of the text."
    },
    className: {
      control: false,
      description: "optional classname to append."
    }
  },
};

// Export Story
export default meta;
type Story = StoryObj<typeof Text>;


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