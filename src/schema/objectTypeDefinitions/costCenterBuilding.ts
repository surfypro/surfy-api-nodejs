
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const costCenterBuildingObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "costCenterBuilding",
    "type": "table",
    "scope": "private",
    "isMasterData": false,
    "isReportingData": true,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "costCenterBuilding",
            "type": "primary-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "roomsArea": {
            "name": "roomsArea",
            "objectTypeName": "costCenterBuilding",
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
            "objectTypeName": "costCenterBuilding",
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
            "objectTypeName": "costCenterBuilding",
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
            "objectTypeName": "costCenterBuilding",
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
            "objectTypeName": "costCenterBuilding",
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
            "objectTypeName": "costCenterBuilding",
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
            "objectTypeName": "costCenterBuilding",
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
            "objectTypeName": "costCenterBuilding",
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
            "objectTypeName": "costCenterBuilding",
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
            "objectTypeName": "costCenterBuilding",
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
            "objectTypeName": "costCenterBuilding",
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
            "objectTypeName": "costCenterBuilding",
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
            "objectTypeName": "costCenterBuilding",
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
            "objectTypeName": "costCenterBuilding",
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
            "objectTypeName": "costCenterBuilding",
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
            "objectTypeName": "costCenterBuilding",
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
            "objectTypeName": "costCenterBuilding",
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
            "objectTypeName": "costCenterBuilding",
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
            "objectTypeName": "costCenterBuilding",
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
            "objectTypeName": "costCenterBuilding",
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
            "objectTypeName": "costCenterBuilding",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "costCenterId": {
            "name": "costCenterId",
            "objectTypeName": "costCenterBuilding",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "costCenterId",
                "targetModelName": "costCenter",
                "propertyTypeName": "costCenter",
                "options": {
                    "readOnly": false
                }
            }
        },
        "costCenter": {
            "name": "costCenter",
            "objectTypeName": "costCenterBuilding",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "costCenterId",
                "targetModelName": "costCenter",
                "propertyTypeName": "costCenter",
                "options": {
                    "readOnly": false
                }
            }
        },
        "buildingId": {
            "name": "buildingId",
            "objectTypeName": "costCenterBuilding",
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
            "objectTypeName": "costCenterBuilding",
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
            "objectTypeName": "costCenterBuilding",
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
            "objectTypeName": "costCenterBuilding",
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
            "objectTypeName": "costCenterBuilding",
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
            "objectTypeName": "costCenterBuilding",
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
            "objectTypeName": "costCenterBuilding",
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
            "objectTypeName": "costCenterBuilding",
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
    "plural": "costCenterBuildings",
    "camelized": {
        "singular": "costCenterBuilding",
        "plural": "costCenterBuildings",
        "id": "costCenterBuildingId"
    },
    "capitalized": {
        "singular": "CostCenterBuilding",
        "plural": "CostCenterBuildings",
        "id": "CostCenterBuildingId"
    },
    "context": {
        "hasMany": [],
        "belongsTo": [
            "company"
        ]
    }
}
