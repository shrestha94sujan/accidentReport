export interface Accident {
  accident_index: string;
  accident_severity: number;
  number_of_vehicles: number;
  number_of_casualties: number;
  day_of_week: number;
  time: string;
  first_road_class: number;
  first_road_number: number;
  road_type: string;
  speed_limit: number;
  junction_control: string;
  second_road_class: number;
  second_road_number: number;
  pedestrian_crossing_human_control: string;
  pedestrian_crossing_physical_facilities: string;
  light_conditions: string;
  weather_conditions: string;
  road_surface_conditions: string;
  special_conditions_at_site: string;
  carriageway_hazards: string;
  urban_or_rural_area: number;
  did_police_officer_attend_scene_of_accident: string;

}
