
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const occupancyStatusObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "occupancyStatus",
    "type": "table",
    "scope": "public",
    "isMasterData": true,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "occupancyStatus",
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
            "objectTypeName": "occupancyStatus",
            "type": "string",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "code": {
            "name": "code",
            "objectTypeName": "occupancyStatus",
            "type": "string",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "color": {
            "name": "color",
            "objectTypeName": "occupancyStatus",
            "type": "color",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "createdAt": {
            "name": "createdAt",
            "objectTypeName": "occupancyStatus",
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
            "objectTypeName": "occupancyStatus",
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
            "objectTypeName": "occupancyStatus",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "rooms": {
            "name": "rooms",
            "objectTypeName": "occupancyStatus",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "occupancyStatusId",
                "targetModelName": "room",
                "propertyTypeName": "rooms",
                "options": {
                    "readOnly": false
                }
            }
        }
    },
    "plural": "occupancyStatuses",
    "camelized": {
        "singular": "occupancyStatus",
        "plural": "occupancyStatuses",
        "id": "occupancyStatusId"
    },
    "capitalized": {
        "singular": "OccupancyStatus",
        "plural": "OccupancyStatuses",
        "id": "OccupancyStatusId"
    },
    "context": {
        "hasMany": [
            "room"
        ],
        "belongsTo": []
    }
}
