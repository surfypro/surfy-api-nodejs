import { createFilter } from "../helper";
import { FetchEntitiesFunction } from "../models";
import { QueryNodes } from "../schema/queryNodes.generated";
import { Surfy } from "../schema/surfy.models.generated";

export function fetchMainBuildings(fetchEntities: FetchEntitiesFunction) {
    const qnBuilding: QueryNodes.Building = {
        name: 'building', _: ['id', 'name', 'address',
            //  { name: 'floors', _: ['id', 'name'] }
        ],
        filters: [
            {
                type: 'and', conditions: [
                    // createFilter('in', 'id', [769, 1234]),
                    createFilter('eq', 'buildingId', null)
                ]
            }]
    };
    return fetchEntities<Surfy.Building>(qnBuilding);
}

export function fetchWorkplaceTypes(fetchEntities: FetchEntitiesFunction) {
    const workplaceTypesQn1: QueryNodes.WorkplaceType = {
        name: 'workplaceType',
        // filters: [createFilter('in', 'id', [])],
        _: [
            'id', 'name', 'center', 'size', 'zIndex',
            {
                'name': 'workplaceTypeItemTypes', _: ['id', 'zIndex', 'position', 'rotation', {
                    name: 'itemType', _:
                        ['id', { name: 'itemTypePoints', _: ['id', 'sortIndex', 'x', 'y'] }]
                }]
            }
        ]
    }
    fetchEntities(workplaceTypesQn1);
}


export function fetchFloorsStructure(fetchEntities: FetchEntitiesFunction) {
    const qnF: QueryNodes.Floor = {
        name: 'floor',
        filters: [createFilter('in', 'buildingId', [2718])],
        _: ['id', 'name', 'level']
    };
    return fetchEntities<Surfy.Floor>(qnF);
}

export function fetchRoomsStructure(fetchEntities: FetchEntitiesFunction) {
    const qnF: QueryNodes.Room = {
        name: 'room',
        filters: [createFilter('in', 'floorId', [])],
        _: ['id', 'name', 'roomTypeId']
    };
    return fetchEntities<Surfy.Room>(qnF);
}



export function fetchBuildingStructure(fetchEntities: FetchEntitiesFunction) {
    const qnB: QueryNodes.Building = {
        name: 'building',
        filters: [createFilter('eq', 'buildingId', null)],
        _: ['id', 'name', 'externalId',
            {
                name: 'floors',
                _: ['id', 'name', 'level',
                    {
                        name: 'rooms', _: [
                            'id', 'name', 'roomTypeId',
                            { name: 'roomType', _: ['id', 'name'] }
                            // {
                            //     name: 'roomPointRooms', _: ['id', 'sortIndex', { name: 'roomPoint', _: ['id', 'x', 'y'] }]
                            // },
                            // { name: 'workplaces', _: ['id', 'position', 'rotation', 'workplaceTypeId'] }]
                        ]
                    }]
            }
        ]
    };
    return fetchEntities<Surfy.Building>(qnB);
}

export function fetchBuildingsWithRoomsAndWorkpaces(fetchEntities: FetchEntitiesFunction, buildingIds: number[]) {
    const qnB: QueryNodes.Building = {
        name: 'building',
        _: ['id', 'name',
            {
                name: 'floors',
                filters: [createFilter('in', 'id', buildingIds)],
                _: ['id', 'name', 'level', 'backgroundLayout',
                    { name: 'mapScale', _: ['id', 'ratio'] },
                    {
                        name: 'rooms', _: [
                            'id', 'name', 'roomTypeId',
                            // { name: 'roomType', _: ['id', 'name'] },
                            {
                                name: 'roomPointRooms', _: ['id', 'sortIndex', { name: 'roomPoint', _: ['id', 'x', 'y'] }]
                            },
                            { name: 'workplaces', _: ['id', 'position', 'rotation', 'workplaceTypeId'] }]
                    }]
            }]
    }
}

export function fetchAllFloorByLevel(fetchEntities: FetchEntitiesFunction, level: number) {
    const qnFloor: QueryNodes.Floor = {
        name: 'floor', _: ['id', 'name', 'level'], filters: [createFilter('eq', 'level', level)]
    }
    return fetchEntities<Surfy.Floor>(qnFloor);
}


export function fetchRoomTypes(fetchEntities: FetchEntitiesFunction) {
    const qRoomTypes: QueryNodes.RoomType = {
        name: 'roomType', _: ['id', 'name']
    }
    return fetchEntities<Surfy.RoomType>(qRoomTypes);
}


export function fetchRoomWithCostCenterId(fetchEntities: FetchEntitiesFunction) {
    const qnRooms: QueryNodes.Room = {
        name: 'room', _: ['name', 'costCenterId']
    };
    return fetchEntities<Surfy.Room>(qnRooms);
}

export function fetchItems(fetchEntities: FetchEntitiesFunction) {
    const qnItem: QueryNodes.Item = {
        name: 'item', _: ['id', 'reference', 'code', 'position', { name: 'workplace', _: ['id', 'name'] }],
    };
    return fetchEntities<Surfy.Item>(qnItem);
}


export function fetchMainBuildingWithFloors(fetchEntities: FetchEntitiesFunction) {
    const qnBuiling1: QueryNodes.Building = {
        // pagination:{limit: 100, offset: 0},
        name: 'building', _: ['id', 'name', 'buildingId', 'color',
            { name: 'floors', _: ['id', 'name'] }],
        filters: [createFilter('eq', 'buildingId', null)]
    }
    return fetchEntities<Surfy.Building>(qnBuiling1);
}


export function fetchFloors2(fetchEntities: FetchEntitiesFunction) {
    const qnFloors2: QueryNodes.Floor = {
        name: 'floor', _: ['id', 'name', 'buildingId', {
            name: 'building', _: [],
            filters: [createFilter('eq', 'buildingId', null)]
        }]
    }
    return fetchEntities<Surfy.Floor>(qnFloors2);
}



export function fetchMapScaleRatios(fetchEntities: FetchEntitiesFunction) {
    const mapScaleQn: QueryNodes.MapScale = {
        name: 'mapScale', _: ['id', 'name', 'ratio']
    }
    return fetchEntities<Surfy.MapScale>(mapScaleQn);
}


export function fetchItemTypes(fetchEntities: FetchEntitiesFunction) {
    const itemTypeQn: QueryNodes.ItemType = {
        name: 'itemType', _: ['id', 'name', 'description', 'icon', 'height', 'zIndex',
            {
                name: 'itemTypePoints', _: ['id', 'sortIndex', 'x', 'y'], 'order': 'sortIndex asc'
            }]
    }
    return fetchEntities<Surfy.ItemType>(itemTypeQn);
}


export function fetchWorkplaceAffectationsForBuildingIds(fetchEntities: FetchEntitiesFunction, buildingIds: number[]) {
    const workpalceAffectations: QueryNodes.WorkplaceAffectation = {
        name: 'workplaceAffectation',
        // required: true,
        _: ['id', 'workplaceId', {
            name: 'workplace',
            required: true,
            _: ['id', 'name',
                {
                    name: 'room',
                    required: true,
                    _: ['id', {
                        name: 'floor',
                        required: true,
                        filters: [createFilter('in', 'buildingId', buildingIds)],
                        _: []
                    }]
                }
            ]
        }, 'personId', { name: 'person', _: ['id', 'code', 'firstname', 'lastname'] }]
    }
    return fetchEntities<Surfy.WorkplaceAffectation>(workpalceAffectations);
}

export function fetchFloorsAndMapRatioForBuildingIds(fetchEntities: FetchEntitiesFunction, buildingIds: number[]) {
    const qnFloors1: QueryNodes.Floor = {
        filters: [createFilter('in', 'buildingId', buildingIds)],
        name: 'floor', _: ['id', 'name', 'buildingId', 'level', {
            name: 'mapScale', _: ['ratio', 'p1', "p2", 'length']
        }]
    }
    return fetchEntities<Surfy.Floor>(qnFloors1)
}

export function fetchItemsForBuildingIds(fetchEntities: FetchEntitiesFunction, buildingIds: number[]) {
    const itemsQn: QueryNodes.Item = {
        name: 'item',
        filters: [createFilter('eq', 'workplaceId', null)],
        required: true,
        _: ['id', 'code', 'position', "itemTypeId", 'roomId', {
            name: 'room',
            required: true,
            _: ['id', {
                required: true,
                name: 'floor', _: ['id'], filters: [createFilter('in', 'buildingId', buildingIds)]
            }]
        }]
    };
    return fetchEntities<Surfy.Item>(itemsQn)
}


export function getPeople(fetchEntities: FetchEntitiesFunction) {
    const qn: QueryNodes.Person = {
        name: 'person',
        _: ['id', 'firstname', 'lastname', 'organizationId', { name: 'workplaceAffectations', _: ['id', { name: 'workplace', _: ['id', 'name', 'roomId'] }] }, { name: 'organization', _: ['id', 'name'] }]
    }
    return fetchEntities<Surfy.Person>(qn);
}


export function getPeopleWorkplaceAffectation(fetchEntities: FetchEntitiesFunction) {
    const qn: QueryNodes.WorkplaceAffectation = {
        name: 'workplaceAffectation',
        _: ['id', { name: 'workplace', _: ['id', 'name'] }, {
            name: 'person', _: [
                'id', 'email', 'firstname', 'lastname', 'costCenterId'
            ]
        }]
    };
    fetchEntities<Surfy.WorkplaceAffectation>(qn);
}


export function getOrganization(fetchEntities: FetchEntitiesFunction) {
    const qn: QueryNodes.Organization = {
        name: 'organization',
        _: ['id', 'name', 'code', 'organizationId']
    };
    return fetchEntities<Surfy.Organization>(qn);
}

export function getPeopleRoomAffectation(fetchEntities: FetchEntitiesFunction) {
    const qn: QueryNodes.RoomAffectation = {
        name: 'roomAffectation',
        _: ['id', { name: 'room', _: ['id', 'name'] }, {
            name: 'person', _: [
                'id', 'email', 'firstname', 'lastname', 'costCenterId'
            ]
        }]
    };
    return fetchEntities<Surfy.RoomAffectation>(qn);
}

export function getPeopleWithAffectations(fetchEntities: FetchEntitiesFunction) {
    const qn: QueryNodes.Person = {
        name: 'person', _: [
            'id', 'email', 'firstname', 'lastname', 'costCenterId',
            { name: 'roomAffectations', _: ['roomId'] },
            { name: 'workplaceAffectations', _: ['workplaceId', { name: 'workplace', _: ['name', 'roomId'] }] }
        ]
    };
    return fetchEntities<Surfy.RoomAffectation>(qn);
}

export function getPeopleWorkplaces(fetchEntities: FetchEntitiesFunction) {
    const qn: QueryNodes.Person = {
        name: 'person',
        required: true,
        _: ['id', 'firstname', 'lastname', 'code', 'organizationId', 'email',
            {
                name: 'workplaceAffectations', required: true, _: ['id', {
                    name: 'workplace', required: true, _: ['id', 'name', {
                        name: 'room',
                        required: true,
                        _: ['id', 'name', 'floorId', {
                            name: 'floor',
                            required: true,
                            _: [
                                'id', {
                                    name: 'building',
                                    required: true,
                                    _: ['id', 'buildingId'], filters: [createFilter('eq', 'buildingId', null)]
                                }
                            ]
                        }]
                    }]
                }],
            }]
    }
    return fetchEntities<Surfy.Person>(qn);
}

export function fetchWorkplacesForBuildingIds(fetchEntities: FetchEntitiesFunction, buildingIds: number[]) {
    const workplacesQn: QueryNodes.Workplace = {
        name: 'workplace',
        // filters: [createFilter('eq', 'workplaceId', null)],
        required: true,
        _: ['id', 'position', 'roomId', 'workplaceTypeId', {
            name: 'room',
            required: true,
            _: ['id', {
                required: true,
                name: 'floor', _: ['id'], filters: [createFilter('in', 'buildingId', buildingIds)]
            }]
        }, {
                name: 'workplaceAffectations', _: ['id', {
                    name: 'person', _: ['id', 'code', 'firstname', 'lastname', 'organizationId']
                }]
            }]
    };
    return fetchEntities<Surfy.Workplace>(workplacesQn);
}


export function fetchPeople(fetchEntities: FetchEntitiesFunction) {
    const peopleQn: QueryNodes.Person = {
        pagination: { limit: 10 },
        name: 'person',
        _: ['id', 'firstname', 'lastname', 'code', 'organizationId', {
            name: 'personSecurityProfile', _: ['id', 'name']
        }, { name: 'workplaceAffectations', _: ['id', { name: 'workplace', _: ['name'] }] }]
    }
    return fetchEntities<Surfy.Person>(peopleQn);
}


export function fetchCostCenter(fetchEntities: FetchEntitiesFunction) {
    const peopleQn: QueryNodes.CostCenter = {
        // pagination: { limit: 10 },
        name: 'costCenter',
        _: ['id', 'name']
    }
    return fetchEntities<Surfy.Person>(peopleQn);
}


// export function fetchRoomSegmentType(fetchEntities: FetchEntitiesFunction) {
//     const peopleQn: QueryNodes.RoomPointSegmentType = {
//         pagination: { limit: 2 },
//         name: 'roomPointSegmentType',
//         _: ['id']
//     }
//     return fetchEntities<Surfy.Person>(peopleQn);
// }

export function fetchOrganizations(fetchEntities: FetchEntitiesFunction) {
    const organizationQn: QueryNodes.Organization = {
        name: 'organization',
        _: ['id', 'name', 'code', 'organizationId']
    }
    return fetchEntities<Surfy.Organization>(organizationQn);
}

export function fetchWorkplaceTypes2(fetchEntities: FetchEntitiesFunction) {
    const workplaceTypesQn: QueryNodes.WorkplaceType = {
        name: 'workplaceType',
        _: ['id', 'name', 'zIndex', 'center', 'size', {
            name: 'workplaceTypeItemTypes', _: [
                'id',
                'position',
                'rotation',
                'zIndex',
                'itemTypeId'
            ]
        }]
    }
    return fetchEntities<Surfy.WorkplaceType>(workplaceTypesQn);
}
