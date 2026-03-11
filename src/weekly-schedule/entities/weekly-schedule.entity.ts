export class WeeklySchedule {
  id: string;
  user_id: string;
  weekday: number;
  enviroment: 'treadmill' | 'road' | 'track' | 'trail';
  workout_type_id: string;
  notes: string;
  created_at: EpochTimeStamp;
}
