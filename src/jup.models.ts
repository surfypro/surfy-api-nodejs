import { Surfy } from "./schema/surfy.models.generated";

export interface IJupQueryNodePagination {
    limit: number;
    offset?: number;
}

export interface JupQueryNode {
    name: string;
    _: JupQueryTree;
    filters?: JupQueryNodeFilter[];
    pagination?: IJupQueryNodePagination;
    order?: string;
    allTenants?: boolean;
    required?: boolean;
    totalCount?: boolean;
}

export type JupQueryTreeNode = JupQueryNode | string;

export type JupQueryTree = JupQueryTreeNode[];


export type JupWhereOperator = "like" | "eq" | "in" | "notIn" | "notEq";
export interface IJupWhereRecordValue {
    operator: JupWhereOperator;
    value: string;
}

export interface IJupWhereGroupNode {
    type: 'or' | 'and';
    conditions: IJupWhereNode[];
}
export interface IJupWhereNode {
    operator: JupWhereOperator;
    column: string;
    value: PropertyTypeJupValues;
}

export interface IPaginationList<T> {
    totalCount?: number;
    entities?: T[];
}

export interface ITextAnchor {
    textPosition: IPoint3d;
    anchorPosition: IPoint3d;
    displayLine: boolean;
}

export type PropertyTypeJupValues = string | number | number[] | boolean |
    IPoint3d | IPoint2d | null | IEntity | IEntity[] | IJupImage | IJupIcon | IJupAddress;

export type JupQueryNodeFilter = IJupWhereNode | IJupWhereGroupNode;

export interface IEntity {
    id: number;
}

export interface IJupImage {
    url: string;
    phash: string | null;
    size: ISize;
}

export interface IJupAddress {
    address: string;
    lat: number;
    lng: number;
}

export interface ISize {
    width: number;
    height: number;
}

export interface IJupIcon {
    style: string;
    unicode: string;
    name: string;
    set: "fontawesome" | "material-ui" | 'surfy';
}

export interface IPoint2d {
    x: number;
    y: number;
}

export interface IPoint3d extends IPoint2d {
    z: number;
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

export interface IPropertyTypeDefinitionOptions {
    mandatory: boolean;
    readOnly: boolean;
    defaultValue?: PropertyTypeJupValues | null;
    calculated: boolean;
    technical: boolean;
    unit?: PropertyTypeJupUnits;
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
}

export type PropertyTypeJupType = "string" | "float" | "square-image" | "timestamp"
    | "image" | "address" | "integer" | "primary-key" | "icon" | "color" | "date" | "foreign-key"
    | "belongs-to" | "has-many" | "has-many-paginated" | "boolean" | "surface" | "distance"
    | "point2d" | "text" | "currency" | "percentage" | "point3d" | 'surface-by-people' | 'surface-by-workplace'
    | 'boolean' | "textAnchor" | 'integer-count' | 'percentage0-1' | 'url' | 'password' | 'year';



export type PropertyTypeJupDistanceUnits = 'centimeter' | 'meter';

export type PropertyTypeJupUnits = PropertyTypeJupDistanceUnits;

export type PropertyTypeJupWithOptionsType = { default: PropertyTypeJupValues; type: PropertyTypeJupType, unit?: PropertyTypeJupUnits };
export type MetaModelProperty = PropertyTypeJupType | PropertyTypeJupWithOptionsType;
