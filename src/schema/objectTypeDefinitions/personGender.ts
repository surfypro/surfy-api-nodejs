
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const personGenderObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "personGender",
    "type": "table",
    "scope": "public",
    "isMasterData": true,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "personGender",
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
            "objectTypeName": "personGender",
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
            "objectTypeName": "personGender",
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
            "objectTypeName": "personGender",
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
            "objectTypeName": "personGender",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "people": {
            "name": "people",
            "objectTypeName": "personGender",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "personGenderId",
                "targetModelName": "person",
                "propertyTypeName": "people",
                "options": {
                    "readOnly": false
                }
            }
        }
    },
    "plural": "personGenders",
    "camelized": {
        "singular": "personGender",
        "plural": "personGenders",
        "id": "personGenderId"
    },
    "capitalized": {
        "singular": "PersonGender",
        "plural": "PersonGenders",
        "id": "PersonGenderId"
    },
    "context": {
        "hasMany": [
            "person"
        ],
        "belongsTo": []
    }
}
