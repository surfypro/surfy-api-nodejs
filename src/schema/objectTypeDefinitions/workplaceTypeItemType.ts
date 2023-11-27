
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const workplaceTypeItemTypeObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "workplaceTypeItemType",
    "type": "many-to-many",
    "scope": "private",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "workplaceTypeItemType",
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
            "objectTypeName": "workplaceTypeItemType",
            "type": "point3d",
            "options": {
                "mandatory": true,
                "readOnly": true,
                "calculated": false,
                "technical": false
            }
        },
        "physicalInventory": {
            "name": "physicalInventory",
            "objectTypeName": "workplaceTypeItemType",
            "type": "boolean",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": false
            }
        },
        "rotation": {
            "name": "rotation",
            "objectTypeName": "workplaceTypeItemType",
            "type": "float",
            "options": {
                "mandatory": true,
                "readOnly": true,
                "calculated": false,
                "technical": false
            }
        },
        "zIndex": {
            "name": "zIndex",
            "objectTypeName": "workplaceTypeItemType",
            "type": "integer",
            "options": {
                "mandatory": true,
                "readOnly": true,
                "calculated": false,
                "technical": false,
                "defaultValue": 0
            }
        },
        "seatsCount": {
            "name": "seatsCount",
            "objectTypeName": "workplaceTypeItemType",
            "type": "integer-count",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "createdAt": {
            "name": "createdAt",
            "objectTypeName": "workplaceTypeItemType",
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
            "objectTypeName": "workplaceTypeItemType",
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
            "objectTypeName": "workplaceTypeItemType",
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
            "objectTypeName": "workplaceTypeItemType",
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
            "objectTypeName": "workplaceTypeItemType",
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
        "itemTypeId": {
            "name": "itemTypeId",
            "objectTypeName": "workplaceTypeItemType",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "itemTypeId",
                "targetModelName": "itemType",
                "propertyTypeName": "itemType",
                "options": {
                    "readOnly": false
                }
            }
        },
        "itemType": {
            "name": "itemType",
            "objectTypeName": "workplaceTypeItemType",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "itemTypeId",
                "targetModelName": "itemType",
                "propertyTypeName": "itemType",
                "options": {
                    "readOnly": false
                }
            }
        },
        "userCompanyCreatedById": {
            "name": "userCompanyCreatedById",
            "objectTypeName": "workplaceTypeItemType",
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
            "objectTypeName": "workplaceTypeItemType",
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
            "objectTypeName": "workplaceTypeItemType",
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
            "objectTypeName": "workplaceTypeItemType",
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
            "objectTypeName": "workplaceTypeItemType",
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
            "objectTypeName": "workplaceTypeItemType",
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
    "plural": "workplaceTypeItemTypes",
    "camelized": {
        "singular": "workplaceTypeItemType",
        "plural": "workplaceTypeItemTypes",
        "id": "workplaceTypeItemTypeId"
    },
    "capitalized": {
        "singular": "WorkplaceTypeItemType",
        "plural": "WorkplaceTypeItemTypes",
        "id": "WorkplaceTypeItemTypeId"
    },
    "context": {
        "hasMany": [],
        "belongsTo": [
            "company"
        ]
    }
}
