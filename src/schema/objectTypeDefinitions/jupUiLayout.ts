
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const jupUiLayoutObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "jupUiLayout",
    "type": "table",
    "scope": "public",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "jupUiLayout",
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
            "objectTypeName": "jupUiLayout",
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
            "objectTypeName": "jupUiLayout",
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
            "objectTypeName": "jupUiLayout",
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
            "objectTypeName": "jupUiLayout",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "buildings": {
            "name": "buildings",
            "objectTypeName": "jupUiLayout",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "jupUiLayoutId",
                "targetModelName": "building",
                "propertyTypeName": "buildings",
                "options": {
                    "readOnly": false
                }
            }
        },
        "jupRoleToJupUiLayouts": {
            "name": "jupRoleToJupUiLayouts",
            "objectTypeName": "jupUiLayout",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "jupUiLayoutId",
                "targetModelName": "jupRoleToJupUiLayout",
                "propertyTypeName": "jupRoleToJupUiLayouts",
                "options": {
                    "readOnly": false
                }
            }
        }
    },
    "plural": "jupUiLayouts",
    "camelized": {
        "singular": "jupUiLayout",
        "plural": "jupUiLayouts",
        "id": "jupUiLayoutId"
    },
    "capitalized": {
        "singular": "JupUiLayout",
        "plural": "JupUiLayouts",
        "id": "JupUiLayoutId"
    },
    "context": {
        "hasMany": [
            "building",
            "jupRoleToJupUiLayout"
        ],
        "belongsTo": []
    }
}
