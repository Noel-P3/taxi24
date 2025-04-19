import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiQuery, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ConductorService } from './conductor.service';
import { GetConductoresDto } from './dto/obtenerConductoresDTO';

@Controller('conductor')
export class ConductorController {
  constructor(private readonly conductorService: ConductorService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener conductores con filtros opcionales' })
  @ApiQuery({
    name: 'status',
    required: false,
    description: 'Estado del conductor (e.g., ACTIVO, INACTIVO) Opcional',
  })
  @ApiQuery({
    name: 'latitud',
    required: false,
    description:
      'Latitud para buscar conductores cercanos en un radio de 3 Kilometros  (e.g, 18.4885 (Jardin Botanico Nacional)) Opcional',
  })
  @ApiQuery({
    name: 'longitud',
    required: false,
    description:
      'Longitud para buscar conductores cercanos en un radio de 3 Kilometros  (e.g, -69.9606 (Jardin Botanico Nacional)) Opcional',
  })
  @ApiResponse({ status: 200, description: 'Lista de conductores encontrados' })
  @ApiResponse({ status: 400, description: 'Parámetros inválidos' })
  async getConductores(@Query() query: GetConductoresDto) {
    const { latitud, longitud, radio, status } = query;
    if (latitud || longitud) {
      return this.conductorService.getAllAlvaible3km(
        Number(latitud),
        Number(longitud),
        radio ? Number(radio) : 3, // Radio por defecto: 3 km
      );
    } else if (status) {
      return this.conductorService.getAllAlvaible(status);
    } else {
      return this.conductorService.getAll();
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un conductor por ID' })
  @ApiResponse({ status: 200, description: 'Conductor encontrado' })
  @ApiResponse({ status: 404, description: 'Conductor no encontrado' })
  @ApiResponse({
    status: 400,
    description: 'El ID proporcionado no es válido o no es numérico.',
  })
  async getByConductorId(@Param('id') id: string) {
    return this.conductorService.getById(Number(id));
  }
}
