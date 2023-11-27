
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const userObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "user",
    "type": "table",
    "scope": "public",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "user",
            "type": "primary-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "email": {
            "name": "email",
            "objectTypeName": "user",
            "type": "string",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "firstname": {
            "name": "firstname",
            "objectTypeName": "user",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "lastname": {
            "name": "lastname",
            "objectTypeName": "user",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "picture": {
            "name": "picture",
            "objectTypeName": "user",
            "type": "image",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "sub": {
            "name": "sub",
            "objectTypeName": "user",
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
            "objectTypeName": "user",
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
            "objectTypeName": "user",
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
            "objectTypeName": "user",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "userCompanies": {
            "name": "userCompanies",
            "objectTypeName": "user",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userId",
                "targetModelName": "userCompany",
                "propertyTypeName": "userCompanies",
                "options": {
                    "readOnly": false
                }
            }
        }
    },
    "plural": "users",
    "camelized": {
        "singular": "user",
        "plural": "users",
        "id": "userId"
    },
    "capitalized": {
        "singular": "User",
        "plural": "Users",
        "id": "UserId"
    },
    "context": {
        "hasMany": [
            "userCompany"
        ],
        "belongsTo": []
    }
}
