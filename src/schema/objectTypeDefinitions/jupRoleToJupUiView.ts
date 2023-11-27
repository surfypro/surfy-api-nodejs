
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const jupRoleToJupUiViewObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "jupRoleToJupUiView",
    "type": "many-to-many",
    "scope": "public",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "jupRoleToJupUiView",
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
            "objectTypeName": "jupRoleToJupUiView",
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
            "objectTypeName": "jupRoleToJupUiView",
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
            "objectTypeName": "jupRoleToJupUiView",
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
            "objectTypeName": "jupRoleToJupUiView",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "jupUiViewId": {
            "name": "jupUiViewId",
            "objectTypeName": "jupRoleToJupUiView",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "jupUiViewId",
                "targetModelName": "jupUiView",
                "propertyTypeName": "jupUiView",
                "options": {
                    "readOnly": false
                }
            }
        },
        "jupUiView": {
            "name": "jupUiView",
            "objectTypeName": "jupRoleToJupUiView",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "jupUiViewId",
                "targetModelName": "jupUiView",
                "propertyTypeName": "jupUiView",
                "options": {
                    "readOnly": false
                }
            }
        },
        "jupRoleId": {
            "name": "jupRoleId",
            "objectTypeName": "jupRoleToJupUiView",
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
            "objectTypeName": "jupRoleToJupUiView",
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
    "plural": "jupRoleToJupUiViews",
    "camelized": {
        "singular": "jupRoleToJupUiView",
        "plural": "jupRoleToJupUiViews",
        "id": "jupRoleToJupUiViewId"
    },
    "capitalized": {
        "singular": "JupRoleToJupUiView",
        "plural": "JupRoleToJupUiViews",
        "id": "JupRoleToJupUiViewId"
    },
    "context": {
        "hasMany": [],
        "belongsTo": []
    }
}
