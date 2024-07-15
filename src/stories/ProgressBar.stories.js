import { ProgressBar } from './ProgressBar';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/ProgressBar',
  component: ProgressBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    value: {
      control: {
        type: 'number',
        value: 70,
        min: 0,
        max: 100,
      },
    },
    max: {
      control: {
        type: 'number',
        value: 100,
        min: 0,
        max: 100,
      },
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Min = {
  args: {
    value: 0,
  },
};

export const Half = {
  args: {
    value: 50,
  },
};

export const Max = {
  args: {
    value: 100,
  },
};

export const Warning = {
  args: {
    value: 70,
    color: 'warning',
  },
};

export const Danger = {
  args: {
    value: 70,
    color: 'danger',
  },
};

export const Info = {
  args: {
    value: 70,
    color: 'info',
  },
};


