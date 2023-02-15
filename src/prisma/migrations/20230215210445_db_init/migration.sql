/*
  Warnings:

  - You are about to drop the column `paymentStatus` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `shippingStatus` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `totalCost` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `Product` table. All the data in the column will be lost.
  - Changed the type of `orderStatus` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `paymentMethod` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `shippingType` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `productType` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color` to the `ProductVariation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `ProductVariation` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'AWAITING_PAYMENT', 'AWAITING_FULLFILMENT', 'AWAITING_SHIPPING', 'AWAITING_PICKUP', 'PARTIALLY_SHIPPED', 'COMPLETED', 'SHIPPED', 'CANCELED', 'DECLINED', 'REFUNDED', 'DISPUTED', 'MANUAL_VERIFICATION_REQUIRED', 'PARTIALLY_REFUNDED');

-- CreateEnum
CREATE TYPE "ShippingType" AS ENUM ('STANDARD', 'EXPRESS');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('CARD', 'CASH');

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "paymentStatus",
DROP COLUMN "shippingStatus",
DROP COLUMN "totalCost",
ADD COLUMN     "isShipped" TIMESTAMP(3),
DROP COLUMN "orderStatus",
ADD COLUMN     "orderStatus" "OrderStatus" NOT NULL,
DROP COLUMN "paymentMethod",
ADD COLUMN     "paymentMethod" "PaymentMethod" NOT NULL,
DROP COLUMN "shippingType",
ADD COLUMN     "shippingType" "ShippingType" NOT NULL,
ALTER COLUMN "trackingId" SET DEFAULT '';

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "category",
ADD COLUMN     "categories" TEXT[],
ADD COLUMN     "productType" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProductVariation" ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "images" TEXT[],
ADD COLUMN     "size" TEXT NOT NULL;
