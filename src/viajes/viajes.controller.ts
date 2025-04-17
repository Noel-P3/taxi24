import { Body, Controller, Get, Post } from '@nestjs/common';
import { ViajesService } from './viajes.service';
import { CrearViajeDto } from './dto/viajesDto';

@Controller('viajes')
export class ViajesController {
  constructor(private readonly viajesService: ViajesService) { }

  @Get('/activos')
  async getAllAlvaibleConductors() {
    return this.viajesService.getAllAlvaible();
  }

  @Post('/crear')
  async crearViaje(@Body() crearViajeDto: CrearViajeDto) {

    console.log(crearViajeDto);
    return this.viajesService.crearViaje(crearViajeDto);
  }
}
