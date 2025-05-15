import type { Meta, StoryObj } from '@storybook/react'

import { Alerts } from './Alerts'

const meta = {
  argTypes: {},
  component: Alerts,
  tags: ['autodocs'],
  title: 'Components/Alerts',
} satisfies Meta<typeof Alerts>

export default meta
type Story = StoryObj<typeof meta>

export const SuccessAlert: Story = {
  args: { type: 'success' },
}

export const ErrorAlert: Story = {
  args: { type: 'error' },
}

export const FixedAlert: Story = {
  args: { closable: false, position: 'static', type: 'error' },
}
