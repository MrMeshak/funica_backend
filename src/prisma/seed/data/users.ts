import { Prisma } from '@prisma/client';

export const userIds = {
  michael: {
    id: '1f4b7ccd-2b82-479d-a647-098d7335bab2',
    addressId: ['3712151f-d382-4fd5-9133-cd955a2b2268', '26f40a1a-9795-48a9-8bb4-e7968f30b72f']
  },
  issac: {
    id: 'd00da75c-393a-454d-b29a-6da12829b837',
    addressId: ['67585eec-bdd6-4408-baa6-93a4db7f7948', '3bc812a1-952b-4f85-a508-61e7abe90679']
  },
  leanne: {
    id: '2c7e8c30-b8f9-4c62-8f4a-c933b4775b9b',
    addressId: ['82d1a632-d012-4baf-ac2e-0ed4988b1f4d', 'b7c4193d-dd7f-4250-aa32-7000eb9fec5e']
  },
  ervin: {
    id: 'a3da1094-be66-4700-92cc-086f63a6bc36',
    addressId: ['a3da1094-be66-4700-92cc-086f63a6bc36', '59212991-78d5-4b0a-8d5c-b5b357e07cd0']
  }
};

export const users: Prisma.UserCreateInput[] = [
  {
    id: userIds.michael.id,

    email: 'michaellawson@test.com',
    password: '$2y$10$tVywZ.RncRiyCUqoPfFKgOsJJxZUr5AC4FIaBe.aSPUS1PlP5kTr6', //password: Password1!

    firstname: 'Michael',
    lastname: 'Lawson',
    profileImg: '',

    addresses: {
      create: [
        {
          id: userIds.michael.addressId[0],

          name: 'Home',
          addressLn1: '33 Trelawney Street',
          addressLn2: '',
          city: 'Moore Park',
          state: 'New South Wales',
          country: 'Australia',
          postCode: '2021'
        },
        {
          id: userIds.michael.addressId[1],

          name: 'Work',
          addressLn1: '503 Pittwater Rd',
          addressLn2: '',
          city: 'Sydney',
          state: 'New South Wales',
          country: 'Australia',
          postCode: '2100'
        }
      ]
    }
  },

  {
    id: userIds.issac.id,

    email: 'issaclebsack@test.com',
    password: '$2y$10$HJENFqB3ncerbiDw.fGISeKOA4yx76xaPGBcdF79bIX68toCcuWgu', //password: Password1!

    firstname: 'Issac',
    lastname: 'Lebsack',
    profileImg: '',

    addresses: {
      create: [
        {
          id: userIds.issac.addressId[0],

          name: 'Home',
          addressLn1: '14 Buckland St',
          addressLn2: '',
          city: 'Sydney',
          state: 'New South Wales',
          country: 'Australia',
          postCode: '2008'
        },
        {
          id: userIds.issac.addressId[1],

          name: 'Parcel Locker',
          addressLn1: 'Parcel Locker 123456789',
          addressLn2: '218 Rundle St',
          city: 'Adelaide',
          state: 'South Australia',
          country: 'Australia',
          postCode: '5000'
        }
      ]
    }
  },

  {
    id: userIds.leanne.id,

    email: 'leannegraham@test.com',
    password: '$2y$10$sJ1tFz.V4zhwzUf2G5cUwuKC / lo.kYCXOoK.odxIupVrAaiGox3NO', //password: Password1!

    firstname: 'Leanne',
    lastname: 'Graham',
    profileImg: '',

    addresses: {
      create: [
        {
          id: userIds.leanne.addressId[0],

          name: 'Home',
          addressLn1: '67/71-73 Cochranes Rd',
          addressLn2: '',
          city: 'Melbourne',
          state: 'Victoria',
          country: 'Australia',
          postCode: '3202'
        },
        {
          id: userIds.leanne.addressId[1],

          name: 'Holiday House',
          addressLn1: '11/17-21 Engadine Ave',
          addressLn2: '',
          city: 'Sydney',
          state: 'New South Wales',
          country: 'Australia',
          postCode: '2233'
        }
      ]
    }
  },
  {
    id: userIds.ervin.id,

    email: 'ervinhowell@test.com',
    password: '$2y$10$k53KCA3MeLziu8ebSgHRteC7bhy//m4hZM32IY27s54UHx8lwv2Bm', //password: Password1!

    firstname: 'Ervin',
    lastname: 'Howell',
    profileImg: '',

    addresses: {
      create: [
        {
          id: userIds.ervin.addressId[0],

          name: 'Home',
          addressLn1: '22 Masters St',
          addressLn2: '',
          city: 'Brisbane City',
          state: 'Queensland',
          country: 'Australia',
          postCode: '4006'
        },
        {
          id: userIds.ervin.addressId[1],

          name: 'Work',
          addressLn1: 'Shop 9, Calamvale Shopping Centre/Beaudesert Rd',
          addressLn2: '',
          city: 'Brisbane City',
          state: 'Queensland',
          country: 'Australia',
          postCode: '4116'
        }
      ]
    }
  }
];
