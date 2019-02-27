export interface PlantYear {
  plantName: string;
  plantTypeName: string;
  plantFamilyName: string;
  works: WorkMonth[];
}

export interface WorkMonth {
  month: string;
  watering: string;
  fertilizer: string;
  location: string;
  status?: string;
  work?: string[];
  other?: string;
}
