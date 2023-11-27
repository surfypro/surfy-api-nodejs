import * as dotenv from "dotenv";
import axios, { AxiosResponse } from 'axios';
import { IApiAuthorizeBody, IApiAuthorizeResult, IBulkCreateEntitiesBody, IBulkCreateEntitiesResult } from "./models";
import https from 'https';
import { IEntity, IPaginationList, JupQueryNode } from "./jup.models";
import { getOrganization } from "./examples/examples";
import { IApiHelper } from "./api.helper.models";
import { updateEntity } from "./examples/update";
import { Surfy } from "./schema/surfy.models.generated";
import colors from "colors";
colors.setTheme({
    info: "green"
});


dotenv.config();

async function play() {
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
                console.log(r.data.entities)
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

        // createPeople(createBulk);
        // const people = await getPeopleWorkplaces(fetchEntities);

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
        // fetchFloorsStructure(fetchEntities);
        // fetchRoomsStructure(fetchEntities);

        // getPeopleRoomAffectation(fetchEntities);
        // getPeopleWorkplaceAffectation(fetchEntities);

        const organizations = await getOrganization(fetchEntities);
        if (organizations && organizations[0]) {
            const o = organizations[0];
            console.log(o);

            await updateEntity<Surfy.Organization>(apiHelper)({
                objectTypeName: 'organization',
                id: o.id,
                variables: { ...o, name: 'test name updated' }
            })
        }
        // fetchOrganizations(fetchEntities)
        // fetchWorkplaceTypes2(fetchEntities)

        // const buildings = await fetchMainBuildings(fetchEntities);
        // const buildingIds = buildings?.map(b => b.id) || [];
        // fetchWorkplaceAffectationsForBuildingIds(fetchEntities, buildingIds)
        // fetchFloorsAndMapRatioForBuildingIds(fetchEntities, buildingIds)
        // fetchItemsForBuildingIds(fetchEntities, buildingIds)
        // fetchWorkplacesForBuildingIds(fetchEntities, buildingIds)


    } catch (err) {
        console.error(err.response?.status, err.response?.data || err.response || err);
    }
}

play();


