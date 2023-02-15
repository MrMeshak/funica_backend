/*
  Warnings:

  - You are about to drop the column `isArchived` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "isPaid" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isArchived";
