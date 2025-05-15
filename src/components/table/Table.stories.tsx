import type { Meta, StoryObj } from '@storybook/react'

import s from './table.module.scss'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './Table'
import { mockTableData, transformData } from './mockData'

const meta = {
  component: Table,
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof Table>

export const Default: Story = {
  render: args => {
    const data = transformData(mockTableData)

    return (
      <div className={s.wrapper}>
        <Table className={s.table} {...args}>
          <TableHeader>
            <TableRow>
              <TableHead>Date of Payment</TableHead>
              <TableHead>End date of subscription</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Subscription Type</TableHead>
              <TableHead>Payment Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.dateOfPayment}</TableCell>
                <TableCell>{item.endDate}</TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell>{item.subscription}</TableCell>
                <TableCell>{item.paymentType}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  },
}
