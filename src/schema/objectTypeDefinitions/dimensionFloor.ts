
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const dimensionFloorObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "dimensionFloor",
    "type": "table",
    "scope": "private",
    "isMasterData": false,
    "isReportingData": true,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
        "floorId": {
            "name": "floorId",
            "objectTypeName": "dimensionFloor",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "floorId",
                "targetModelName": "floor",
                "propertyTypeName": "floor",
                "options": {
                    "readOnly": false
                }
            }
        },
        "floor": {
            "name": "floor",
            "objectTypeName": "dimensionFloor",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "floorId",
                "targetModelName": "floor",
                "propertyTypeName": "floor",
                "options": {
                    "readOnly": false
                }
            }
        },
        "userCompanyCreatedById": {
            "name": "userCompanyCreatedById",
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
            "objectTypeName": "dimensionFloor",
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
    "plural": "dimensionFloors",
    "camelized": {
        "singular": "dimensionFloor",
        "plural": "dimensionFloors",
        "id": "dimensionFloorId"
    },
    "capitalized": {
        "singular": "DimensionFloor",
        "plural": "DimensionFloors",
        "id": "DimensionFloorId"
    },
    "context": {
        "hasMany": [],
        "belongsTo": [
            "company"
        ]
    }
}
