
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const mapScaleObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "mapScale",
    "type": "table",
    "scope": "private",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "mapScale",
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
            "objectTypeName": "mapScale",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "p1": {
            "name": "p1",
            "objectTypeName": "mapScale",
            "type": "point2d",
            "options": {
                "mandatory": true,
                "readOnly": true,
                "calculated": false,
                "technical": false,
                "defaultValue": {
                    "x": 0,
                    "y": 0
                }
            }
        },
        "p2": {
            "name": "p2",
            "objectTypeName": "mapScale",
            "type": "point2d",
            "options": {
                "mandatory": true,
                "readOnly": true,
                "calculated": false,
                "technical": false,
                "defaultValue": {
                    "x": 0,
                    "y": 0
                }
            }
        },
        "length": {
            "name": "length",
            "objectTypeName": "mapScale",
            "type": "distance",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "unit": {
                    "type": "distance",
                    "value": "meter"
                },
                "defaultValue": 0
            }
        },
        "ratio": {
            "name": "ratio",
            "objectTypeName": "mapScale",
            "type": "float",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": false,
                "technical": false
            }
        },
        "strokeWidth": {
            "name": "strokeWidth",
            "objectTypeName": "mapScale",
            "type": "float",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": 1
            }
        },
        "roomTextSize": {
            "name": "roomTextSize",
            "objectTypeName": "mapScale",
            "type": "float",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": 18
            }
        },
        "workplaceTextSize": {
            "name": "workplaceTextSize",
            "objectTypeName": "mapScale",
            "type": "float",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": 12
            }
        },
        "segmentDistanceTextSize": {
            "name": "segmentDistanceTextSize",
            "objectTypeName": "mapScale",
            "type": "float",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": 6
            }
        },
        "itemTypeIconSize": {
            "name": "itemTypeIconSize",
            "objectTypeName": "mapScale",
            "type": "float",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": 12
            }
        },
        "roomIconSize": {
            "name": "roomIconSize",
            "objectTypeName": "mapScale",
            "type": "float",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": 64
            }
        },
        "createdAt": {
            "name": "createdAt",
            "objectTypeName": "mapScale",
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
            "objectTypeName": "mapScale",
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
            "objectTypeName": "mapScale",
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
            "objectTypeName": "mapScale",
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
            "objectTypeName": "mapScale",
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
            "objectTypeName": "mapScale",
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
            "objectTypeName": "mapScale",
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
            "objectTypeName": "mapScale",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "mapScaleId",
                "targetModelName": "floor",
                "propertyTypeName": "floors",
                "options": {
                    "readOnly": false
                }
            }
        },
        "companyId": {
            "name": "companyId",
            "objectTypeName": "mapScale",
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
            "objectTypeName": "mapScale",
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
    "plural": "mapScales",
    "camelized": {
        "singular": "mapScale",
        "plural": "mapScales",
        "id": "mapScaleId"
    },
    "capitalized": {
        "singular": "MapScale",
        "plural": "MapScales",
        "id": "MapScaleId"
    },
    "context": {
        "hasMany": [
            "floor"
        ],
        "belongsTo": [
            "company"
        ]
    }
}
