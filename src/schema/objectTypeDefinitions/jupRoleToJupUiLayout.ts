
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const jupRoleToJupUiLayoutObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "jupRoleToJupUiLayout",
    "type": "many-to-many",
    "scope": "public",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "jupRoleToJupUiLayout",
            "type": "primary-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "canSee": {
            "name": "canSee",
            "objectTypeName": "jupRoleToJupUiLayout",
            "type": "boolean",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": false
            }
        },
        "createdAt": {
            "name": "createdAt",
            "objectTypeName": "jupRoleToJupUiLayout",
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
            "objectTypeName": "jupRoleToJupUiLayout",
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
            "objectTypeName": "jupRoleToJupUiLayout",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "jupUiLayoutId": {
            "name": "jupUiLayoutId",
            "objectTypeName": "jupRoleToJupUiLayout",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "jupUiLayoutId",
                "targetModelName": "jupUiLayout",
                "propertyTypeName": "jupUiLayout",
                "options": {
                    "readOnly": false
                }
            }
        },
        "jupUiLayout": {
            "name": "jupUiLayout",
            "objectTypeName": "jupRoleToJupUiLayout",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "jupUiLayoutId",
                "targetModelName": "jupUiLayout",
                "propertyTypeName": "jupUiLayout",
                "options": {
                    "readOnly": false
                }
            }
        },
        "jupRoleId": {
            "name": "jupRoleId",
            "objectTypeName": "jupRoleToJupUiLayout",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "jupRoleId",
                "targetModelName": "jupRole",
                "propertyTypeName": "jupRole",
                "options": {
                    "readOnly": false
                }
            }
        },
        "jupRole": {
            "name": "jupRole",
            "objectTypeName": "jupRoleToJupUiLayout",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "jupRoleId",
                "targetModelName": "jupRole",
                "propertyTypeName": "jupRole",
                "options": {
                    "readOnly": false
                }
            }
        }
    },
    "plural": "jupRoleToJupUiLayouts",
    "camelized": {
        "singular": "jupRoleToJupUiLayout",
        "plural": "jupRoleToJupUiLayouts",
        "id": "jupRoleToJupUiLayoutId"
    },
    "capitalized": {
        "singular": "JupRoleToJupUiLayout",
        "plural": "JupRoleToJupUiLayouts",
        "id": "JupRoleToJupUiLayoutId"
    },
    "context": {
        "hasMany": [],
        "belongsTo": []
    }
}
