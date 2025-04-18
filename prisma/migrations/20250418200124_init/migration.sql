-- AlterTable
ALTER TABLE "Pasajeros" ADD COLUMN     "nombreUbicacion" VARCHAR(250),
ADD COLUMN     "ubicacionLatitud" DECIMAL(10,7),
ADD COLUMN     "ubicacionLongitud" DECIMAL(10,7);
