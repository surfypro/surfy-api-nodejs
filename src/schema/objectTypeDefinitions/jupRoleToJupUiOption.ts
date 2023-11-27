
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const jupRoleToJupUiOptionObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "jupRoleToJupUiOption",
    "type": "many-to-many",
    "scope": "public",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "jupRoleToJupUiOption",
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
            "objectTypeName": "jupRoleToJupUiOption",
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
            "objectTypeName": "jupRoleToJupUiOption",
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
            "objectTypeName": "jupRoleToJupUiOption",
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
            "objectTypeName": "jupRoleToJupUiOption",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "jupUiOptionId": {
            "name": "jupUiOptionId",
            "objectTypeName": "jupRoleToJupUiOption",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "jupUiOptionId",
                "targetModelName": "jupUiOption",
                "propertyTypeName": "jupUiOption",
                "options": {
                    "readOnly": false
                }
            }
        },
        "jupUiOption": {
            "name": "jupUiOption",
            "objectTypeName": "jupRoleToJupUiOption",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "jupUiOptionId",
                "targetModelName": "jupUiOption",
                "propertyTypeName": "jupUiOption",
                "options": {
                    "readOnly": false
                }
            }
        },
        "jupRoleId": {
            "name": "jupRoleId",
            "objectTypeName": "jupRoleToJupUiOption",
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
            "objectTypeName": "jupRoleToJupUiOption",
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
    "plural": "jupRoleToJupUiOptions",
    "camelized": {
        "singular": "jupRoleToJupUiOption",
        "plural": "jupRoleToJupUiOptions",
        "id": "jupRoleToJupUiOptionId"
    },
    "capitalized": {
        "singular": "JupRoleToJupUiOption",
        "plural": "JupRoleToJupUiOptions",
        "id": "JupRoleToJupUiOptionId"
    },
    "context": {
        "hasMany": [],
        "belongsTo": []
    }
}
