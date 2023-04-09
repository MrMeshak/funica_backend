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

    rating: 0,

    variations: {
      create: [
        {
          id: productIds.malm.variationId[0],
          variationName: 'black-brown',
          price: 14900,
          color: 'black-brown',
          colorHex: '#414143',
          size: '185x75 cm',
          images: {
            create: [
              {
                id: 'c192c484-376f-4512-846a-b5cb1d133826',
                alt: 'Malm chest of 3 drawers, black-brown',
                url: 'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-black-brown__0484870_pe621337_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: '568e8431-b601-4154-a9b9-23339ef98d52',
                alt: 'Malm chest of 3 drawers, black-brown',
                url: 'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-black-brown__1154230_pe885952_s5.jpg?f=xl',
                height: 1000,
                width: 1000
              },
              {
                id: 'c74ffd8a-96df-498e-b8a4-fcc02bf127b2',
                alt: 'Malm chest of 3 drawers, black-brown',
                url: 'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-black-brown__1154231_pe885951_s5.jpg?f=xl',
                height: 1000,
                width: 1000
              },
              {
                id: 'a65c24a6-2bdd-4e25-8eec-17f0ed7b0fc2',
                alt: 'Malm chest of 3 drawers, black-brown',
                url: 'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-black-brown__1154232_pe885953_s5.jpg?f=xl',
                height: 1000,
                width: 1000
              },
              {
                id: '505f612f-f4bd-4923-bf4a-3209f95aa7fe',
                alt: 'Malm chest of 3 drawers, black-brown',
                url: 'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-black-brown__1154229_pe885950_s5.jpg?f=xl',
                height: 1000,
                width: 1000
              },
              {
                id: '9bac0100-cd40-4524-8048-ba7e6f587822',
                alt: 'Malm chest of 3 drawers, black-brown',
                url: 'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-black-brown__0757038_pe749101_s5.jpg?f=xl',
                height: 1000,
                width: 1000
              }
            ]
          }
        },

        {
          id: productIds.malm.variationId[1],
          variationName: 'white',
          price: 14900,
          color: 'white',
          size: '185x75 cm',
          colorHex: '#F1F2ED',
          images: {
            create: [
              {
                id: '9b642df4-c9b0-49a4-8c35-c8f9afeb2613',
                alt: 'Malm chest of 3 drawers, white',
                url: 'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-white__0484875_pe621342_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: '108f44c1-50c4-4bc5-b852-6a793cdb0eef',
                alt: 'Malm chest of 3 drawers, white',
                url: 'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-white__1154237_pe885956_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: 'cca83ab1-2338-47c2-8004-5b65a69df25e',
                alt: 'Malm chest of 3 drawers, white',
                url: 'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-white__1154238_pe885955_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: '6b551517-7705-4405-8af8-3bb28e213929',
                alt: 'Malm chest of 3 drawers, white',
                url: 'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-white__1154236_pe885957_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: '35476edf-9209-4e24-9379-fc20b733d17a',
                alt: 'Malm chest of 3 drawers, white',
                url: 'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-white__1154235_pe885954_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: '8544c191-60dc-4119-a969-e7a85c2a51fb',
                alt: 'Malm chest of 3 drawers, white',
                url: 'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-white__0757038_pe749101_s5.jpg?f=xl',
                height: 900,
                width: 900
              }
            ]
          }
        },

        {
          id: productIds.malm.variationId[2],
          variationName: 'white stained oak veneer',
          price: 14900,
          color: 'white oak vaneer',
          colorHex: '#CBB291',
          size: '185x75 cm',
          images: {
            create: [
              {
                id: '5e9a7af8-2943-47b3-b271-459ba43b0912',
                alt: 'malm chest of 3 drawers, white stained oak veneer',
                url: 'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-white-stained-oak-veneer__0484874_pe621341_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: 'b9b4f956-8cba-4fb0-9bd6-a2190984f9f2',
                alt: 'malm chest of 3 drawers, white stained oak veneer',
                url: 'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-white-stained-oak-veneer__1154329_pe885991_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: '340c4441-518f-4f65-8075-7a8a6f017306',
                alt: '',
                url: 'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-white-stained-oak-veneer__1154330_pe885990_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: 'b68c2d20-78b4-45e1-a148-68ab6a1c1e81',
                alt: 'malm chest of 3 drawers, white stained oak veneer',
                url: 'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-white-stained-oak-veneer__1154328_pe885992_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: 'd041622a-ae75-4b5f-9499-a0affe10d1dd',
                alt: 'malm chest of 3 drawers, white stained oak veneer',
                url: 'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-white-stained-oak-veneer__1154327_pe885989_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: '778eed19-3e3c-4305-a2ff-5c23e6f5dffc',
                alt: 'malm chest of 3 drawers, white stained oak veneer',
                url: 'https://www.ikea.com/au/en/images/products/malm-chest-of-3-drawers-white-stained-oak-veneer__0757038_pe749101_s5.jpg?f=xl',
                height: 900,
                width: 900
              }
            ]
          }
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

    rating: 0,

    variations: {
      create: [
        {
          id: productIds.pinntorp.variationId[0],
          variationName: 'light Brown stained/white stained',
          price: 27900,
          color: 'light brown stained/white stained',
          colorHex: '#D4AC87',
          size: '125x75 cm',
          images: {
            create: [
              {
                id: 'bf428825-c4cf-478c-8598-955ff04d8977',
                alt: 'pinntorp table, light brown stained/white stained',
                url: 'https://www.ikea.com/au/en/images/products/pinntorp-table-light-brown-stained-white-stained__1118109_pe872932_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: 'ced0b369-c2d2-40ba-bf68-8c2c20027a21',
                alt: 'pintorp table, light brown stained/white stained',
                url: 'https://www.ikea.com/au/en/images/products/pinntorp-table-light-brown-stained-white-stained__1118110_pe872931_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: '6ea65bb8-2c7a-43da-9907-9aa712e8b774',
                alt: 'pintorp table, light brown stained/white stained',
                url: 'https://www.ikea.com/au/en/images/products/pinntorp-table-light-brown-stained-white-stained__1140074_pe880621_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: '6fb973f0-d49e-4f86-8662-48968ccd6e37',
                alt: 'pintorp table, light brown stained/white stained',
                url: 'https://www.ikea.com/au/en/images/products/pinntorp-table-light-brown-stained-white-stained__1146456_pe883015_s5.jpg?f=xl',
                height: 900,
                width: 900
              }
            ]
          }
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

    rating: 0,

    variations: {
      create: [
        {
          id: productIds.omar.variationId[0],
          variationName: 'Galvanised',
          price: 6500,
          color: 'Galvanised',
          colorHex: '#B6BCBC',
          size: '92x36x94cm',

          images: {
            create: [
              {
                id: '8e53a768-386e-4886-a652-719e253bec4e',
                alt: 'omar shelving unit, galvanised',
                url: 'https://www.ikea.com/au/en/images/products/omar-shelving-unit-galvanised__0650980_pe706616_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: '944723a6-e2db-4506-b91a-90b7c0bf343b',
                alt: 'omar shelving unit, galvanised',
                url: 'https://www.ikea.com/au/en/images/products/omar-shelving-unit-galvanised__1111022_ph170570_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: '302d30ad-90a0-40f8-ac75-2d2638388ff7',
                alt: 'omar shelving unit, galvanised',
                url: 'https://www.ikea.com/au/en/images/products/omar-shelving-unit-galvanised__0626610_ph124828_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: '2afbddaa-11a7-4e68-ac12-5ebdb66fe3b1',
                alt: 'omar shelving unit, galvanised',
                url: 'https://www.ikea.com/au/en/images/products/omar-shelving-unit-galvanised__0911615_pe618135_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: '4997b851-c821-4776-b234-1e6a9ce1d25b',
                alt: 'omar shelving unit, galvanised',
                url: 'https://www.ikea.com/au/en/images/products/omar-shelving-unit-galvanised__0976251_pe813123_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: '918302ff-9f74-4ab5-8907-b9f95e8b7585',
                alt: 'omar shelving unit, galvanised',
                url: 'https://www.ikea.com/au/en/images/products/omar-shelving-unit-galvanised__0944464_pe797275_s5.jpg?f=xl',
                height: 900,
                width: 900
              }
            ]
          }
        },
        {
          id: productIds.omar.variationId[1],
          variationName: 'Green-grey',
          price: 6500,
          color: 'Green-grey',
          colorHex: '#9BAFAA',
          size: '46x36x94cm',

          images: {
            create: [
              {
                id: '4cc94251-2fd2-4475-ae2e-e464a24a2d80',
                alt: 'omar shelving unit, green-grey',
                url: 'https://www.ikea.com/au/en/images/products/omar-shelving-unit-grey-green__0924622_pe788596_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: 'db8a5022-2fba-4966-92b4-80fb19003944',
                alt: 'omar shelving unit, green-grey',
                url: 'https://www.ikea.com/au/en/images/products/omar-shelving-unit-grey-green__1111084_ph179140_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: '37a01375-c211-44b9-b6da-659c82cb1c9b',
                alt: 'omar shelving unit, green-grey',
                url: 'https://www.ikea.com/au/en/images/products/omar-shelving-unit-grey-green__0945187_ph173906_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: '89faea2b-c050-4f69-9b27-53d88cf4e8ea',
                alt: 'omar shelving unit, green-grey',
                url: 'https://www.ikea.com/au/en/images/products/omar-shelving-unit-grey-green__0945186_ph173998_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: '6bd0dbc4-9810-4608-8eb0-2ca5dcb3fe26',
                alt: 'omar shelving unit, green-grey',
                url: 'https://www.ikea.com/au/en/images/products/omar-shelving-unit-grey-green__0945185_ph174006_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: 'f8334c21-c99b-4c4a-b947-afb7e0405a47',
                alt: 'omar shelving unit, green-grey',
                url: 'https://www.ikea.com/au/en/images/products/omar-shelving-unit-grey-green__0924627_pe788597_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: '7e679c2b-f3a2-4956-9d7d-322ae4b7e2bb',
                alt: 'omar shelving unit, green-grey',
                url: 'https://www.ikea.com/au/en/images/products/omar-shelving-unit-grey-green__0939893_pe794711_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: 'bd3de489-99ab-464f-a631-b65ff8d063f7',
                alt: 'omar shelving unit, green-grey',
                url: 'https://www.ikea.com/au/en/images/products/omar-shelving-unit-grey-green__0939897_pe794712_s5.jpg?f=xl',
                height: 900,
                width: 900
              }
            ]
          }
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

    rating: 0,

    variations: {
      create: [
        {
          id: productIds.lisbo.variationId[0],
          variationName: 'Ash',
          price: 6500,
          color: 'Ash',
          colorHex: '#EDD6B7',
          size: '46x51x80cm',
          images: {
            create: [
              {
                id: '81c62d12-ac49-4d1d-8515-3a98cb49429c',
                alt: 'lisbo dining chair, ash',
                url: 'https://www.ikea.com/au/en/images/products/lisabo-chair-ash__0786549_pe763015_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: 'e38b0271-ee59-4ae5-8fec-f238956a2460',
                alt: 'lisbo dining chair, ash',
                url: 'https://www.ikea.com/au/en/images/products/lisabo-chair-ash__0928960_ph169624_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: '16be7cf8-dd69-40a0-89b3-a226505dd728',
                alt: 'lisbo dining chair, ash',
                url: 'https://www.ikea.com/au/en/images/products/lisabo-chair-ash__0946416_ph171423_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: '435b5d40-593a-4cb7-872c-a3b13c072aa5',
                alt: 'lisbo dining chair, ash',
                url: 'https://www.ikea.com/au/en/images/products/lisabo-chair-ash__1079988_pe857792_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: '352461a1-24e4-44d2-b32b-53b82afb8d33',
                alt: 'lisbo dining chair, ash',
                url: 'https://www.ikea.com/au/en/images/products/lisabo-chair-ash__1053174_pe846767_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: '658c1fa2-4d33-4479-b661-6c0efc444a39',
                alt: 'lisbo dining chair, ash',
                url: 'https://www.ikea.com/au/en/images/products/lisabo-chair-ash__1053175_pe846725_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: 'b7068f23-ef53-4bf3-bda0-17b1481489da',
                alt: 'lisbo dining chair, ash',
                url: 'https://www.ikea.com/au/en/images/products/lisabo-chair-ash__0810268_pe771255_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: 'efd2eb93-4120-4968-a56e-de3efea684b7',
                alt: 'lisbo dining chair, ash',
                url: 'https://www.ikea.com/au/en/images/products/lisabo-chair-ash__1053173_pe846766_s5.jpg?f=xl',
                height: 900,
                width: 900
              }
            ]
          }
        },
        {
          id: productIds.lisbo.variationId[1],
          variationName: 'Black',
          price: 6500,
          color: 'Black',
          colorHex: '#292927',
          size: '46x51x80cm',
          images: {
            create: [
              {
                id: '14c3ceb7-f3c5-4745-a1f4-40a3616e0103',
                alt: 'lisbo dining chair, black',
                url: 'https://www.ikea.com/au/en/images/products/lisabo-chair-black__0786548_pe763014_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: 'd3f1d7f8-b447-48f9-8208-7dafd5b87bdc',
                alt: 'lisbo dining chair, black',
                url: 'https://www.ikea.com/au/en/images/products/lisabo-chair-black__0936096_ph172124_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: '6b028990-a05a-4c70-9b4c-b35b0d6927b0',
                alt: 'lisbo dining chair, black',
                url: 'https://www.ikea.com/au/en/images/products/lisabo-chair-black__0936084_ph172127_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: 'd4573102-5f91-4d53-8301-80bcd426026f',
                alt: 'lisbo dining chair, black',
                url: 'https://www.ikea.com/au/en/images/products/lisabo-chair-black__1053149_pe846742_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: '95eccf15-4a6f-4531-a7f8-f762fdd4af60',
                alt: 'lisbo dining chair, black',
                url: 'https://www.ikea.com/au/en/images/products/lisabo-chair-black__1053150_pe846743_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: '5967c093-8260-4681-928f-9a568fd7bbf0',
                alt: 'lisbo dining chair, black',
                url: 'https://www.ikea.com/au/en/images/products/lisabo-chair-black__0817918_pe774170_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: 'd34514a1-0f15-49b0-b456-c1d716d7bf68',
                alt: 'lisbo dining chair, black',
                url: 'https://www.ikea.com/au/en/images/products/lisabo-chair-black__1053146_pe846739_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: '642a73cb-5ecd-4956-9a9b-25e45ac2217d',
                alt: 'lisbo dining chair, black',
                url: 'https://www.ikea.com/au/en/images/products/lisabo-chair-black__1053147_pe846740_s5.jpg?f=xl',
                height: 900,
                width: 900
              }
            ]
          }
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

    rating: 0,

    variations: {
      create: [
        {
          id: productIds.voxlov.variationId[0],
          variationName: 'Light bamboo',
          price: 14900,
          color: 'Light bamboo',
          colorHex: '',
          size: '43x53x85cm',
          images: {
            create: [
              {
                id: '5ac0e845-460e-44c9-8faa-390fbf147dae',
                alt: 'volxov dining chair, light bamboo',
                url: 'https://www.ikea.com/au/en/images/products/voxloev-chair-light-bamboo__0948161_pe798889_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: '8ea5062d-467f-4bf0-ae3f-f1205e9d0c4a',
                alt: 'volxov dining chair, light bamboo',
                url: 'https://www.ikea.com/au/en/images/products/voxloev-chair-light-bamboo__0997394_ph176797_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: 'e0238ed0-4207-44a9-8fa1-34259d6bcd46',
                alt: 'volxov dining chair, light bamboo',
                url: 'https://www.ikea.com/au/en/images/products/voxloev-chair-light-bamboo__1002155_ph177192_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: 'd120f173-f0d3-49e5-84ff-b241f4623566',
                alt: 'volxov dining chair, light bamboo',
                url: 'https://www.ikea.com/au/en/images/products/voxloev-chair-light-bamboo__1029934_ph178654_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: '06d3fd5d-8b0a-46c9-a061-6b7f28cb5fe1',
                alt: 'volxov dining chair, light bamboo',
                url: 'https://www.ikea.com/au/en/images/products/voxloev-chair-light-bamboo__1093061_pe863179_s5.jpg?f=xl',
                height: 900,
                width: 900
              },
              {
                id: 'b44957da-af66-4d61-bb80-c7cab2f04b8a',
                alt: 'volxov dining chair, light bamboo',
                url: 'https://www.ikea.com/au/en/images/products/voxloev-chair-light-bamboo__1103715_pe867357_s5.jpg?f=xl',
                height: 900,
                width: 900
              }
            ]
          }
        }
      ]
    }
  }
];

/*
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
*/
