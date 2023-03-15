import { IEntity, JupQueryNode } from "./jup.models";
import { Surfy } from "./schema/surfy.models.generated";

export interface IApiAuthorizeBody {
    clientId: string;
    clientSecret: string;
}

export interface IApiAuthorizeResult {
    token: string;
}

export interface IListEntitiesBody {
    queryNode: JupQueryNode;
}


export interface IBulkUpdateEntitiesMixteResult {
    result: boolean;
}
export interface IBulkUpdateEntitiesMixteBody {
    updates: IUpdateEntity<IEntity>[];
}

export interface IBulkUpdateEntitiesBody<T extends IEntity> {
    objectTypeName: Surfy.CamelizedObjectTypes;
    entities: PartialGenericEntityWithId<T>[];
}

export interface IBulkDeleteEntitiesBody<T> {
    objectTypeName: Surfy.CamelizedObjectTypes;
    entities: Partial<T>[];
}

export interface IBulkCreateEntitiesBody<T> {
    objectTypeName: Surfy.CamelizedObjectTypes;
    entities: Partial<T>[];
}

export interface IBulkCreateEntitiesResult<T extends IEntity> {
    result: boolean;
    entities: T[];
}

export interface IBulkUpdateEntitiesResult {
    result: boolean;
}

export interface IBulkDeleteEntitiesResult {
    result: boolean;
}

export type PartialGenericEntityWithId<T extends IEntity> = Partial<T> & { id: number };

export interface IUpdateEntity<T extends IEntity> {
    id: number;
    objectTypeName: Surfy.CamelizedObjectTypes;
    variables: PartialGenericEntityWithId<T>;
}

export type FetchEntitiesFunction = <T extends IEntity>(queryNode: JupQueryNode) => Promise<T[] | undefined>;

export type BulkCreateFunction = <T extends IEntity>(body: IBulkCreateEntitiesBody<T>) => Promise<IBulkCreateEntitiesResult<T>>;