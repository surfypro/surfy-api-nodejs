
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const companyObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "company",
    "type": "table",
    "scope": "public",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "company",
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
            "objectTypeName": "company",
            "type": "string",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "logoPath": {
            "name": "logoPath",
            "objectTypeName": "company",
            "type": "image",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "iconPath": {
            "name": "iconPath",
            "objectTypeName": "company",
            "type": "square-image",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "proxyImages": {
            "name": "proxyImages",
            "objectTypeName": "company",
            "type": "boolean",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": false
            }
        },
        "workingDaysCount": {
            "name": "workingDaysCount",
            "objectTypeName": "company",
            "type": "integer",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": 0
            }
        },
        "createdAt": {
            "name": "createdAt",
            "objectTypeName": "company",
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
            "objectTypeName": "company",
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
            "objectTypeName": "company",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "companyTypeId": {
            "name": "companyTypeId",
            "objectTypeName": "company",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "companyTypeId",
                "targetModelName": "companyType",
                "propertyTypeName": "companyType",
                "options": {
                    "readOnly": false
                }
            }
        },
        "companyType": {
            "name": "companyType",
            "objectTypeName": "company",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "companyTypeId",
                "targetModelName": "companyType",
                "propertyTypeName": "companyType",
                "options": {
                    "readOnly": false
                }
            }
        },
        "userCompanies": {
            "name": "userCompanies",
            "objectTypeName": "company",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "companyId",
                "targetModelName": "userCompany",
                "propertyTypeName": "userCompanies",
                "options": {
                    "readOnly": false
                }
            }
        },
        "buildingTypes": {
            "name": "buildingTypes",
            "objectTypeName": "company",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "companyId",
                "targetModelName": "buildingType",
                "propertyTypeName": "buildingTypes",
                "options": {
                    "readOnly": false
                }
            }
        },
        "buildings": {
            "name": "buildings",
            "objectTypeName": "company",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "companyId",
                "targetModelName": "building",
                "propertyTypeName": "buildings",
                "options": {
                    "readOnly": false
                }
            }
        }
    },
    "plural": "companies",
    "camelized": {
        "singular": "company",
        "plural": "companies",
        "id": "companyId"
    },
    "capitalized": {
        "singular": "Company",
        "plural": "Companies",
        "id": "CompanyId"
    },
    "context": {
        "hasMany": [
            "userCompany",
            "buildingType",
            "building"
        ],
        "belongsTo": []
    }
}
