import { Injectable } from '@nestjs/common';
import { Conductores, Pasajeros } from 'generated/prisma';
import { getDistance } from 'geolib';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PasajerosService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Pasajeros[]> {
    return this.prisma.pasajeros.findMany();
  }

  async getAllAlvaible(): Promise<Pasajeros[]> {
    return this.prisma.pasajeros.findMany({
      where: { status: 'ACTIVO' },
    });
  }

  async getById(id: number): Promise<Pasajeros | null> {
    return this.prisma.pasajeros.findUnique({
      where: { id },
    });
  }

  async getAllNearest(
    latitude: number,
    longitude: number,
  ): Promise<Conductores[]> {
    const conductoresDisponibles = await this.prisma.conductores.findMany({
      where: { disponibilidadId: 1 },
    });

    // Calcular la distancia para cada conductor disponible
    const conductoresConDistancia = conductoresDisponibles.map((driver) => {
      const distance = getDistance(
        {
          latitude: Number(driver.ubicacionLatitud),
          longitude: Number(driver.ubicacionLongitud),
        },
        { latitude, longitude },
      );
      return { ...driver, distancia: distance };
    });

    // Ordenar los conductores por distancia ascendente
    conductoresConDistancia.sort((a, b) => a.distancia - b.distancia);

    // Tomar los primeros 3 conductores (o menos si hay menos de 3 disponibles)
    return conductoresConDistancia.slice(0, 3);
  }
}
