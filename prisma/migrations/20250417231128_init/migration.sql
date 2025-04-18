/*
  Warnings:

  - You are about to drop the column `disponibilidadId` on the `Conductores` table. All the data in the column will be lost.
  - You are about to drop the `Disponibilidad` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Conductores" DROP CONSTRAINT "Conductores_disponibilidadId_fkey";

-- AlterTable
ALTER TABLE "Conductores" DROP COLUMN "disponibilidadId",
ADD COLUMN     "status" "StatusDisponibilidad" NOT NULL DEFAULT 'ACTIVO';

-- DropTable
DROP TABLE "Disponibilidad";
