import { PropertyTypeJupValues } from "./propertyTypes.values.models";
import { JupWhereOperator, IJupWhereNode } from "./where.models";

export function createFilter<ScalarPropertyType extends string>(operator: JupWhereOperator, column: ScalarPropertyType, value: PropertyTypeJupValues): IJupWhereNode<ScalarPropertyType> {
    return { operator, column, value };
}
