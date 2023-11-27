import { IPropertyTypeUnitDefinition } from "./propertyTypes.units.models";
import { PropertyTypeJupType, PropertyTypeJupValues } from "./propertyTypes.values.models";
import { Surfy } from "./schema/surfy.models.generated";

export interface IPropertyTypeDefinitionOptions {
    mandatory: boolean;
    readOnly: boolean;
    defaultValue?: PropertyTypeJupValues | null;
    calculated: boolean;
    technical: boolean;
    unit?: IPropertyTypeUnitDefinition;
}
export const jupKeyIdSuffix = "Id";
export interface IPropertyTypeDefinition {
    name: string;
    type: PropertyTypeJupType;
    options: IPropertyTypeDefinitionOptions;
    association?: IPropertyTypeAssociation;
    objectTypeName: Surfy.CamelizedObjectTypes;
}

export interface IPropertyTypeAssociation {
    targetModelName: Surfy.CamelizedObjectTypes;
    propertyTypeName: string;
    foreignKey: string;
    options: { readOnly: boolean }
}