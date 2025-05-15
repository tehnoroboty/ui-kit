import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { ProgressBar } from './ProgressBar'

const meta = {
  argTypes: {
    status: {
      control: 'select',
      options: ['idle', 'loading', 'success', 'error'],
    },
  },
  args: {
    status: 'idle',
  },
  component: ProgressBar,
  tags: ['autodocs'],
  title: 'Components/ProgressBar',
} satisfies Meta<typeof ProgressBar>

export default meta
type Story = StoryObj<typeof ProgressBar>

// Story with live status switching
export const StatusControlled: Story = {
  render: args => <ProgressBar {...args} />,
}

export const WithControls: Story = {
  render: () => {
    const [status, setStatus] = useState<'error' | 'idle' | 'loading' | 'success'>('idle')

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <ProgressBar status={status} />
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => setStatus('loading')}>Start</button>
          <button onClick={() => setStatus('success')}>Complete</button>
          <button onClick={() => setStatus('error')}>Error</button>
          <button onClick={() => setStatus('idle')}>Reset</button>
        </div>
      </div>
    )
  },
}
