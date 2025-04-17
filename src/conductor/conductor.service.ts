import { Injectable } from '@nestjs/common';
import { Conductores } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
import { getDistance } from 'geolib';

@Injectable()
export class ConductorService {
    constructor(private prisma: PrismaService) { }

    async getAll(): Promise<Conductores[]> {
        return this.prisma.conductores.findMany({
            include: {
                disponibilidad: true
            }
        });
    }

    async getAllAlvaible(): Promise<Conductores[]> {
        return this.prisma.conductores.findMany({
            where: { disponibilidadId: 1 },
            include: {
                disponibilidad: true
            }
        });
    }

    async getAllAlvaible3km(
        latitude: number,
        longitude: number,
        radiusKm: number = 3,
    ): Promise<Conductores[]> {
        const conductoresDisponibles = await this.prisma.conductores.findMany({
            where: { disponibilidadId: 1 },
        });

        //18.483146, -69.929176 //innova centro

        //18.556111, -70.056728 // metaldom

        //18.549436, -70.047164 carretera la cuaba

        return conductoresDisponibles.filter((driver) => {
            const distance = getDistance(
                {
                    latitude: Number(driver.ubicacionLatitud),
                    longitude: Number(driver.ubicacionLongitud),
                },
                { latitude, longitude },
            );
            // La distancia devuelta por geolib está en metros, convertimos a kilómetros
            return distance / 1000 <= radiusKm;
        });
    }

    async getById(id: number): Promise<Conductores> {
        return this.prisma.conductores.findUnique({
            where: { id },
        });
    }
}
