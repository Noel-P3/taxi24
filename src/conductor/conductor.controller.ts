import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiQuery, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ConductorService } from './conductor.service';
import { GetConductoresDto } from './dto/obtenerConductoresDTO';

@Controller('conductor')
export class ConductorController {
  constructor(private readonly conductorService: ConductorService) { }

  @Get()
  @ApiOperation({ summary: 'Obtener conductores con filtros opcionales' })
  @ApiQuery({ name: 'status', required: false, description: 'Estado del conductor (e.g., ACTIVO)' })
  @ApiQuery({ name: 'latitud', required: false, description: 'Latitud para buscar conductores cercanos' })
  @ApiQuery({ name: 'longitud', required: false, description: 'Longitud para buscar conductores cercanos' })
  @ApiQuery({ name: 'radio', required: false, description: 'Radio de búsqueda en kilómetros (por defecto: 3 km)' })
  @ApiResponse({ status: 200, description: 'Lista de conductores encontrados' })
  @ApiResponse({ status: 400, description: 'Parámetros inválidos' })
  async getConductores(
    @Query() query: GetConductoresDto
  ) {
    const { latitud, longitud, radio, status } = query;
    if (latitud && longitud) {
      return this.conductorService.getAllAlvaible3km(
        Number(latitud),
        Number(longitud),
        radio ? Number(radio) : 3, // Radio por defecto: 3 km
      );
    } else if (status) {
      return this.conductorService.getAllAlvaible(status as 'ACTIVO' | 'INACTIVO');
    } else {
      return this.conductorService.getAll();
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un conductor por ID' })
  @ApiResponse({ status: 200, description: 'Conductor encontrado' })
  @ApiResponse({ status: 404, description: 'Conductor no encontrado' })
  @ApiResponse({ status: 400, description: 'El ID proporcionado no es válido o no es numérico.' })
  async getByConductorId(@Param('id') id: string) {
    return this.conductorService.getById(Number(id));
  }
}
