import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { PasajerosService } from './pasajeros.service';
import { GetPasajerosDTO } from './dto/getPasajerosDTO';
import { GetPasajerosByIdDTO } from './dto/getPasajerosByIdDTO';

@Controller('pasajeros')
export class PasajerosController {
  constructor(private readonly pasajerosService: PasajerosService) { }

  @Get()
  @ApiOperation({ summary: 'Obtener pasajeros con filtros opcionales' })
  @ApiQuery({ name: 'status', required: false, description: 'Estado del pasajero (e.g., ACTIVO, INACTIVO)' })
  @ApiResponse({ status: 200, description: 'Lista de pasajeros encontrados' })
  @ApiResponse({ status: 400, description: 'Parámetros inválidos' })
  async getPasajeros(@Query() query: GetPasajerosDTO) {
    const { status } = query;
    if (status) {
      return this.pasajerosService.getAllAlvaible(status as 'ACTIVO' | 'INACTIVO');
    }
    return this.pasajerosService.getAll();
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Obtener un pasajero por ID' })
  @ApiResponse({ status: 200, description: 'Pasajero encontrado' })
  @ApiResponse({ status: 404, description: 'Pasajero no encontrado' })
  @ApiResponse({ status: 400, description: 'Parámetros inválidos' })
  async getByPasajeroId(@Param('id') id: string) {
    return this.pasajerosService.getById(Number(id));
  }

  @Get('/disponibles/cerca')
  @ApiOperation({ summary: 'Obtener pasajeros disponibles cerca de una ubicación' })
  @ApiQuery({ name: 'latitud', required: true, description: 'Latitud de la ubicación' })
  @ApiQuery({ name: 'logintud', required: true, description: 'Longitud de la ubicación' })
  @ApiResponse({ status: 200, description: 'Lista de pasajeros disponibles cerca de la ubicación' })
  @ApiResponse({ status: 400, description: 'Latitud o longitud inválidas' })
  async getAllAlvaible3km(
    @Query('latitud') latitud: string,
    @Query('logintud') logintud: string,
  ) {
    const lat = Number(latitud);
    const lon = Number(logintud);

    if (isNaN(lat) || isNaN(lon)) {
      return { message: 'Latitud y longitud inválidas' };
    }

    return this.pasajerosService.getAllNearest(
      Number(latitud),
      Number(logintud),
    );
  }
}
