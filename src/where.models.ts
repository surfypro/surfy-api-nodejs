import { PropertyTypeJupValues } from "./propertyTypes.values.models";

export type JupWhereOperator = "like" | "eq" | "in" | "notIn" | "notEq" | 'is';
export interface IJupWhereRecordValue {
    operator: JupWhereOperator;
    value: string;
}

export interface IJupWhereGroupNode<ScalarPropertiesType extends string> {
    type: 'or' | 'and';
    conditions: IJupWhereNode<ScalarPropertiesType>[];
}
export interface IJupWhereNode<ScalarPropertiesType extends string> {
    operator: JupWhereOperator;
    column: ScalarPropertiesType;
    value: PropertyTypeJupValues;
}

export type JupQueryNodeFilter<ScalarPropertiesType extends string> = IJupWhereNode<ScalarPropertiesType> | IJupWhereGroupNode<ScalarPropertiesType>;