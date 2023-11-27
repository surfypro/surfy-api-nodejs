
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const itemTypeObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "itemType",
    "type": "table",
    "scope": "private",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "itemType",
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
            "objectTypeName": "itemType",
            "type": "string",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "picture": {
            "name": "picture",
            "objectTypeName": "itemType",
            "type": "image",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "displayItemReferenceInMap": {
            "name": "displayItemReferenceInMap",
            "objectTypeName": "itemType",
            "type": "boolean",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": false
            }
        },
        "code": {
            "name": "code",
            "objectTypeName": "itemType",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "icon": {
            "name": "icon",
            "objectTypeName": "itemType",
            "type": "icon",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "color": {
            "name": "color",
            "objectTypeName": "itemType",
            "type": "color",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": "#000000"
            }
        },
        "height": {
            "name": "height",
            "objectTypeName": "itemType",
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
                "defaultValue": 0
            }
        },
        "zIndex": {
            "name": "zIndex",
            "objectTypeName": "itemType",
            "type": "integer",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": 0
            }
        },
        "description": {
            "name": "description",
            "objectTypeName": "itemType",
            "type": "text",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "price": {
            "name": "price",
            "objectTypeName": "itemType",
            "type": "currency",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "seatsCount": {
            "name": "seatsCount",
            "objectTypeName": "itemType",
            "type": "integer-count",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "carbonFootprint": {
            "name": "carbonFootprint",
            "objectTypeName": "itemType",
            "type": "weight",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "unit": {
                    "type": "weight",
                    "value": "kilogram"
                },
                "defaultValue": 0
            }
        },
        "iconShape": {
            "name": "iconShape",
            "objectTypeName": "itemType",
            "type": "icon-shape",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": "circle"
            }
        },
        "iconBackgroundColor": {
            "name": "iconBackgroundColor",
            "objectTypeName": "itemType",
            "type": "color",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "iconBorderColor": {
            "name": "iconBorderColor",
            "objectTypeName": "itemType",
            "type": "color",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "createdAt": {
            "name": "createdAt",
            "objectTypeName": "itemType",
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
            "objectTypeName": "itemType",
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
            "objectTypeName": "itemType",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "itemTypeFamilyId": {
            "name": "itemTypeFamilyId",
            "objectTypeName": "itemType",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "itemTypeFamilyId",
                "targetModelName": "itemTypeFamily",
                "propertyTypeName": "itemTypeFamily",
                "options": {
                    "readOnly": false
                }
            }
        },
        "itemTypeFamily": {
            "name": "itemTypeFamily",
            "objectTypeName": "itemType",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "itemTypeFamilyId",
                "targetModelName": "itemTypeFamily",
                "propertyTypeName": "itemTypeFamily",
                "options": {
                    "readOnly": false
                }
            }
        },
        "manufacturerId": {
            "name": "manufacturerId",
            "objectTypeName": "itemType",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "manufacturerId",
                "targetModelName": "manufacturer",
                "propertyTypeName": "manufacturer",
                "options": {
                    "readOnly": false
                }
            }
        },
        "manufacturer": {
            "name": "manufacturer",
            "objectTypeName": "itemType",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "manufacturerId",
                "targetModelName": "manufacturer",
                "propertyTypeName": "manufacturer",
                "options": {
                    "readOnly": false
                }
            }
        },
        "object3dModelId": {
            "name": "object3dModelId",
            "objectTypeName": "itemType",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "object3dModelId",
                "targetModelName": "object3dModel",
                "propertyTypeName": "object3dModel",
                "options": {
                    "readOnly": false
                }
            }
        },
        "object3dModel": {
            "name": "object3dModel",
            "objectTypeName": "itemType",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "object3dModelId",
                "targetModelName": "object3dModel",
                "propertyTypeName": "object3dModel",
                "options": {
                    "readOnly": false
                }
            }
        },
        "userCompanyCreatedById": {
            "name": "userCompanyCreatedById",
            "objectTypeName": "itemType",
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
            "objectTypeName": "itemType",
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
            "objectTypeName": "itemType",
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
            "objectTypeName": "itemType",
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
        "itemTypePoints": {
            "name": "itemTypePoints",
            "objectTypeName": "itemType",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "itemTypeId",
                "targetModelName": "itemTypePoint",
                "propertyTypeName": "itemTypePoints",
                "options": {
                    "readOnly": false
                }
            }
        },
        "workplaceTypeItemTypes": {
            "name": "workplaceTypeItemTypes",
            "objectTypeName": "itemType",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "itemTypeId",
                "targetModelName": "workplaceTypeItemType",
                "propertyTypeName": "workplaceTypeItemTypes",
                "options": {
                    "readOnly": false
                }
            }
        },
        "items": {
            "name": "items",
            "objectTypeName": "itemType",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "itemTypeId",
                "targetModelName": "item",
                "propertyTypeName": "items",
                "options": {
                    "readOnly": false
                }
            }
        },
        "companyId": {
            "name": "companyId",
            "objectTypeName": "itemType",
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
            "objectTypeName": "itemType",
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
    "plural": "itemTypes",
    "camelized": {
        "singular": "itemType",
        "plural": "itemTypes",
        "id": "itemTypeId"
    },
    "capitalized": {
        "singular": "ItemType",
        "plural": "ItemTypes",
        "id": "ItemTypeId"
    },
    "context": {
        "hasMany": [
            "itemTypePoint",
            "workplaceTypeItemType",
            "item"
        ],
        "belongsTo": [
            "company"
        ]
    }
}
