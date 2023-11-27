
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const userRegistrationTenantRuleObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "userRegistrationTenantRule",
    "type": "table",
    "scope": "private",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "userRegistrationTenantRule",
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
            "objectTypeName": "userRegistrationTenantRule",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "domains": {
            "name": "domains",
            "objectTypeName": "userRegistrationTenantRule",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "automaticUserToRoleMapping": {
            "name": "automaticUserToRoleMapping",
            "objectTypeName": "userRegistrationTenantRule",
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
            "objectTypeName": "userRegistrationTenantRule",
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
            "objectTypeName": "userRegistrationTenantRule",
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
            "objectTypeName": "userRegistrationTenantRule",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "authentificationConnectionId": {
            "name": "authentificationConnectionId",
            "objectTypeName": "userRegistrationTenantRule",
            "type": "foreign-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "authentificationConnectionId",
                "targetModelName": "authentificationConnection",
                "propertyTypeName": "authentificationConnection",
                "options": {
                    "readOnly": false
                }
            }
        },
        "authentificationConnection": {
            "name": "authentificationConnection",
            "objectTypeName": "userRegistrationTenantRule",
            "type": "belongs-to",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "authentificationConnectionId",
                "targetModelName": "authentificationConnection",
                "propertyTypeName": "authentificationConnection",
                "options": {
                    "readOnly": false
                }
            }
        },
        "userCompanyCreatedById": {
            "name": "userCompanyCreatedById",
            "objectTypeName": "userRegistrationTenantRule",
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
            "objectTypeName": "userRegistrationTenantRule",
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
            "objectTypeName": "userRegistrationTenantRule",
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
            "objectTypeName": "userRegistrationTenantRule",
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
        "userRegistrationTenantRuleToJupRoles": {
            "name": "userRegistrationTenantRuleToJupRoles",
            "objectTypeName": "userRegistrationTenantRule",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userRegistrationTenantRuleId",
                "targetModelName": "userRegistrationTenantRuleToJupRole",
                "propertyTypeName": "userRegistrationTenantRuleToJupRoles",
                "options": {
                    "readOnly": false
                }
            }
        },
        "userRegistrationTenantRuleToContentRoles": {
            "name": "userRegistrationTenantRuleToContentRoles",
            "objectTypeName": "userRegistrationTenantRule",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "userRegistrationTenantRuleId",
                "targetModelName": "userRegistrationTenantRuleToContentRole",
                "propertyTypeName": "userRegistrationTenantRuleToContentRoles",
                "options": {
                    "readOnly": false
                }
            }
        },
        "companyId": {
            "name": "companyId",
            "objectTypeName": "userRegistrationTenantRule",
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
            "objectTypeName": "userRegistrationTenantRule",
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
    "plural": "userRegistrationTenantRules",
    "camelized": {
        "singular": "userRegistrationTenantRule",
        "plural": "userRegistrationTenantRules",
        "id": "userRegistrationTenantRuleId"
    },
    "capitalized": {
        "singular": "UserRegistrationTenantRule",
        "plural": "UserRegistrationTenantRules",
        "id": "UserRegistrationTenantRuleId"
    },
    "context": {
        "hasMany": [
            "userRegistrationTenantRuleToJupRole",
            "userRegistrationTenantRuleToContentRole"
        ],
        "belongsTo": [
            "company"
        ]
    }
}
