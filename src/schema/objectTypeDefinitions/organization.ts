
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const organizationObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "organization",
    "type": "table",
    "scope": "private",
    "isMasterData": true,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "organization",
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
            "objectTypeName": "organization",
            "type": "string",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "code": {
            "name": "code",
            "objectTypeName": "organization",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "color": {
            "name": "color",
            "objectTypeName": "organization",
            "type": "color",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "createdAt": {
            "name": "createdAt",
            "objectTypeName": "organization",
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
            "objectTypeName": "organization",
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
            "objectTypeName": "organization",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "organizationId": {
            "name": "organizationId",
            "objectTypeName": "organization",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "organizationId",
                "targetModelName": "organization",
                "propertyTypeName": "organization",
                "options": {
                    "readOnly": false
                }
            }
        },
        "organization": {
            "name": "organization",
            "objectTypeName": "organization",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "organizationId",
                "targetModelName": "organization",
                "propertyTypeName": "organization",
                "options": {
                    "readOnly": false
                }
            }
        },
        "organizations": {
            "name": "organizations",
            "objectTypeName": "organization",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "organizationId",
                "targetModelName": "organization",
                "propertyTypeName": "organizations",
                "options": {
                    "readOnly": false
                }
            }
        },
        "userCompanyCreatedById": {
            "name": "userCompanyCreatedById",
            "objectTypeName": "organization",
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
            "objectTypeName": "organization",
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
            "objectTypeName": "organization",
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
            "objectTypeName": "organization",
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
        "rooms": {
            "name": "rooms",
            "objectTypeName": "organization",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "organizationId",
                "targetModelName": "room",
                "propertyTypeName": "rooms",
                "options": {
                    "readOnly": false
                }
            }
        },
        "people": {
            "name": "people",
            "objectTypeName": "organization",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "organizationId",
                "targetModelName": "person",
                "propertyTypeName": "people",
                "options": {
                    "readOnly": false
                }
            }
        },
        "workplaces": {
            "name": "workplaces",
            "objectTypeName": "organization",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "organizationId",
                "targetModelName": "workplace",
                "propertyTypeName": "workplaces",
                "options": {
                    "readOnly": false
                }
            }
        },
        "organizationFloors": {
            "name": "organizationFloors",
            "objectTypeName": "organization",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "organizationId",
                "targetModelName": "organizationFloor",
                "propertyTypeName": "organizationFloors",
                "options": {
                    "readOnly": false
                }
            }
        },
        "organizationBuildings": {
            "name": "organizationBuildings",
            "objectTypeName": "organization",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "organizationId",
                "targetModelName": "organizationBuilding",
                "propertyTypeName": "organizationBuildings",
                "options": {
                    "readOnly": false
                }
            }
        },
        "companyId": {
            "name": "companyId",
            "objectTypeName": "organization",
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
            "objectTypeName": "organization",
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
    "plural": "organizations",
    "camelized": {
        "singular": "organization",
        "plural": "organizations",
        "id": "organizationId"
    },
    "capitalized": {
        "singular": "Organization",
        "plural": "Organizations",
        "id": "OrganizationId"
    },
    "context": {
        "hasMany": [
            "organization",
            "room",
            "person",
            "workplace",
            "organizationFloor",
            "organizationBuilding"
        ],
        "belongsTo": [
            "company"
        ]
    }
}
