import type { Meta, StoryObj } from '@storybook/react';
import "../../styles/fontfaces.scss";
import Table from './Table';

// Component Story
const meta: Meta<typeof Table> = {
  title: "Atoms/Table",
  component: Table,

  // Layout
  parameters: {
    layout: 'centered',
  },

  // Default Arguments
  args: {
    data: {
      headings: ["heading A", "heading B", "heading C"],
      rows: [
        {columns: ["entry A", "entry B", "entry C"]}
      ]
    },
  },

  // Autodocs
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: "text",
      description: "content shown on button"
    },
    theme: {
      control: "select",
      options: ["light", "dark"],
      description: "wether text is light or dark."
    },
    className: {
      control: false,
      description: "optional classname to append."
    }
  },
};

// Export Story
export default meta;
type Story = StoryObj<typeof Table>;


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