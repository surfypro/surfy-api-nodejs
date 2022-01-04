
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
