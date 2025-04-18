/*
  Warnings:

  - You are about to drop the column `nombreUbucacinon` on the `Conductores` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Conductores" DROP COLUMN "nombreUbucacinon",
ADD COLUMN     "nombreUbicacion" VARCHAR(250);
