import { Test, TestingModule } from '@nestjs/testing';
import { TrainingsController } from './trainings.controller';
import { TrainingsService } from './trainings.service';

describe('TrainingsController', () => {
  let trainingsController: TrainingsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TrainingsController],
      providers: [TrainingsService],
    }).compile();

    trainingsController = app.get<TrainingsController>(TrainingsController);
  });

  describe('get all trainings', () => {
    it('get all trainings', () => {
      const trainings: any = { 
        treinos: {
          perna: { ok: true },
          braco: { ok: true },
          peito: { ok: true },
        }
      };
      expect(trainingsController.getAllTrainings()).toBe(trainings);
    });
  });
});
