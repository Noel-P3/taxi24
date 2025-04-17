import { Module } from '@nestjs/common';
import { ConductorModules } from './conductor/conductor.module';
import { PasajerosModule } from './pasajeros/pasajeros.module';
import { ViajesModule } from './viajes/viajes.module';

@Module({
  imports: [ConductorModules, PasajerosModule, ViajesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
