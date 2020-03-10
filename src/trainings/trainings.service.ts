import { Injectable } from '@nestjs/common';

const trainings: any = { 
  treinos: {
    perna: { ok: true },
    braco: { ok: true },
    peito: { ok: true },
  }
};

@Injectable()
export class TrainingsService {
  getAllTrainings(): [] {
    return trainings;
  }
}
