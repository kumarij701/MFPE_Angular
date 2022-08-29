export interface Property {
    propertyId: any;
    buildingType: string;
    buildingStoreys: any;
    buildingAge: any;
    businessId: any;
    propertyMasterId: any;
    propertyMaster: {
      propertyMasterId: any;
      costOfAssest: any;
      salvageValue: any;
      usefulLifeOfAssest: any;
      propertyValue: any;
    }
}
