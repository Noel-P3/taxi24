/*
  Warnings:

  - The `status` column on the `Pasajeros` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `Viajes` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "StatusDisponibilidad" AS ENUM ('ACTIVO', 'INACTIVO');

-- CreateEnum
CREATE TYPE "StatusViajes" AS ENUM ('EN_PROCESO', 'TERMINADO');

-- AlterTable
ALTER TABLE "Pasajeros" DROP COLUMN "status",
ADD COLUMN     "status" "StatusDisponibilidad" NOT NULL DEFAULT 'ACTIVO';

-- AlterTable
ALTER TABLE "Viajes" DROP COLUMN "status",
ADD COLUMN     "status" "StatusViajes" NOT NULL DEFAULT 'EN_PROCESO';
