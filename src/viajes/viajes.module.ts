import { Module } from '@nestjs/common';
import { ViajesService } from './viajes.service';
import { ViajesController } from './viajes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ViajesController],
  providers: [ViajesService],
  imports: [PrismaModule],
})
export class ViajesModule {}
