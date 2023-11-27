
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const jupUiOptionObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "jupUiOption",
    "type": "table",
    "scope": "public",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "jupUiOption",
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
            "objectTypeName": "jupUiOption",
            "type": "string",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "scope": {
            "name": "scope",
            "objectTypeName": "jupUiOption",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "createdAt": {
            "name": "createdAt",
            "objectTypeName": "jupUiOption",
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
            "objectTypeName": "jupUiOption",
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
            "objectTypeName": "jupUiOption",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "jupRoleToJupUiOptions": {
            "name": "jupRoleToJupUiOptions",
            "objectTypeName": "jupUiOption",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "jupUiOptionId",
                "targetModelName": "jupRoleToJupUiOption",
                "propertyTypeName": "jupRoleToJupUiOptions",
                "options": {
                    "readOnly": false
                }
            }
        }
    },
    "plural": "jupUiOptions",
    "camelized": {
        "singular": "jupUiOption",
        "plural": "jupUiOptions",
        "id": "jupUiOptionId"
    },
    "capitalized": {
        "singular": "JupUiOption",
        "plural": "JupUiOptions",
        "id": "JupUiOptionId"
    },
    "context": {
        "hasMany": [
            "jupRoleToJupUiOption"
        ],
        "belongsTo": []
    }
}
