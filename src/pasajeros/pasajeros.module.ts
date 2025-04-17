import { Module } from '@nestjs/common';
import { PasajerosController } from './pasajeros.controller';
import { PasajerosService } from './pasajeros.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PasajerosController],
  providers: [PasajerosService],
  imports: [PrismaModule],
})
export class PasajerosModule {}
