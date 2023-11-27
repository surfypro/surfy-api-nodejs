
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const userRegistrationTenantRuleToContentRoleObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "userRegistrationTenantRuleToContentRole",
    "type": "many-to-many",
    "scope": "private",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "userRegistrationTenantRuleToContentRole",
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
            "objectTypeName": "userRegistrationTenantRuleToContentRole",
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
            "objectTypeName": "userRegistrationTenantRuleToContentRole",
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
            "objectTypeName": "userRegistrationTenantRuleToContentRole",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "userRegistrationTenantRuleId": {
            "name": "userRegistrationTenantRuleId",
            "objectTypeName": "userRegistrationTenantRuleToContentRole",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "userRegistrationTenantRuleId",
                "targetModelName": "userRegistrationTenantRule",
                "propertyTypeName": "userRegistrationTenantRule",
                "options": {
                    "readOnly": false
                }
            }
        },
        "userRegistrationTenantRule": {
            "name": "userRegistrationTenantRule",
            "objectTypeName": "userRegistrationTenantRuleToContentRole",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userRegistrationTenantRuleId",
                "targetModelName": "userRegistrationTenantRule",
                "propertyTypeName": "userRegistrationTenantRule",
                "options": {
                    "readOnly": false
                }
            }
        },
        "contentRoleId": {
            "name": "contentRoleId",
            "objectTypeName": "userRegistrationTenantRuleToContentRole",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "contentRoleId",
                "targetModelName": "contentRole",
                "propertyTypeName": "contentRole",
                "options": {
                    "readOnly": false
                }
            }
        },
        "contentRole": {
            "name": "contentRole",
            "objectTypeName": "userRegistrationTenantRuleToContentRole",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "contentRoleId",
                "targetModelName": "contentRole",
                "propertyTypeName": "contentRole",
                "options": {
                    "readOnly": false
                }
            }
        },
        "userCompanyCreatedById": {
            "name": "userCompanyCreatedById",
            "objectTypeName": "userRegistrationTenantRuleToContentRole",
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
            "objectTypeName": "userRegistrationTenantRuleToContentRole",
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
            "objectTypeName": "userRegistrationTenantRuleToContentRole",
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
            "objectTypeName": "userRegistrationTenantRuleToContentRole",
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
            "objectTypeName": "userRegistrationTenantRuleToContentRole",
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
            "objectTypeName": "userRegistrationTenantRuleToContentRole",
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
    "plural": "userRegistrationTenantRuleToContentRoles",
    "camelized": {
        "singular": "userRegistrationTenantRuleToContentRole",
        "plural": "userRegistrationTenantRuleToContentRoles",
        "id": "userRegistrationTenantRuleToContentRoleId"
    },
    "capitalized": {
        "singular": "UserRegistrationTenantRuleToContentRole",
        "plural": "UserRegistrationTenantRuleToContentRoles",
        "id": "UserRegistrationTenantRuleToContentRoleId"
    },
    "context": {
        "hasMany": [],
        "belongsTo": [
            "company"
        ]
    }
}
