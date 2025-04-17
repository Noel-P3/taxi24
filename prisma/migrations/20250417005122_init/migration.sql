/*
  Warnings:

  - The `ubicacionLatitud` column on the `Conductores` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `ubicacionLongitud` column on the `Conductores` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Conductores" DROP COLUMN "ubicacionLatitud",
ADD COLUMN     "ubicacionLatitud" DECIMAL(10,7),
DROP COLUMN "ubicacionLongitud",
ADD COLUMN     "ubicacionLongitud" DECIMAL(10,7);
