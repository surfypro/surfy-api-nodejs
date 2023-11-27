
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const roomPointSegmentObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "roomPointSegment",
    "type": "table",
    "scope": "private",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "roomPointSegment",
            "type": "primary-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "reversePoints": {
            "name": "reversePoints",
            "objectTypeName": "roomPointSegment",
            "type": "boolean",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": false
            }
        },
        "displayBothSides": {
            "name": "displayBothSides",
            "objectTypeName": "roomPointSegment",
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
            "objectTypeName": "roomPointSegment",
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
            "objectTypeName": "roomPointSegment",
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
            "objectTypeName": "roomPointSegment",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "roomPointSegmentTypeId": {
            "name": "roomPointSegmentTypeId",
            "objectTypeName": "roomPointSegment",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "roomPointSegmentTypeId",
                "targetModelName": "roomPointSegmentType",
                "propertyTypeName": "roomPointSegmentType",
                "options": {
                    "readOnly": false
                }
            }
        },
        "roomPointSegmentType": {
            "name": "roomPointSegmentType",
            "objectTypeName": "roomPointSegment",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "roomPointSegmentTypeId",
                "targetModelName": "roomPointSegmentType",
                "propertyTypeName": "roomPointSegmentType",
                "options": {
                    "readOnly": false
                }
            }
        },
        "roomPointStartId": {
            "name": "roomPointStartId",
            "objectTypeName": "roomPointSegment",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "roomPointStartId",
                "targetModelName": "roomPoint",
                "propertyTypeName": "roomPointStart",
                "options": {
                    "readOnly": false
                }
            }
        },
        "roomPointStart": {
            "name": "roomPointStart",
            "objectTypeName": "roomPointSegment",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "roomPointStartId",
                "targetModelName": "roomPoint",
                "propertyTypeName": "roomPointStart",
                "options": {
                    "readOnly": false
                }
            }
        },
        "roomPointEndId": {
            "name": "roomPointEndId",
            "objectTypeName": "roomPointSegment",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "roomPointEndId",
                "targetModelName": "roomPoint",
                "propertyTypeName": "roomPointEnd",
                "options": {
                    "readOnly": false
                }
            }
        },
        "roomPointEnd": {
            "name": "roomPointEnd",
            "objectTypeName": "roomPointSegment",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "roomPointEndId",
                "targetModelName": "roomPoint",
                "propertyTypeName": "roomPointEnd",
                "options": {
                    "readOnly": false
                }
            }
        },
        "userCompanyCreatedById": {
            "name": "userCompanyCreatedById",
            "objectTypeName": "roomPointSegment",
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
            "objectTypeName": "roomPointSegment",
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
            "objectTypeName": "roomPointSegment",
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
            "objectTypeName": "roomPointSegment",
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
            "objectTypeName": "roomPointSegment",
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
            "objectTypeName": "roomPointSegment",
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
    "plural": "roomPointSegments",
    "camelized": {
        "singular": "roomPointSegment",
        "plural": "roomPointSegments",
        "id": "roomPointSegmentId"
    },
    "capitalized": {
        "singular": "RoomPointSegment",
        "plural": "RoomPointSegments",
        "id": "RoomPointSegmentId"
    },
    "context": {
        "hasMany": [],
        "belongsTo": [
            "company"
        ]
    }
}
