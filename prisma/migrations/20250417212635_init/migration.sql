/*
  Warnings:

  - Added the required column `latitudDesde` to the `Viajes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `latitudHasta` to the `Viajes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitudDesde` to the `Viajes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitudHasta` to the `Viajes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Viajes" ADD COLUMN     "latitudDesde" DECIMAL(10,7) NOT NULL,
ADD COLUMN     "latitudHasta" DECIMAL(10,7) NOT NULL,
ADD COLUMN     "longitudDesde" DECIMAL(10,7) NOT NULL,
ADD COLUMN     "longitudHasta" DECIMAL(10,7) NOT NULL;
