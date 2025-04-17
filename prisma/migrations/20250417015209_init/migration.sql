-- CreateTable
CREATE TABLE "Viajes" (
    "id" SERIAL NOT NULL,
    "pasajeroId" INTEGER NOT NULL,
    "conductorId" INTEGER NOT NULL,
    "status" VARCHAR(50) NOT NULL,

    CONSTRAINT "Viajes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pasajeros" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(75) NOT NULL,
    "apellido" VARCHAR(75) NOT NULL,
    "status" VARCHAR(50) NOT NULL,

    CONSTRAINT "Pasajeros_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Viajes" ADD CONSTRAINT "Viajes_pasajeroId_fkey" FOREIGN KEY ("pasajeroId") REFERENCES "Pasajeros"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Viajes" ADD CONSTRAINT "Viajes_conductorId_fkey" FOREIGN KEY ("conductorId") REFERENCES "Conductores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
