import * as dotenv from "dotenv";
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { IApiAuthorizeBody, IApiAuthorizeResult, IListEntitiesBody } from "./models";
import https from 'https';
import { QueryNodes } from "./schema/queryNodes.generated";
import { createFilter } from "./helper";
import { saveFloorImage } from "./images/exportFloorImage";
import { IEntity, IPaginationList, JupQueryNode } from "./jup.models";
import { Surfy } from "./schema/surfy.models.generated";
import { fetchAllFloorByLevel, fetchBuildingsWithRoomsAndWorkpaces, fetchFloors2, fetchFloorsAndMapRatioForBuildingIds, fetchItems, fetchItemsForBuildingIds, fetchItemTypes, fetchMainBuildings, fetchMainBuildingWithFloors, fetchMapScaleRatios, fetchOrganizations, fetchPeople, fetchRoomTypes, fetchRoomWithCostCenterId, fetchWorkplaceAffectationsForBuildingIds, fetchWorkplacesForBuildingIds, fetchWorkplaceTypes, fetchWorkplaceTypes2 } from "./examples";

dotenv.config();




async function getBuildings() {
    try {
        // const host = 'app-alpha.surfy.pro';
        // const host = 'localhost';
        const host = 'app.surfy.pro';
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

        async function fetchEntities<T extends IEntity>(queryNode: JupQueryNode) {
            const body = { queryNode };
            console.log(JSON.stringify(body))
            const r = await instance.post<IPaginationList<T>>(`https://${host}/api/v1/data/entities`, body, config);;
            console.log(r.data.entities)
            return r.data.entities;
        }


        fetchWorkplaceTypes(fetchEntities);
        fetchBuildingsWithRoomsAndWorkpaces(fetchEntities, [123]);
        fetchAllFloorByLevel(fetchEntities, 0);

        fetchRoomTypes(fetchEntities)
        fetchRoomWithCostCenterId(fetchEntities)
        fetchItems(fetchEntities)
        fetchMainBuildingWithFloors(fetchEntities)
        fetchFloors2(fetchEntities)
        fetchMapScaleRatios(fetchEntities)
        fetchItemTypes(fetchEntities)
        fetchPeople(fetchEntities)
        fetchOrganizations(fetchEntities)
        fetchWorkplaceTypes2(fetchEntities)

        const buildings = await fetchMainBuildings(fetchEntities);
        const buildingIds = buildings?.map(b => b.id) || [];
        fetchWorkplaceAffectationsForBuildingIds(fetchEntities, buildingIds)
        fetchFloorsAndMapRatioForBuildingIds(fetchEntities, buildingIds)
        fetchItemsForBuildingIds(fetchEntities, buildingIds)
        fetchWorkplacesForBuildingIds(fetchEntities, buildingIds)


    } catch (err) {
        console.error(err.response?.status, err.response?.data || err.response || err);
    }
}

getBuildings();


