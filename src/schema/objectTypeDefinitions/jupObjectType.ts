
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const jupObjectTypeObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "jupObjectType",
    "type": "table",
    "scope": "public",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "jupObjectType",
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
            "objectTypeName": "jupObjectType",
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
            "objectTypeName": "jupObjectType",
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
            "objectTypeName": "jupObjectType",
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
            "objectTypeName": "jupObjectType",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "jupUiViews": {
            "name": "jupUiViews",
            "objectTypeName": "jupObjectType",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "jupObjectTypeId",
                "targetModelName": "jupUiView",
                "propertyTypeName": "jupUiViews",
                "options": {
                    "readOnly": false
                }
            }
        },
        "jupRoleToJupObjectTypes": {
            "name": "jupRoleToJupObjectTypes",
            "objectTypeName": "jupObjectType",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "jupObjectTypeId",
                "targetModelName": "jupRoleToJupObjectType",
                "propertyTypeName": "jupRoleToJupObjectTypes",
                "options": {
                    "readOnly": false
                }
            }
        }
    },
    "plural": "jupObjectTypes",
    "camelized": {
        "singular": "jupObjectType",
        "plural": "jupObjectTypes",
        "id": "jupObjectTypeId"
    },
    "capitalized": {
        "singular": "JupObjectType",
        "plural": "JupObjectTypes",
        "id": "JupObjectTypeId"
    },
    "context": {
        "hasMany": [
            "jupUiView",
            "jupRoleToJupObjectType"
        ],
        "belongsTo": []
    }
}
