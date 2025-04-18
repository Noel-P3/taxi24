import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { Viajes } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
import { CrearViajeDto } from './dto/crearViajeDTO';

@Injectable()
export class ViajesService {
    constructor(private prisma: PrismaService) { }

    /**
     * 
     * @returns Promise<Viajes[]>
     * @description Obtiene todos los viajes disponibles.
     */

    async getAllAlvaible(): Promise<Viajes[]> {
        return this.prisma.viajes.findMany({
            where: { status: 'EN_PROCESO' },
            include: {
                conductor: true,
                pasajero: true,
            },
        });
    }

    /**
     * 
     * @param documento CrearViajeDto
     * @param documento.pasajeroId ID del pasajero.
     * @param documento.conductorId ID del conductor.
     * @param documento.longitudDesde Longitud de la ubicación de inicio.
     * @param documento.latitudDesde Latitud de la ubicación de inicio.
     * @param documento.longitudHasta Longitud de la ubicación de destino.
     * @param documento.latitudHasta Latitud de la ubicación de destino.
     * @description Crea un nuevo viaje con el estado 'EN_PROCESO'.
     * @throws BadRequestException si ocurre un error al crear el viaje.
     * @returns 
     */

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
            throw new BadRequestException(
                `Error al crear el viaje: ${error.message}`,
            );
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
        if (isNaN(id)) {
            throw new BadRequestException('ID inválido, valor debe ser numerico');
        }

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
