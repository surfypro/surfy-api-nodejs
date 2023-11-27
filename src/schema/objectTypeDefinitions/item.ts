
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const itemObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "item",
    "type": "table",
    "scope": "private",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "item",
            "type": "primary-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "code": {
            "name": "code",
            "objectTypeName": "item",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "reference": {
            "name": "reference",
            "objectTypeName": "item",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "purchaseDate": {
            "name": "purchaseDate",
            "objectTypeName": "item",
            "type": "date",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "position": {
            "name": "position",
            "objectTypeName": "item",
            "type": "point3d",
            "options": {
                "mandatory": true,
                "readOnly": true,
                "calculated": false,
                "technical": false
            }
        },
        "rotation": {
            "name": "rotation",
            "objectTypeName": "item",
            "type": "float",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": 0
            }
        },
        "textAnchor": {
            "name": "textAnchor",
            "objectTypeName": "item",
            "type": "textAnchor",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": false,
                "technical": false
            }
        },
        "createdAt": {
            "name": "createdAt",
            "objectTypeName": "item",
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
            "objectTypeName": "item",
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
            "objectTypeName": "item",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "itemTypeId": {
            "name": "itemTypeId",
            "objectTypeName": "item",
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
            "objectTypeName": "item",
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
        "roomId": {
            "name": "roomId",
            "objectTypeName": "item",
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
            "objectTypeName": "item",
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
        "workplaceId": {
            "name": "workplaceId",
            "objectTypeName": "item",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "workplaceId",
                "targetModelName": "workplace",
                "propertyTypeName": "workplace",
                "options": {
                    "readOnly": false
                }
            }
        },
        "workplace": {
            "name": "workplace",
            "objectTypeName": "item",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "workplaceId",
                "targetModelName": "workplace",
                "propertyTypeName": "workplace",
                "options": {
                    "readOnly": false
                }
            }
        },
        "userCompanyCreatedById": {
            "name": "userCompanyCreatedById",
            "objectTypeName": "item",
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
            "objectTypeName": "item",
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
            "objectTypeName": "item",
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
            "objectTypeName": "item",
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
        "itemToPeople": {
            "name": "itemToPeople",
            "objectTypeName": "item",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "itemId",
                "targetModelName": "itemToPerson",
                "propertyTypeName": "itemToPeople",
                "options": {
                    "readOnly": false
                }
            }
        },
        "itemFacts": {
            "name": "itemFacts",
            "objectTypeName": "item",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "itemId",
                "targetModelName": "itemFact",
                "propertyTypeName": "itemFacts",
                "options": {
                    "readOnly": false
                }
            }
        },
        "companyId": {
            "name": "companyId",
            "objectTypeName": "item",
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
            "objectTypeName": "item",
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
    "plural": "items",
    "camelized": {
        "singular": "item",
        "plural": "items",
        "id": "itemId"
    },
    "capitalized": {
        "singular": "Item",
        "plural": "Items",
        "id": "ItemId"
    },
    "context": {
        "hasMany": [
            "itemToPerson",
            "itemFact"
        ],
        "belongsTo": [
            "company"
        ]
    }
}
