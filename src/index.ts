import * as dotenv from "dotenv";
import axios, { AxiosResponse } from 'axios';
import { IApiAuthorizeBody, IApiAuthorizeResult, IListEntitiesBody } from "./models";
import https from 'https';
import { QueryNodes } from "./schema/queryNodes.generated";
import { createFilter } from "./helper";

dotenv.config();

async function getBuildings() {
    try {
        // const host = 'app-alpha.surfy.pro';
        const host = 'localhost';
        // const host = 'app.surfy.pro';
        const clientId = process.env.API_CLIENT_ID; //client id is the tenant
        const clientSecret = process.env.API_CLIENT_SECRET; // generated from the api section on https://app.surfy.pro/

        if (!clientId || !clientSecret) {
            throw new Error('clientId or clientSecret not set');
        }
        const instance = axios.create({
            httpsAgent: new https.Agent({
                // escape self signed certificate issue for dev on localhost only
                rejectUnauthorized: false
            })
        });
        const a = await instance.post<IApiAuthorizeBody, AxiosResponse<IApiAuthorizeResult>>(`https://${host}/api/v1/authentication/token`, { clientId, clientSecret });
        if (!a.data.token) {
            console.error(a.status, a.statusText)
            throw new Error('token is missing in reponse');
        }
        const authorization = a.data.token;
        console.log('TOKEN', authorization);
        const headers = {
            authorization: `Bearer ${authorization}`,
            'x-tenant': clientId
        };
        const config = { headers };
        const qnBuilding: QueryNodes.Building = {
            name: 'building', _: ['id', 'name', { name: 'floors', _: ['id', 'name'] }],
            filters: [
                {
                    type: 'and', conditions: [
                        // createFilter('in', 'id', [769, 1234]),
                        createFilter('eq', 'buildingId', null)
                    ]
                }]
        };

        const qnIten: QueryNodes.Item = {
            name: 'item', _: ['id', 'reference', 'code', { name: 'workplace', _: ['id', 'name'] }],
            filters: [
                {
                    type: 'and', conditions: [
                        // createFilter('in', 'id', [769, 1234]),
                        createFilter('eq', 'buildingId', null)
                    ]
                }]
        };

        const b = await instance.post<IListEntitiesBody, AxiosResponse<unknown>>(`https://${host}/api/v1/data/entities`, {
            queryNode: qnBuilding
        }, config);
        console.log('buildings', b.data);
    } catch (err) {
        // console.error(err, err.response?.status, err.response?.data);
    }
}

getBuildings();