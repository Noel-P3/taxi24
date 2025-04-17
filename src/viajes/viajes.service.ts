import { Injectable } from '@nestjs/common';
import { Viajes } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
import { CrearViajeDto } from './dto/viajesDto';

@Injectable()
export class ViajesService {
    constructor(private prisma: PrismaService) { }

    async getAllAlvaible(): Promise<Viajes[]> {
        return this.prisma.viajes.findMany({
            where: { status: 'EN_PROCESO' },
        });
    }

    async crearViaje(documento: CrearViajeDto): Promise<Viajes> {
        console.log(documento);
        try {
            const nuevoViaje = await this.prisma.viajes.create({
                data: {
                    pasajeroId: documento.pasajeroId,
                    conductorId: documento.conductorId,
                    longitudDesde: documento.longitudDesde,
                    latitudDesde: documento.latitudDesde,
                    longitudHasta: documento.longitudHasta,
                    latitudHasta: documento.latitudHasta,
                    status: 'EN_PROCESO'
                }
            });

            return nuevoViaje;
        } catch (error) {
            console.error('Error al crear viaje: ', error);
            throw error;
        }
    }

}
