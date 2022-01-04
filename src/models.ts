import { JupQueryNode } from "./jup.models";

export interface IApiAuthorizeBody {
    clientId: string;
    clientSecret: string;
}

export interface IApiAuthorizeResult {
    token: string;
}

export interface IJwtSecurity {
    authorization: string;
    connection: 'api';
}
export interface ITenantQuery {
    tenant: string | null;
    security: IJwtSecurity;
}

export interface IListEntitiesBody extends ITenantQuery {
    queryNode: JupQueryNode;
}
