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

        const conductor = await this.prisma.conductores.findUnique({
            where: {
                id: documento.conductorId,
                status: 'ACTIVO'  // Solo conductores activos
            },
        });

        if (!conductor) {
            throw new BadRequestException(
                `Conductor ACTIVO con ID ${documento.conductorId} no encontrado.`,
            );
        }

        const pasajero = await this.prisma.pasajeros.findUnique({
            where: {
                id: documento.pasajeroId,
                status: 'ACTIVO'  // Solo pasajeros activos
            },
        });

        if (!pasajero) {
            throw new BadRequestException(
                `Pasajero ACTIVO con ID ${documento.pasajeroId} no encontrado.`,
            );
        }

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
                include: {
                    conductor: true,
                    pasajero: true,
                },
            });

            if (!nuevoViaje) {
                throw new BadRequestException('Error al crear el viaje.');
            }
            // Actualizar el estado del conductor a 'EN_VIAJE'
            await this.prisma.conductores.update({
                where: { id: documento.conductorId },
                data: { status: 'EN_VIAJE' },
            });
            // Actualizar el estado del pasajero a 'EN_VIAJE'
            await this.prisma.pasajeros.update({
                where: { id: documento.pasajeroId },
                data: { status: 'EN_VIAJE' },
            });

            return nuevoViaje;
        } catch (error) {
            throw new BadRequestException(
                `Error al crear el viaje, verifique que los valores indicados esten correctos: ${error.message}`,
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

        // Crear la factura asociada al viaje
        const factura = await this.prisma.facturas.create({
            data: {
                monto: 100, // Aquí puedes calcular el monto real según la lógica de tu aplicación
                fecha: new Date(),
            },
        });

        const updatedViaje = await this.prisma.viajes.update({
            where: { id },
            data: {
                status: 'TERMINADO',
                facturaId: factura.id, // Asocia la factura al viaje
            },
            include: {
                conductor: true,
                pasajero: true,
                factura: true,
            },
        });

        // Actualizar el estado del conductor a 'ACTIVO'
        await this.prisma.conductores.update({
            where: { id: updatedViaje.conductorId },
            data: { status: 'ACTIVO' },
        });
        // Actualizar el estado del pasajero a 'ACTIVO'
        await this.prisma.pasajeros.update({
            where: { id: updatedViaje.pasajeroId },
            data: { status: 'ACTIVO' },
        });

        const viajeFinalizado = await this.prisma.viajes.findUnique({
            where: { id },
            include: {
                conductor: true,
                pasajero: true,
                factura: true,
            },
        });

        return viajeFinalizado;
    }
}
