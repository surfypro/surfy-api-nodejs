
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const buildingObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "building",
    "type": "table",
    "scope": "private",
    "isMasterData": true,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "building",
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
            "objectTypeName": "building",
            "type": "string",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "color": {
            "name": "color",
            "objectTypeName": "building",
            "type": "color",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "surface": {
            "name": "surface",
            "objectTypeName": "building",
            "type": "surface",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "leaseStartDate": {
            "name": "leaseStartDate",
            "objectTypeName": "building",
            "type": "date",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "leaseEndDate": {
            "name": "leaseEndDate",
            "objectTypeName": "building",
            "type": "date",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "purchaseDate": {
            "name": "purchaseDate",
            "objectTypeName": "building",
            "type": "date",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "documents": {
            "name": "documents",
            "objectTypeName": "building",
            "type": "url",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "picture": {
            "name": "picture",
            "objectTypeName": "building",
            "type": "image",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "regulatoryCapacity": {
            "name": "regulatoryCapacity",
            "objectTypeName": "building",
            "type": "integer",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": false,
                "technical": false,
                "defaultValue": 0
            }
        },
        "parkingSpaceCount": {
            "name": "parkingSpaceCount",
            "objectTypeName": "building",
            "type": "integer",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "constructionYear": {
            "name": "constructionYear",
            "objectTypeName": "building",
            "type": "year",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "yearlyCondominiumFees": {
            "name": "yearlyCondominiumFees",
            "objectTypeName": "building",
            "type": "currency",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "yearlyRent": {
            "name": "yearlyRent",
            "objectTypeName": "building",
            "type": "currency",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "yearlyParkingRent": {
            "name": "yearlyParkingRent",
            "objectTypeName": "building",
            "type": "currency",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "yearlyTaxFees": {
            "name": "yearlyTaxFees",
            "objectTypeName": "building",
            "type": "currency",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "yearlyExploitationFees": {
            "name": "yearlyExploitationFees",
            "objectTypeName": "building",
            "type": "currency",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "rentReferenceIndex": {
            "name": "rentReferenceIndex",
            "objectTypeName": "building",
            "type": "float",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "securityDeposit": {
            "name": "securityDeposit",
            "objectTypeName": "building",
            "type": "currency",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "roomsArea": {
            "name": "roomsArea",
            "objectTypeName": "building",
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
            "objectTypeName": "building",
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
            "objectTypeName": "building",
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
            "objectTypeName": "building",
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
            "objectTypeName": "building",
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
            "objectTypeName": "building",
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
            "objectTypeName": "building",
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
            "objectTypeName": "building",
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
            "objectTypeName": "building",
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
            "objectTypeName": "building",
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
            "objectTypeName": "building",
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
            "objectTypeName": "building",
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
            "objectTypeName": "building",
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
            "objectTypeName": "building",
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
            "objectTypeName": "building",
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
            "objectTypeName": "building",
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
            "objectTypeName": "building",
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
            "objectTypeName": "building",
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
        "dimensionPeopleCount": {
            "name": "dimensionPeopleCount",
            "objectTypeName": "building",
            "type": "integer",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "address": {
            "name": "address",
            "objectTypeName": "building",
            "type": "address",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "createdAt": {
            "name": "createdAt",
            "objectTypeName": "building",
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
            "objectTypeName": "building",
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
            "objectTypeName": "building",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "companyId": {
            "name": "companyId",
            "objectTypeName": "building",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "companyId",
                "targetModelName": "company",
                "propertyTypeName": "company",
                "options": {
                    "readOnly": false
                }
            }
        },
        "company": {
            "name": "company",
            "objectTypeName": "building",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "companyId",
                "targetModelName": "company",
                "propertyTypeName": "company",
                "options": {
                    "readOnly": false
                }
            }
        },
        "buildingTypeId": {
            "name": "buildingTypeId",
            "objectTypeName": "building",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "buildingTypeId",
                "targetModelName": "buildingType",
                "propertyTypeName": "buildingType",
                "options": {
                    "readOnly": false
                }
            }
        },
        "buildingType": {
            "name": "buildingType",
            "objectTypeName": "building",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "buildingTypeId",
                "targetModelName": "buildingType",
                "propertyTypeName": "buildingType",
                "options": {
                    "readOnly": false
                }
            }
        },
        "userCompanyOwnerId": {
            "name": "userCompanyOwnerId",
            "objectTypeName": "building",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "userCompanyOwnerId",
                "targetModelName": "userCompany",
                "propertyTypeName": "userCompanyOwner",
                "options": {
                    "readOnly": false
                }
            }
        },
        "userCompanyOwner": {
            "name": "userCompanyOwner",
            "objectTypeName": "building",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyOwnerId",
                "targetModelName": "userCompany",
                "propertyTypeName": "userCompanyOwner",
                "options": {
                    "readOnly": false
                }
            }
        },
        "jupUiLayoutId": {
            "name": "jupUiLayoutId",
            "objectTypeName": "building",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "jupUiLayoutId",
                "targetModelName": "jupUiLayout",
                "propertyTypeName": "jupUiLayout",
                "options": {
                    "readOnly": false
                }
            }
        },
        "jupUiLayout": {
            "name": "jupUiLayout",
            "objectTypeName": "building",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "jupUiLayoutId",
                "targetModelName": "jupUiLayout",
                "propertyTypeName": "jupUiLayout",
                "options": {
                    "readOnly": false
                }
            }
        },
        "buildingId": {
            "name": "buildingId",
            "objectTypeName": "building",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
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
            "objectTypeName": "building",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
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
        "buildings": {
            "name": "buildings",
            "objectTypeName": "building",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "buildingId",
                "targetModelName": "building",
                "propertyTypeName": "buildings",
                "options": {
                    "readOnly": false
                }
            }
        },
        "userCompanyCreatedById": {
            "name": "userCompanyCreatedById",
            "objectTypeName": "building",
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
            "objectTypeName": "building",
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
            "objectTypeName": "building",
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
            "objectTypeName": "building",
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
        "floors": {
            "name": "floors",
            "objectTypeName": "building",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "buildingId",
                "targetModelName": "floor",
                "propertyTypeName": "floors",
                "options": {
                    "readOnly": false
                }
            }
        },
        "costCenterBuildings": {
            "name": "costCenterBuildings",
            "objectTypeName": "building",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "buildingId",
                "targetModelName": "costCenterBuilding",
                "propertyTypeName": "costCenterBuildings",
                "options": {
                    "readOnly": false
                }
            }
        },
        "dimensionBuildings": {
            "name": "dimensionBuildings",
            "objectTypeName": "building",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "buildingId",
                "targetModelName": "dimensionBuilding",
                "propertyTypeName": "dimensionBuildings",
                "options": {
                    "readOnly": false
                }
            }
        },
        "facts": {
            "name": "facts",
            "objectTypeName": "building",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "buildingId",
                "targetModelName": "fact",
                "propertyTypeName": "facts",
                "options": {
                    "readOnly": false
                }
            }
        },
        "organizationBuildings": {
            "name": "organizationBuildings",
            "objectTypeName": "building",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "buildingId",
                "targetModelName": "organizationBuilding",
                "propertyTypeName": "organizationBuildings",
                "options": {
                    "readOnly": false
                }
            }
        },
        "roomTypeBuildings": {
            "name": "roomTypeBuildings",
            "objectTypeName": "building",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "buildingId",
                "targetModelName": "roomTypeBuilding",
                "propertyTypeName": "roomTypeBuildings",
                "options": {
                    "readOnly": false
                }
            }
        },
        "personToBuildings": {
            "name": "personToBuildings",
            "objectTypeName": "building",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "buildingId",
                "targetModelName": "personToBuilding",
                "propertyTypeName": "personToBuildings",
                "options": {
                    "readOnly": false
                }
            }
        },
        "dimensionTypeToBuildings": {
            "name": "dimensionTypeToBuildings",
            "objectTypeName": "building",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "buildingId",
                "targetModelName": "dimensionTypeToBuilding",
                "propertyTypeName": "dimensionTypeToBuildings",
                "options": {
                    "readOnly": false
                }
            }
        },
        "contentRoleToBuildings": {
            "name": "contentRoleToBuildings",
            "objectTypeName": "building",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "buildingId",
                "targetModelName": "contentRoleToBuilding",
                "propertyTypeName": "contentRoleToBuildings",
                "options": {
                    "readOnly": false
                }
            }
        }
    },
    "plural": "buildings",
    "camelized": {
        "singular": "building",
        "plural": "buildings",
        "id": "buildingId"
    },
    "capitalized": {
        "singular": "Building",
        "plural": "Buildings",
        "id": "BuildingId"
    },
    "context": {
        "hasMany": [
            "building",
            "floor",
            "costCenterBuilding",
            "dimensionBuilding",
            "fact",
            "organizationBuilding",
            "roomTypeBuilding",
            "personToBuilding",
            "dimensionTypeToBuilding",
            "contentRoleToBuilding"
        ],
        "belongsTo": [
            "company"
        ]
    }
}
