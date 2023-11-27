
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const jupRoleObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "jupRole",
    "type": "table",
    "scope": "public",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "jupRole",
            "type": "primary-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "code": {
            "name": "code",
            "objectTypeName": "jupRole",
            "type": "string",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "name": {
            "name": "name",
            "objectTypeName": "jupRole",
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
            "objectTypeName": "jupRole",
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
            "objectTypeName": "jupRole",
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
            "objectTypeName": "jupRole",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "jupUserCompanyToJupRoles": {
            "name": "jupUserCompanyToJupRoles",
            "objectTypeName": "jupRole",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "jupRoleId",
                "targetModelName": "jupUserCompanyToJupRole",
                "propertyTypeName": "jupUserCompanyToJupRoles",
                "options": {
                    "readOnly": false
                }
            }
        },
        "jupRoleToJupUiViews": {
            "name": "jupRoleToJupUiViews",
            "objectTypeName": "jupRole",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "jupRoleId",
                "targetModelName": "jupRoleToJupUiView",
                "propertyTypeName": "jupRoleToJupUiViews",
                "options": {
                    "readOnly": false
                }
            }
        },
        "jupRoleToJupObjectTypes": {
            "name": "jupRoleToJupObjectTypes",
            "objectTypeName": "jupRole",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "jupRoleId",
                "targetModelName": "jupRoleToJupObjectType",
                "propertyTypeName": "jupRoleToJupObjectTypes",
                "options": {
                    "readOnly": false
                }
            }
        },
        "jupRoleToJupUiOptions": {
            "name": "jupRoleToJupUiOptions",
            "objectTypeName": "jupRole",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "jupRoleId",
                "targetModelName": "jupRoleToJupUiOption",
                "propertyTypeName": "jupRoleToJupUiOptions",
                "options": {
                    "readOnly": false
                }
            }
        },
        "jupRoleToJupUiOperations": {
            "name": "jupRoleToJupUiOperations",
            "objectTypeName": "jupRole",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "jupRoleId",
                "targetModelName": "jupRoleToJupUiOperation",
                "propertyTypeName": "jupRoleToJupUiOperations",
                "options": {
                    "readOnly": false
                }
            }
        },
        "apiUserToJupRoles": {
            "name": "apiUserToJupRoles",
            "objectTypeName": "jupRole",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "jupRoleId",
                "targetModelName": "apiUserToJupRole",
                "propertyTypeName": "apiUserToJupRoles",
                "options": {
                    "readOnly": false
                }
            }
        },
        "userRegistrationTenantRuleToJupRoles": {
            "name": "userRegistrationTenantRuleToJupRoles",
            "objectTypeName": "jupRole",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "jupRoleId",
                "targetModelName": "userRegistrationTenantRuleToJupRole",
                "propertyTypeName": "userRegistrationTenantRuleToJupRoles",
                "options": {
                    "readOnly": false
                }
            }
        },
        "jupRoleToJupUiLayouts": {
            "name": "jupRoleToJupUiLayouts",
            "objectTypeName": "jupRole",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "jupRoleId",
                "targetModelName": "jupRoleToJupUiLayout",
                "propertyTypeName": "jupRoleToJupUiLayouts",
                "options": {
                    "readOnly": false
                }
            }
        }
    },
    "plural": "jupRoles",
    "camelized": {
        "singular": "jupRole",
        "plural": "jupRoles",
        "id": "jupRoleId"
    },
    "capitalized": {
        "singular": "JupRole",
        "plural": "JupRoles",
        "id": "JupRoleId"
    },
    "context": {
        "hasMany": [
            "jupUserCompanyToJupRole",
            "jupRoleToJupUiView",
            "jupRoleToJupObjectType",
            "jupRoleToJupUiOption",
            "jupRoleToJupUiOperation",
            "apiUserToJupRole",
            "userRegistrationTenantRuleToJupRole",
            "jupRoleToJupUiLayout"
        ],
        "belongsTo": []
    }
}
