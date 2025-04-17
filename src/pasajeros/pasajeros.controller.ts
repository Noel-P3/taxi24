import { Controller, Get, Param, Query } from '@nestjs/common';
import { PasajerosService } from './pasajeros.service';

@Controller('pasajeros')
export class PasajerosController {
  constructor(private readonly pasajerosService: PasajerosService) {}

  @Get()
  async getAll() {
    return this.pasajerosService.getAll();
  }

  @Get('/disponibles')
  async getAllAlvaible() {
    return this.pasajerosService.getAllAlvaible();
  }

  @Get(':id')
  async getByConductorId(@Param('id') id: string) {
    return this.pasajerosService.getById(Number(id));
  }

  @Get('/disponibles/cerca')
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
