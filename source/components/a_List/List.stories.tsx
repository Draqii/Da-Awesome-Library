import type { Meta, StoryObj } from '@storybook/react';
import "../../styles/fontfaces.scss";
import List from './List';

// Component Story
const meta: Meta<typeof List> = {
  title: "Atoms/List",
  component: List,

  // Layout
  parameters: {
    layout: 'centered',
  },

  // Default Arguments
  args: {
    items: ["First Item", "Second Item", "Third Item"]
  },

  // Autodocs
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: false,
      description: "items shown in list"
    },
    isOrdered: {
      control: "boolean",
      description: "weether list is ordered or unordered."
    },
    theme: {
      control: "select",
      options: ["light", "dark"],
      description: "wether list is light or dark."
    },
    className: {
      control: false,
      description: "optional classname to append."
    }
  },
};

// Export Story
export default meta;
type Story = StoryObj<typeof List>;


// ++++++++++++++++++++++++++++++++++++
// Story Variants 

export const OrderedLight: Story = {
  args: {
    isOrdered: true,
    theme: "light"
  },
  parameters: {
    backgrounds: {default: "light"}
  }
};

export const UnorderedLight: Story = {
  args: {
    isOrdered: false,
    theme: "light"
  },
  parameters: {
    backgrounds: {default: "light"}
  }
};

export const OrderedDark: Story = {
  args: {
    isOrdered: true,
    theme: "dark"
  },
  parameters: {
    backgrounds: {default: "dark"}
  }
};

export const UnorderedDark: Story = {
  args: {
    isOrdered: false,
    theme: "dark"
  },
  parameters: {
    backgrounds: {default: "dark"}
  }
};