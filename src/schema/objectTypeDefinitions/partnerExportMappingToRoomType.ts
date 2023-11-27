
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const partnerExportMappingToRoomTypeObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "partnerExportMappingToRoomType",
    "type": "many-to-many",
    "scope": "private",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "partnerExportMappingToRoomType",
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
            "objectTypeName": "partnerExportMappingToRoomType",
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
            "objectTypeName": "partnerExportMappingToRoomType",
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
            "objectTypeName": "partnerExportMappingToRoomType",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "partnerExportMappingId": {
            "name": "partnerExportMappingId",
            "objectTypeName": "partnerExportMappingToRoomType",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "partnerExportMappingId",
                "targetModelName": "partnerExportMapping",
                "propertyTypeName": "partnerExportMapping",
                "options": {
                    "readOnly": false
                }
            }
        },
        "partnerExportMapping": {
            "name": "partnerExportMapping",
            "objectTypeName": "partnerExportMappingToRoomType",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "partnerExportMappingId",
                "targetModelName": "partnerExportMapping",
                "propertyTypeName": "partnerExportMapping",
                "options": {
                    "readOnly": false
                }
            }
        },
        "roomTypeId": {
            "name": "roomTypeId",
            "objectTypeName": "partnerExportMappingToRoomType",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "roomTypeId",
                "targetModelName": "roomType",
                "propertyTypeName": "roomType",
                "options": {
                    "readOnly": false
                }
            }
        },
        "roomType": {
            "name": "roomType",
            "objectTypeName": "partnerExportMappingToRoomType",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "roomTypeId",
                "targetModelName": "roomType",
                "propertyTypeName": "roomType",
                "options": {
                    "readOnly": false
                }
            }
        },
        "userCompanyCreatedById": {
            "name": "userCompanyCreatedById",
            "objectTypeName": "partnerExportMappingToRoomType",
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
            "objectTypeName": "partnerExportMappingToRoomType",
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
            "objectTypeName": "partnerExportMappingToRoomType",
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
            "objectTypeName": "partnerExportMappingToRoomType",
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
            "objectTypeName": "partnerExportMappingToRoomType",
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
            "objectTypeName": "partnerExportMappingToRoomType",
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
    "plural": "partnerExportMappingToRoomTypes",
    "camelized": {
        "singular": "partnerExportMappingToRoomType",
        "plural": "partnerExportMappingToRoomTypes",
        "id": "partnerExportMappingToRoomTypeId"
    },
    "capitalized": {
        "singular": "PartnerExportMappingToRoomType",
        "plural": "PartnerExportMappingToRoomTypes",
        "id": "PartnerExportMappingToRoomTypeId"
    },
    "context": {
        "hasMany": [],
        "belongsTo": [
            "company"
        ]
    }
}
