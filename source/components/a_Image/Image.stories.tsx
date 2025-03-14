import type { Meta, StoryObj } from '@storybook/react';
import "../../styles/fontfaces.scss";
import image_placeholder from "../../../public/images/placeholder.jpg"
import Image from './Image';

// Component Story
const meta: Meta<typeof Image> = {
  title: "Atoms/Image",
  component: Image,

  // Layout
  parameters: {
    layout: 'centered',
  },

  // Default Arguments
  args: {
    src: image_placeholder,
    alt: "no image"
  },

  // Autodocs
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: false,
      description: "image source or data to display."
    },
    alt: {
      control: false,
      description: "alternative text to display."
    },
    onClick: {
      control: false,
      description: "function executed when clicked on."
    },
    theme: {
      control: "select",
      options: ["light", "dark"],
      description: "wether icon is light or dark."
    },
    className: {
      control: false,
      description: "optional classname to append."
    }
  },
};

// Export Story
export default meta;
type Story = StoryObj<typeof Image>;


// ++++++++++++++++++++++++++++++++++++
// Story Variants 

export const Common: Story = {
  args: {
    theme: "light"
  },
  parameters: {
    backgrounds: {default: "light"}
  }
};