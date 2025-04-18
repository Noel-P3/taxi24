import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ViajesService } from './viajes.service';
import { CrearViajeDto } from './dto/crearViajeDTO';
import { ApiOperation, ApiBody, ApiCreatedResponse, ApiResponse, ApiParam } from '@nestjs/swagger';

@Controller('viajes')
export class ViajesController {
  constructor(private readonly viajesService: ViajesService) { }

  @Get('/activos')
  @ApiOperation({ summary: 'Obtener todos los viajes activos' })
  @ApiResponse({ status: 200, description: 'Lista de viajes activos' })
  async getAllAlvaibleConductors() {
    return this.viajesService.getAllAlvaible();
  }

  @Post('/crear')
  @ApiOperation({ summary: 'Crear un nuevo viaje' })
  @ApiBody({
    type: CrearViajeDto,
    examples: {
      'application/json': {
        summary: 'Ejemplo de cuerpo de la petición',
        value: {
          conductorId: 1,
          pasajeroId: 2,
          latitudDesde: 18.5556050,
          longitudDesde: -70.0565650,
          latitudHasta: 18.4838360,
          longitudHasta: -69.9365500,
        } as CrearViajeDto,
      },
    },
  })
  @ApiCreatedResponse({
    description: 'El viaje ha sido creado exitosamente',
    type: CrearViajeDto,
  })
  async crearViaje(@Body() crearViajeDto: CrearViajeDto) {
    return this.viajesService.crearViaje(crearViajeDto);
  }

  @Patch('/finalizar/:id')
  @ApiOperation({ summary: 'Finalizar un viaje' })
  @ApiParam({ name: 'id', description: 'ID del viaje a finalizar', type: 'integer' })
  @ApiResponse({ status: 200, description: 'El viaje ha sido finalizado exitosamente' })
  @ApiResponse({ status: 404, description: 'Viaje no encontrado' })
  @ApiResponse({ status: 400, description: 'Parámetros inválidos' })
  async finalizaViaje(@Param('id') id: string) {
    return this.viajesService.finalizarViaje(Number(id));
  }
}
