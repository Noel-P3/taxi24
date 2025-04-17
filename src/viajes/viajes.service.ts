import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { Viajes } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
import { CrearViajeDto } from './dto/viajesDto';

@Injectable()
export class ViajesService {
    constructor(private prisma: PrismaService) { }

    async getAllAlvaible(): Promise<Viajes[]> {
        return this.prisma.viajes.findMany({
            where: { status: 'EN_PROCESO' },
            include: {
                conductor: true,
                pasajero: true,
            },
        });
    }

    async crearViaje(documento: CrearViajeDto): Promise<Viajes> {
        try {

            const nuevoViaje = await this.prisma.viajes.create({
                data: {
                    pasajeroId: documento.pasajeroId,
                    conductorId: documento.conductorId,
                    longitudDesde: documento.longitudDesde,
                    latitudDesde: documento.latitudDesde,
                    longitudHasta: documento.longitudHasta,
                    latitudHasta: documento.latitudHasta,
                    status: 'EN_PROCESO',
                },
            });

            return nuevoViaje;
        } catch (error) {
            console.error('Error al crear viaje: ', error);
            throw error;
        }
    }

    /**
     * Actualiza el estado de un viaje específico a 'FINALIZADO',
     * solo si el estado actual es 'EN_PROCESO'.
     * @param id El ID del viaje a actualizar. (Asumimos string, ajusta si es number)
     * @returns El viaje actualizado.
     * @throws NotFoundException si el viaje no existe.
     * @throws BadRequestException si el viaje no está en estado 'EN_PROCESO'.
     */
    async finalizarViaje(id: number): Promise<Viajes | null> {
        const viaje = await this.prisma.viajes.findUnique({
            where: { id },
        });

        if (!viaje) {
            throw new NotFoundException(`Viaje con ID ${id} no encontrado.`);
        }

        if (viaje.status !== 'EN_PROCESO') {
            throw new BadRequestException(
                `Solo se puede finalizar un viaje que está EN_PROCESO. Estado actual: ${viaje.status}.`,
            );
        }

        const updatedViaje = await this.prisma.viajes.update({
            where: { id },
            data: {
                status: 'TERMINADO',
            },
            include: {
                conductor: true,
                pasajero: true,
            },
        });

        return updatedViaje;
    }
}
