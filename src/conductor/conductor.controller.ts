import { Controller, Get, Param } from '@nestjs/common';
import { ConductorService } from './conductor.service';

@Controller('conductor')
export class ConductorController {

    constructor(private readonly conductorService: ConductorService){}

    @Get()
    async getAllConductors(){
        return this.conductorService.getAll();
    }

    @Get('/conductoresdisponibles')
    async getAllAlvaibleConductors(){
        return this.conductorService.getAllAlvaible();
    }

    @Get(':id')
    async getByConductorId(@Param('id') id: string){
        return this.conductorService.getById(Number(id));
    }
}