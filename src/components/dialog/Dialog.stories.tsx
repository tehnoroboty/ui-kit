import { useState } from 'react'

import { Typography } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

import s from './dialog.module.scss'

import { Button } from '../button'
import { Dialog } from './Dialog'
import { CommentsSection, ImageViewer, mockData, mockText } from './mock/mock'

const meta = {
  argTypes: {},
  args: {},
  component: Dialog,
  tags: ['autodocs'],
  title: 'Components/Dialog',
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof Dialog>

const DialogWrapper = () => {
  const [showDialog, setShowDialog] = useState(false)

  const openModalHandler = () => {
    setShowDialog(true)
  }

  const closeModalHandler = () => {
    setShowDialog(false)
  }

  return (
    <>
      <div className={s.headerWrapper}>
        <div className={s.container}>
          <h3>logotype</h3>
          <Button onClick={openModalHandler}>Sign Up</Button>
        </div>
      </div>
      <Dialog
        className={s.widthDefault}
        modalTitle={mockData[0].modalTitle}
        onClose={closeModalHandler}
        open={showDialog}
      >
        <div className={s.boxDiscription}>
          <div className={s.image}></div>
          <Typography option={'regular_text16'}>{mockData[0].modalDescription}</Typography>
        </div>
        <div className={s.boxButton}>
          <Button onClick={closeModalHandler} variant={'bordered'}>
            Yes
          </Button>
          <Button onClick={closeModalHandler}>No</Button>
        </div>
      </Dialog>
      <div className={s.lorem}>{mockText}</div>
    </>
  )
}

export const Default: Story = {
  render: args => <DialogWrapper {...args} />,
}

export const AddComent: Story = {
  render: () => {
    const [showDialog, setShowDialog] = useState(false)

    const openModalHandler = () => {
      setShowDialog(true)
    }

    const closeModalHandler = () => {
      setShowDialog(false)
    }

    return (
      <>
        <div className={s.headerWrapper}>
          <div className={s.container}>
            <h3>logotype</h3>
            <Button onClick={openModalHandler}>Sign Up</Button>
          </div>
        </div>
        <Dialog className={s.containerAddComent} onClose={closeModalHandler} open={showDialog}>
          <div className={s.addComent}>
            <ImageViewer />
            <CommentsSection />
          </div>
        </Dialog>
        <div className={s.lorem}>{mockText}</div>
      </>
    )
  },
}

export const ImageCropDialog: Story = {
  render: () => {
    const [showDialog, setShowDialog] = useState(false)

    const openModalHandler = () => {
      setShowDialog(true)
    }

    const closeModalHandler = () => {
      setShowDialog(false)
    }

    return (
      <>
        <div className={s.headerWrapper}>
          <div className={s.container}>
            <h3>logotype</h3>
            <Button onClick={openModalHandler}>Open Image Crop</Button>
          </div>
        </div>
        <Dialog
          className={s.containerImageCrop}
          isSimple
          modalTitle={'Cropping'}
          onClose={closeModalHandler}
          open={showDialog}
        >
          <div className={s.titleImageCrop}>
            <Button
              className={s.backImageCrop}
              onClick={() => alert('Back')}
              variant={'transparent'}
            >
              {'<'}
            </Button>
            <Typography as={'h1'} option={'h1'}>
              Cropping
            </Typography>
            <Button
              className={s.nextImageCrop}
              onClick={() => alert('Next')}
              variant={'transparent'}
            >
              Next
            </Button>
          </div>
          <div className={s.imageImageCrop}>
            <ImageViewer />
          </div>
        </Dialog>
        <div className={s.lorem}>{mockText}</div>
      </>
    )
  },
}
