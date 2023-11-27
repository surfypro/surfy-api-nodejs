
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const contentRoleObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "contentRole",
    "type": "table",
    "scope": "private",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "contentRole",
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
            "objectTypeName": "contentRole",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "createdAt": {
            "name": "createdAt",
            "objectTypeName": "contentRole",
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
            "objectTypeName": "contentRole",
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
            "objectTypeName": "contentRole",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "userCompanyCreatedById": {
            "name": "userCompanyCreatedById",
            "objectTypeName": "contentRole",
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
            "objectTypeName": "contentRole",
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
            "objectTypeName": "contentRole",
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
            "objectTypeName": "contentRole",
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
        "contentRoleToBuildings": {
            "name": "contentRoleToBuildings",
            "objectTypeName": "contentRole",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "contentRoleId",
                "targetModelName": "contentRoleToBuilding",
                "propertyTypeName": "contentRoleToBuildings",
                "options": {
                    "readOnly": false
                }
            }
        },
        "contentRoleToUserCompanies": {
            "name": "contentRoleToUserCompanies",
            "objectTypeName": "contentRole",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "contentRoleId",
                "targetModelName": "contentRoleToUserCompany",
                "propertyTypeName": "contentRoleToUserCompanies",
                "options": {
                    "readOnly": false
                }
            }
        },
        "contentRoleToFloors": {
            "name": "contentRoleToFloors",
            "objectTypeName": "contentRole",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "contentRoleId",
                "targetModelName": "contentRoleToFloor",
                "propertyTypeName": "contentRoleToFloors",
                "options": {
                    "readOnly": false
                }
            }
        },
        "apiUserToContentRoles": {
            "name": "apiUserToContentRoles",
            "objectTypeName": "contentRole",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "contentRoleId",
                "targetModelName": "apiUserToContentRole",
                "propertyTypeName": "apiUserToContentRoles",
                "options": {
                    "readOnly": false
                }
            }
        },
        "contentRoleToJupUiTenantOperations": {
            "name": "contentRoleToJupUiTenantOperations",
            "objectTypeName": "contentRole",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "contentRoleId",
                "targetModelName": "contentRoleToJupUiTenantOperation",
                "propertyTypeName": "contentRoleToJupUiTenantOperations",
                "options": {
                    "readOnly": false
                }
            }
        },
        "userRegistrationTenantRuleToContentRoles": {
            "name": "userRegistrationTenantRuleToContentRoles",
            "objectTypeName": "contentRole",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "contentRoleId",
                "targetModelName": "userRegistrationTenantRuleToContentRole",
                "propertyTypeName": "userRegistrationTenantRuleToContentRoles",
                "options": {
                    "readOnly": false
                }
            }
        },
        "companyId": {
            "name": "companyId",
            "objectTypeName": "contentRole",
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
            "objectTypeName": "contentRole",
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
    "plural": "contentRoles",
    "camelized": {
        "singular": "contentRole",
        "plural": "contentRoles",
        "id": "contentRoleId"
    },
    "capitalized": {
        "singular": "ContentRole",
        "plural": "ContentRoles",
        "id": "ContentRoleId"
    },
    "context": {
        "hasMany": [
            "contentRoleToBuilding",
            "contentRoleToUserCompany",
            "contentRoleToFloor",
            "apiUserToContentRole",
            "contentRoleToJupUiTenantOperation",
            "userRegistrationTenantRuleToContentRole"
        ],
        "belongsTo": [
            "company"
        ]
    }
}
