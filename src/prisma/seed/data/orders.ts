import { Prisma } from '@prisma/client';
import { userIds } from './users.js';
import { productIds } from './products.js';

export const orderIds = {
  order1Michael: {
    id: '620bab27-6fad-4d86-b613-519f2373fcd7',
    itemId: [
      '872ce549-59e1-4968-8be1-c4cfe87db7d6',
      'ac89e380-0068-4dd5-a952-2213786c3f18',
      '4a208820-7d2b-4485-a980-4f5388439fa4'
    ]
  },
  order1Issac: {
    id: 'f36591b1-ae90-4973-b913-c03c838541e0',
    itemId: [
      '643bb138-6d53-443c-b9f5-700f08683002',
      'ff909b3c-009a-4240-931a-5e3d053e7189',
      '621bccb3-5e69-4826-9575-ba5909f53663'
    ]
  },
  order1Leane: {
    id: 'c3c51ebb-63bb-4714-a007-4d2ff640d85f',
    itemId: [
      '53bc37df-2050-4a18-8b51-48ae17f51e78',
      'ad984d40-c77f-4587-b721-45d3d70fa63e'
    ]
  },
  order1Ervin: {
    id: '605cbeb7-8634-429c-aa6f-8f944d97b811',
    itemId: [
      'ceadc843-b3f4-4aea-a606-13b8032a0fa3',
      '4be7eba3-5114-4f06-96d3-d0d5b7b18dff'
    ]
  }
};

export const orders: Prisma.OrderCreateInput[] = [
  {
    id: orderIds.order1Michael.id,

    orderStatus: 'COMPLETED',

    isPaid: '2020-02-08T09:30:26.000Z',
    paymentMethod: 'CARD',
    billingAddress: {
      connect: { id: userIds.michael.addressId[0] }
    },

    isShipped: '2020-02-09T10:30:26.000Z',
    shippingType: 'STANDARD',
    shippingCost: 1499,
    trackingId: '34WKF143749801000930804',
    shippingAddress: {
      connect: { id: userIds.michael.addressId[0] }
    },

    user: {
      connect: { id: userIds.michael.id }
    },

    items: {
      create: [
        {
          id: orderIds.order1Michael.itemId[0],
          quantity: 4,

          product: {
            connect: { id: productIds.lisbo.id }
          },

          variation: {
            connect: { id: productIds.lisbo.variationId[0] }
          }
        },
        {
          id: orderIds.order1Michael.itemId[1],
          quantity: 2,

          product: {
            connect: { id: productIds.voxlov.id }
          },

          variation: {
            connect: { id: productIds.voxlov.variationId[0] }
          }
        },
        {
          id: orderIds.order1Michael.itemId[2],
          quantity: 1,

          product: {
            connect: { id: productIds.omar.id }
          },

          variation: {
            connect: { id: productIds.omar.variationId[1] }
          }
        }
      ]
    }
  },

  {
    id: orderIds.order1Issac.id,

    orderStatus: 'AWAITING_PAYMENT',

    paymentMethod: 'CARD',
    billingAddress: {
      connect: { id: userIds.issac.addressId[1] }
    },

    shippingType: 'STANDARD',
    shippingCost: 1499,
    trackingId: '4AD369704801000930300',
    shippingAddress: {
      connect: { id: userIds.issac.addressId[0] }
    },

    user: {
      connect: { id: userIds.issac.id }
    },

    items: {
      create: [
        {
          id: orderIds.order1Issac.itemId[0],
          quantity: 1,

          product: {
            connect: { id: productIds.malm.id }
          },

          variation: {
            connect: { id: productIds.malm.variationId[2] }
          }
        },
        {
          id: orderIds.order1Issac.itemId[1],
          quantity: 1,

          product: {
            connect: { id: productIds.pinntorp.id }
          },

          variation: {
            connect: { id: productIds.pinntorp.variationId[0] }
          }
        },
        {
          id: orderIds.order1Issac.itemId[2],
          quantity: 2,

          product: {
            connect: { id: productIds.voxlov.id }
          },

          variation: {
            connect: { id: productIds.voxlov.variationId[0] }
          }
        }
      ]
    }
  },

  {
    id: orderIds.order1Leane.id,

    orderStatus: 'AWAITING_SHIPPING',

    isPaid: '2023-02-14T09:40:26.000Z',
    paymentMethod: 'CARD',
    billingAddress: {
      connect: { id: userIds.leanne.addressId[0] }
    },

    shippingType: 'EXPRESS',
    shippingCost: 1699,
    trackingId: '',
    shippingAddress: {
      connect: { id: userIds.leanne.addressId[0] }
    },

    user: {
      connect: { id: userIds.leanne.id }
    },

    items: {
      create: [
        {
          id: orderIds.order1Leane.itemId[0],
          quantity: 1,

          product: {
            connect: { id: productIds.omar.id }
          },

          variation: {
            connect: { id: productIds.omar.variationId[0] }
          }
        },
        {
          id: orderIds.order1Leane.itemId[1],
          quantity: 2,

          product: {
            connect: { id: productIds.pinntorp.id }
          },

          variation: {
            connect: { id: productIds.pinntorp.variationId[0] }
          }
        }
      ]
    }
  },

  {
    id: orderIds.order1Ervin.id,

    orderStatus: 'SHIPPED',

    isPaid: '2023-02-02T09:40:26.000Z',
    paymentMethod: 'CARD',
    billingAddress: {
      connect: { id: userIds.ervin.addressId[0] }
    },

    isShipped: '2023-02-03T12:40:26.000Z',
    shippingType: 'STANDARD',
    shippingCost: 1699,
    trackingId: '33XJN766540201000931501',
    shippingAddress: {
      connect: { id: userIds.ervin.addressId[0] }
    },

    user: {
      connect: { id: userIds.ervin.id }
    },

    items: {
      create: [
        {
          id: orderIds.order1Ervin.itemId[0],
          quantity: 1,

          product: {
            connect: { id: productIds.omar.id }
          },

          variation: {
            connect: { id: productIds.omar.variationId[0] }
          }
        },
        {
          id: orderIds.order1Ervin.itemId[1],
          quantity: 2,

          product: {
            connect: { id: productIds.pinntorp.id }
          },

          variation: {
            connect: { id: productIds.pinntorp.variationId[0] }
          }
        }
      ]
    }
  }
];
