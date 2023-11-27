
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const jupUiViewObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "jupUiView",
    "type": "table",
    "scope": "public",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "jupUiView",
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
            "objectTypeName": "jupUiView",
            "type": "string",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "isDefaultView": {
            "name": "isDefaultView",
            "objectTypeName": "jupUiView",
            "type": "boolean",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": "false"
            }
        },
        "createdAt": {
            "name": "createdAt",
            "objectTypeName": "jupUiView",
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
            "objectTypeName": "jupUiView",
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
            "objectTypeName": "jupUiView",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "jupObjectTypeId": {
            "name": "jupObjectTypeId",
            "objectTypeName": "jupUiView",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "jupObjectTypeId",
                "targetModelName": "jupObjectType",
                "propertyTypeName": "jupObjectType",
                "options": {
                    "readOnly": false
                }
            }
        },
        "jupObjectType": {
            "name": "jupObjectType",
            "objectTypeName": "jupUiView",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "jupObjectTypeId",
                "targetModelName": "jupObjectType",
                "propertyTypeName": "jupObjectType",
                "options": {
                    "readOnly": false
                }
            }
        },
        "jupRoleToJupUiViews": {
            "name": "jupRoleToJupUiViews",
            "objectTypeName": "jupUiView",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "jupUiViewId",
                "targetModelName": "jupRoleToJupUiView",
                "propertyTypeName": "jupRoleToJupUiViews",
                "options": {
                    "readOnly": false
                }
            }
        }
    },
    "plural": "jupUiViews",
    "camelized": {
        "singular": "jupUiView",
        "plural": "jupUiViews",
        "id": "jupUiViewId"
    },
    "capitalized": {
        "singular": "JupUiView",
        "plural": "JupUiViews",
        "id": "JupUiViewId"
    },
    "context": {
        "hasMany": [
            "jupRoleToJupUiView"
        ],
        "belongsTo": []
    }
}
