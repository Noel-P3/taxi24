-- CreateTable
CREATE TABLE "Conductores" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(75) NOT NULL,
    "apellido" VARCHAR(75) NOT NULL,
    "disponibilidadId" INTEGER NOT NULL,

    CONSTRAINT "Conductores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Disponibilidad" (
    "id" SERIAL NOT NULL,
    "descripcion" VARCHAR(250) NOT NULL,

    CONSTRAINT "Disponibilidad_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Conductores_disponibilidadId_key" ON "Conductores"("disponibilidadId");

-- AddForeignKey
ALTER TABLE "Conductores" ADD CONSTRAINT "Conductores_disponibilidadId_fkey" FOREIGN KEY ("disponibilidadId") REFERENCES "Disponibilidad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
