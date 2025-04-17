import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ViajesService } from './viajes.service';
import { CrearViajeDto } from './dto/viajesDto';
import { ApiOperation, ApiBody, ApiCreatedResponse } from '@nestjs/swagger';

@Controller('viajes')
export class ViajesController {
  constructor(private readonly viajesService: ViajesService) { }

  @Get('/activos')
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
          latitudDesde: 18.4831,
          longitudDesde: -69.9291,
          latitudHasta: 18.5,
          longitudHasta: -70.0,
        } as CrearViajeDto,
      },
    },
  })
  @ApiCreatedResponse({
    description: 'El viaje ha sido creado exitosamente',
    type: ViajesService,
  })
  async crearViaje(@Body() crearViajeDto: CrearViajeDto) {
    return this.viajesService.crearViaje(crearViajeDto);
  }

  @Patch('/finalizar/:id')
  async finalizaViaje(@Param('id') id: string) {
    const viajeId = Number(id);

    if (isNaN(viajeId)) {
      return { message: 'Parametro ID Viajero no es valido' };
    }
    return this.viajesService.finalizarViaje(viajeId);
  }
}
