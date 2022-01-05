import { JupQueryNode } from "./jup.models";

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
