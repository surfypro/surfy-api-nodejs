
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const workplaceAffectationObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "workplaceAffectation",
    "type": "many-to-many",
    "scope": "private",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "workplaceAffectation",
            "type": "primary-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "rate": {
            "name": "rate",
            "objectTypeName": "workplaceAffectation",
            "type": "percentage0-1",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": 1
            }
        },
        "calculatedRate": {
            "name": "calculatedRate",
            "objectTypeName": "workplaceAffectation",
            "type": "percentage0-1",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false,
                "defaultValue": 1
            }
        },
        "mondayRate": {
            "name": "mondayRate",
            "objectTypeName": "workplaceAffectation",
            "type": "percentage0-1",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": 1
            }
        },
        "tuesdayRate": {
            "name": "tuesdayRate",
            "objectTypeName": "workplaceAffectation",
            "type": "percentage0-1",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": 1
            }
        },
        "wednesdayRate": {
            "name": "wednesdayRate",
            "objectTypeName": "workplaceAffectation",
            "type": "percentage0-1",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": 1
            }
        },
        "thursdayRate": {
            "name": "thursdayRate",
            "objectTypeName": "workplaceAffectation",
            "type": "percentage0-1",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": 1
            }
        },
        "fridayRate": {
            "name": "fridayRate",
            "objectTypeName": "workplaceAffectation",
            "type": "percentage0-1",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": 1
            }
        },
        "saturdayRate": {
            "name": "saturdayRate",
            "objectTypeName": "workplaceAffectation",
            "type": "percentage0-1",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": 0
            }
        },
        "sundayRate": {
            "name": "sundayRate",
            "objectTypeName": "workplaceAffectation",
            "type": "percentage0-1",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false,
                "defaultValue": 0
            }
        },
        "createdAt": {
            "name": "createdAt",
            "objectTypeName": "workplaceAffectation",
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
            "objectTypeName": "workplaceAffectation",
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
            "objectTypeName": "workplaceAffectation",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "personId": {
            "name": "personId",
            "objectTypeName": "workplaceAffectation",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "personId",
                "targetModelName": "person",
                "propertyTypeName": "person",
                "options": {
                    "readOnly": false
                }
            }
        },
        "person": {
            "name": "person",
            "objectTypeName": "workplaceAffectation",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "personId",
                "targetModelName": "person",
                "propertyTypeName": "person",
                "options": {
                    "readOnly": false
                }
            }
        },
        "workplaceId": {
            "name": "workplaceId",
            "objectTypeName": "workplaceAffectation",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
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
            "objectTypeName": "workplaceAffectation",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
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
            "objectTypeName": "workplaceAffectation",
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
            "objectTypeName": "workplaceAffectation",
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
            "objectTypeName": "workplaceAffectation",
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
            "objectTypeName": "workplaceAffectation",
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
            "objectTypeName": "workplaceAffectation",
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
            "objectTypeName": "workplaceAffectation",
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
    "plural": "workplaceAffectations",
    "camelized": {
        "singular": "workplaceAffectation",
        "plural": "workplaceAffectations",
        "id": "workplaceAffectationId"
    },
    "capitalized": {
        "singular": "WorkplaceAffectation",
        "plural": "WorkplaceAffectations",
        "id": "WorkplaceAffectationId"
    },
    "context": {
        "hasMany": [],
        "belongsTo": [
            "company"
        ]
    }
}
