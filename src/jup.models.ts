import { IPropertyTypeDefinition } from "./propertyType.models";
import { Surfy } from "./schema/surfy.models.generated";
import { JupQueryNodeFilter } from "./where.models";

export type FontAwesomeIconsStyle = "solid" | "regular" | "light" | "duotone" | "brands" | 'thin';

export interface IJupQueryNodePagination {
    limit: number;
    offset?: number;
}

export interface GJupQueryNode<ScalarPropertiesType extends string> {
    name: string;
    _: JupQueryTree;
    filters?: JupQueryNodeFilter<ScalarPropertiesType>[];
    pagination?: IJupQueryNodePagination;
    order?: string;
    allTenants?: boolean;
    required?: boolean;
    totalCount?: boolean;
}

export type JupQueryNode = GJupQueryNode<string>;

export type JupQueryTreeNode = JupQueryNode | string;

export type JupQueryTree = JupQueryTreeNode[];



export interface IPaginationList<T> {
    totalCount?: number;
    entities?: T[];
}


export interface IEntity {
    id: number;
}

export type MetaModelObjectTypeDefinitionType = "many-to-many" | "table";
export type MetaModelObjectTypeTenantScopeType = "public" | "private";
export interface IObjectTypeDefinition {
    name: Surfy.CamelizedObjectTypes;
    type: MetaModelObjectTypeDefinitionType;
    scope: MetaModelObjectTypeTenantScopeType;
    propertiesByName: Record<string, IPropertyTypeDefinition>;
    plural: string;
    camelized: IObjectTypeCamelizedNames;
    capitalized: IObjectTypeCapitalizedNames;
}
export interface IObjectTypeCamelizedNames { singular: Surfy.CamelizedObjectTypes; plural: string; id: string }
export interface IObjectTypeCapitalizedNames { singular: Surfy.ObjectTypes; plural: string; id: string }


