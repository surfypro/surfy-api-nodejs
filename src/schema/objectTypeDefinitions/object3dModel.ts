
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const object3dModelObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "object3dModel",
    "type": "table",
    "scope": "public",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "object3dModel",
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
            "objectTypeName": "object3dModel",
            "type": "string",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "type": {
            "name": "type",
            "objectTypeName": "object3dModel",
            "type": "string",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": "obj"
            }
        },
        "rotation": {
            "name": "rotation",
            "objectTypeName": "object3dModel",
            "type": "float",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": 0
            }
        },
        "origin": {
            "name": "origin",
            "objectTypeName": "object3dModel",
            "type": "string",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": "X"
            }
        },
        "model": {
            "name": "model",
            "objectTypeName": "object3dModel",
            "type": "model3d",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "createdAt": {
            "name": "createdAt",
            "objectTypeName": "object3dModel",
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
            "objectTypeName": "object3dModel",
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
            "objectTypeName": "object3dModel",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "itemTypes": {
            "name": "itemTypes",
            "objectTypeName": "object3dModel",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "object3dModelId",
                "targetModelName": "itemType",
                "propertyTypeName": "itemTypes",
                "options": {
                    "readOnly": false
                }
            }
        }
    },
    "plural": "object3dModels",
    "camelized": {
        "singular": "object3dModel",
        "plural": "object3dModels",
        "id": "object3dModelId"
    },
    "capitalized": {
        "singular": "Object3dModel",
        "plural": "Object3dModels",
        "id": "Object3dModelId"
    },
    "context": {
        "hasMany": [
            "itemType"
        ],
        "belongsTo": []
    }
}
