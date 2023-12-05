import {Meta, StoryObj} from "@storybook/vue3";

import Island from "./Island.vue";

const meta = {
  title: '基础/Island',
  component: Island,
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: 'Badge'
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Island>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '123',
  },
};
