import { Module } from '@nestjs/common';
import { ConductorService } from './conductor.service';
import { ConductorController } from './conductor.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
@Module({
  controllers: [ConductorController],
  providers: [ConductorService],
  imports: [PrismaModule],
})
export class ConductorModules {}
