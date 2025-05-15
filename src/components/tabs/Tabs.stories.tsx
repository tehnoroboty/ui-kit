import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '@/components'

import s from './tabs.module.scss'

import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs'
import { mockTabs } from '@/components/tabs/mockData'

const meta = {
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  args: {},
  render: () => {
    return (
      <Tabs className={s.tabs} defaultValue={mockTabs[0].value}>
        <TabsList loop>
          {mockTabs.map(tab => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {mockTabs.map(tab => (
          <TabsContent key={tab.value} value={tab.value}>
            <Typography className={'p-4'} option={'h3'}>
              {tab.title}
            </Typography>
          </TabsContent>
        ))}
      </Tabs>
    )
  },
}
export const Disabled: Story = {
  render: () => {
    return (
      <Tabs className={s.tabs} defaultValue={mockTabs[0].value}>
        <TabsList loop>
          {mockTabs.map(tab => (
            <TabsTrigger disabled={true} key={tab.value} value={tab.value}>
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {mockTabs.map(tab => (
          <TabsContent key={tab.value} value={tab.value}>
            <Typography className={'p-4'} option={'h3'}>
              {tab.title}
            </Typography>
          </TabsContent>
        ))}
      </Tabs>
    )
  },
}
