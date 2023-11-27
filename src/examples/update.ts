import { AxiosInstance } from "axios";
import { IEntity } from "../jup.models";
import { IUpdateEntity } from "../models";
import { IApiHelper } from "../api.helper.models";


export const updateEntity = <T extends IEntity>(api: IApiHelper) => {
    const { instance, host, config } = api;
    return async (body: IUpdateEntity<T>) => {
        console.log('BODY UPDATE'.green, JSON.stringify(body))
        const r = await instance.post<T>(`https://${host}/api/v1/data/update`, body, config);
        console.log('RESULT UPDATE'.blue, r.data)
        return r.data;
    }
}