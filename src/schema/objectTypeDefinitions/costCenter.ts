
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const costCenterObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "costCenter",
    "type": "table",
    "scope": "private",
    "isMasterData": true,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "costCenter",
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
            "objectTypeName": "costCenter",
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
            "objectTypeName": "costCenter",
            "type": "color",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "info": {
            "name": "info",
            "objectTypeName": "costCenter",
            "type": "text",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "distributeByFloor": {
            "name": "distributeByFloor",
            "objectTypeName": "costCenter",
            "type": "boolean",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": false
            }
        },
        "distributeByBuilding": {
            "name": "distributeByBuilding",
            "objectTypeName": "costCenter",
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
            "objectTypeName": "costCenter",
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
            "objectTypeName": "costCenter",
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
            "objectTypeName": "costCenter",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "userCompanyCreatedById": {
            "name": "userCompanyCreatedById",
            "objectTypeName": "costCenter",
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
            "objectTypeName": "costCenter",
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
            "objectTypeName": "costCenter",
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
            "objectTypeName": "costCenter",
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
        "costCenterBuildings": {
            "name": "costCenterBuildings",
            "objectTypeName": "costCenter",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "costCenterId",
                "targetModelName": "costCenterBuilding",
                "propertyTypeName": "costCenterBuildings",
                "options": {
                    "readOnly": false
                }
            }
        },
        "costCenterFloors": {
            "name": "costCenterFloors",
            "objectTypeName": "costCenter",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "costCenterId",
                "targetModelName": "costCenterFloor",
                "propertyTypeName": "costCenterFloors",
                "options": {
                    "readOnly": false
                }
            }
        },
        "rooms": {
            "name": "rooms",
            "objectTypeName": "costCenter",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "costCenterId",
                "targetModelName": "room",
                "propertyTypeName": "rooms",
                "options": {
                    "readOnly": false
                }
            }
        },
        "people": {
            "name": "people",
            "objectTypeName": "costCenter",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "costCenterId",
                "targetModelName": "person",
                "propertyTypeName": "people",
                "options": {
                    "readOnly": false
                }
            }
        },
        "workplaces": {
            "name": "workplaces",
            "objectTypeName": "costCenter",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "costCenterId",
                "targetModelName": "workplace",
                "propertyTypeName": "workplaces",
                "options": {
                    "readOnly": false
                }
            }
        },
        "companyId": {
            "name": "companyId",
            "objectTypeName": "costCenter",
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
            "objectTypeName": "costCenter",
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
    "plural": "costCenters",
    "camelized": {
        "singular": "costCenter",
        "plural": "costCenters",
        "id": "costCenterId"
    },
    "capitalized": {
        "singular": "CostCenter",
        "plural": "CostCenters",
        "id": "CostCenterId"
    },
    "context": {
        "hasMany": [
            "costCenterBuilding",
            "costCenterFloor",
            "room",
            "person",
            "workplace"
        ],
        "belongsTo": [
            "company"
        ]
    }
}
