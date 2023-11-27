
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const floorObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "floor",
    "type": "table",
    "scope": "private",
    "isMasterData": true,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "floor",
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
            "objectTypeName": "floor",
            "type": "string",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "level": {
            "name": "level",
            "objectTypeName": "floor",
            "type": "integer",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "height": {
            "name": "height",
            "objectTypeName": "floor",
            "type": "distance",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "unit": {
                    "type": "distance",
                    "value": "centimeter"
                },
                "defaultValue": 240
            }
        },
        "regulatoryCapacity": {
            "name": "regulatoryCapacity",
            "objectTypeName": "floor",
            "type": "integer",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": 0
            }
        },
        "roomsArea": {
            "name": "roomsArea",
            "objectTypeName": "floor",
            "type": "surface",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "roomsCount": {
            "name": "roomsCount",
            "objectTypeName": "floor",
            "type": "integer-count",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "workplacesCount": {
            "name": "workplacesCount",
            "objectTypeName": "floor",
            "type": "integer-count",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "workplacesRatio": {
            "name": "workplacesRatio",
            "objectTypeName": "floor",
            "type": "surface-by-workplace",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "peopleCount": {
            "name": "peopleCount",
            "objectTypeName": "floor",
            "type": "integer-count",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "seatsCount": {
            "name": "seatsCount",
            "objectTypeName": "floor",
            "type": "integer-count",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "peopleRatio": {
            "name": "peopleRatio",
            "objectTypeName": "floor",
            "type": "surface-by-people",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "occupancyRate": {
            "name": "occupancyRate",
            "objectTypeName": "floor",
            "type": "percentage",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "expansionRatio": {
            "name": "expansionRatio",
            "objectTypeName": "floor",
            "type": "percentage0-1",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "freeWorkplacesCount": {
            "name": "freeWorkplacesCount",
            "objectTypeName": "floor",
            "type": "integer-count",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "flexWorkplacesCount": {
            "name": "flexWorkplacesCount",
            "objectTypeName": "floor",
            "type": "integer-count",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "sharedWorkplacesCount": {
            "name": "sharedWorkplacesCount",
            "objectTypeName": "floor",
            "type": "integer-count",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "sharedWorkplacesRatio": {
            "name": "sharedWorkplacesRatio",
            "objectTypeName": "floor",
            "type": "percentage",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "transitWorkplacesCount": {
            "name": "transitWorkplacesCount",
            "objectTypeName": "floor",
            "type": "integer-count",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "flexRatio": {
            "name": "flexRatio",
            "objectTypeName": "floor",
            "type": "percentage",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "seatsPeopleRatio": {
            "name": "seatsPeopleRatio",
            "objectTypeName": "floor",
            "type": "percentage0-1",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "totalPeopleCount": {
            "name": "totalPeopleCount",
            "objectTypeName": "floor",
            "type": "integer-count",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "carbonFootprint": {
            "name": "carbonFootprint",
            "objectTypeName": "floor",
            "type": "weight",
            "options": {
                "mandatory": false,
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
        "backgroundLayout": {
            "name": "backgroundLayout",
            "objectTypeName": "floor",
            "type": "image",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "backgroundLayoutOpacity": {
            "name": "backgroundLayoutOpacity",
            "objectTypeName": "floor",
            "type": "percentage",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": 1
            }
        },
        "createdAt": {
            "name": "createdAt",
            "objectTypeName": "floor",
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
            "objectTypeName": "floor",
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
            "objectTypeName": "floor",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "buildingId": {
            "name": "buildingId",
            "objectTypeName": "floor",
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
            "objectTypeName": "floor",
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
        "mapScaleId": {
            "name": "mapScaleId",
            "objectTypeName": "floor",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "mapScaleId",
                "targetModelName": "mapScale",
                "propertyTypeName": "mapScale",
                "options": {
                    "readOnly": false
                }
            }
        },
        "mapScale": {
            "name": "mapScale",
            "objectTypeName": "floor",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "mapScaleId",
                "targetModelName": "mapScale",
                "propertyTypeName": "mapScale",
                "options": {
                    "readOnly": false
                }
            }
        },
        "structureId": {
            "name": "structureId",
            "objectTypeName": "floor",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "structureId",
                "targetModelName": "structure",
                "propertyTypeName": "structure",
                "options": {
                    "readOnly": false
                }
            }
        },
        "structure": {
            "name": "structure",
            "objectTypeName": "floor",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "structureId",
                "targetModelName": "structure",
                "propertyTypeName": "structure",
                "options": {
                    "readOnly": false
                }
            }
        },
        "userCompanyCreatedById": {
            "name": "userCompanyCreatedById",
            "objectTypeName": "floor",
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
            "objectTypeName": "floor",
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
            "objectTypeName": "floor",
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
            "objectTypeName": "floor",
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
        "costCenterFloors": {
            "name": "costCenterFloors",
            "objectTypeName": "floor",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "floorId",
                "targetModelName": "costCenterFloor",
                "propertyTypeName": "costCenterFloors",
                "options": {
                    "readOnly": false
                }
            }
        },
        "rooms": {
            "name": "rooms",
            "objectTypeName": "floor",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "floorId",
                "targetModelName": "room",
                "propertyTypeName": "rooms",
                "options": {
                    "readOnly": false
                }
            }
        },
        "roomPoints": {
            "name": "roomPoints",
            "objectTypeName": "floor",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "floorId",
                "targetModelName": "roomPoint",
                "propertyTypeName": "roomPoints",
                "options": {
                    "readOnly": false
                }
            }
        },
        "dimensionFloors": {
            "name": "dimensionFloors",
            "objectTypeName": "floor",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "floorId",
                "targetModelName": "dimensionFloor",
                "propertyTypeName": "dimensionFloors",
                "options": {
                    "readOnly": false
                }
            }
        },
        "organizationFloors": {
            "name": "organizationFloors",
            "objectTypeName": "floor",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "floorId",
                "targetModelName": "organizationFloor",
                "propertyTypeName": "organizationFloors",
                "options": {
                    "readOnly": false
                }
            }
        },
        "roomTypeFloors": {
            "name": "roomTypeFloors",
            "objectTypeName": "floor",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "floorId",
                "targetModelName": "roomTypeFloor",
                "propertyTypeName": "roomTypeFloors",
                "options": {
                    "readOnly": false
                }
            }
        },
        "contentRoleToFloors": {
            "name": "contentRoleToFloors",
            "objectTypeName": "floor",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "floorId",
                "targetModelName": "contentRoleToFloor",
                "propertyTypeName": "contentRoleToFloors",
                "options": {
                    "readOnly": false
                }
            }
        },
        "partnerExportMappingConfigurationToFloors": {
            "name": "partnerExportMappingConfigurationToFloors",
            "objectTypeName": "floor",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "floorId",
                "targetModelName": "partnerExportMappingConfigurationToFloor",
                "propertyTypeName": "partnerExportMappingConfigurationToFloors",
                "options": {
                    "readOnly": false
                }
            }
        },
        "companyId": {
            "name": "companyId",
            "objectTypeName": "floor",
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
            "objectTypeName": "floor",
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
    "plural": "floors",
    "camelized": {
        "singular": "floor",
        "plural": "floors",
        "id": "floorId"
    },
    "capitalized": {
        "singular": "Floor",
        "plural": "Floors",
        "id": "FloorId"
    },
    "context": {
        "hasMany": [
            "costCenterFloor",
            "room",
            "roomPoint",
            "dimensionFloor",
            "organizationFloor",
            "roomTypeFloor",
            "contentRoleToFloor",
            "partnerExportMappingConfigurationToFloor"
        ],
        "belongsTo": [
            "company"
        ]
    }
}
