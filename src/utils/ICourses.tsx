export interface ICourses {
  id: number;
  courseImage: string;
  title: string;
  duration: number;
  isLimitedPlaces?: boolean;
  bonus: string;
  placesAvaiables?: number;
  nextStartDate?: Date;
}
