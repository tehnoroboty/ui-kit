import type { Meta, StoryObj } from '@storybook/react'

import { Calendar, CalendarProps } from './Calendar'

const meta = {
  args: {
    showOutsideDays: true,
  },
  component: Calendar,
  tags: ['autodocs'],
  title: 'Components/Calendar',
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    mode: 'single',
    selected: new Date(),
  },
}

export const RangeSelection: Story = {
  args: {
    mode: 'range',
    selected: {
      from: new Date(2024, 4, 1),
      to: new Date(2024, 4, 10),
    },
  } satisfies CalendarProps,
}

export const WithDisabledDays: Story = {
  args: {
    disabled: [{ dayOfWeek: [0, 6] }], // Disable weekends
    selected: new Date(),
  },
}
