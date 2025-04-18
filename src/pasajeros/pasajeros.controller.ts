import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { PasajerosService } from './pasajeros.service';
import { GetPasajerosDTO } from './dto/getPasajerosDTO';

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

  @Get('conductoresCercanos/:id')
  @ApiOperation({ summary: 'Obtener los 3 conductores más cercanos al pasajero' })
  @ApiResponse({ status: 200, description: 'Lista de conductores encontrados' })
  @ApiResponse({ status: 404, description: 'Pasajero no encontrado' })
  @ApiResponse({ status: 400, description: 'Parámetros inválidos' })
  async getTop3Conductores(@Param('id') id: number) {
    return this.pasajerosService.getTop3Conductores(Number(id));
  }
}
