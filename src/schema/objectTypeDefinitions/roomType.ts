
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const roomTypeObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "roomType",
    "type": "table",
    "scope": "private",
    "isMasterData": true,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "roomType",
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
            "objectTypeName": "roomType",
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
            "objectTypeName": "roomType",
            "type": "color",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "icon": {
            "name": "icon",
            "objectTypeName": "roomType",
            "type": "icon",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "color3d": {
            "name": "color3d",
            "objectTypeName": "roomType",
            "type": "color",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "displayWallsOn3d": {
            "name": "displayWallsOn3d",
            "objectTypeName": "roomType",
            "type": "boolean",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": true
            }
        },
        "cadence": {
            "name": "cadence",
            "objectTypeName": "roomType",
            "type": "float",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "isBookable": {
            "name": "isBookable",
            "objectTypeName": "roomType",
            "type": "boolean",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": false
            }
        },
        "createdAt": {
            "name": "createdAt",
            "objectTypeName": "roomType",
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
            "objectTypeName": "roomType",
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
            "objectTypeName": "roomType",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "distributionCostTypeId": {
            "name": "distributionCostTypeId",
            "objectTypeName": "roomType",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "distributionCostTypeId",
                "targetModelName": "distributionCostType",
                "propertyTypeName": "distributionCostType",
                "options": {
                    "readOnly": false
                }
            }
        },
        "distributionCostType": {
            "name": "distributionCostType",
            "objectTypeName": "roomType",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "distributionCostTypeId",
                "targetModelName": "distributionCostType",
                "propertyTypeName": "distributionCostType",
                "options": {
                    "readOnly": false
                }
            }
        },
        "userCompanyCreatedById": {
            "name": "userCompanyCreatedById",
            "objectTypeName": "roomType",
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
            "objectTypeName": "roomType",
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
            "objectTypeName": "roomType",
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
            "objectTypeName": "roomType",
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
        "rooms": {
            "name": "rooms",
            "objectTypeName": "roomType",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "roomTypeId",
                "targetModelName": "room",
                "propertyTypeName": "rooms",
                "options": {
                    "readOnly": false
                }
            }
        },
        "roomTypeFloors": {
            "name": "roomTypeFloors",
            "objectTypeName": "roomType",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "roomTypeId",
                "targetModelName": "roomTypeFloor",
                "propertyTypeName": "roomTypeFloors",
                "options": {
                    "readOnly": false
                }
            }
        },
        "roomTypeBuildings": {
            "name": "roomTypeBuildings",
            "objectTypeName": "roomType",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "roomTypeId",
                "targetModelName": "roomTypeBuilding",
                "propertyTypeName": "roomTypeBuildings",
                "options": {
                    "readOnly": false
                }
            }
        },
        "partnerExportMappingToRoomTypes": {
            "name": "partnerExportMappingToRoomTypes",
            "objectTypeName": "roomType",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "roomTypeId",
                "targetModelName": "partnerExportMappingToRoomType",
                "propertyTypeName": "partnerExportMappingToRoomTypes",
                "options": {
                    "readOnly": false
                }
            }
        },
        "companyId": {
            "name": "companyId",
            "objectTypeName": "roomType",
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
            "objectTypeName": "roomType",
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
    "plural": "roomTypes",
    "camelized": {
        "singular": "roomType",
        "plural": "roomTypes",
        "id": "roomTypeId"
    },
    "capitalized": {
        "singular": "RoomType",
        "plural": "RoomTypes",
        "id": "RoomTypeId"
    },
    "context": {
        "hasMany": [
            "room",
            "roomTypeFloor",
            "roomTypeBuilding",
            "partnerExportMappingToRoomType"
        ],
        "belongsTo": [
            "company"
        ]
    }
}
