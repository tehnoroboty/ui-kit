import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Button, Dialog, Typography } from '@/components'
import { action } from '@storybook/addon-actions'

import { SelectBox } from './SelectBox'

const meta = {
  args: {
    options: [
      { value: 'value1', valueTitle: 'Value-1' },
      { value: 'value2', valueTitle: 'Value-2' },
      { value: 'value3', valueTitle: 'Value-3' },
      { value: 'value4', valueTitle: 'Value-4' },
      { value: 'value5', valueTitle: 'Value-5' },
    ],
  },
  component: SelectBox,
  tags: ['autodocs'],
  title: 'Components/SelectBox',
} satisfies Meta<typeof SelectBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Value',
  },
}

export const Label: Story = {
  args: {
    label: 'Some label',
    placeholder: 'Value',
  },
}

export const IsDisabled: Story = {
  args: {
    disabled: true,
    label: 'Some label',
    placeholder: 'Value',
  },
}

export const IsPagination: Story = {
  args: {
    isPagination: true,
    options: [
      { value: '10', valueTitle: '10' },
      { value: '20', valueTitle: '20' },
      { value: '30', valueTitle: '30' },
    ],
  },
}

export const WithConfirmationModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const [banReason, setBanReason] = useState('')
    const [loading, setLoading] = useState(false)

    const SELECT_REASON = [
      { value: 'spam', valueTitle: 'Spam' },
      { value: 'abuse', valueTitle: 'Abuse' },
      { value: 'other', valueTitle: 'Other' },
    ]

    const handleConfirm = async () => {
      setLoading(true)
      try {
        action('Ban confirmed')(banReason)
        // await yourBanMutation()
      } finally {
        setLoading(false)
        setOpen(false)
      }
    }

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Ban Dialog</Button>

        <Dialog modalTitle={'Ban user'} onClose={() => setOpen(false)} open={open}>
          <div>
            <Typography as={'p'} option={'regular_text16'}>
              Are you sure you want to ban this user?
            </Typography>

            <div style={{ marginTop: 16 }}>
              <SelectBox
                onChangeValue={value => {
                  setBanReason(value)
                  action('Ban reason selected')(value)
                }}
                options={SELECT_REASON}
                placeholder={'Reason for ban'}
              />
            </div>

            <div style={{ display: 'flex', gap: 8, marginTop: 24 }}>
              <Button disabled={loading} onClick={() => setOpen(false)}>
                No
              </Button>
              <Button disabled={loading} onClick={handleConfirm} variant={'bordered'}>
                Yes
              </Button>
            </div>
          </div>
        </Dialog>
      </>
    )
  },
}
