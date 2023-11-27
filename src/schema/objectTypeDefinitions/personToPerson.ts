
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const personToPersonObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "personToPerson",
    "type": "many-to-many",
    "scope": "private",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "personToPerson",
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
            "objectTypeName": "personToPerson",
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
            "objectTypeName": "personToPerson",
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
            "objectTypeName": "personToPerson",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "personToPersonTypeId": {
            "name": "personToPersonTypeId",
            "objectTypeName": "personToPerson",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "personToPersonTypeId",
                "targetModelName": "personToPersonType",
                "propertyTypeName": "personToPersonType",
                "options": {
                    "readOnly": false
                }
            }
        },
        "personToPersonType": {
            "name": "personToPersonType",
            "objectTypeName": "personToPerson",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "personToPersonTypeId",
                "targetModelName": "personToPersonType",
                "propertyTypeName": "personToPersonType",
                "options": {
                    "readOnly": false
                }
            }
        },
        "personSourceId": {
            "name": "personSourceId",
            "objectTypeName": "personToPerson",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "personSourceId",
                "targetModelName": "person",
                "propertyTypeName": "personSource",
                "options": {
                    "readOnly": false
                }
            }
        },
        "personSource": {
            "name": "personSource",
            "objectTypeName": "personToPerson",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "personSourceId",
                "targetModelName": "person",
                "propertyTypeName": "personSource",
                "options": {
                    "readOnly": false
                }
            }
        },
        "personTargetId": {
            "name": "personTargetId",
            "objectTypeName": "personToPerson",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "personTargetId",
                "targetModelName": "person",
                "propertyTypeName": "personTarget",
                "options": {
                    "readOnly": false
                }
            }
        },
        "personTarget": {
            "name": "personTarget",
            "objectTypeName": "personToPerson",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "personTargetId",
                "targetModelName": "person",
                "propertyTypeName": "personTarget",
                "options": {
                    "readOnly": false
                }
            }
        },
        "userCompanyCreatedById": {
            "name": "userCompanyCreatedById",
            "objectTypeName": "personToPerson",
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
            "objectTypeName": "personToPerson",
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
            "objectTypeName": "personToPerson",
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
            "objectTypeName": "personToPerson",
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
            "objectTypeName": "personToPerson",
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
            "objectTypeName": "personToPerson",
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
    "plural": "personToPeople",
    "camelized": {
        "singular": "personToPerson",
        "plural": "personToPeople",
        "id": "personToPersonId"
    },
    "capitalized": {
        "singular": "PersonToPerson",
        "plural": "PersonToPeople",
        "id": "PersonToPersonId"
    },
    "context": {
        "hasMany": [],
        "belongsTo": [
            "company"
        ]
    }
}
