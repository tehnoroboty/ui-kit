import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { DatePicker, Props } from './DatePicker'

const meta = {
  argTypes: {
    error: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    error: false,
    label: 'Choose a date',
  },
  component: DatePicker,
  tags: ['autodocs'],
  title: 'Components/DatePicker',
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof DatePicker>

const DatePickerWrapper = (props: Props) => {
  const [date, setDate] = useState<Date | undefined>(props.value)

  return <DatePicker {...props} onSelect={setDate} value={date} />
}

export const Default: Story = {
  render: args => <DatePickerWrapper {...args} />,
}

export const WithPreselectedDate: Story = {
  args: {
    value: new Date('2024-05-01'),
  },
  render: args => <DatePickerWrapper {...args} />,
}

export const WithoutLabel: Story = {
  args: {
    label: '',
  },
  render: args => <DatePickerWrapper {...args} />,
}

export const WithError: Story = {
  args: {
    error: true,
    label: 'Date with error',
  },
  render: args => <DatePickerWrapper {...args} />,
}
