
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const organizationFloorObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "organizationFloor",
    "type": "table",
    "scope": "private",
    "isMasterData": false,
    "isReportingData": true,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "organizationFloor",
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
            "objectTypeName": "organizationFloor",
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
            "objectTypeName": "organizationFloor",
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
            "objectTypeName": "organizationFloor",
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
            "objectTypeName": "organizationFloor",
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
            "objectTypeName": "organizationFloor",
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
            "objectTypeName": "organizationFloor",
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
            "objectTypeName": "organizationFloor",
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
            "objectTypeName": "organizationFloor",
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
            "objectTypeName": "organizationFloor",
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
            "objectTypeName": "organizationFloor",
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
            "objectTypeName": "organizationFloor",
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
            "objectTypeName": "organizationFloor",
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
            "objectTypeName": "organizationFloor",
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
            "objectTypeName": "organizationFloor",
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
            "objectTypeName": "organizationFloor",
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
            "objectTypeName": "organizationFloor",
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
            "objectTypeName": "organizationFloor",
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
            "objectTypeName": "organizationFloor",
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
            "objectTypeName": "organizationFloor",
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
            "objectTypeName": "organizationFloor",
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
            "objectTypeName": "organizationFloor",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "organizationId": {
            "name": "organizationId",
            "objectTypeName": "organizationFloor",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "organizationId",
                "targetModelName": "organization",
                "propertyTypeName": "organization",
                "options": {
                    "readOnly": false
                }
            }
        },
        "organization": {
            "name": "organization",
            "objectTypeName": "organizationFloor",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "organizationId",
                "targetModelName": "organization",
                "propertyTypeName": "organization",
                "options": {
                    "readOnly": false
                }
            }
        },
        "floorId": {
            "name": "floorId",
            "objectTypeName": "organizationFloor",
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
            "objectTypeName": "organizationFloor",
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
            "objectTypeName": "organizationFloor",
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
            "objectTypeName": "organizationFloor",
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
            "objectTypeName": "organizationFloor",
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
            "objectTypeName": "organizationFloor",
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
            "objectTypeName": "organizationFloor",
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
            "objectTypeName": "organizationFloor",
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
    "plural": "organizationFloors",
    "camelized": {
        "singular": "organizationFloor",
        "plural": "organizationFloors",
        "id": "organizationFloorId"
    },
    "capitalized": {
        "singular": "OrganizationFloor",
        "plural": "OrganizationFloors",
        "id": "OrganizationFloorId"
    },
    "context": {
        "hasMany": [],
        "belongsTo": [
            "company"
        ]
    }
}
