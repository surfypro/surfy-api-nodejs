import { JupWhereOperator, PropertyTypeJupValues, IJupWhereNode } from "./jup.models";

export function createFilter(operator: JupWhereOperator, column: string, value: PropertyTypeJupValues): IJupWhereNode {
    return { operator, column, value };
}
