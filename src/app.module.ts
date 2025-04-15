import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConductorModules } from './conductor/conductor.module';
import { ConductorController } from './conductor/conductor.controller';

@Module({
  imports: [ConductorModules],
  controllers: [],
  providers: [],
})
export class AppModule {}
