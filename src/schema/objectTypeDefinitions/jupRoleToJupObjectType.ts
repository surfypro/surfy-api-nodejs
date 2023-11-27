
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const jupRoleToJupObjectTypeObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "jupRoleToJupObjectType",
    "type": "many-to-many",
    "scope": "public",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "jupRoleToJupObjectType",
            "type": "primary-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "arCreate": {
            "name": "arCreate",
            "objectTypeName": "jupRoleToJupObjectType",
            "type": "boolean",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": false
            }
        },
        "arRead": {
            "name": "arRead",
            "objectTypeName": "jupRoleToJupObjectType",
            "type": "boolean",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": false
            }
        },
        "arUpdate": {
            "name": "arUpdate",
            "objectTypeName": "jupRoleToJupObjectType",
            "type": "boolean",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": false
            }
        },
        "arDelete": {
            "name": "arDelete",
            "objectTypeName": "jupRoleToJupObjectType",
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
            "objectTypeName": "jupRoleToJupObjectType",
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
            "objectTypeName": "jupRoleToJupObjectType",
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
            "objectTypeName": "jupRoleToJupObjectType",
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
            "objectTypeName": "jupRoleToJupObjectType",
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
            "objectTypeName": "jupRoleToJupObjectType",
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
        "jupRoleId": {
            "name": "jupRoleId",
            "objectTypeName": "jupRoleToJupObjectType",
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
            "objectTypeName": "jupRoleToJupObjectType",
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
    "plural": "jupRoleToJupObjectTypes",
    "camelized": {
        "singular": "jupRoleToJupObjectType",
        "plural": "jupRoleToJupObjectTypes",
        "id": "jupRoleToJupObjectTypeId"
    },
    "capitalized": {
        "singular": "JupRoleToJupObjectType",
        "plural": "JupRoleToJupObjectTypes",
        "id": "JupRoleToJupObjectTypeId"
    },
    "context": {
        "hasMany": [],
        "belongsTo": []
    }
}
