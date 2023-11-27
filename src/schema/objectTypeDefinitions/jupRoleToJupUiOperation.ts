
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const jupRoleToJupUiOperationObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "jupRoleToJupUiOperation",
    "type": "many-to-many",
    "scope": "public",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "jupRoleToJupUiOperation",
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
            "objectTypeName": "jupRoleToJupUiOperation",
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
            "objectTypeName": "jupRoleToJupUiOperation",
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
            "objectTypeName": "jupRoleToJupUiOperation",
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
            "objectTypeName": "jupRoleToJupUiOperation",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "jupUiOperationId": {
            "name": "jupUiOperationId",
            "objectTypeName": "jupRoleToJupUiOperation",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "jupUiOperationId",
                "targetModelName": "jupUiOperation",
                "propertyTypeName": "jupUiOperation",
                "options": {
                    "readOnly": false
                }
            }
        },
        "jupUiOperation": {
            "name": "jupUiOperation",
            "objectTypeName": "jupRoleToJupUiOperation",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "jupUiOperationId",
                "targetModelName": "jupUiOperation",
                "propertyTypeName": "jupUiOperation",
                "options": {
                    "readOnly": false
                }
            }
        },
        "jupRoleId": {
            "name": "jupRoleId",
            "objectTypeName": "jupRoleToJupUiOperation",
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
            "objectTypeName": "jupRoleToJupUiOperation",
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
    "plural": "jupRoleToJupUiOperations",
    "camelized": {
        "singular": "jupRoleToJupUiOperation",
        "plural": "jupRoleToJupUiOperations",
        "id": "jupRoleToJupUiOperationId"
    },
    "capitalized": {
        "singular": "JupRoleToJupUiOperation",
        "plural": "JupRoleToJupUiOperations",
        "id": "JupRoleToJupUiOperationId"
    },
    "context": {
        "hasMany": [],
        "belongsTo": []
    }
}
