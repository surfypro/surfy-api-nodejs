
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const workplaceObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "workplace",
    "type": "table",
    "scope": "private",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "workplace",
            "type": "primary-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "position": {
            "name": "position",
            "objectTypeName": "workplace",
            "type": "point3d",
            "options": {
                "mandatory": true,
                "readOnly": true,
                "calculated": false,
                "technical": false,
                "defaultValue": {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }
            }
        },
        "rotation": {
            "name": "rotation",
            "objectTypeName": "workplace",
            "type": "float",
            "options": {
                "mandatory": true,
                "readOnly": true,
                "calculated": false,
                "technical": false,
                "defaultValue": 0
            }
        },
        "isFlex": {
            "name": "isFlex",
            "objectTypeName": "workplace",
            "type": "boolean",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": false
            }
        },
        "isTransit": {
            "name": "isTransit",
            "objectTypeName": "workplace",
            "type": "boolean",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": false
            }
        },
        "isShared": {
            "name": "isShared",
            "objectTypeName": "workplace",
            "type": "boolean",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": false,
                "technical": false,
                "defaultValue": false
            }
        },
        "textAnchor": {
            "name": "textAnchor",
            "objectTypeName": "workplace",
            "type": "textAnchor",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": false,
                "technical": false
            }
        },
        "name": {
            "name": "name",
            "objectTypeName": "workplace",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "workplaceAffectationsCalculatedRateSum": {
            "name": "workplaceAffectationsCalculatedRateSum",
            "objectTypeName": "workplace",
            "type": "float",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 0
            }
        },
        "workplaceAffectationsCount": {
            "name": "workplaceAffectationsCount",
            "objectTypeName": "workplace",
            "type": "integer",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": 0
            }
        },
        "comment": {
            "name": "comment",
            "objectTypeName": "workplace",
            "type": "text",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "createdAt": {
            "name": "createdAt",
            "objectTypeName": "workplace",
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
            "objectTypeName": "workplace",
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
            "objectTypeName": "workplace",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "workplaceTypeId": {
            "name": "workplaceTypeId",
            "objectTypeName": "workplace",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "workplaceTypeId",
                "targetModelName": "workplaceType",
                "propertyTypeName": "workplaceType",
                "options": {
                    "readOnly": false
                }
            }
        },
        "workplaceType": {
            "name": "workplaceType",
            "objectTypeName": "workplace",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "workplaceTypeId",
                "targetModelName": "workplaceType",
                "propertyTypeName": "workplaceType",
                "options": {
                    "readOnly": false
                }
            }
        },
        "roomId": {
            "name": "roomId",
            "objectTypeName": "workplace",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "roomId",
                "targetModelName": "room",
                "propertyTypeName": "room",
                "options": {
                    "readOnly": false
                }
            }
        },
        "room": {
            "name": "room",
            "objectTypeName": "workplace",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "roomId",
                "targetModelName": "room",
                "propertyTypeName": "room",
                "options": {
                    "readOnly": false
                }
            }
        },
        "organizationId": {
            "name": "organizationId",
            "objectTypeName": "workplace",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
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
            "objectTypeName": "workplace",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
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
        "costCenterId": {
            "name": "costCenterId",
            "objectTypeName": "workplace",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
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
            "objectTypeName": "workplace",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
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
        "userCompanyCreatedById": {
            "name": "userCompanyCreatedById",
            "objectTypeName": "workplace",
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
            "objectTypeName": "workplace",
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
            "objectTypeName": "workplace",
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
            "objectTypeName": "workplace",
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
        "items": {
            "name": "items",
            "objectTypeName": "workplace",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "workplaceId",
                "targetModelName": "item",
                "propertyTypeName": "items",
                "options": {
                    "readOnly": false
                }
            }
        },
        "workplaceAffectations": {
            "name": "workplaceAffectations",
            "objectTypeName": "workplace",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "workplaceId",
                "targetModelName": "workplaceAffectation",
                "propertyTypeName": "workplaceAffectations",
                "options": {
                    "readOnly": false
                }
            }
        },
        "companyId": {
            "name": "companyId",
            "objectTypeName": "workplace",
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
            "objectTypeName": "workplace",
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
    "plural": "workplaces",
    "camelized": {
        "singular": "workplace",
        "plural": "workplaces",
        "id": "workplaceId"
    },
    "capitalized": {
        "singular": "Workplace",
        "plural": "Workplaces",
        "id": "WorkplaceId"
    },
    "context": {
        "hasMany": [
            "item",
            "workplaceAffectation"
        ],
        "belongsTo": [
            "company"
        ]
    }
}
