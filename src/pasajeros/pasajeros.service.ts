import { Injectable, NotFoundException } from '@nestjs/common';
import { Conductores, Pasajeros, StatusDisponibilidad } from 'generated/prisma';
import { getDistance } from 'geolib';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PasajerosService {
  constructor(private prisma: PrismaService) { }

  async getAll(): Promise<Pasajeros[]> {
    return this.prisma.pasajeros.findMany();
  }

  async getAllAlvaible(status: StatusDisponibilidad): Promise<Pasajeros[]> {
    return this.prisma.pasajeros.findMany({
      where: { status },
    });
  }

  async getById(id: number): Promise<Pasajeros | null> {
    const pasajero = await this.prisma.pasajeros.findUnique({
      where: { id },
    });

    if (!pasajero) {
      throw new NotFoundException(`Pasajero con ID ${id} no encontrado.`);
    }

    return pasajero;
  }

  async getAllNearest(
    latitude: number,
    longitude: number,
  ): Promise<Conductores[]> {
    const conductoresDisponibles = await this.prisma.conductores.findMany({
      where: { status: 'ACTIVO' },
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
