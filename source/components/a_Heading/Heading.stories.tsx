import type { Meta, StoryObj } from '@storybook/react';
import "../../styles/fontfaces.scss";
import Heading from './Heading';

// Component Story
const meta: Meta<typeof Heading> = {
  title: "Atoms/Heading",
  component: Heading,

  // Layout
  parameters: {
    layout: 'centered',
  },

  // Default Arguments
  args: {
    children: "Lorem Ipsum!"
  },

  // Autodocs
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: "text",
      description: "content displayed in the heading.",
    },
    theme: {
      control: "select",
      options: ["light", "dark"],
      description: "wether heading is light or dark."
    },
    size: {
      control: "select",
      options: ["teaser", "xxlarge", "xlarge", "large", "medium", "small"],
      description: "size of the heading."
    },
    className: {
      control: false,
      description: "optional classname to append."
    }
  },
};

// Export Story
export default meta;
type Story = StoryObj<typeof Heading>;


// ++++++++++++++++++++++++++++++++++++
// Story Variants 

export const TeaserLight: Story = {
  args: {
    size: "teaser",
    theme: "light"
  },
  parameters: {
    backgrounds: {default: "light"}
  }
};

export const ExtraExtraLargeLight: Story = {
  args: {
    size: "xxlarge",
    theme: "light"
  },
  parameters: {
    backgrounds: {default: "light"}
  }
};

export const ExtraLargeLight: Story = {
  args: {
    size: "xlarge",
    theme: "light"
  },
  parameters: {
    backgrounds: {default: "light"}
  }
};

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

export const TeaserDark: Story = {
  args: {
    size: "teaser",
    theme: "dark"
  },
  parameters: {
    backgrounds: {default: "dark"}
  }
};

export const ExtraExtraLargeDark: Story = {
  args: {
    size: "xxlarge",
    theme: "dark"
  },
  parameters: {
    backgrounds: {default: "dark"}
  }
};

export const ExtraLargeDark: Story = {
  args: {
    size: "xlarge",
    theme: "dark"
  },
  parameters: {
    backgrounds: {default: "dark"}
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