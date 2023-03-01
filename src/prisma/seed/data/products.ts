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
    variationId: ['bf64afca-bda6-41f3-8231-8059094ae4a1', '0ea7767f-afda-466d-889b-c29dc3034f9e']
  },
  lisbo: {
    id: '66d34bde-2db1-4ef8-8b88-44cb4d9df7ab',
    variationId: ['7063d88f-c475-412d-9050-891646f8ca30', '426a3d65-7f60-4870-84e4-3722fddb5d3a']
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

    rating: 0,

    variations: {
      create: [
        {
          id: productIds.malm.variationId[0],
          color: 'black-brown',
          colorHex: '#414143',
          size: '185x75 cm',
          images: [
            'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-black-brown__0484870_pe621337_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-black-brown__1154230_pe885952_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-black-brown__1154231_pe885951_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-black-brown__1154232_pe885953_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-black-brown__1154229_pe885950_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-black-brown__0757038_pe749101_s5.jpg?f=xl'
          ]
        },
        {
          id: productIds.malm.variationId[1],
          color: 'white',
          size: '185x75 cm',
          colorHex: '#F1F2ED',
          images: [
            'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-white__0484875_pe621342_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-white__1154237_pe885956_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-white__1154238_pe885955_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-white__1154236_pe885957_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-white__1154235_pe885954_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-white__0757038_pe749101_s5.jpg?f=xl'
          ]
        },
        {
          id: productIds.malm.variationId[2],
          color: 'white oak vaneer',
          colorHex: '#CBB291',
          size: '185x75 cm',
          images: [
            'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-white-stained-oak-veneer__0484874_pe621341_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-white-stained-oak-veneer__1154329_pe885991_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-white-stained-oak-veneer__1154330_pe885990_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-white-stained-oak-veneer__1154328_pe885992_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-white-stained-oak-veneer__1154327_pe885989_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-white-stained-oak-veneer__0757038_pe749101_s5.jpg?f=xl'
          ]
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
    rating: 0,

    variations: {
      create: [
        {
          id: productIds.pinntorp.variationId[0],
          color: 'light brown stained/white stained',
          colorHex: '',
          size: '',
          images: [
            'https://www.ikea.com/au/en/images/products/pinntorp-table-light-brown-stained-white-stained__1118109_pe872932_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/pinntorp-table-light-brown-stained-white-stained__1118110_pe872931_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/pinntorp-table-light-brown-stained-white-stained__1140074_pe880621_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/pinntorp-table-light-brown-stained-white-stained__1146456_pe883015_s5.jpg?f=xl'
          ]
        }
      ]
    }
  },
  {
    id: productIds.omar.id,
    name: 'Ommar',
    productType: 'shelf',
    categories: ['storage & organisation', 'bookcases & shelving', 'storage shelves'],
    searchTags: ['storage', 'shelf', 'shelves', 'organise', 'organising'],
    description:
      'OMAR storage offers lots of room in a kitchen, bathroom and hallway. Things like food or towels lie visible and secure on the metal shelves. Easy to assemble and complete with storage from the same series.',

    price: 13000,

    rating: 0,

    variations: {
      create: [
        {
          id: productIds.omar.variationId[0],
          color: 'Galvanised',
          colorHex: '#B6BCBC',
          size: '92x36x94cm',
          images: [
            'https://www.ikea.com/au/en/images/products/omar-shelving-unit-galvanised__0650980_pe706616_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/omar-shelving-unit-galvanised__1111022_ph170570_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/omar-shelving-unit-galvanised__0626610_ph124828_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/omar-shelving-unit-galvanised__0911615_pe618135_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/omar-shelving-unit-galvanised__0976251_pe813123_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/omar-shelving-unit-galvanised__1111024_ph172290_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/omar-shelving-unit-galvanised__0944464_pe797275_s5.jpg?f=xl'
          ]
        },
        {
          id: productIds.omar.variationId[1],
          color: 'Green-grey',
          colorHex: '#9BAFAA',
          size: '46x36x94cm',
          images: [
            'https://www.ikea.com/au/en/images/products/omar-shelving-unit-grey-green__0924622_pe788596_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/omar-shelving-unit-grey-green__1111084_ph179140_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/omar-shelving-unit-grey-green__0945187_ph173906_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/omar-shelving-unit-grey-green__0945186_ph173998_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/omar-shelving-unit-grey-green__0945185_ph174006_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/omar-shelving-unit-grey-green__0924627_pe788597_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/omar-shelving-unit-grey-green__0939893_pe794711_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/omar-shelving-unit-grey-green__0939897_pe794712_s5.jpg?f=xl'
          ]
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

    rating: 0,

    variations: {
      create: [
        {
          id: productIds.lisbo.variationId[0],
          color: 'Ash',
          colorHex: '#EDD6B7',
          size: '46x51x80cm',
          images: [
            'https://www.ikea.com/au/en/images/products/lisabo-chair-ash__0786549_pe763015_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/lisabo-chair-ash__0928960_ph169624_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/lisabo-chair-ash__0946416_ph171423_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/lisabo-chair-ash__1079988_pe857792_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/lisabo-chair-ash__1053174_pe846767_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/lisabo-chair-ash__1053175_pe846725_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/lisabo-chair-ash__0810268_pe771255_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/lisabo-chair-ash__1053173_pe846766_s5.jpg?f=xl'
          ]
        },
        {
          id: productIds.lisbo.variationId[1],
          color: 'Black',
          colorHex: '#292927',
          size: '46x51x80cm',
          images: [
            'https://www.ikea.com/au/en/images/products/lisabo-chair-black__0786548_pe763014_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/lisabo-chair-black__0936096_ph172124_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/lisabo-chair-black__0936084_ph172127_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/lisabo-chair-black__1053149_pe846742_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/lisabo-chair-black__1053150_pe846743_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/lisabo-chair-black__0817918_pe774170_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/lisabo-chair-black__1053146_pe846739_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/lisabo-chair-black__1053147_pe846740_s5.jpg?f=xl'
          ]
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

    rating: 0,

    variations: {
      create: [
        {
          id: productIds.voxlov.variationId[0],
          color: 'Light bamboo',
          colorHex: '',
          size: '43x53x85cm',
          images: [
            'https://www.ikea.com/au/en/images/products/voxloev-chair-light-bamboo__0948161_pe798889_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/voxloev-chair-light-bamboo__0997394_ph176797_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/voxloev-chair-light-bamboo__1002155_ph177192_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/voxloev-chair-light-bamboo__1029934_ph178654_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/voxloev-chair-light-bamboo__1093061_pe863179_s5.jpg?f=xl',
            'https://www.ikea.com/au/en/images/products/voxloev-chair-light-bamboo__1103715_pe867357_s5.jpg?f=xl'
          ]
        }
      ]
    }
  }
];
