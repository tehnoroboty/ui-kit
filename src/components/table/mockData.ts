import { parseISOAndFormat } from '@/hooks/parseIsoAndFormat'

export type SystemPaymentType = 'CREDIT_CARD' | 'PAYPAL' | 'STRIPE'
export type SelectedSubscriptionType = 'DAY' | 'MONTHLY' | 'WEEKLY'

export type MyPaymentType = {
  dateOfPayment: string
  endDateOfSubscription: string
  paymentType: SystemPaymentType
  price: number
  subscriptionId: string
  subscriptionType: SelectedSubscriptionType
  userId: number
}

export const formatPaymentType = (type: SystemPaymentType): string => {
  switch (type) {
    case 'CREDIT_CARD':
      return 'Credit Card'
    case 'PAYPAL':
      return 'PayPal'
    case 'STRIPE':
      return 'Stripe'
    default:
      return type
  }
}

export const formatSubscriptionType = (type: SelectedSubscriptionType): string => {
  switch (type) {
    case 'DAY':
      return '1 day'
    case 'WEEKLY':
      return '7 days'
    case 'MONTHLY':
      return '1 month'
    default:
      return type
  }
}

export type TableData = {
  dateOfPayment: string
  endDate: string
  paymentType: string
  price: string
  subscription: string
}

export const transformData = (serverData: MyPaymentType[]): TableData[] => {
  return serverData.map(item => ({
    dateOfPayment: parseISOAndFormat(item.dateOfPayment),
    endDate: parseISOAndFormat(item.endDateOfSubscription),
    paymentType: formatPaymentType(item.paymentType),
    price: item.price.toString(),
    subscription: formatSubscriptionType(item.subscriptionType),
  }))
}

export const mockTableData: MyPaymentType[] = [
  {
    dateOfPayment: '2022-12-12T00:00:00.000Z',
    endDateOfSubscription: '2022-12-12T00:00:00.000Z',
    paymentType: 'STRIPE',
    price: 10,
    subscriptionId: 'sub_001',
    subscriptionType: 'DAY',
    userId: 1,
  },
  {
    dateOfPayment: '2022-12-12T00:00:00.000Z',
    endDateOfSubscription: '2022-12-12T00:00:00.000Z',
    paymentType: 'STRIPE',
    price: 50,
    subscriptionId: 'sub_002',
    subscriptionType: 'WEEKLY',
    userId: 2,
  },
  {
    dateOfPayment: '2022-12-12T00:00:00.000Z',
    endDateOfSubscription: '2022-12-12T00:00:00.000Z',
    paymentType: 'STRIPE',
    price: 100,
    subscriptionId: 'sub_003',
    subscriptionType: 'MONTHLY',
    userId: 3,
  },
  {
    dateOfPayment: '2022-12-12T00:00:00.000Z',
    endDateOfSubscription: '2022-12-12T00:00:00.000Z',
    paymentType: 'PAYPAL',
    price: 100,
    subscriptionId: 'sub_004',
    subscriptionType: 'MONTHLY',
    userId: 4,
  },
  {
    dateOfPayment: '2022-12-12T00:00:00.000Z',
    endDateOfSubscription: '2022-12-12T00:00:00.000Z',
    paymentType: 'PAYPAL',
    price: 50,
    subscriptionId: 'sub_005',
    subscriptionType: 'WEEKLY',
    userId: 5,
  },
  {
    dateOfPayment: '2022-12-12T00:00:00.000Z',
    endDateOfSubscription: '2022-12-12T00:00:00.000Z',
    paymentType: 'PAYPAL',
    price: 50,
    subscriptionId: 'sub_006',
    subscriptionType: 'WEEKLY',
    userId: 6,
  },
  {
    dateOfPayment: '2022-12-12T00:00:00.000Z',
    endDateOfSubscription: '2022-12-12T00:00:00.000Z',
    paymentType: 'PAYPAL',
    price: 50,
    subscriptionId: 'sub_007',
    subscriptionType: 'WEEKLY',
    userId: 7,
  },
  {
    dateOfPayment: '2022-12-12T00:00:00.000Z',
    endDateOfSubscription: '2022-12-12T00:00:00.000Z',
    paymentType: 'PAYPAL',
    price: 100,
    subscriptionId: 'sub_008',
    subscriptionType: 'MONTHLY',
    userId: 8,
  },
]
