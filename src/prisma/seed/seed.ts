import { Prisma } from '@prisma/client';
import prisma from '../prismaClient.js';
import { orders } from './data/orders.js';
import { products } from './data/products.js';
import { users } from './data/users.js';

const seedDatabase = async () => {
  //Create User
  await Promise.all(
    users.map(async (user: Prisma.UserCreateInput) => {
      await prisma.user.upsert({
        where: { id: user.id },
        update: {},
        create: user
      });
    })
  );

  // Create Products
  await Promise.all(
    products.map(async (product: Prisma.ProductCreateInput) => {
      await prisma.product.upsert({
        where: { id: product.id },
        update: {},
        create: product
      });
    })
  );

  //Create Orders
  await Promise.all(
    orders.map(async (order: Prisma.OrderCreateInput) => {
      await prisma.order.upsert({
        where: { id: order.id },
        update: {},
        create: order
      });
    })
  );

  console.log('Seed Completed');
};

seedDatabase()
  .catch((e) => {
    console.error(`There was an error while seeding: ${e}`);
    process.exit(1);
  })
  .finally(async () => {
    console.log('Successfully seeded database. Closing connection.');
    await prisma.$disconnect();
  });
