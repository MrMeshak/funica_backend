import { Prisma } from '@prisma/client';

export const productIds = {
  malm: {
    id: '62b91e37-f45e-4a4c-97fd-8e37384338fb',
    variationId: [
      'd221281a-9cba-4128-b27d-a2b0559af158',
      'f84fd541-85f0-44ff-9fdc-2c069ead374d',
      'f0d4d7a3-7db8-470d-adfa-d0c0c8b0e31e'
    ]
  },
  pinntorp: {
    id: 'ece97254-50a2-4535-8e43-ee9bba7ce99a',
    variationId: ['340dffc5-037b-4171-b440-b9af65faf698']
  },
  omar: {
    id: '9b60b3c7-129e-4d57-a7f9-d0079b21922e',
    variationId: [
      'bf64afca-bda6-41f3-8231-8059094ae4a1',
      '0ea7767f-afda-466d-889b-c29dc3034f9e'
    ]
  },
  lisbo: {
    id: '66d34bde-2db1-4ef8-8b88-44cb4d9df7ab',
    variationId: [
      '7063d88f-c475-412d-9050-891646f8ca30',
      '426a3d65-7f60-4870-84e4-3722fddb5d3a'
    ]
  },
  voxlov: {
    id: 'fbe28c04-f2e4-4f1c-96b8-5b7e07702bf4',
    variationId: ['12eff0ce-529f-4a3e-958c-399a16199cda']
  }
};

export const products: Prisma.ProductCreateInput[] = [
  {
    id: productIds.malm.id,
    name: 'Malm',
    productType: 'drawers',
    categories: ['storage', 'drawers', 'chest'],
    searchTags: ['drawers', 'chest', 'drawer', 'storage'],
    description:
      'A clean expression that fits right in, in the bedroom or wherever you place it. Smooth-running drawers and in a choice of finishes – pick your favourite. Psst! Please attach to the wall.',

    price: 14900,

    variations: {
      create: [
        {
          id: productIds.malm.variationId[0],
          color: 'black-brown',
          size: '185x75 cm',
          images: []
        },
        {
          id: productIds.malm.variationId[1],
          color: 'white',
          size: '185x75 cm',
          images: []
        },
        {
          id: productIds.malm.variationId[2],
          color: 'white oak vaneer',
          size: '185x75 cm',
          images: []
        }
      ]
    }
  },
  {
    id: productIds.pinntorp.id,
    name: 'Pinntorp',
    productType: 'table',
    categories: ['furniture', 'tables & desks', 'dining tables'],
    searchTags: ['table', 'dining table', 'dinner table', 'dinner'],
    description:
      'This wooden table seats 6 people comfortably. Inspired by Swedish furniture tradition, the simple design adds warmth and character, making this a table for talking and sharing great moments together.',

    price: 27900,

    variations: {
      create: [
        {
          id: productIds.pinntorp.variationId[0],
          color: 'light brown stained/white stained',
          size: '',
          images: []
        }
      ]
    }
  },
  {
    id: productIds.omar.id,
    name: 'Ommar',
    productType: 'shelf',
    categories: [
      'storage & organisation',
      'bookcases & shelving',
      'storage shelves'
    ],
    searchTags: ['storage', 'shelf', 'shelves', 'organise', 'organising'],
    description:
      'OMAR storage offers lots of room in a kitchen, bathroom and hallway. Things like food or towels lie visible and secure on the metal shelves. Easy to assemble and complete with storage from the same series.',

    price: 13000,

    variations: {
      create: [
        {
          id: productIds.omar.variationId[0],
          color: 'Galvanised',
          size: '92x36x94cm',
          images: []
        },
        {
          id: productIds.omar.variationId[1],
          color: 'Galvanised',
          size: '46x36x94cm',
          images: []
        }
      ]
    }
  },
  {
    id: productIds.lisbo.id,
    name: 'Lisbo',
    productType: 'chair',
    categories: ['furniture', 'chairs', 'dining chairs'],
    searchTags: ['chair', 'dining chair', 'dining chairs', 'dining'],
    description:
      'A hand-crafted expression that is both comfy and sturdy to suit even the liveliest family members. Ideal for all the activities around the table like eating, playing games, drawing and homework.',

    price: 6500,

    variations: {
      create: [
        {
          id: productIds.lisbo.variationId[0],
          color: 'Ash',
          size: '46x51x80cm',
          images: []
        },
        {
          id: productIds.lisbo.variationId[1],
          color: 'Black',
          size: '46x51x80cm',
          images: []
        }
      ]
    }
  },
  {
    id: productIds.voxlov.id,
    name: 'Voxlov',
    productType: 'chair',
    categories: ['furniture', 'chairs', 'dining chairs'],
    searchTags: ['chair', 'dining chair', 'dining chairs', 'dining'],
    description:
      'A gift from nature, shaped and bent for optimal beauty and comfort. The sturdy frame is made of hardwearing bamboo, and handwoven paper twine creates a strong seat with a resilient feel when you sit on it.',

    price: 14900,

    variations: {
      create: [
        {
          id: productIds.voxlov.variationId[0],
          color: 'Light bamboo',
          size: '43x53x85cm',
          images: []
        }
      ]
    }
  }
];
