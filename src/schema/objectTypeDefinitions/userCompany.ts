
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const userCompanyObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "userCompany",
    "type": "many-to-many",
    "scope": "private",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "userCompany",
            "type": "primary-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "createdAt": {
            "name": "createdAt",
            "objectTypeName": "userCompany",
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
            "objectTypeName": "userCompany",
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
            "objectTypeName": "userCompany",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "roomConnectorCreatedBies": {
            "name": "roomConnectorCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "roomConnector",
                "propertyTypeName": "roomConnectorCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "roomConnectorUpdatedBies": {
            "name": "roomConnectorUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "roomConnector",
                "propertyTypeName": "roomConnectorUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "userId": {
            "name": "userId",
            "objectTypeName": "userCompany",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "userId",
                "targetModelName": "user",
                "propertyTypeName": "user",
                "options": {
                    "readOnly": false
                }
            }
        },
        "user": {
            "name": "user",
            "objectTypeName": "userCompany",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userId",
                "targetModelName": "user",
                "propertyTypeName": "user",
                "options": {
                    "readOnly": false
                }
            }
        },
        "companyId": {
            "name": "companyId",
            "objectTypeName": "userCompany",
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
            "objectTypeName": "userCompany",
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
        "userCompanyCreatedById": {
            "name": "userCompanyCreatedById",
            "objectTypeName": "userCompany",
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
            "objectTypeName": "userCompany",
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
        "userCompanyCreatedBies": {
            "name": "userCompanyCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "userCompany",
                "propertyTypeName": "userCompanyCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "userCompanyUpdatedById": {
            "name": "userCompanyUpdatedById",
            "objectTypeName": "userCompany",
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
            "objectTypeName": "userCompany",
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
        "userCompanyUpdatedBies": {
            "name": "userCompanyUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "userCompany",
                "propertyTypeName": "userCompanyUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "personCompanyCreatedBies": {
            "name": "personCompanyCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "personCompany",
                "propertyTypeName": "personCompanyCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "personCompanyUpdatedBies": {
            "name": "personCompanyUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "personCompany",
                "propertyTypeName": "personCompanyUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "buildingTypeCreatedBies": {
            "name": "buildingTypeCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "buildingType",
                "propertyTypeName": "buildingTypeCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "buildingTypeUpdatedBies": {
            "name": "buildingTypeUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "buildingType",
                "propertyTypeName": "buildingTypeUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "organizationCreatedBies": {
            "name": "organizationCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "organization",
                "propertyTypeName": "organizationCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "organizationUpdatedBies": {
            "name": "organizationUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "organization",
                "propertyTypeName": "organizationUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "itemTypeFamilyCreatedBies": {
            "name": "itemTypeFamilyCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "itemTypeFamily",
                "propertyTypeName": "itemTypeFamilyCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "itemTypeFamilyUpdatedBies": {
            "name": "itemTypeFamilyUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "itemTypeFamily",
                "propertyTypeName": "itemTypeFamilyUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "manufacturerCreatedBies": {
            "name": "manufacturerCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "manufacturer",
                "propertyTypeName": "manufacturerCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "manufacturerUpdatedBies": {
            "name": "manufacturerUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "manufacturer",
                "propertyTypeName": "manufacturerUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "itemTypeCreatedBies": {
            "name": "itemTypeCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "itemType",
                "propertyTypeName": "itemTypeCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "itemTypeUpdatedBies": {
            "name": "itemTypeUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "itemType",
                "propertyTypeName": "itemTypeUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "buildingOwners": {
            "name": "buildingOwners",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyOwnerId",
                "targetModelName": "building",
                "propertyTypeName": "buildingOwners",
                "options": {
                    "readOnly": false
                }
            }
        },
        "buildingCreatedBies": {
            "name": "buildingCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "building",
                "propertyTypeName": "buildingCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "buildingUpdatedBies": {
            "name": "buildingUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "building",
                "propertyTypeName": "buildingUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "mapScaleCreatedBies": {
            "name": "mapScaleCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "mapScale",
                "propertyTypeName": "mapScaleCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "mapScaleUpdatedBies": {
            "name": "mapScaleUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "mapScale",
                "propertyTypeName": "mapScaleUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "structureCreatedBies": {
            "name": "structureCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "structure",
                "propertyTypeName": "structureCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "structureUpdatedBies": {
            "name": "structureUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "structure",
                "propertyTypeName": "structureUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "structurePointCreatedBies": {
            "name": "structurePointCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "structurePoint",
                "propertyTypeName": "structurePointCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "structurePointUpdatedBies": {
            "name": "structurePointUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "structurePoint",
                "propertyTypeName": "structurePointUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "floorCreatedBies": {
            "name": "floorCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "floor",
                "propertyTypeName": "floorCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "floorUpdatedBies": {
            "name": "floorUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "floor",
                "propertyTypeName": "floorUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "distributionCostTypeCreatedBies": {
            "name": "distributionCostTypeCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "distributionCostType",
                "propertyTypeName": "distributionCostTypeCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "distributionCostTypeUpdatedBies": {
            "name": "distributionCostTypeUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "distributionCostType",
                "propertyTypeName": "distributionCostTypeUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "roomTypeCreatedBies": {
            "name": "roomTypeCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "roomType",
                "propertyTypeName": "roomTypeCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "roomTypeUpdatedBies": {
            "name": "roomTypeUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "roomType",
                "propertyTypeName": "roomTypeUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "costCenterCreatedBies": {
            "name": "costCenterCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "costCenter",
                "propertyTypeName": "costCenterCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "costCenterUpdatedBies": {
            "name": "costCenterUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "costCenter",
                "propertyTypeName": "costCenterUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "costCenterBuildingCreatedBies": {
            "name": "costCenterBuildingCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "costCenterBuilding",
                "propertyTypeName": "costCenterBuildingCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "costCenterBuildingUpdatedBies": {
            "name": "costCenterBuildingUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "costCenterBuilding",
                "propertyTypeName": "costCenterBuildingUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "costCenterFloorCreatedBies": {
            "name": "costCenterFloorCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "costCenterFloor",
                "propertyTypeName": "costCenterFloorCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "costCenterFloorUpdatedBies": {
            "name": "costCenterFloorUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "costCenterFloor",
                "propertyTypeName": "costCenterFloorUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "roomCreatedBies": {
            "name": "roomCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "room",
                "propertyTypeName": "roomCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "roomUpdatedBies": {
            "name": "roomUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "room",
                "propertyTypeName": "roomUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "roomPointCreatedBies": {
            "name": "roomPointCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "roomPoint",
                "propertyTypeName": "roomPointCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "roomPointUpdatedBies": {
            "name": "roomPointUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "roomPoint",
                "propertyTypeName": "roomPointUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "roomPointRoomCreatedBies": {
            "name": "roomPointRoomCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "roomPointRoom",
                "propertyTypeName": "roomPointRoomCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "roomPointRoomUpdatedBies": {
            "name": "roomPointRoomUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "roomPointRoom",
                "propertyTypeName": "roomPointRoomUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "roomPointSegmentCreatedBies": {
            "name": "roomPointSegmentCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "roomPointSegment",
                "propertyTypeName": "roomPointSegmentCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "roomPointSegmentUpdatedBies": {
            "name": "roomPointSegmentUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "roomPointSegment",
                "propertyTypeName": "roomPointSegmentUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "itemTypePointCreatedBies": {
            "name": "itemTypePointCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "itemTypePoint",
                "propertyTypeName": "itemTypePointCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "itemTypePointUpdatedBies": {
            "name": "itemTypePointUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "itemTypePoint",
                "propertyTypeName": "itemTypePointUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "dimensionTypeCreatedBies": {
            "name": "dimensionTypeCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "dimensionType",
                "propertyTypeName": "dimensionTypeCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "dimensionTypeUpdatedBies": {
            "name": "dimensionTypeUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "dimensionType",
                "propertyTypeName": "dimensionTypeUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "dimensionCreatedBies": {
            "name": "dimensionCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "dimension",
                "propertyTypeName": "dimensionCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "dimensionUpdatedBies": {
            "name": "dimensionUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "dimension",
                "propertyTypeName": "dimensionUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "dimensionRoomCreatedBies": {
            "name": "dimensionRoomCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "dimensionRoom",
                "propertyTypeName": "dimensionRoomCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "dimensionRoomUpdatedBies": {
            "name": "dimensionRoomUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "dimensionRoom",
                "propertyTypeName": "dimensionRoomUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "dimensionFloorCreatedBies": {
            "name": "dimensionFloorCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "dimensionFloor",
                "propertyTypeName": "dimensionFloorCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "dimensionFloorUpdatedBies": {
            "name": "dimensionFloorUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "dimensionFloor",
                "propertyTypeName": "dimensionFloorUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "dimensionBuildingCreatedBies": {
            "name": "dimensionBuildingCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "dimensionBuilding",
                "propertyTypeName": "dimensionBuildingCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "dimensionBuildingUpdatedBies": {
            "name": "dimensionBuildingUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "dimensionBuilding",
                "propertyTypeName": "dimensionBuildingUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "factTypeCreatedBies": {
            "name": "factTypeCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "factType",
                "propertyTypeName": "factTypeCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "factTypeUpdatedBies": {
            "name": "factTypeUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "factType",
                "propertyTypeName": "factTypeUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "factCreatedBies": {
            "name": "factCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "fact",
                "propertyTypeName": "factCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "factUpdatedBies": {
            "name": "factUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "fact",
                "propertyTypeName": "factUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "personStateCreatedBies": {
            "name": "personStateCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "personState",
                "propertyTypeName": "personStateCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "personStateUpdatedBies": {
            "name": "personStateUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "personState",
                "propertyTypeName": "personStateUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "personSecurityProfileCreatedBies": {
            "name": "personSecurityProfileCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "personSecurityProfile",
                "propertyTypeName": "personSecurityProfileCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "personSecurityProfileUpdatedBies": {
            "name": "personSecurityProfileUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "personSecurityProfile",
                "propertyTypeName": "personSecurityProfileUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "personCreatedBies": {
            "name": "personCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "person",
                "propertyTypeName": "personCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "personUpdatedBies": {
            "name": "personUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "person",
                "propertyTypeName": "personUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "personToPersonTypeCreatedBies": {
            "name": "personToPersonTypeCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "personToPersonType",
                "propertyTypeName": "personToPersonTypeCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "personToPersonTypeUpdatedBies": {
            "name": "personToPersonTypeUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "personToPersonType",
                "propertyTypeName": "personToPersonTypeUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "personToPersonCreatedBies": {
            "name": "personToPersonCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "personToPerson",
                "propertyTypeName": "personToPersonCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "personToPersonUpdatedBies": {
            "name": "personToPersonUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "personToPerson",
                "propertyTypeName": "personToPersonUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "roomAffectationCreatedBies": {
            "name": "roomAffectationCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "roomAffectation",
                "propertyTypeName": "roomAffectationCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "roomAffectationUpdatedBies": {
            "name": "roomAffectationUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "roomAffectation",
                "propertyTypeName": "roomAffectationUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "workplaceTypeCreatedBies": {
            "name": "workplaceTypeCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "workplaceType",
                "propertyTypeName": "workplaceTypeCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "workplaceTypeUpdatedBies": {
            "name": "workplaceTypeUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "workplaceType",
                "propertyTypeName": "workplaceTypeUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "workplaceTypeItemTypeCreatedBies": {
            "name": "workplaceTypeItemTypeCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "workplaceTypeItemType",
                "propertyTypeName": "workplaceTypeItemTypeCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "workplaceTypeItemTypeUpdatedBies": {
            "name": "workplaceTypeItemTypeUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "workplaceTypeItemType",
                "propertyTypeName": "workplaceTypeItemTypeUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "workplaceCreatedBies": {
            "name": "workplaceCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "workplace",
                "propertyTypeName": "workplaceCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "workplaceUpdatedBies": {
            "name": "workplaceUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "workplace",
                "propertyTypeName": "workplaceUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "itemCreatedBies": {
            "name": "itemCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "item",
                "propertyTypeName": "itemCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "itemUpdatedBies": {
            "name": "itemUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "item",
                "propertyTypeName": "itemUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "workplaceAffectationCreatedBies": {
            "name": "workplaceAffectationCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "workplaceAffectation",
                "propertyTypeName": "workplaceAffectationCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "workplaceAffectationUpdatedBies": {
            "name": "workplaceAffectationUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "workplaceAffectation",
                "propertyTypeName": "workplaceAffectationUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "organizationFloorCreatedBies": {
            "name": "organizationFloorCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "organizationFloor",
                "propertyTypeName": "organizationFloorCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "organizationFloorUpdatedBies": {
            "name": "organizationFloorUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "organizationFloor",
                "propertyTypeName": "organizationFloorUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "organizationBuildingCreatedBies": {
            "name": "organizationBuildingCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "organizationBuilding",
                "propertyTypeName": "organizationBuildingCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "organizationBuildingUpdatedBies": {
            "name": "organizationBuildingUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "organizationBuilding",
                "propertyTypeName": "organizationBuildingUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "roomTypeFloorCreatedBies": {
            "name": "roomTypeFloorCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "roomTypeFloor",
                "propertyTypeName": "roomTypeFloorCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "roomTypeFloorUpdatedBies": {
            "name": "roomTypeFloorUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "roomTypeFloor",
                "propertyTypeName": "roomTypeFloorUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "roomTypeBuildingCreatedBies": {
            "name": "roomTypeBuildingCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "roomTypeBuilding",
                "propertyTypeName": "roomTypeBuildingCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "roomTypeBuildingUpdatedBies": {
            "name": "roomTypeBuildingUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "roomTypeBuilding",
                "propertyTypeName": "roomTypeBuildingUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "itemToPersonCreatedBies": {
            "name": "itemToPersonCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "itemToPerson",
                "propertyTypeName": "itemToPersonCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "itemToPersonUpdatedBies": {
            "name": "itemToPersonUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "itemToPerson",
                "propertyTypeName": "itemToPersonUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "personToBuildingCreatedBies": {
            "name": "personToBuildingCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "personToBuilding",
                "propertyTypeName": "personToBuildingCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "personToBuildingUpdatedBies": {
            "name": "personToBuildingUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "personToBuilding",
                "propertyTypeName": "personToBuildingUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "dimensionToPersonCreatedBies": {
            "name": "dimensionToPersonCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "dimensionToPerson",
                "propertyTypeName": "dimensionToPersonCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "dimensionToPersonUpdatedBies": {
            "name": "dimensionToPersonUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "dimensionToPerson",
                "propertyTypeName": "dimensionToPersonUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "dimensionTypeToBuildingCreatedBies": {
            "name": "dimensionTypeToBuildingCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "dimensionTypeToBuilding",
                "propertyTypeName": "dimensionTypeToBuildingCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "dimensionTypeToBuildingUpdatedBies": {
            "name": "dimensionTypeToBuildingUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "dimensionTypeToBuilding",
                "propertyTypeName": "dimensionTypeToBuildingUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "contentRoleCreatedBies": {
            "name": "contentRoleCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "contentRole",
                "propertyTypeName": "contentRoleCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "contentRoleUpdatedBies": {
            "name": "contentRoleUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "contentRole",
                "propertyTypeName": "contentRoleUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "jupUserCompanyToJupRoles": {
            "name": "jupUserCompanyToJupRoles",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyId",
                "targetModelName": "jupUserCompanyToJupRole",
                "propertyTypeName": "jupUserCompanyToJupRoles",
                "options": {
                    "readOnly": false
                }
            }
        },
        "jupUserCompanyToJupRoleCreatedBies": {
            "name": "jupUserCompanyToJupRoleCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "jupUserCompanyToJupRole",
                "propertyTypeName": "jupUserCompanyToJupRoleCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "jupUserCompanyToJupRoleUpdatedBies": {
            "name": "jupUserCompanyToJupRoleUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "jupUserCompanyToJupRole",
                "propertyTypeName": "jupUserCompanyToJupRoleUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "contentRoleToBuildingCreatedBies": {
            "name": "contentRoleToBuildingCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "contentRoleToBuilding",
                "propertyTypeName": "contentRoleToBuildingCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "contentRoleToBuildingUpdatedBies": {
            "name": "contentRoleToBuildingUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "contentRoleToBuilding",
                "propertyTypeName": "contentRoleToBuildingUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "contentRoleToUserCompanies": {
            "name": "contentRoleToUserCompanies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyId",
                "targetModelName": "contentRoleToUserCompany",
                "propertyTypeName": "contentRoleToUserCompanies",
                "options": {
                    "readOnly": false
                }
            }
        },
        "contentRoleToUserCompanyCreatedBies": {
            "name": "contentRoleToUserCompanyCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "contentRoleToUserCompany",
                "propertyTypeName": "contentRoleToUserCompanyCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "contentRoleToUserCompanyUpdatedBies": {
            "name": "contentRoleToUserCompanyUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "contentRoleToUserCompany",
                "propertyTypeName": "contentRoleToUserCompanyUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "contentRoleToFloorCreatedBies": {
            "name": "contentRoleToFloorCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "contentRoleToFloor",
                "propertyTypeName": "contentRoleToFloorCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "contentRoleToFloorUpdatedBies": {
            "name": "contentRoleToFloorUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "contentRoleToFloor",
                "propertyTypeName": "contentRoleToFloorUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "partnerApiCredentialCreatedBies": {
            "name": "partnerApiCredentialCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "partnerApiCredential",
                "propertyTypeName": "partnerApiCredentialCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "partnerApiCredentialUpdatedBies": {
            "name": "partnerApiCredentialUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "partnerApiCredential",
                "propertyTypeName": "partnerApiCredentialUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "apiUserCreatedBies": {
            "name": "apiUserCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "apiUser",
                "propertyTypeName": "apiUserCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "apiUserUpdatedBies": {
            "name": "apiUserUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "apiUser",
                "propertyTypeName": "apiUserUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "apiUserToJupRoleCreatedBies": {
            "name": "apiUserToJupRoleCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "apiUserToJupRole",
                "propertyTypeName": "apiUserToJupRoleCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "apiUserToJupRoleUpdatedBies": {
            "name": "apiUserToJupRoleUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "apiUserToJupRole",
                "propertyTypeName": "apiUserToJupRoleUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "apiUserToContentRoleCreatedBies": {
            "name": "apiUserToContentRoleCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "apiUserToContentRole",
                "propertyTypeName": "apiUserToContentRoleCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "apiUserToContentRoleUpdatedBies": {
            "name": "apiUserToContentRoleUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "apiUserToContentRole",
                "propertyTypeName": "apiUserToContentRoleUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "jupUiTenantOperationCreatedBies": {
            "name": "jupUiTenantOperationCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "jupUiTenantOperation",
                "propertyTypeName": "jupUiTenantOperationCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "jupUiTenantOperationUpdatedBies": {
            "name": "jupUiTenantOperationUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "jupUiTenantOperation",
                "propertyTypeName": "jupUiTenantOperationUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "contentRoleToJupUiTenantOperationCreatedBies": {
            "name": "contentRoleToJupUiTenantOperationCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "contentRoleToJupUiTenantOperation",
                "propertyTypeName": "contentRoleToJupUiTenantOperationCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "contentRoleToJupUiTenantOperationUpdatedBies": {
            "name": "contentRoleToJupUiTenantOperationUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "contentRoleToJupUiTenantOperation",
                "propertyTypeName": "contentRoleToJupUiTenantOperationUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "userRegistrationTenantRuleCreatedBies": {
            "name": "userRegistrationTenantRuleCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "userRegistrationTenantRule",
                "propertyTypeName": "userRegistrationTenantRuleCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "userRegistrationTenantRuleUpdatedBies": {
            "name": "userRegistrationTenantRuleUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "userRegistrationTenantRule",
                "propertyTypeName": "userRegistrationTenantRuleUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "userRegistrationTenantRuleToJupRoleCreatedBies": {
            "name": "userRegistrationTenantRuleToJupRoleCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "userRegistrationTenantRuleToJupRole",
                "propertyTypeName": "userRegistrationTenantRuleToJupRoleCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "userRegistrationTenantRuleToJupRoleUpdatedBies": {
            "name": "userRegistrationTenantRuleToJupRoleUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "userRegistrationTenantRuleToJupRole",
                "propertyTypeName": "userRegistrationTenantRuleToJupRoleUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "userRegistrationTenantRuleToContentRoleCreatedBies": {
            "name": "userRegistrationTenantRuleToContentRoleCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "userRegistrationTenantRuleToContentRole",
                "propertyTypeName": "userRegistrationTenantRuleToContentRoleCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "userRegistrationTenantRuleToContentRoleUpdatedBies": {
            "name": "userRegistrationTenantRuleToContentRoleUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "userRegistrationTenantRuleToContentRole",
                "propertyTypeName": "userRegistrationTenantRuleToContentRoleUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "partnerExportMappingConfigurationCreatedBies": {
            "name": "partnerExportMappingConfigurationCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "partnerExportMappingConfiguration",
                "propertyTypeName": "partnerExportMappingConfigurationCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "partnerExportMappingConfigurationUpdatedBies": {
            "name": "partnerExportMappingConfigurationUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "partnerExportMappingConfiguration",
                "propertyTypeName": "partnerExportMappingConfigurationUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "partnerExportMappingCreatedBies": {
            "name": "partnerExportMappingCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "partnerExportMapping",
                "propertyTypeName": "partnerExportMappingCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "partnerExportMappingUpdatedBies": {
            "name": "partnerExportMappingUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "partnerExportMapping",
                "propertyTypeName": "partnerExportMappingUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "partnerExportMappingToRoomTypeCreatedBies": {
            "name": "partnerExportMappingToRoomTypeCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "partnerExportMappingToRoomType",
                "propertyTypeName": "partnerExportMappingToRoomTypeCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "partnerExportMappingToRoomTypeUpdatedBies": {
            "name": "partnerExportMappingToRoomTypeUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "partnerExportMappingToRoomType",
                "propertyTypeName": "partnerExportMappingToRoomTypeUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "partnerExportMappingConfigurationToFloorCreatedBies": {
            "name": "partnerExportMappingConfigurationToFloorCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "partnerExportMappingConfigurationToFloor",
                "propertyTypeName": "partnerExportMappingConfigurationToFloorCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "partnerExportMappingConfigurationToFloorUpdatedBies": {
            "name": "partnerExportMappingConfigurationToFloorUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "partnerExportMappingConfigurationToFloor",
                "propertyTypeName": "partnerExportMappingConfigurationToFloorUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "itemFactCreatedBies": {
            "name": "itemFactCreatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyCreatedById",
                "targetModelName": "itemFact",
                "propertyTypeName": "itemFactCreatedBies",
                "options": {
                    "readOnly": true
                }
            }
        },
        "itemFactUpdatedBies": {
            "name": "itemFactUpdatedBies",
            "objectTypeName": "userCompany",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userCompanyUpdatedById",
                "targetModelName": "itemFact",
                "propertyTypeName": "itemFactUpdatedBies",
                "options": {
                    "readOnly": true
                }
            }
        }
    },
    "plural": "userCompanies",
    "camelized": {
        "singular": "userCompany",
        "plural": "userCompanies",
        "id": "userCompanyId"
    },
    "capitalized": {
        "singular": "UserCompany",
        "plural": "UserCompanies",
        "id": "UserCompanyId"
    },
    "context": {
        "hasMany": [
            "roomConnector",
            "userCompany",
            "personCompany",
            "buildingType",
            "organization",
            "itemTypeFamily",
            "manufacturer",
            "itemType",
            "building",
            "mapScale",
            "structure",
            "structurePoint",
            "floor",
            "distributionCostType",
            "roomType",
            "costCenter",
            "costCenterBuilding",
            "costCenterFloor",
            "room",
            "roomPoint",
            "roomPointRoom",
            "roomPointSegment",
            "itemTypePoint",
            "dimensionType",
            "dimension",
            "dimensionRoom",
            "dimensionFloor",
            "dimensionBuilding",
            "factType",
            "fact",
            "personState",
            "personSecurityProfile",
            "person",
            "personToPersonType",
            "personToPerson",
            "roomAffectation",
            "workplaceType",
            "workplaceTypeItemType",
            "workplace",
            "item",
            "workplaceAffectation",
            "organizationFloor",
            "organizationBuilding",
            "roomTypeFloor",
            "roomTypeBuilding",
            "itemToPerson",
            "personToBuilding",
            "dimensionToPerson",
            "dimensionTypeToBuilding",
            "contentRole",
            "jupUserCompanyToJupRole",
            "contentRoleToBuilding",
            "contentRoleToUserCompany",
            "contentRoleToFloor",
            "partnerApiCredential",
            "apiUser",
            "apiUserToJupRole",
            "apiUserToContentRole",
            "jupUiTenantOperation",
            "contentRoleToJupUiTenantOperation",
            "userRegistrationTenantRule",
            "userRegistrationTenantRuleToJupRole",
            "userRegistrationTenantRuleToContentRole",
            "partnerExportMappingConfiguration",
            "partnerExportMapping",
            "partnerExportMappingToRoomType",
            "partnerExportMappingConfigurationToFloor",
            "itemFact"
        ],
        "belongsTo": [
            "company"
        ]
    }
}
