
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const jupUiOperationObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "jupUiOperation",
    "type": "table",
    "scope": "public",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "jupUiOperation",
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
            "objectTypeName": "jupUiOperation",
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
            "objectTypeName": "jupUiOperation",
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
            "objectTypeName": "jupUiOperation",
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
            "objectTypeName": "jupUiOperation",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "jupRoleToJupUiOperations": {
            "name": "jupRoleToJupUiOperations",
            "objectTypeName": "jupUiOperation",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "jupUiOperationId",
                "targetModelName": "jupRoleToJupUiOperation",
                "propertyTypeName": "jupRoleToJupUiOperations",
                "options": {
                    "readOnly": false
                }
            }
        }
    },
    "plural": "jupUiOperations",
    "camelized": {
        "singular": "jupUiOperation",
        "plural": "jupUiOperations",
        "id": "jupUiOperationId"
    },
    "capitalized": {
        "singular": "JupUiOperation",
        "plural": "JupUiOperations",
        "id": "JupUiOperationId"
    },
    "context": {
        "hasMany": [
            "jupRoleToJupUiOperation"
        ],
        "belongsTo": []
    }
}
