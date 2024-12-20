import { createFilter } from "../../helper";
import { FetchEntitiesFunction } from "../../models";
import { QueryNodes } from "../../schema/queryNodes.generated";
import { Surfy } from "../../schema/surfy.models.generated";

export async function buildingExamples(fetchEntities: FetchEntitiesFunction){
    const qn:QueryNodes.Building = {
        name:'building',
        filters:[createFilter('in', 'externalId', ['XXX'])],
        _:['id', 'name', 'address']
    }
    const buildings = await fetchEntities<Surfy.Building>(qn);

     const buildingIds = buildings?.map(b => b.id) || [];


    const qnFloors:QueryNodes.Floor = {
        name:'floor',
        filters:[createFilter('in', 'buildingId', buildingIds)],
        _:['id', 'name', 'level', 'buildingId']
    }

    const floors = await fetchEntities<Surfy.Floor>(qnFloors);
    const floorIds = floors?.map(f => f.id) || [];


    const qnWorkplace : QueryNodes.Workplace = {
        name:'workplace',
        required:true,
        _:['name', 'roomId', {
            name:'room',required:true,  _:['name','floorId'], 'filters':[createFilter('in', 'floorId', floorIds)]
        }]
    }
    const workplaces = await fetchEntities<Surfy.Workplace>(qnWorkplace);
}