import type { Meta, StoryObj } from '@storybook/react'

import { UserAvatarName } from './UserAvatarName'

const meta: Meta<typeof UserAvatarName> = {
  component: UserAvatarName,
  tags: ['autodocs'],
  title: 'Components/UserAvatarName',
}

export default meta
type Story = StoryObj<typeof UserAvatarName>

export const Default: Story = {
  args: {
    url: '/mocks/posts/post1.jpg',
    username: 'John Doe',
  },
}

export const WithCustomClass: Story = {
  args: {
    className: 'customWrapperClass',
    url: '/mocks/posts/post2.jpg',
    username: 'Alice',
    usernameClassName: 'customUsernameClass',
  },
}

export const EmptyAvatar: Story = {
  args: {
    url: '',
    username: 'No Avatar',
  },
}
