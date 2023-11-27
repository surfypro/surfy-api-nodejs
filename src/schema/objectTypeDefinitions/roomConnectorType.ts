
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const roomConnectorTypeObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "roomConnectorType",
    "type": "table",
    "scope": "public",
    "isMasterData": true,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "roomConnectorType",
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
            "objectTypeName": "roomConnectorType",
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
            "objectTypeName": "roomConnectorType",
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
            "objectTypeName": "roomConnectorType",
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
            "objectTypeName": "roomConnectorType",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "roomConnectors": {
            "name": "roomConnectors",
            "objectTypeName": "roomConnectorType",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "roomConnectorTypeId",
                "targetModelName": "roomConnector",
                "propertyTypeName": "roomConnectors",
                "options": {
                    "readOnly": false
                }
            }
        }
    },
    "plural": "roomConnectorTypes",
    "camelized": {
        "singular": "roomConnectorType",
        "plural": "roomConnectorTypes",
        "id": "roomConnectorTypeId"
    },
    "capitalized": {
        "singular": "RoomConnectorType",
        "plural": "RoomConnectorTypes",
        "id": "RoomConnectorTypeId"
    },
    "context": {
        "hasMany": [
            "roomConnector"
        ],
        "belongsTo": []
    }
}
