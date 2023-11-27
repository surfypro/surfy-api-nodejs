
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const dimensionBuildingObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "dimensionBuilding",
    "type": "table",
    "scope": "private",
    "isMasterData": false,
    "isReportingData": true,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "dimensionBuilding",
            "type": "primary-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "dimensionPeopleCount": {
            "name": "dimensionPeopleCount",
            "objectTypeName": "dimensionBuilding",
            "type": "integer",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": 0
            }
        },
        "roomsArea": {
            "name": "roomsArea",
            "objectTypeName": "dimensionBuilding",
            "type": "surface",
            "options": {
                "mandatory": true,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "roomsCount": {
            "name": "roomsCount",
            "objectTypeName": "dimensionBuilding",
            "type": "integer-count",
            "options": {
                "mandatory": true,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "workplacesCount": {
            "name": "workplacesCount",
            "objectTypeName": "dimensionBuilding",
            "type": "integer-count",
            "options": {
                "mandatory": true,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "workplacesRatio": {
            "name": "workplacesRatio",
            "objectTypeName": "dimensionBuilding",
            "type": "surface-by-workplace",
            "options": {
                "mandatory": true,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "peopleCount": {
            "name": "peopleCount",
            "objectTypeName": "dimensionBuilding",
            "type": "integer-count",
            "options": {
                "mandatory": true,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "seatsCount": {
            "name": "seatsCount",
            "objectTypeName": "dimensionBuilding",
            "type": "integer-count",
            "options": {
                "mandatory": true,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "peopleRatio": {
            "name": "peopleRatio",
            "objectTypeName": "dimensionBuilding",
            "type": "surface-by-people",
            "options": {
                "mandatory": true,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "occupancyRate": {
            "name": "occupancyRate",
            "objectTypeName": "dimensionBuilding",
            "type": "percentage",
            "options": {
                "mandatory": true,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "expansionRatio": {
            "name": "expansionRatio",
            "objectTypeName": "dimensionBuilding",
            "type": "percentage0-1",
            "options": {
                "mandatory": true,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "freeWorkplacesCount": {
            "name": "freeWorkplacesCount",
            "objectTypeName": "dimensionBuilding",
            "type": "integer-count",
            "options": {
                "mandatory": true,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "flexWorkplacesCount": {
            "name": "flexWorkplacesCount",
            "objectTypeName": "dimensionBuilding",
            "type": "integer-count",
            "options": {
                "mandatory": true,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "sharedWorkplacesCount": {
            "name": "sharedWorkplacesCount",
            "objectTypeName": "dimensionBuilding",
            "type": "integer-count",
            "options": {
                "mandatory": true,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "sharedWorkplacesRatio": {
            "name": "sharedWorkplacesRatio",
            "objectTypeName": "dimensionBuilding",
            "type": "percentage",
            "options": {
                "mandatory": true,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "transitWorkplacesCount": {
            "name": "transitWorkplacesCount",
            "objectTypeName": "dimensionBuilding",
            "type": "integer-count",
            "options": {
                "mandatory": true,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "flexRatio": {
            "name": "flexRatio",
            "objectTypeName": "dimensionBuilding",
            "type": "percentage",
            "options": {
                "mandatory": true,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "seatsPeopleRatio": {
            "name": "seatsPeopleRatio",
            "objectTypeName": "dimensionBuilding",
            "type": "percentage0-1",
            "options": {
                "mandatory": true,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "totalPeopleCount": {
            "name": "totalPeopleCount",
            "objectTypeName": "dimensionBuilding",
            "type": "integer-count",
            "options": {
                "mandatory": true,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "carbonFootprint": {
            "name": "carbonFootprint",
            "objectTypeName": "dimensionBuilding",
            "type": "weight",
            "options": {
                "mandatory": true,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "unit": {
                    "type": "weight",
                    "value": "kilogram"
                },
                "defaultValue": 0
            }
        },
        "createdAt": {
            "name": "createdAt",
            "objectTypeName": "dimensionBuilding",
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
            "objectTypeName": "dimensionBuilding",
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
            "objectTypeName": "dimensionBuilding",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "dimensionId": {
            "name": "dimensionId",
            "objectTypeName": "dimensionBuilding",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "dimensionId",
                "targetModelName": "dimension",
                "propertyTypeName": "dimension",
                "options": {
                    "readOnly": false
                }
            }
        },
        "dimension": {
            "name": "dimension",
            "objectTypeName": "dimensionBuilding",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "dimensionId",
                "targetModelName": "dimension",
                "propertyTypeName": "dimension",
                "options": {
                    "readOnly": false
                }
            }
        },
        "dimensionTypeId": {
            "name": "dimensionTypeId",
            "objectTypeName": "dimensionBuilding",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "dimensionTypeId",
                "targetModelName": "dimensionType",
                "propertyTypeName": "dimensionType",
                "options": {
                    "readOnly": false
                }
            }
        },
        "dimensionType": {
            "name": "dimensionType",
            "objectTypeName": "dimensionBuilding",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "dimensionTypeId",
                "targetModelName": "dimensionType",
                "propertyTypeName": "dimensionType",
                "options": {
                    "readOnly": false
                }
            }
        },
        "buildingId": {
            "name": "buildingId",
            "objectTypeName": "dimensionBuilding",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "buildingId",
                "targetModelName": "building",
                "propertyTypeName": "building",
                "options": {
                    "readOnly": false
                }
            }
        },
        "building": {
            "name": "building",
            "objectTypeName": "dimensionBuilding",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "buildingId",
                "targetModelName": "building",
                "propertyTypeName": "building",
                "options": {
                    "readOnly": false
                }
            }
        },
        "userCompanyCreatedById": {
            "name": "userCompanyCreatedById",
            "objectTypeName": "dimensionBuilding",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "userCompany",
                "propertyTypeName": "userCompanyCreatedBy",
                "options": {
                    "readOnly": true
                }
            }
        },
        "userCompanyCreatedBy": {
            "name": "userCompanyCreatedBy",
            "objectTypeName": "dimensionBuilding",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "userCompany",
                "propertyTypeName": "userCompanyCreatedBy",
                "options": {
                    "readOnly": true
                }
            }
        },
        "userCompanyUpdatedById": {
            "name": "userCompanyUpdatedById",
            "objectTypeName": "dimensionBuilding",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "userCompany",
                "propertyTypeName": "userCompanyUpdatedBy",
                "options": {
                    "readOnly": true
                }
            }
        },
        "userCompanyUpdatedBy": {
            "name": "userCompanyUpdatedBy",
            "objectTypeName": "dimensionBuilding",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "userCompany",
                "propertyTypeName": "userCompanyUpdatedBy",
                "options": {
                    "readOnly": true
                }
            }
        },
        "companyId": {
            "name": "companyId",
            "objectTypeName": "dimensionBuilding",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "id",
                "targetModelName": "company",
                "propertyTypeName": "company",
                "options": {
                    "readOnly": true
                }
            }
        },
        "company": {
            "name": "company",
            "objectTypeName": "dimensionBuilding",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "id",
                "targetModelName": "company",
                "propertyTypeName": "company",
                "options": {
                    "readOnly": true
                }
            }
        }
    },
    "plural": "dimensionBuildings",
    "camelized": {
        "singular": "dimensionBuilding",
        "plural": "dimensionBuildings",
        "id": "dimensionBuildingId"
    },
    "capitalized": {
        "singular": "DimensionBuilding",
        "plural": "DimensionBuildings",
        "id": "DimensionBuildingId"
    },
    "context": {
        "hasMany": [],
        "belongsTo": [
            "company"
        ]
    }
}
