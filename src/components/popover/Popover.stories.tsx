import ExpandOutline from '@/assets/componentsIcons/ExpandOutline'
import { Meta, StoryObj } from '@storybook/react'

import s from './popover.module.scss'

import { PopoverComponent } from './Popover' // Предположим,

const meta: Meta<typeof PopoverComponent> = {
  argTypes: {
    align: {
      control: { type: 'select' },
      options: ['center', 'end', 'start'],
    },
    children: {
      control: { type: 'text' },
    },
  },
  component: PopoverComponent,
  tags: ['autodocs'],
  title: 'Components/Popover',
}

export default meta

type Story = StoryObj<typeof PopoverComponent>

export const Default: Story = {
  args: {
    children: 'This is a popover content!',
    icon: <ExpandOutline color={'white'} />,
    iconActive: <ExpandOutline className={s.active} />,
  },
}

export const Centered: Story = {
  args: {
    ...Default.args,
    align: 'center',
  },
}

export const EndAligned: Story = {
  args: {
    ...Default.args,
    align: 'end',
  },
}

export const StartAligned: Story = {
  args: {
    ...Default.args,
    align: 'start',
  },
}
