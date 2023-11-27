import { IObjectTypeCamelizedNames, IObjectTypeCapitalizedNames, MetaModelObjectTypeDefinitionType } from "../../jup.models";
import { IPropertyTypeDefinition } from "../../propertyType.models";
import { Surfy } from "../../schema/surfy.models.generated";

export type MetaModelObjectTypeTenantScopeType = "public" | "private";
export interface IObjectTypeDefinition {
    name: Surfy.CamelizedObjectTypes;
    type: MetaModelObjectTypeDefinitionType;
    scope: MetaModelObjectTypeTenantScopeType;
    propertiesByName: Record<string, IPropertyTypeDefinition>;
    plural: string;
    camelized: IObjectTypeCamelizedNames;
    capitalized: IObjectTypeCapitalizedNames;
    isMasterData: boolean;
    isReportingData: boolean;
    context: {
        hasMany: Surfy.CamelizedObjectTypes[];
        belongsTo: Surfy.CamelizedObjectTypes[];
    }
}
