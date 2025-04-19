import { BadRequestException, Injectable } from '@nestjs/common';
import { Conductores, StatusDisponibilidad } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
import { getDistance } from 'geolib';

@Injectable()
export class ConductorService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Conductores[]> {
    return this.prisma.conductores.findMany({});
  }

  async getAllAlvaible(status: StatusDisponibilidad): Promise<Conductores[]> {
    const conductores = await this.prisma.conductores.findMany({
      where: { status },
    });

    return conductores;
  }

  async getAllAlvaible3km(
    latitud: number,
    longitud: number,
    radiusKm: number = 3,
  ): Promise<Conductores[]> {
    if (isNaN(latitud))
      throw new BadRequestException('Latitud esta vacio o es invalido');
    if (isNaN(longitud))
      throw new BadRequestException('Logintud esta vacio o es invalido');

    if (radiusKm <= 0) {
      throw new BadRequestException('El radio debe ser mayor que 0');
    }

    const conductoresDisponibles = await this.prisma.conductores.findMany({
      where: { status: 'ACTIVO' },
    });

    if (!conductoresDisponibles) {
      throw new BadRequestException('No hay conductores disponibles');
    }
    return conductoresDisponibles.filter((driver) => {
      const distance = getDistance(
        {
          latitude: latitud,
          longitude: longitud,
        },
        {
          latitude: Number(driver.ubicacionLatitud),
          longitude: Number(driver.ubicacionLongitud),
        },
      );

      return distance / 1000 <= radiusKm;
    });
  }

  async getById(id: number): Promise<Conductores | null> {
    if (isNaN(id)) {
      throw new BadRequestException('ID inválido, valor debe ser numerico');
    }
    return this.prisma.conductores.findUnique({
      where: { id },
    });
  }
}
