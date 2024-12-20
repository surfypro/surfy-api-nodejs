import { createFilter } from "../../helper";
import { FetchEntitiesFunction } from "../../models";
import { QueryNodes } from "../../schema/queryNodes.generated";
import { Surfy } from "../../schema/surfy.models.generated";
import { uniqBy } from 'lodash';


// dimensionType = Type of Territory

export async function territoriesExamples(fetchEntities: FetchEntitiesFunction) {
    const buildingIds = [2203];
    // await getRoomsWithTypes(fetchEntities);
    // await getItems(fetchEntities);
    const dimensions = await getTerritoriesWithFloors(fetchEntities, buildingIds);
    // await fetchListOfPeopleWithTerritories(fetchEntities, dimensions?.map(d => d.id) ?? [], buildingIds);
}

export async function getItems(fetchEntities: FetchEntitiesFunction) {
    const qn: QueryNodes.Item = {
        name: 'item',
        required: true,
        _: ['id', 'itemTypeId', 'roomId', { name: 'room', _: ['id', 'floorId'] }, { name: 'itemType', filters: [createFilter('eq', 'code', 'meuble_courrier')], _: ['id', 'name', 'code'], required: true }]
    }
    const items = await fetchEntities<Surfy.Item>(qn);
    return items;
}

export async function getRoomsWithTypes(fetchEntities: FetchEntitiesFunction) {
    const qn: QueryNodes.Room = {
        name: 'room',
        _: ['id', 'name', 'roomTypeId', { name: 'roomType', _: ['id', 'name'] }]
    }
    const rooms = await fetchEntities<Surfy.Room>(qn);
    return rooms;
}


const territoryBasedBuildingExternalIds = ['FR_LOCA...'];
const workplaceBasedBuildingExternalIds = ['FR_LOCA...'];
const allBuildingExternalIds = [...territoryBasedBuildingExternalIds, ...workplaceBasedBuildingExternalIds];

// const territoryBasedBuildingIds = fetchUsingExternalID()



async function fetchDimensionTypesForBuilingIds(fetchEntities: FetchEntitiesFunction, buildingIds: number[]) {
    const dimensionTypeQn: QueryNodes.DimensionType = {
        name: 'dimensionType',
        required: true,
        _: ['id', 'name', {
            name: 'dimensionTypeToBuildings',
            required: true,
            filters: [createFilter('in', 'buildingId', buildingIds)],
            _: ['id', 'buildingId']
        }]
    }
    const dimensionTypes = await fetchEntities<Surfy.DimensionType>(dimensionTypeQn);
    return dimensionTypes;
}
// dimensions (Territory) sould have a type de dimension which is associated to the building
// le bâtiment ne doit pas être un scenario
async function getTerritoriesWithFloors(fetchEntities: FetchEntitiesFunction, buildingIds: number[]) {

    const dimensionTypes = await fetchDimensionTypesForBuilingIds(fetchEntities, buildingIds);

    const qn: QueryNodes.Dimension = {
        name: 'dimension',
        required: true,
        filters: [createFilter('in', 'dimensionTypeId', dimensionTypes?.map(t => t.id) ?? [])],
        _: ['id', 'name',
            {
                name: 'dimensionRooms', required: true, _: ['id', { name: 'room', required: true, _: ['id', { name: 'floor', required: true, filters: [createFilter('in', 'buildingId', buildingIds)], _: ['id', 'name', 'buildingId'] }] }]
            }
        ],
    }
    const territories = await fetchEntities<Surfy.Dimension>(qn);
    if (territories) {
        const dimensionFloorStore = getDimensionFloorStore(territories);
        console.log('dimensionFloorStore', dimensionFloorStore);
    }
    return territories;
}

// recuperer les personnes avec leurs territoires
async function fetchListOfPeopleWithTerritories(fetchEntities: FetchEntitiesFunction, dimensionIds: number[], buildingIds: number[]) {
    const qn: QueryNodes.Person = {
        name: 'person',
        _: ['id', 'firstname', 'lastname',
            // {name:'roomAffectations', _}
            { name: 'dimensionToPeople', _: ['id', 'dimensionId'], filters: [createFilter('in', 'dimensionId', dimensionIds)] },
            { name: 'workplaceAffectations', _: ['id', 'workplaceId', { name: 'workplace', _: ['id', { name: 'room', required: true, _: ['id', { name: 'floor', filters: [createFilter('in', 'buildingId', buildingIds)], _: ['id', 'buildingId'] }] }] }] }]
    }
    const people = await fetchEntities<Surfy.Person>(qn);
    people?.forEach(p => {
        if ((p.dimensionToPeople?.totalCount ?? 0) > 1) {
            throw new Error(`Person ${p.id} has multiple territories ${p.dimensionToPeople?.entities?.map(d => d.id).join(',')}`);
        }
    })
}

// regarder les espaces associés à chaque territoire et récupérer les étages et véérifier qu'il n'y a qu'un seul étage par territoire
function getDimensionFloorStore(territories: Surfy.Dimension[]) {
    const dimensionFloorListStore = territories.reduce((acc, dimension) => {
        dimension.dimensionRooms?.entities?.forEach(r => {
            const floor = r.room?.floor;
            acc[dimension.id] = uniqBy(([...(acc[dimension.id] || []), floor]), floor => floor.id);
        })
        return acc;
    }, {} as Record<number, Surfy.Floor[]>);
    console.log(dimensionFloorListStore);
    Object.entries(dimensionFloorListStore).filter(([dimensionId, floors]) => {
        if (floors.length > 1) {
            throw new Error(`Dimension ${dimensionId} has multiple floors ${floors.map(f => f.id).join(',')}`);
        }
    });
    return Object.entries(dimensionFloorListStore).reduce((acc, [dimension, floors]) => {
        acc[dimension] = floors[0];
        return acc;
    }, {} as Record<number, Surfy.Floor>);
}



