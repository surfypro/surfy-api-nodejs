
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const userRegistrationTenantRuleToJupRoleObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "userRegistrationTenantRuleToJupRole",
    "type": "many-to-many",
    "scope": "private",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "userRegistrationTenantRuleToJupRole",
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
            "objectTypeName": "userRegistrationTenantRuleToJupRole",
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
            "objectTypeName": "userRegistrationTenantRuleToJupRole",
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
            "objectTypeName": "userRegistrationTenantRuleToJupRole",
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
            "objectTypeName": "userRegistrationTenantRuleToJupRole",
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
            "objectTypeName": "userRegistrationTenantRuleToJupRole",
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
        "jupRoleId": {
            "name": "jupRoleId",
            "objectTypeName": "userRegistrationTenantRuleToJupRole",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "jupRoleId",
                "targetModelName": "jupRole",
                "propertyTypeName": "jupRole",
                "options": {
                    "readOnly": false
                }
            }
        },
        "jupRole": {
            "name": "jupRole",
            "objectTypeName": "userRegistrationTenantRuleToJupRole",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "jupRoleId",
                "targetModelName": "jupRole",
                "propertyTypeName": "jupRole",
                "options": {
                    "readOnly": false
                }
            }
        },
        "userCompanyCreatedById": {
            "name": "userCompanyCreatedById",
            "objectTypeName": "userRegistrationTenantRuleToJupRole",
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
            "objectTypeName": "userRegistrationTenantRuleToJupRole",
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
            "objectTypeName": "userRegistrationTenantRuleToJupRole",
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
            "objectTypeName": "userRegistrationTenantRuleToJupRole",
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
            "objectTypeName": "userRegistrationTenantRuleToJupRole",
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
            "objectTypeName": "userRegistrationTenantRuleToJupRole",
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
    "plural": "userRegistrationTenantRuleToJupRoles",
    "camelized": {
        "singular": "userRegistrationTenantRuleToJupRole",
        "plural": "userRegistrationTenantRuleToJupRoles",
        "id": "userRegistrationTenantRuleToJupRoleId"
    },
    "capitalized": {
        "singular": "UserRegistrationTenantRuleToJupRole",
        "plural": "UserRegistrationTenantRuleToJupRoles",
        "id": "UserRegistrationTenantRuleToJupRoleId"
    },
    "context": {
        "hasMany": [],
        "belongsTo": [
            "company"
        ]
    }
}
