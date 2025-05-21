import type { Meta, StoryObj } from '@storybook/react';
import {withRouter} from "storybook-addon-remix-react-router"

import "../../styles/fontfaces.scss";
import Link from './Link';

// Component Story
const meta: Meta<typeof Link> = {
  title: "Atoms/Link",
  component: Link,
  decorators: [withRouter],

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
      description: "content shown in link"
    },
    to: {
      control: false,
      description: "source the link goes to."
    },
    isInternal: {
      control: "boolean",
      description: "wether link is internal or not."
    },
    theme: {
      control: "select",
      options: ["light", "dark"],
      description: "wether link is light or dark."
    },
    target: {
      control: "select",
      options: ["light", "dark"],
      description: "wether link is light or dark."
    },
    className: {
      control: false,
      description: "optional classname to append."
    }
  },
};

// Export Story
export default meta;
type Story = StoryObj<typeof Link>;


// ++++++++++++++++++++++++++++++++++++
// Story Variants 

export const InternalLight: Story = {
  args: {
    theme: "light",
    to: "/",
    isInternal: true
  },
  parameters: {
    backgrounds: {default: "light"}
  }
};

export const ExternalLight: Story = {
  args: {
    theme: "light",
    to: "https://google.com",
    isInternal: false
  },
  parameters: {
    backgrounds: {default: "light"}
  }
};

export const InternalDark: Story = {
  args: {
    theme: "dark",
    to: "/",
    isInternal: true
  },
  parameters: {
    backgrounds: {default: "dark"}
  }
};

export const ExternalDark: Story = {
  args: {
    theme: "dark",
    to: "https://google.com",
    isInternal: false
  },
  parameters: {
    backgrounds: {default: "dark"}
  }
};