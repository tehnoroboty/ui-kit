import { Meta, StoryObj } from '@storybook/react'

import { CreationTime } from './CreationTime'

const meta = {
  argTypes: {
    createdAt: {
      control: { type: 'text' },
      description: 'Дата создания в формате ISO строки',
    },
  },
  args: {
    createdAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(), // 1 час назад
  },
  component: CreationTime,
  tags: ['autodocs'],
  title: 'Components/CreationTime',
} satisfies Meta<typeof CreationTime>

export default meta
type Story = StoryObj<typeof CreationTime>

export const Default: Story = {
  render: args => <CreationTime {...args} />,
}

export const FiveMinutesAgo: Story = {
  args: {
    createdAt: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 минут назад
  },
  render: args => <CreationTime {...args} />,
}

export const Yesterday: Story = {
  args: {
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 день назад
  },
  render: args => <CreationTime {...args} />,
}

export const CustomDate: Story = {
  args: {
    createdAt: '2024-01-01T12:00:00.000Z',
  },
  render: args => <CreationTime {...args} />,
}
