
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const roomPointSegmentTypeObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "roomPointSegmentType",
    "type": "table",
    "scope": "public",
    "isMasterData": true,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "roomPointSegmentType",
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
            "objectTypeName": "roomPointSegmentType",
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
            "objectTypeName": "roomPointSegmentType",
            "type": "string",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "createdAt": {
            "name": "createdAt",
            "objectTypeName": "roomPointSegmentType",
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
            "objectTypeName": "roomPointSegmentType",
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
            "objectTypeName": "roomPointSegmentType",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "roomPointSegments": {
            "name": "roomPointSegments",
            "objectTypeName": "roomPointSegmentType",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "roomPointSegmentTypeId",
                "targetModelName": "roomPointSegment",
                "propertyTypeName": "roomPointSegments",
                "options": {
                    "readOnly": false
                }
            }
        }
    },
    "plural": "roomPointSegmentTypes",
    "camelized": {
        "singular": "roomPointSegmentType",
        "plural": "roomPointSegmentTypes",
        "id": "roomPointSegmentTypeId"
    },
    "capitalized": {
        "singular": "RoomPointSegmentType",
        "plural": "RoomPointSegmentTypes",
        "id": "RoomPointSegmentTypeId"
    },
    "context": {
        "hasMany": [
            "roomPointSegment"
        ],
        "belongsTo": []
    }
}
