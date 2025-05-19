import type { Meta, StoryObj } from '@storybook/react'

import { mockList } from '@/components/carousel/mock'
import { fn } from '@storybook/test'

import { Carousel } from './Carousel'

const meta = {
  argTypes: {},
  component: Carousel,
  tags: ['autodocs'],
  title: 'Components/Carousel',
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

const renderItem = (item: any) => <img alt={'image'} src={item.img} />

export const CarouselStorySmall: Story = {
  args: {
    list: mockList,
    onChange: fn(),
    renderItem,
    size: 'small',
  },
}
export const CarouselStoryLarge: Story = {
  args: {
    list: mockList,
    onChange: fn(),
    renderItem,
    size: 'large',
  },
}
