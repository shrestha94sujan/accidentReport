import { Component, OnInit } from '@angular/core';
import { Accident } from './accident.model';
import { HttpClient} from '@angular/common/http';

import {map} from 'rxjs/operators';

@Component({
  selector: 'app-chart-visuals',
  templateUrl: './chart-visuals.component.html',
  styleUrls: ['./chart-visuals.component.css']
})
export class ChartVisualsComponent implements OnInit {

  accidentReport: Accident[] = [];
  // filePath = '../assets/accident_report.json';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }


  private postData(accident: {accident_index: string, accident_severity: number, number_of_vehicles: number,
    number_of_casualties: number, day_of_week: number, time: string, first_road_class: number,
    first_road_number: number, road_type: string, speed_limit: number, junction_control: string, second_road_class: number,
    second_road_number: number, pedestrian_crossing_human_control: string, pedestrian_crossing_physical_facilities: string,
    light_conditions: string, weather_conditions: string, road_surface_conditions: string, special_conditions_at_site: string,
    carriageway_hazards: string, urban_or_rural_area: number, did_police_officer_attend_scene_of_accident: string}) {

    this.http.post('https://accidentreport-01.firebaseio.com/accidentReport.json', accident)
      .subscribe(() => {
      });
  }

  private getData() {
    /*
    // Post data if the data array is empty
    if (this.accidentReport.length === 0) {
      this.parseData(this.filePath);
    }
     */
  }


  private parseData(file) {
    this.http.get(file, {responseType: 'json'})
      .pipe(
        map(responseData => {
          const accidentReportArr: Accident[] = [];
          // tslint:disable-next-line:forin
          for (const key in responseData) {

            if (responseData.hasOwnProperty(key)) {

              const element = responseData[key];

              const accidentIndex = element.Accident_Index;
              const accidentSeverity = parseFloat(element.Accident_Severity);
              const numberOfVehicles = parseFloat(element.Number_Of_Vehicle);
              const numberOfCasualties = parseFloat(element.Number_of_Casualties);
              const dayOfWeek = parseFloat(element.Day_of_Week);
              // tslint:disable-next-line:variable-name
              const time_ = element.Time;
              const firstRoadClass = parseFloat(element['1st_Road_Number']);
              const firstRoadNumber = parseFloat(element['1st_Road_Number']);
              const roadType = element.Road_Type;
              const speedLimit = parseFloat(element.Speed_limit);
              const junctionControl = element.Junction_Control;
              const secondRoadClass = parseFloat(element['2nd_Road_Class']);
              const secondRoadNumber = parseFloat(element['2nd_Road_Number']);
              const pedestrianCrossingHumanControl = element['Pedestrian_Crossing-Human_Control'];
              const pedestrianCrossingPhysicalFacilities = element['Pedestrian_Crossing-Physical_Facilities'];
              const lightConditions = element.Light_Conditions;
              const weatherConditions = element.Weather_Conditions;
              const roadSurfaceCondition = element.Road_Surface_Conditions;
              const specialConditionAtSite = element.Special_Conditions_at_Site;
              const carriagewayHazards = element.Carriageway_Hazards;
              const urbanOrRuralAreas = parseFloat(element.Urban_or_Rural_Area);
              const didPoliceOfficerAttendSceneOfAccident = element.Did_Police_Officer_Attend_Scene_of_Accident;

              accidentReportArr.push({
                accident_index: accidentIndex, accident_severity: accidentSeverity,
                number_of_vehicles: numberOfVehicles, number_of_casualties: numberOfCasualties,
                day_of_week: dayOfWeek, time: time_, first_road_class: firstRoadClass,
                first_road_number: firstRoadNumber, road_type: roadType, speed_limit: speedLimit, junction_control: junctionControl,
                second_road_class: secondRoadClass, second_road_number: secondRoadNumber,
                pedestrian_crossing_human_control: pedestrianCrossingHumanControl,
                pedestrian_crossing_physical_facilities: pedestrianCrossingPhysicalFacilities, light_conditions: lightConditions,
                weather_conditions: weatherConditions, road_surface_conditions: roadSurfaceCondition,
                special_conditions_at_site: specialConditionAtSite,
                carriageway_hazards: carriagewayHazards, urban_or_rural_area: urbanOrRuralAreas,
                did_police_officer_attend_scene_of_accident: didPoliceOfficerAttendSceneOfAccident
              });
            }
          }
          return accidentReportArr;
        }))
      .subscribe(accidentReportArr => {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < accidentReportArr.length; i++) {
          this.postData(accidentReportArr[i]);
        }
      });
  }

}
