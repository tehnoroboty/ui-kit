import { mockPosts } from '@/components/postsGrid/mocks/mockPosts'
import { Meta, StoryObj } from '@storybook/react'

import { Posts } from './Posts'

const meta = {
  argTypes: {
    onPostClick: { action: 'post clicked' },
  },
  component: Posts,
  tags: ['autodocs'],
  title: 'Components/Posts',
} satisfies Meta<typeof Posts>

export default meta

type Story = StoryObj<typeof Posts>

export const Default: Story = {
  args: {
    posts: mockPosts,
  },
}

export const WithoutImages: Story = {
  args: {
    posts: [
      { id: 1, images: [] },
      { id: 2, images: [] },
    ],
  },
}

export const CustomEmptyPlaceholder: Story = {
  args: {
    posts: [
      { id: 1, images: [] },
      { id: 2, images: [] },
    ],
    renderEmptyImagePlaceholder: () => (
      <div style={{ backgroundColor: '#fdd', padding: '1rem', textAlign: 'center' }}>
        <strong>Custom Placeholder</strong>
      </div>
    ),
  },
}
