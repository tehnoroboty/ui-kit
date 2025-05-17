import { Meta, StoryObj } from '@storybook/react'

import { PostLikesBox } from './PostLikesBox'

const meta = {
  argTypes: {
    isAuth: { control: 'boolean' },
    likesCount: { control: 'number' },
  },
  args: {
    avatars: [],
    isAuth: false,
    likesCount: 0,
  },
  component: PostLikesBox,
  tags: ['autodocs'],
  title: 'Components/PostLikesBox',
} satisfies Meta<typeof PostLikesBox>

export default meta
type Story = StoryObj<typeof PostLikesBox>

// Сторис с разными состояниями

export const NoLikesNotAuth: Story = {
  args: {
    avatars: [],
    isAuth: false,
    likesCount: 0,
  },
}

export const NoLikesAuth: Story = {
  args: {
    avatars: [],
    isAuth: true,
    likesCount: 0,
  },
}

export const OneLike: Story = {
  args: {
    avatars: [
      {
        url: 'https://i.pravatar.cc/40?img=1',
      },
    ],
    isAuth: true,
    likesCount: 1,
  },
}

export const ThreeLikes: Story = {
  args: {
    avatars: [
      { url: 'https://i.pravatar.cc/40?img=1' },
      { url: 'https://i.pravatar.cc/40?img=2' },
      { url: 'https://i.pravatar.cc/40?img=3' },
    ],
    isAuth: true,
    likesCount: 3,
  },
}

export const MoreThanThreeLikes: Story = {
  args: {
    avatars: [
      { url: 'https://i.pravatar.cc/40?img=1' },
      { url: 'https://i.pravatar.cc/40?img=2' },
      { url: 'https://i.pravatar.cc/40?img=3' },
      { url: 'https://i.pravatar.cc/40?img=4' }, // этот не отобразится, но имитирует "больше трёх"
    ],
    isAuth: true,
    likesCount: 10,
  },
}
