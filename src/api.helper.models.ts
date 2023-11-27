import { AxiosInstance, AxiosRequestConfig } from "axios";

interface IHeaders {
    authroization: string;
    "x-tenant": string;
}

export interface IApiHelper {
    instance: AxiosInstance;
    host: string;
    config: AxiosRequestConfig<IHeaders>;
}