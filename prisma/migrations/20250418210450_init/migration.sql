/*
  Warnings:

  - You are about to drop the column `viajeId` on the `Facturas` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Facturas" DROP CONSTRAINT "Facturas_viajeId_fkey";

-- AlterTable
ALTER TABLE "Facturas" DROP COLUMN "viajeId";

-- AlterTable
ALTER TABLE "Viajes" ADD COLUMN     "facturaId" INTEGER;

-- AddForeignKey
ALTER TABLE "Viajes" ADD CONSTRAINT "Viajes_facturaId_fkey" FOREIGN KEY ("facturaId") REFERENCES "Facturas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
