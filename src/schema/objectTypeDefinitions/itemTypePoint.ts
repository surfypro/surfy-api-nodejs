
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const itemTypePointObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "itemTypePoint",
    "type": "table",
    "scope": "private",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "itemTypePoint",
            "type": "primary-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "x": {
            "name": "x",
            "objectTypeName": "itemTypePoint",
            "type": "float",
            "options": {
                "mandatory": true,
                "readOnly": true,
                "calculated": false,
                "technical": false
            }
        },
        "y": {
            "name": "y",
            "objectTypeName": "itemTypePoint",
            "type": "float",
            "options": {
                "mandatory": true,
                "readOnly": true,
                "calculated": false,
                "technical": false
            }
        },
        "sortIndex": {
            "name": "sortIndex",
            "objectTypeName": "itemTypePoint",
            "type": "integer",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "createdAt": {
            "name": "createdAt",
            "objectTypeName": "itemTypePoint",
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
            "objectTypeName": "itemTypePoint",
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
            "objectTypeName": "itemTypePoint",
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
            "objectTypeName": "itemTypePoint",
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
            "objectTypeName": "itemTypePoint",
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
            "objectTypeName": "itemTypePoint",
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
            "objectTypeName": "itemTypePoint",
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
            "objectTypeName": "itemTypePoint",
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
            "objectTypeName": "itemTypePoint",
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
            "objectTypeName": "itemTypePoint",
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
            "objectTypeName": "itemTypePoint",
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
    "plural": "itemTypePoints",
    "camelized": {
        "singular": "itemTypePoint",
        "plural": "itemTypePoints",
        "id": "itemTypePointId"
    },
    "capitalized": {
        "singular": "ItemTypePoint",
        "plural": "ItemTypePoints",
        "id": "ItemTypePointId"
    },
    "context": {
        "hasMany": [],
        "belongsTo": [
            "company"
        ]
    }
}
