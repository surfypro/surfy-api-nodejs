import * as dotenv from "dotenv";
import axios, { AxiosResponse } from 'axios';
import { IApiAuthorizeBody, IApiAuthorizeResult, IBulkCreateEntitiesBody, IBulkCreateEntitiesResult, IBulkUpdateEntitiesBody, IBulkUpdateEntitiesMixteBody, IBulkUpdateEntitiesMixteResult } from "./models";
import https from 'https';
import { IEntity, IPaginationList, JupQueryNode } from "./jup.models";
import { fetchAllFloorByLevel, fetchBuildingStructure, fetchRoomTypes, fetchWorkplaceTypes, getOrganization, getPeopleRoomAffectation, getPeopleWithAffectations, getPeopleWorkplaceAffectation, getPeopleWorkplaces } from "./examples/examples";
import { IApiHelper } from "./api.helper.models";
import { updateEntity } from "./examples/update";
import { Surfy } from "./schema/surfy.models.generated";
import colors from "colors";
import { saveFloorImage } from "./images/exportFloorImage";
import { QueryNodes } from "./schema/queryNodes.generated";
import { createFilter } from "./helper";
import { territoriesExamples } from "./examples/territories/territories.example";
colors.setTheme({
    info: "green"
});

dotenv.config();

async function play() {
    try {
        // const host = 'app-alpha.surfy.pro';
        // const host = 'localhost';
        const host = 'app.surfy.pro';
        const clientId = process.env.API_CLIENT_ID; //client id is the tenant
        const clientSecret = process.env.API_CLIENT_SECRET; // generated from the api section on https://app.surfy.pro/
        console.log('clientId', clientId);
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
        // console.log('RES',a);
        if (!a.data.token) {
            console.error(a.status, a.statusText)
            throw new Error('token is missing in reponse');
        }

        const authorization = a.data.token;
        // const authorization = undefined;
        console.log('TOKEN', authorization);
        const headers = {
            authorization: `Bearer ${authorization}`,
            'x-tenant': clientId
        };

        const config = { headers };

        const apiHelper: IApiHelper = {
            instance,
            host,
            config
        }

        async function fetchEntities<T extends IEntity>(queryNode: JupQueryNode) {
            const body = { queryNode };
            console.log('BODY ENTITIES'.green, JSON.stringify(body))
            try {
                const r = await instance.post<IPaginationList<T>>(`https://${host}/api/v1/data/entities`, body, config);;
                console.log(r.data.entities?.length)
                // console.log(r.data.entities)
                return r.data.entities;
            } catch (err) {
                console.error('ERROR'.red, err.response.status, err.response?.data?.message || err);
            }
        }

        async function createBulk<T extends IEntity>(b: IBulkCreateEntitiesBody<T>) {
            console.log(JSON.stringify(b))
            const r = await instance.post<IBulkCreateEntitiesResult<T>>(`https://${host}/api/v1/data/bulk/create`, b, config);
            console.log(r.data)
            return r.data;
        }

        async function updateBulk<T extends IEntity>(b: IBulkUpdateEntitiesBody<T>) {
            console.log(JSON.stringify(b))
            const r = await instance.post<IBulkCreateEntitiesResult<T>>(`https://${host}/api/v1/data/bulk/update`, b, config);
            console.log(r.data)
            return r.data;
        }

        async function updateBulkMixte<T extends IEntity>(b: IBulkUpdateEntitiesMixteBody<T>) {
            console.log(JSON.stringify(b))
            const r = await instance.post<IBulkUpdateEntitiesMixteResult>(`https://${host}/api/v1/data/bulk/mixte/update`, b, config);
            console.log(r.data)
            return r.data;
        }


        territoriesExamples(fetchEntities);
        // const quality = 100;
        // await saveFloorImage(instance, config, host, 8407, `./../${8407}-${quality}.png`, quality);

        // createPeople(createBulk);
        // const people = await getPeopleWorkplaces(fetchEntities);
        // console.log(people?.filter(p => (p.workplaceAffectations?.totalCount || 0) > 1))

        // fetchWorkplaceTypes(fetchEntities);
        // fetchBuildingsWithRoomsAndWorkpaces(fetchEntities, [123]);
        // fetchAllFloorByLevel(fetchEntities, 0);
        // fetchRoomTypes(fetchEntities);
        // fetchRoomWithCostCenterId(fetchEntities)
        // fetchItems(fetchEntities)
        // fetchMainBuildingWithFloors(fetchEntities)
        // fetchFloors2(fetchEntities)
        // fetchMapScaleRatios(fetchEntities)
        // fetchItemTypes(fetchEntities)
        // fetchPeople(fetchEntities)
        // fetchCostCenter(fetchEntities);
        // fetchBuildingStructure(fetchEntities);

      
        // console.log(floors);

        // if (buildings){
        //     const building = buildings[0];
        // }

        // getPeopleRoomAffectation(fetchEntities);
        // getPeopleWithAffectations(fetchEntities);
        // fetchFloorsStructure(fetchEntities);
        // fetchRoomsStructure(fetchEntities);

        // getPeopleRoomAffectation(fetchEntities);
        // getPeopleWorkplaceAffectation(fetchEntities);

        // const organizations = await getOrganization(fetchEntities);
        // if (organizations && organizations[0]) {
        //     const o = organizations[0];
        //     console.log(o);

        // const oId = 9120;
        // const oId2 = 400;
        // const r = await updateEntity<Surfy.Organization>(apiHelper)({
        //     objectTypeName: 'organization',
        //     id: oId,
        //     variables: { id: oId, name: 'o1', companyId: 12 }
        // })
        // console.log(r);
        // await updateBulk({ objectTypeName: 'organization', entities: [{ id: 400, name: 'o2', companyId: 9 }] });


        // await updateBulkMixte<Surfy.Organization>({
        //     updates: [
        //         {
        //             objectTypeName: 'organization',
        //             id: 9120,
        //             variables: { id: 9120, name: 'o3', companyId: 112 }
        //         },
        //         {
        //             objectTypeName: 'organization',
        //             id: 400,
        //             variables: { id: 400, name: 'o400', companyId: 112 }
        //         }
        //     ]
        // })
        // await updateBulk({ objectTypeName: 'organization', entities: [{ id: oId, name: 'o2', companyId: 112 }] });
        // console.log(r2)
        // fetchOrganizations(fetchEntities)
        // fetchWorkplaceTypes2(fetchEntities)

        // const buildings = await fetchMainBuildings(fetchEntities);
        // const buildingIds = buildings?.map(b => b.id) || [];
        // fetchWorkplaceAffectationsForBuildingIds(fetchEntities, buildingIds)
        // fetchFloorsAndMapRatioForBuildingIds(fetchEntities, buildingIds)
        // fetchItemsForBuildingIds(fetchEntities, buildingIds)
        // fetchWorkplacesForBuildingIds(fetchEntities, buildingIds)

    } catch (err) {
        console.error('ERR'.red,err.response?.status, err.response?.data || err.response || err);
    }
}

play();


