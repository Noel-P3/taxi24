import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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

  async getTop3Conductores(id: number): Promise<Conductores[]> {
    if (isNaN(id)) {
      throw new BadRequestException('ID inválido, valor debe ser numerico');
    }

    const pasajero = await this.getById(id);
    if (!pasajero) {
      throw new NotFoundException(`Pasajero con ID ${id} no encontrado.`);
    }
    const { ubicacionLatitud, ubicacionLongitud } = pasajero;
    if (!ubicacionLatitud || !ubicacionLongitud) {
      throw new BadRequestException('Ubicación del pasajero no disponible');
    }
    const conductoresDisponibles = await this.prisma.conductores.findMany({
      where: { status: 'ACTIVO' },
    });
    if (!conductoresDisponibles) {
      throw new BadRequestException('No hay conductores disponibles');
    }

    // Calcular la distancia y ordenar por la menor distancia
    const conductoresConDistancia = conductoresDisponibles.map((driver) => {
      const distance = getDistance(
        {
          latitude: Number(ubicacionLatitud),
          longitude: Number(ubicacionLongitud),
        },
        {
          latitude: Number(driver.ubicacionLatitud),
          longitude: Number(driver.ubicacionLongitud),
        },
      );
      return { ...driver, distance }; // Agregar la distancia al objeto del conductor
    });

    // Ordenar los conductores por distancia ascendente
    const conductoresOrdenados = conductoresConDistancia.sort((a, b) => a.distance - b.distance);

    // Tomar los 3 conductores más cercanos
    const top3Conductores = conductoresOrdenados.slice(0, 3);

    if (top3Conductores.length === 0) {
      throw new NotFoundException('No hay conductores cercanos disponibles.');
    }

    return top3Conductores.map(({ distance, ...driver }) => driver); // Retornar los conductores sin la propiedad "distance"
  }

}
