
import { IObjectTypeDefinition } from "../../metaModel/shared/objectType.models";

export const personObjectTypeDefintion: IObjectTypeDefinition = {
    "name": "person",
    "type": "table",
    "scope": "private",
    "isMasterData": false,
    "isReportingData": false,
    "propertiesByName": {
        "id": {
            "name": "id",
            "objectTypeName": "person",
            "type": "primary-key",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": true
            }
        },
        "firstname": {
            "name": "firstname",
            "objectTypeName": "person",
            "type": "string",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "lastname": {
            "name": "lastname",
            "objectTypeName": "person",
            "type": "string",
            "options": {
                "mandatory": true,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "fullname": {
            "name": "fullname",
            "objectTypeName": "person",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": true,
                "calculated": true,
                "technical": false
            }
        },
        "email": {
            "name": "email",
            "objectTypeName": "person",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "picture": {
            "name": "picture",
            "objectTypeName": "person",
            "type": "image",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "title": {
            "name": "title",
            "objectTypeName": "person",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "monitorReference": {
            "name": "monitorReference",
            "objectTypeName": "person",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "computerReference": {
            "name": "computerReference",
            "objectTypeName": "person",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "telephone": {
            "name": "telephone",
            "objectTypeName": "person",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "cellphone": {
            "name": "cellphone",
            "objectTypeName": "person",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "code": {
            "name": "code",
            "objectTypeName": "person",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "badgeNumber": {
            "name": "badgeNumber",
            "objectTypeName": "person",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "badgeRestaurant": {
            "name": "badgeRestaurant",
            "objectTypeName": "person",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "boxNumber": {
            "name": "boxNumber",
            "objectTypeName": "person",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "registrationNumber": {
            "name": "registrationNumber",
            "objectTypeName": "person",
            "type": "string",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "startDate": {
            "name": "startDate",
            "objectTypeName": "person",
            "type": "date",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "endDate": {
            "name": "endDate",
            "objectTypeName": "person",
            "type": "date",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "info": {
            "name": "info",
            "objectTypeName": "person",
            "type": "text",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            }
        },
        "notAffectable": {
            "name": "notAffectable",
            "objectTypeName": "person",
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
            "objectTypeName": "person",
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
            "objectTypeName": "person",
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
            "objectTypeName": "person",
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
            "objectTypeName": "person",
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
            "objectTypeName": "person",
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
        "personStateId": {
            "name": "personStateId",
            "objectTypeName": "person",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "personStateId",
                "targetModelName": "personState",
                "propertyTypeName": "personState",
                "options": {
                    "readOnly": false
                }
            }
        },
        "personState": {
            "name": "personState",
            "objectTypeName": "person",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "personStateId",
                "targetModelName": "personState",
                "propertyTypeName": "personState",
                "options": {
                    "readOnly": false
                }
            }
        },
        "personSecurityProfileId": {
            "name": "personSecurityProfileId",
            "objectTypeName": "person",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "personSecurityProfileId",
                "targetModelName": "personSecurityProfile",
                "propertyTypeName": "personSecurityProfile",
                "options": {
                    "readOnly": false
                }
            }
        },
        "personSecurityProfile": {
            "name": "personSecurityProfile",
            "objectTypeName": "person",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "personSecurityProfileId",
                "targetModelName": "personSecurityProfile",
                "propertyTypeName": "personSecurityProfile",
                "options": {
                    "readOnly": false
                }
            }
        },
        "costCenterId": {
            "name": "costCenterId",
            "objectTypeName": "person",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "costCenterId",
                "targetModelName": "costCenter",
                "propertyTypeName": "costCenter",
                "options": {
                    "readOnly": false
                }
            }
        },
        "costCenter": {
            "name": "costCenter",
            "objectTypeName": "person",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "costCenterId",
                "targetModelName": "costCenter",
                "propertyTypeName": "costCenter",
                "options": {
                    "readOnly": false
                }
            }
        },
        "personCompanyId": {
            "name": "personCompanyId",
            "objectTypeName": "person",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "personCompanyId",
                "targetModelName": "personCompany",
                "propertyTypeName": "personCompany",
                "options": {
                    "readOnly": false
                }
            }
        },
        "personCompany": {
            "name": "personCompany",
            "objectTypeName": "person",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "personCompanyId",
                "targetModelName": "personCompany",
                "propertyTypeName": "personCompany",
                "options": {
                    "readOnly": false
                }
            }
        },
        "personGenderId": {
            "name": "personGenderId",
            "objectTypeName": "person",
            "type": "foreign-key",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": true
            },
            "association": {
                "foreignKey": "personGenderId",
                "targetModelName": "personGender",
                "propertyTypeName": "personGender",
                "options": {
                    "readOnly": false
                }
            }
        },
        "personGender": {
            "name": "personGender",
            "objectTypeName": "person",
            "type": "belongs-to",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "personGenderId",
                "targetModelName": "personGender",
                "propertyTypeName": "personGender",
                "options": {
                    "readOnly": false
                }
            }
        },
        "userCompanyCreatedById": {
            "name": "userCompanyCreatedById",
            "objectTypeName": "person",
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
            "objectTypeName": "person",
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
            "objectTypeName": "person",
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
            "objectTypeName": "person",
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
        "personToPersonSources": {
            "name": "personToPersonSources",
            "objectTypeName": "person",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "personSourceId",
                "targetModelName": "personToPerson",
                "propertyTypeName": "personToPersonSources",
                "options": {
                    "readOnly": false
                }
            }
        },
        "personToPersonTargets": {
            "name": "personToPersonTargets",
            "objectTypeName": "person",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "personTargetId",
                "targetModelName": "personToPerson",
                "propertyTypeName": "personToPersonTargets",
                "options": {
                    "readOnly": false
                }
            }
        },
        "roomAffectations": {
            "name": "roomAffectations",
            "objectTypeName": "person",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "personId",
                "targetModelName": "roomAffectation",
                "propertyTypeName": "roomAffectations",
                "options": {
                    "readOnly": false
                }
            }
        },
        "workplaceAffectations": {
            "name": "workplaceAffectations",
            "objectTypeName": "person",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "personId",
                "targetModelName": "workplaceAffectation",
                "propertyTypeName": "workplaceAffectations",
                "options": {
                    "readOnly": false
                }
            }
        },
        "itemToPeople": {
            "name": "itemToPeople",
            "objectTypeName": "person",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "personId",
                "targetModelName": "itemToPerson",
                "propertyTypeName": "itemToPeople",
                "options": {
                    "readOnly": false
                }
            }
        },
        "personToBuildings": {
            "name": "personToBuildings",
            "objectTypeName": "person",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "personId",
                "targetModelName": "personToBuilding",
                "propertyTypeName": "personToBuildings",
                "options": {
                    "readOnly": false
                }
            }
        },
        "dimensionToPeople": {
            "name": "dimensionToPeople",
            "objectTypeName": "person",
            "type": "has-many-paginated",
            "options": {
                "mandatory": false,
                "readOnly": false,
                "calculated": false,
                "technical": false
            },
            "association": {
                "foreignKey": "personId",
                "targetModelName": "dimensionToPerson",
                "propertyTypeName": "dimensionToPeople",
                "options": {
                    "readOnly": false
                }
            }
        },
        "companyId": {
            "name": "companyId",
            "objectTypeName": "person",
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
            "objectTypeName": "person",
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
    "plural": "people",
    "camelized": {
        "singular": "person",
        "plural": "people",
        "id": "personId"
    },
    "capitalized": {
        "singular": "Person",
        "plural": "People",
        "id": "PersonId"
    },
    "context": {
        "hasMany": [
            "personToPerson",
            "roomAffectation",
            "workplaceAffectation",
            "itemToPerson",
            "personToBuilding",
            "dimensionToPerson"
        ],
        "belongsTo": [
            "company"
        ]
    }
}
