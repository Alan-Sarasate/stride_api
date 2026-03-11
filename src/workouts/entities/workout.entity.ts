export class Workout {
  id: string;
  user_id: string;
  training_cycle_id: string;
  workout_type_id: string;
  enviroment: 'treadmill' | 'road' | 'track' | 'trail';
  date: Date;
  status: 'pending' | 'completed';
  planned_description: string;
  distance_meters: number;
  time_seconds: number;
  average_pace_seconds: number;
  fatest_pace_seconds: number;
  elevation_gain_meters: number;
  perceived_effort: number;
  notes: string;
  craeted_at: EpochTimeStamp;
}
