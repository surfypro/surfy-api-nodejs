import { PropertyTypeJupValues, PropertyTypeJupType } from "./propertyTypes.values.models";

export type PropertyTypeJupDistanceUnits = 'centimeter' | 'meter';
export type PropertyTypeJupWeightUnits = 'kilogram' | 'gram';

export type PropertyTypeJupUnitType = 'distance' | 'weight';

export type PropertyTypeJupUnits = PropertyTypeJupDistanceUnits | PropertyTypeJupWeightUnits;

export type PropertyTypeJupWithOptionsType = { default: PropertyTypeJupValues; type: PropertyTypeJupType, unit?: IPropertyTypeUnitDefinition };
export type MetaModelProperty = PropertyTypeJupType | PropertyTypeJupWithOptionsType;

export interface IPropertyTypeUnitDefinition {
    value: PropertyTypeJupUnits,
    type: PropertyTypeJupUnitType
}
