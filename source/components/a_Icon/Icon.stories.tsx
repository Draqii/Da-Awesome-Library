import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SVG_Logo from "../../../public/svgs/logo.svg"
import SVG_Check from "../../../public/svgs/check.svg"
import "../../styles/fontfaces.scss";
import Icon from './Icon';



// Component Story
const meta: Meta<typeof Icon> = {
  title: "Atoms/Icon",
  component: Icon,

  // Layout
  parameters: {
    layout: 'centered',
  },

  // Default Arguments
  args: {
  },

  // Autodocs
  tags: ['autodocs'],
  argTypes: {
    ReactSVG: {
      control: false,
      description: "ReactSVGElement to display."
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
type Story = StoryObj<typeof Icon>;


// ++++++++++++++++++++++++++++++++++++
// Story Variants 

export const CommonColor: Story = {
  args: {
    ReactSVG: SVG_Logo,
    theme: "light"
  },
  parameters: {
    backgrounds: {default: "light"}
  }
};

export const CommonLight: Story = {
  args: {
    ReactSVG: SVG_Check,
    theme: "light"
  },
  parameters: {
    backgrounds: {default: "light"}
  }
};

export const CommonDark: Story = {
  args: {
    ReactSVG: SVG_Check,
    theme: "dark"
  },
  parameters: {
    backgrounds: {default: "dark"}
  }
};