
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const partnerExportMappingConfigurationToFloorObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "partnerExportMappingConfigurationToFloor",
    "type": "many-to-many",
    "scope": "private",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "partnerExportMappingConfigurationToFloor",
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
            "objectTypeName": "partnerExportMappingConfigurationToFloor",
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
            "objectTypeName": "partnerExportMappingConfigurationToFloor",
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
            "objectTypeName": "partnerExportMappingConfigurationToFloor",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "partnerExportMappingConfigurationId": {
            "name": "partnerExportMappingConfigurationId",
            "objectTypeName": "partnerExportMappingConfigurationToFloor",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "partnerExportMappingConfigurationId",
                "targetModelName": "partnerExportMappingConfiguration",
                "propertyTypeName": "partnerExportMappingConfiguration",
                "options": {
                    "readOnly": false
                }
            }
        },
        "partnerExportMappingConfiguration": {
            "name": "partnerExportMappingConfiguration",
            "objectTypeName": "partnerExportMappingConfigurationToFloor",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "partnerExportMappingConfigurationId",
                "targetModelName": "partnerExportMappingConfiguration",
                "propertyTypeName": "partnerExportMappingConfiguration",
                "options": {
                    "readOnly": false
                }
            }
        },
        "floorId": {
            "name": "floorId",
            "objectTypeName": "partnerExportMappingConfigurationToFloor",
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
            "objectTypeName": "partnerExportMappingConfigurationToFloor",
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
            "objectTypeName": "partnerExportMappingConfigurationToFloor",
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
            "objectTypeName": "partnerExportMappingConfigurationToFloor",
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
            "objectTypeName": "partnerExportMappingConfigurationToFloor",
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
            "objectTypeName": "partnerExportMappingConfigurationToFloor",
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
            "objectTypeName": "partnerExportMappingConfigurationToFloor",
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
            "objectTypeName": "partnerExportMappingConfigurationToFloor",
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
    "plural": "partnerExportMappingConfigurationToFloors",
    "camelized": {
        "singular": "partnerExportMappingConfigurationToFloor",
        "plural": "partnerExportMappingConfigurationToFloors",
        "id": "partnerExportMappingConfigurationToFloorId"
    },
    "capitalized": {
        "singular": "PartnerExportMappingConfigurationToFloor",
        "plural": "PartnerExportMappingConfigurationToFloors",
        "id": "PartnerExportMappingConfigurationToFloorId"
    },
    "context": {
        "hasMany": [],
        "belongsTo": [
            "company"
        ]
    }
}
