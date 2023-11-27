
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const authentificationConnectionObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "authentificationConnection",
    "type": "table",
    "scope": "public",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "authentificationConnection",
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
            "objectTypeName": "authentificationConnection",
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
            "objectTypeName": "authentificationConnection",
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
            "objectTypeName": "authentificationConnection",
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
            "objectTypeName": "authentificationConnection",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "userRegistrationTenantRules": {
            "name": "userRegistrationTenantRules",
            "objectTypeName": "authentificationConnection",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "authentificationConnectionId",
                "targetModelName": "userRegistrationTenantRule",
                "propertyTypeName": "userRegistrationTenantRules",
                "options": {
                    "readOnly": false
                }
            }
        }
    },
    "plural": "authentificationConnections",
    "camelized": {
        "singular": "authentificationConnection",
        "plural": "authentificationConnections",
        "id": "authentificationConnectionId"
    },
    "capitalized": {
        "singular": "AuthentificationConnection",
        "plural": "AuthentificationConnections",
        "id": "AuthentificationConnectionId"
    },
    "context": {
        "hasMany": [
            "userRegistrationTenantRule"
        ],
        "belongsTo": []
    }
}
