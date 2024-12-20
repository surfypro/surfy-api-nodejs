import { createFilter } from "../../helper";
import { FetchEntitiesFunction } from "../../models";
import { QueryNodes } from "../../schema/queryNodes.generated";
import { Surfy } from "../../schema/surfy.models.generated";
import { uniqBy } from 'lodash';

export async function territoriesExamples(fetchEntities: FetchEntitiesFunction) {
    const buildingIds = [4219];
    await getRoomsWithTypes(fetchEntities);
    await getItems(fetchEntities);
    const dimensions = await getTerritories(fetchEntities, buildingIds);
    await fetchListOfPeopleWithTerritories(fetchEntities, dimensions?.map(d => d.id) ?? [], buildingIds);
}

export async function getItems(fetchEntities: FetchEntitiesFunction) {
    const qn: QueryNodes.Item = {
        name: 'item',
        required:true,
        _: ['id', 'itemTypeId', 'roomId', {name:'room', _:['id', 'floorId']}, { name: 'itemType',filters: [createFilter('eq', 'code', 'meuble_courrier')], _: ['id', 'name', 'code'], required:true  }]
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

// les calques d'affectations (quartiers) doivent avoin un type de dimension qui est associé à un batiment
// le bâtiment ne doit pas être un scenario
async function getTerritories(fetchEntities: FetchEntitiesFunction, buildingIds:number[]) {
    const typeDeQuartiersQn: QueryNodes.DimensionType = {
        name: 'dimensionType',
        required: true,
        _: ['id', 'name', {
            name: 'dimensionTypeToBuildings',
            required: true,
            _: ['id', 'buildingId', 'dimensionTypeId', {
                name: 'building',
                filters: [createFilter('is', 'buildingId', null)],
                required: true,
                _: ['id', 'name']
            }]
        }]
    }
    const typeDeQuartiers = await fetchEntities<Surfy.Dimension>(typeDeQuartiersQn);

    const qn: QueryNodes.Dimension = {
        name: 'dimension',
        required: true,
        filters: [createFilter('in', 'dimensionTypeId', typeDeQuartiers?.map(t => t.id) ?? [])],
        _: ['id', 'name', {
            name: 'dimensionRooms',required:true, _: ['id', { name: 'room', required:true,_: ['id', { name: 'floor', required:true, filters:[createFilter('in', 'buildingId', buildingIds)] , _: ['id', 'name', 'buildingId'] }] }]
        }],
    }
    const territories = await fetchEntities<Surfy.Dimension>(qn);
    if (territories) {
        const dimensionFloorStore = getDimensionFloorStore(territories);
        console.log('dimensionFloorStore', dimensionFloorStore);
    }
    return territories;
}

// recuperer les personnes avec leurs territoires
async function fetchListOfPeopleWithTerritories(fetchEntities: FetchEntitiesFunction, dimensionIds: number[], buildingIds:number[]) {
    const qn: QueryNodes.Person = {
        name: 'person',
        _: ['id', 'firstname', 'lastname',
            // {name:'roomAffectations', _}
            { name: 'dimensionToPeople', _: ['id', 'dimensionId'], filters: [createFilter('in', 'dimensionId', dimensionIds)] },
            { name: 'workplaceAffectations', _: ['id', 'workplaceId', { name: 'workplace', _: ['id', { name: 'room', required:true, _: ['id', { name: 'floor',filters:[createFilter('in', 'buildingId', buildingIds)],  _: ['id', 'buildingId'] }] }] }] }]
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



