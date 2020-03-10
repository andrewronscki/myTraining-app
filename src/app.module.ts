import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrainingsController } from './trainings/trainings.controller';
import { TrainingsService } from './trainings/trainings.service';

@Module({
  imports: [],
  controllers: [AppController, TrainingsController],
  providers: [AppService, TrainingsService],
})
export class AppModule {}
