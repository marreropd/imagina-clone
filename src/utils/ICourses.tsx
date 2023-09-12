export interface ICourses {
  id: number;
  course_image: string;
  title: string;
  duration: number;
  is_limited_places?: boolean;
  bonus: string;
  places_avaiables?: number;
  next_start_date?: Date;
}
