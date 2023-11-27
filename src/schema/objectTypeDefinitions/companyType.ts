
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const companyTypeObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "companyType",
    "type": "table",
    "scope": "public",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "companyType",
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
            "objectTypeName": "companyType",
            "type": "string",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "billable": {
            "name": "billable",
            "objectTypeName": "companyType",
            "type": "boolean",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "createdAt": {
            "name": "createdAt",
            "objectTypeName": "companyType",
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
            "objectTypeName": "companyType",
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
            "objectTypeName": "companyType",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "companies": {
            "name": "companies",
            "objectTypeName": "companyType",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "companyTypeId",
                "targetModelName": "company",
                "propertyTypeName": "companies",
                "options": {
                    "readOnly": false
                }
            }
        }
    },
    "plural": "companyTypes",
    "camelized": {
        "singular": "companyType",
        "plural": "companyTypes",
        "id": "companyTypeId"
    },
    "capitalized": {
        "singular": "CompanyType",
        "plural": "CompanyTypes",
        "id": "CompanyTypeId"
    },
    "context": {
        "hasMany": [
            "company"
        ],
        "belongsTo": []
    }
}
