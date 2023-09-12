export interface ICourses {
  id: number;
  course_image: string;
  title: string;
  duration: number;
  isLimitedPlaces?: boolean;
  bonus: string;
  placesAvaiables?: number;
  nextStartDate?: Date;
}
