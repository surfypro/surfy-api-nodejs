
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const roomObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "room",
    "type": "table",
    "scope": "private",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "room",
            "type": "primary-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "name": {
            "name": "name",
            "objectTypeName": "room",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "area": {
            "name": "area",
            "objectTypeName": "room",
            "type": "surface",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false
            }
        },
        "perimeter": {
            "name": "perimeter",
            "objectTypeName": "room",
            "type": "distance",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "unit": {
                    "type": "distance",
                    "value": "meter"
                },
                "defaultValue": 0
            }
        },
        "textAnchor": {
            "name": "textAnchor",
            "objectTypeName": "room",
            "type": "textAnchor",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": false,
                "technical": false
            }
        },
        "capacity": {
            "name": "capacity",
            "objectTypeName": "room",
            "type": "integer",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": 0
            }
        },
        "workplacesCount": {
            "name": "workplacesCount",
            "objectTypeName": "room",
            "type": "integer-count",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "workplacesRatio": {
            "name": "workplacesRatio",
            "objectTypeName": "room",
            "type": "surface-by-workplace",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "peopleCount": {
            "name": "peopleCount",
            "objectTypeName": "room",
            "type": "integer-count",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "seatsCount": {
            "name": "seatsCount",
            "objectTypeName": "room",
            "type": "integer-count",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "peopleRatio": {
            "name": "peopleRatio",
            "objectTypeName": "room",
            "type": "surface-by-people",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "occupancyRate": {
            "name": "occupancyRate",
            "objectTypeName": "room",
            "type": "percentage",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "expansionRatio": {
            "name": "expansionRatio",
            "objectTypeName": "room",
            "type": "percentage0-1",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "freeWorkplacesCount": {
            "name": "freeWorkplacesCount",
            "objectTypeName": "room",
            "type": "integer-count",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "flexWorkplacesCount": {
            "name": "flexWorkplacesCount",
            "objectTypeName": "room",
            "type": "integer-count",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "sharedWorkplacesCount": {
            "name": "sharedWorkplacesCount",
            "objectTypeName": "room",
            "type": "integer-count",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "sharedWorkplacesRatio": {
            "name": "sharedWorkplacesRatio",
            "objectTypeName": "room",
            "type": "percentage",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "transitWorkplacesCount": {
            "name": "transitWorkplacesCount",
            "objectTypeName": "room",
            "type": "integer-count",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "flexRatio": {
            "name": "flexRatio",
            "objectTypeName": "room",
            "type": "percentage",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "seatsPeopleRatio": {
            "name": "seatsPeopleRatio",
            "objectTypeName": "room",
            "type": "percentage0-1",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "totalPeopleCount": {
            "name": "totalPeopleCount",
            "objectTypeName": "room",
            "type": "integer-count",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "carbonFootprint": {
            "name": "carbonFootprint",
            "objectTypeName": "room",
            "type": "weight",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "unit": {
                    "type": "weight",
                    "value": "kilogram"
                },
                "defaultValue": 0
            }
        },
        "info": {
            "name": "info",
            "objectTypeName": "room",
            "type": "text",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "bookingEmail": {
            "name": "bookingEmail",
            "objectTypeName": "room",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "externalId2": {
            "name": "externalId2",
            "objectTypeName": "room",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "picture": {
            "name": "picture",
            "objectTypeName": "room",
            "type": "image",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "keyCylinderCode": {
            "name": "keyCylinderCode",
            "objectTypeName": "room",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "livePeopleCount": {
            "name": "livePeopleCount",
            "objectTypeName": "room",
            "type": "integer",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": false,
                "technical": false
            }
        },
        "createdAt": {
            "name": "createdAt",
            "objectTypeName": "room",
            "type": "timestamp",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": false,
                "technical": true
            }
        },
        "updatedAt": {
            "name": "updatedAt",
            "objectTypeName": "room",
            "type": "timestamp",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": false,
                "technical": true
            }
        },
        "externalId": {
            "name": "externalId",
            "objectTypeName": "room",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "floorId": {
            "name": "floorId",
            "objectTypeName": "room",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "floorId",
                "targetModelName": "floor",
                "propertyTypeName": "floor",
                "options": {
                    "readOnly": false
                }
            }
        },
        "floor": {
            "name": "floor",
            "objectTypeName": "room",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "floorId",
                "targetModelName": "floor",
                "propertyTypeName": "floor",
                "options": {
                    "readOnly": false
                }
            }
        },
        "occupancyStatusId": {
            "name": "occupancyStatusId",
            "objectTypeName": "room",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "occupancyStatusId",
                "targetModelName": "occupancyStatus",
                "propertyTypeName": "occupancyStatus",
                "options": {
                    "readOnly": false
                }
            }
        },
        "occupancyStatus": {
            "name": "occupancyStatus",
            "objectTypeName": "room",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "occupancyStatusId",
                "targetModelName": "occupancyStatus",
                "propertyTypeName": "occupancyStatus",
                "options": {
                    "readOnly": false
                }
            }
        },
        "roomTypeId": {
            "name": "roomTypeId",
            "objectTypeName": "room",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "roomTypeId",
                "targetModelName": "roomType",
                "propertyTypeName": "roomType",
                "options": {
                    "readOnly": false
                }
            }
        },
        "roomType": {
            "name": "roomType",
            "objectTypeName": "room",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "roomTypeId",
                "targetModelName": "roomType",
                "propertyTypeName": "roomType",
                "options": {
                    "readOnly": false
                }
            }
        },
        "organizationId": {
            "name": "organizationId",
            "objectTypeName": "room",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "organizationId",
                "targetModelName": "organization",
                "propertyTypeName": "organization",
                "options": {
                    "readOnly": false
                }
            }
        },
        "organization": {
            "name": "organization",
            "objectTypeName": "room",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "organizationId",
                "targetModelName": "organization",
                "propertyTypeName": "organization",
                "options": {
                    "readOnly": false
                }
            }
        },
        "costCenterId": {
            "name": "costCenterId",
            "objectTypeName": "room",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "costCenterId",
                "targetModelName": "costCenter",
                "propertyTypeName": "costCenter",
                "options": {
                    "readOnly": false
                }
            }
        },
        "costCenter": {
            "name": "costCenter",
            "objectTypeName": "room",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "costCenterId",
                "targetModelName": "costCenter",
                "propertyTypeName": "costCenter",
                "options": {
                    "readOnly": false
                }
            }
        },
        "distributionCostTypeId": {
            "name": "distributionCostTypeId",
            "objectTypeName": "room",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "distributionCostTypeId",
                "targetModelName": "distributionCostType",
                "propertyTypeName": "distributionCostType",
                "options": {
                    "readOnly": false
                }
            }
        },
        "distributionCostType": {
            "name": "distributionCostType",
            "objectTypeName": "room",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "distributionCostTypeId",
                "targetModelName": "distributionCostType",
                "propertyTypeName": "distributionCostType",
                "options": {
                    "readOnly": false
                }
            }
        },
        "roomConnectorId": {
            "name": "roomConnectorId",
            "objectTypeName": "room",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "roomConnectorId",
                "targetModelName": "roomConnector",
                "propertyTypeName": "roomConnector",
                "options": {
                    "readOnly": false
                }
            }
        },
        "roomConnector": {
            "name": "roomConnector",
            "objectTypeName": "room",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "roomConnectorId",
                "targetModelName": "roomConnector",
                "propertyTypeName": "roomConnector",
                "options": {
                    "readOnly": false
                }
            }
        },
        "userCompanyCreatedById": {
            "name": "userCompanyCreatedById",
            "objectTypeName": "room",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "userCompany",
                "propertyTypeName": "userCompanyCreatedBy",
                "options": {
                    "readOnly": true
                }
            }
        },
        "userCompanyCreatedBy": {
            "name": "userCompanyCreatedBy",
            "objectTypeName": "room",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "userCompany",
                "propertyTypeName": "userCompanyCreatedBy",
                "options": {
                    "readOnly": true
                }
            }
        },
        "userCompanyUpdatedById": {
            "name": "userCompanyUpdatedById",
            "objectTypeName": "room",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "userCompany",
                "propertyTypeName": "userCompanyUpdatedBy",
                "options": {
                    "readOnly": true
                }
            }
        },
        "userCompanyUpdatedBy": {
            "name": "userCompanyUpdatedBy",
            "objectTypeName": "room",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "userCompany",
                "propertyTypeName": "userCompanyUpdatedBy",
                "options": {
                    "readOnly": true
                }
            }
        },
        "roomPointRooms": {
            "name": "roomPointRooms",
            "objectTypeName": "room",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "roomId",
                "targetModelName": "roomPointRoom",
                "propertyTypeName": "roomPointRooms",
                "options": {
                    "readOnly": false
                }
            }
        },
        "dimensionRooms": {
            "name": "dimensionRooms",
            "objectTypeName": "room",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "roomId",
                "targetModelName": "dimensionRoom",
                "propertyTypeName": "dimensionRooms",
                "options": {
                    "readOnly": false
                }
            }
        },
        "roomAffectations": {
            "name": "roomAffectations",
            "objectTypeName": "room",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "roomId",
                "targetModelName": "roomAffectation",
                "propertyTypeName": "roomAffectations",
                "options": {
                    "readOnly": false
                }
            }
        },
        "workplaces": {
            "name": "workplaces",
            "objectTypeName": "room",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "roomId",
                "targetModelName": "workplace",
                "propertyTypeName": "workplaces",
                "options": {
                    "readOnly": false
                }
            }
        },
        "items": {
            "name": "items",
            "objectTypeName": "room",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "roomId",
                "targetModelName": "item",
                "propertyTypeName": "items",
                "options": {
                    "readOnly": false
                }
            }
        },
        "companyId": {
            "name": "companyId",
            "objectTypeName": "room",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "id",
                "targetModelName": "company",
                "propertyTypeName": "company",
                "options": {
                    "readOnly": true
                }
            }
        },
        "company": {
            "name": "company",
            "objectTypeName": "room",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "id",
                "targetModelName": "company",
                "propertyTypeName": "company",
                "options": {
                    "readOnly": true
                }
            }
        }
    },
    "plural": "rooms",
    "camelized": {
        "singular": "room",
        "plural": "rooms",
        "id": "roomId"
    },
    "capitalized": {
        "singular": "Room",
        "plural": "Rooms",
        "id": "RoomId"
    },
    "context": {
        "hasMany": [
            "roomPointRoom",
            "dimensionRoom",
            "roomAffectation",
            "workplace",
            "item"
        ],
        "belongsTo": [
            "company"
        ]
    }
}
