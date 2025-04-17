import { Controller, Get, Param, Query } from '@nestjs/common';
import { ConductorService } from './conductor.service';

@Controller('conductor')
export class ConductorController {
  constructor(private readonly conductorService: ConductorService) {}

  @Get()
  async getAllConductors() {
    return this.conductorService.getAll();
  }

  @Get('/disponibles')
  async getAllAlvaibleConductors() {
    return this.conductorService.getAllAlvaible();
  }

  @Get('/disponibleskm')
  async getAllAlvaible3km(
    @Query('latitud') latitud: string,
    @Query('logintud') logintud: string,
    @Query('radio') radio: string,
  ) {
    return this.conductorService.getAllAlvaible3km(
      Number(latitud),
      Number(logintud),
      Number(radio),
    );
  }

  @Get(':id')
  async getByConductorId(@Param('id') id: string) {
    return this.conductorService.getById(Number(id));
  }
}
