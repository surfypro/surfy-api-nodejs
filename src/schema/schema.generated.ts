
/* eslint-disable */

import { IObjectTypeDefinition } from "../jup.models"

export namespace Schema {
    export const jupObjectType: IObjectTypeDefinition = {
        "name": "jupObjectType",
        "type": "table",
        "scope": "public",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "jupObjectType",
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
                "objectTypeName": "jupObjectType",
                "type": "string",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "jupObjectType",
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
                "objectTypeName": "jupObjectType",
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
                "objectTypeName": "jupObjectType",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "jupUiViews": {
                "name": "jupUiViews",
                "objectTypeName": "jupObjectType",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "jupObjectTypeId",
                    "targetModelName": "jupUiView",
                    "propertyTypeName": "jupUiViews"
                }
            },
            "jupRoleToJupObjectTypes": {
                "name": "jupRoleToJupObjectTypes",
                "objectTypeName": "jupObjectType",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "jupObjectTypeId",
                    "targetModelName": "jupRoleToJupObjectType",
                    "propertyTypeName": "jupRoleToJupObjectTypes"
                }
            }
        },
        "plural": "jupObjectTypes",
        "camelized": {
            "singular": "jupObjectType",
            "plural": "jupObjectTypes",
            "id": "jupObjectTypeId"
        },
        "capitalized": {
            "singular": "JupObjectType",
            "plural": "JupObjectTypes",
            "id": "JupObjectTypeId"
        }
    }
    export const jupUiView: IObjectTypeDefinition = {
        "name": "jupUiView",
        "type": "table",
        "scope": "public",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "jupUiView",
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
                "objectTypeName": "jupUiView",
                "type": "string",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "isDefaultView": {
                "name": "isDefaultView",
                "objectTypeName": "jupUiView",
                "type": "boolean",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": "false"
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "jupUiView",
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
                "objectTypeName": "jupUiView",
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
                "objectTypeName": "jupUiView",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "jupObjectTypeId": {
                "name": "jupObjectTypeId",
                "objectTypeName": "jupUiView",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "jupObjectTypeId",
                    "targetModelName": "jupObjectType",
                    "propertyTypeName": "jupObjectType"
                }
            },
            "jupObjectType": {
                "name": "jupObjectType",
                "objectTypeName": "jupUiView",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "jupObjectTypeId",
                    "targetModelName": "jupObjectType",
                    "propertyTypeName": "jupObjectType"
                }
            },
            "jupRoleToJupUiViews": {
                "name": "jupRoleToJupUiViews",
                "objectTypeName": "jupUiView",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "jupUiViewId",
                    "targetModelName": "jupRoleToJupUiView",
                    "propertyTypeName": "jupRoleToJupUiViews"
                }
            }
        },
        "plural": "jupUiViews",
        "camelized": {
            "singular": "jupUiView",
            "plural": "jupUiViews",
            "id": "jupUiViewId"
        },
        "capitalized": {
            "singular": "JupUiView",
            "plural": "JupUiViews",
            "id": "JupUiViewId"
        }
    }
    export const jupRole: IObjectTypeDefinition = {
        "name": "jupRole",
        "type": "table",
        "scope": "public",
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
                    "propertyTypeName": "jupUserCompanyToJupRoles"
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
                    "propertyTypeName": "jupRoleToJupUiViews"
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
                    "propertyTypeName": "jupRoleToJupObjectTypes"
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
                    "propertyTypeName": "jupRoleToJupUiOptions"
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
                    "propertyTypeName": "jupRoleToJupUiOperations"
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
                    "propertyTypeName": "apiUserToJupRoles"
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
        }
    }
    export const jupUiOption: IObjectTypeDefinition = {
        "name": "jupUiOption",
        "type": "table",
        "scope": "public",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "jupUiOption",
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
                "objectTypeName": "jupUiOption",
                "type": "string",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "jupUiOption",
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
                "objectTypeName": "jupUiOption",
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
                "objectTypeName": "jupUiOption",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "jupRoleToJupUiOptions": {
                "name": "jupRoleToJupUiOptions",
                "objectTypeName": "jupUiOption",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "jupUiOptionId",
                    "targetModelName": "jupRoleToJupUiOption",
                    "propertyTypeName": "jupRoleToJupUiOptions"
                }
            }
        },
        "plural": "jupUiOptions",
        "camelized": {
            "singular": "jupUiOption",
            "plural": "jupUiOptions",
            "id": "jupUiOptionId"
        },
        "capitalized": {
            "singular": "JupUiOption",
            "plural": "JupUiOptions",
            "id": "JupUiOptionId"
        }
    }
    export const jupUiOperation: IObjectTypeDefinition = {
        "name": "jupUiOperation",
        "type": "table",
        "scope": "public",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "jupUiOperation",
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
                "objectTypeName": "jupUiOperation",
                "type": "string",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "jupUiOperation",
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
                "objectTypeName": "jupUiOperation",
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
                "objectTypeName": "jupUiOperation",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "jupRoleToJupUiOperations": {
                "name": "jupRoleToJupUiOperations",
                "objectTypeName": "jupUiOperation",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "jupUiOperationId",
                    "targetModelName": "jupRoleToJupUiOperation",
                    "propertyTypeName": "jupRoleToJupUiOperations"
                }
            }
        },
        "plural": "jupUiOperations",
        "camelized": {
            "singular": "jupUiOperation",
            "plural": "jupUiOperations",
            "id": "jupUiOperationId"
        },
        "capitalized": {
            "singular": "JupUiOperation",
            "plural": "JupUiOperations",
            "id": "JupUiOperationId"
        }
    }
    export const contentRole: IObjectTypeDefinition = {
        "name": "contentRole",
        "type": "table",
        "scope": "private",
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
                    "propertyTypeName": "contentRoleToBuildings"
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
                    "propertyTypeName": "contentRoleToUserCompanies"
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
                    "propertyTypeName": "contentRoleToFloors"
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
                    "propertyTypeName": "apiUserToContentRoles"
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
                    "propertyTypeName": "contentRoleToJupUiTenantOperations"
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
                    "propertyTypeName": "company"
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
                    "propertyTypeName": "company"
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
        }
    }
    export const jupUserCompanyToJupRole: IObjectTypeDefinition = {
        "name": "jupUserCompanyToJupRole",
        "type": "many-to-many",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "jupUserCompanyToJupRole",
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
                "objectTypeName": "jupUserCompanyToJupRole",
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
                "objectTypeName": "jupUserCompanyToJupRole",
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
                "objectTypeName": "jupUserCompanyToJupRole",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "userCompanyId": {
                "name": "userCompanyId",
                "objectTypeName": "jupUserCompanyToJupRole",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "userCompanyId",
                    "targetModelName": "userCompany",
                    "propertyTypeName": "userCompany"
                }
            },
            "userCompany": {
                "name": "userCompany",
                "objectTypeName": "jupUserCompanyToJupRole",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "userCompanyId",
                    "targetModelName": "userCompany",
                    "propertyTypeName": "userCompany"
                }
            },
            "jupRoleId": {
                "name": "jupRoleId",
                "objectTypeName": "jupUserCompanyToJupRole",
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
                    "propertyTypeName": "jupRole"
                }
            },
            "jupRole": {
                "name": "jupRole",
                "objectTypeName": "jupUserCompanyToJupRole",
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
                    "propertyTypeName": "jupRole"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "jupUserCompanyToJupRole",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "jupUserCompanyToJupRole",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "jupUserCompanyToJupRoles",
        "camelized": {
            "singular": "jupUserCompanyToJupRole",
            "plural": "jupUserCompanyToJupRoles",
            "id": "jupUserCompanyToJupRoleId"
        },
        "capitalized": {
            "singular": "JupUserCompanyToJupRole",
            "plural": "JupUserCompanyToJupRoles",
            "id": "JupUserCompanyToJupRoleId"
        }
    }
    export const jupRoleToJupUiView: IObjectTypeDefinition = {
        "name": "jupRoleToJupUiView",
        "type": "many-to-many",
        "scope": "public",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "jupRoleToJupUiView",
                "type": "primary-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "canSee": {
                "name": "canSee",
                "objectTypeName": "jupRoleToJupUiView",
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
                "objectTypeName": "jupRoleToJupUiView",
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
                "objectTypeName": "jupRoleToJupUiView",
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
                "objectTypeName": "jupRoleToJupUiView",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "jupUiViewId": {
                "name": "jupUiViewId",
                "objectTypeName": "jupRoleToJupUiView",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "jupUiViewId",
                    "targetModelName": "jupUiView",
                    "propertyTypeName": "jupUiView"
                }
            },
            "jupUiView": {
                "name": "jupUiView",
                "objectTypeName": "jupRoleToJupUiView",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "jupUiViewId",
                    "targetModelName": "jupUiView",
                    "propertyTypeName": "jupUiView"
                }
            },
            "jupRoleId": {
                "name": "jupRoleId",
                "objectTypeName": "jupRoleToJupUiView",
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
                    "propertyTypeName": "jupRole"
                }
            },
            "jupRole": {
                "name": "jupRole",
                "objectTypeName": "jupRoleToJupUiView",
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
                    "propertyTypeName": "jupRole"
                }
            }
        },
        "plural": "jupRoleToJupUiViews",
        "camelized": {
            "singular": "jupRoleToJupUiView",
            "plural": "jupRoleToJupUiViews",
            "id": "jupRoleToJupUiViewId"
        },
        "capitalized": {
            "singular": "JupRoleToJupUiView",
            "plural": "JupRoleToJupUiViews",
            "id": "JupRoleToJupUiViewId"
        }
    }
    export const jupRoleToJupObjectType: IObjectTypeDefinition = {
        "name": "jupRoleToJupObjectType",
        "type": "many-to-many",
        "scope": "public",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "jupRoleToJupObjectType",
                "type": "primary-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "arCreate": {
                "name": "arCreate",
                "objectTypeName": "jupRoleToJupObjectType",
                "type": "boolean",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": false
                }
            },
            "arRead": {
                "name": "arRead",
                "objectTypeName": "jupRoleToJupObjectType",
                "type": "boolean",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": false
                }
            },
            "arUpdate": {
                "name": "arUpdate",
                "objectTypeName": "jupRoleToJupObjectType",
                "type": "boolean",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": false
                }
            },
            "arDelete": {
                "name": "arDelete",
                "objectTypeName": "jupRoleToJupObjectType",
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
                "objectTypeName": "jupRoleToJupObjectType",
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
                "objectTypeName": "jupRoleToJupObjectType",
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
                "objectTypeName": "jupRoleToJupObjectType",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "jupObjectTypeId": {
                "name": "jupObjectTypeId",
                "objectTypeName": "jupRoleToJupObjectType",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "jupObjectTypeId",
                    "targetModelName": "jupObjectType",
                    "propertyTypeName": "jupObjectType"
                }
            },
            "jupObjectType": {
                "name": "jupObjectType",
                "objectTypeName": "jupRoleToJupObjectType",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "jupObjectTypeId",
                    "targetModelName": "jupObjectType",
                    "propertyTypeName": "jupObjectType"
                }
            },
            "jupRoleId": {
                "name": "jupRoleId",
                "objectTypeName": "jupRoleToJupObjectType",
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
                    "propertyTypeName": "jupRole"
                }
            },
            "jupRole": {
                "name": "jupRole",
                "objectTypeName": "jupRoleToJupObjectType",
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
                    "propertyTypeName": "jupRole"
                }
            }
        },
        "plural": "jupRoleToJupObjectTypes",
        "camelized": {
            "singular": "jupRoleToJupObjectType",
            "plural": "jupRoleToJupObjectTypes",
            "id": "jupRoleToJupObjectTypeId"
        },
        "capitalized": {
            "singular": "JupRoleToJupObjectType",
            "plural": "JupRoleToJupObjectTypes",
            "id": "JupRoleToJupObjectTypeId"
        }
    }
    export const jupRoleToJupUiOption: IObjectTypeDefinition = {
        "name": "jupRoleToJupUiOption",
        "type": "many-to-many",
        "scope": "public",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "jupRoleToJupUiOption",
                "type": "primary-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "canSee": {
                "name": "canSee",
                "objectTypeName": "jupRoleToJupUiOption",
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
                "objectTypeName": "jupRoleToJupUiOption",
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
                "objectTypeName": "jupRoleToJupUiOption",
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
                "objectTypeName": "jupRoleToJupUiOption",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "jupUiOptionId": {
                "name": "jupUiOptionId",
                "objectTypeName": "jupRoleToJupUiOption",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "jupUiOptionId",
                    "targetModelName": "jupUiOption",
                    "propertyTypeName": "jupUiOption"
                }
            },
            "jupUiOption": {
                "name": "jupUiOption",
                "objectTypeName": "jupRoleToJupUiOption",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "jupUiOptionId",
                    "targetModelName": "jupUiOption",
                    "propertyTypeName": "jupUiOption"
                }
            },
            "jupRoleId": {
                "name": "jupRoleId",
                "objectTypeName": "jupRoleToJupUiOption",
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
                    "propertyTypeName": "jupRole"
                }
            },
            "jupRole": {
                "name": "jupRole",
                "objectTypeName": "jupRoleToJupUiOption",
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
                    "propertyTypeName": "jupRole"
                }
            }
        },
        "plural": "jupRoleToJupUiOptions",
        "camelized": {
            "singular": "jupRoleToJupUiOption",
            "plural": "jupRoleToJupUiOptions",
            "id": "jupRoleToJupUiOptionId"
        },
        "capitalized": {
            "singular": "JupRoleToJupUiOption",
            "plural": "JupRoleToJupUiOptions",
            "id": "JupRoleToJupUiOptionId"
        }
    }
    export const jupRoleToJupUiOperation: IObjectTypeDefinition = {
        "name": "jupRoleToJupUiOperation",
        "type": "many-to-many",
        "scope": "public",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "jupRoleToJupUiOperation",
                "type": "primary-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "canSee": {
                "name": "canSee",
                "objectTypeName": "jupRoleToJupUiOperation",
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
                "objectTypeName": "jupRoleToJupUiOperation",
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
                "objectTypeName": "jupRoleToJupUiOperation",
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
                "objectTypeName": "jupRoleToJupUiOperation",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "jupUiOperationId": {
                "name": "jupUiOperationId",
                "objectTypeName": "jupRoleToJupUiOperation",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "jupUiOperationId",
                    "targetModelName": "jupUiOperation",
                    "propertyTypeName": "jupUiOperation"
                }
            },
            "jupUiOperation": {
                "name": "jupUiOperation",
                "objectTypeName": "jupRoleToJupUiOperation",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "jupUiOperationId",
                    "targetModelName": "jupUiOperation",
                    "propertyTypeName": "jupUiOperation"
                }
            },
            "jupRoleId": {
                "name": "jupRoleId",
                "objectTypeName": "jupRoleToJupUiOperation",
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
                    "propertyTypeName": "jupRole"
                }
            },
            "jupRole": {
                "name": "jupRole",
                "objectTypeName": "jupRoleToJupUiOperation",
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
                    "propertyTypeName": "jupRole"
                }
            }
        },
        "plural": "jupRoleToJupUiOperations",
        "camelized": {
            "singular": "jupRoleToJupUiOperation",
            "plural": "jupRoleToJupUiOperations",
            "id": "jupRoleToJupUiOperationId"
        },
        "capitalized": {
            "singular": "JupRoleToJupUiOperation",
            "plural": "JupRoleToJupUiOperations",
            "id": "JupRoleToJupUiOperationId"
        }
    }
    export const contentRoleToBuilding: IObjectTypeDefinition = {
        "name": "contentRoleToBuilding",
        "type": "many-to-many",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "contentRoleToBuilding",
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
                "objectTypeName": "contentRoleToBuilding",
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
                "objectTypeName": "contentRoleToBuilding",
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
                "objectTypeName": "contentRoleToBuilding",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "contentRoleId": {
                "name": "contentRoleId",
                "objectTypeName": "contentRoleToBuilding",
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
                    "propertyTypeName": "contentRole"
                }
            },
            "contentRole": {
                "name": "contentRole",
                "objectTypeName": "contentRoleToBuilding",
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
                    "propertyTypeName": "contentRole"
                }
            },
            "buildingId": {
                "name": "buildingId",
                "objectTypeName": "contentRoleToBuilding",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "buildingId",
                    "targetModelName": "building",
                    "propertyTypeName": "building"
                }
            },
            "building": {
                "name": "building",
                "objectTypeName": "contentRoleToBuilding",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "buildingId",
                    "targetModelName": "building",
                    "propertyTypeName": "building"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "contentRoleToBuilding",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "contentRoleToBuilding",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "contentRoleToBuildings",
        "camelized": {
            "singular": "contentRoleToBuilding",
            "plural": "contentRoleToBuildings",
            "id": "contentRoleToBuildingId"
        },
        "capitalized": {
            "singular": "ContentRoleToBuilding",
            "plural": "ContentRoleToBuildings",
            "id": "ContentRoleToBuildingId"
        }
    }
    export const contentRoleToUserCompany: IObjectTypeDefinition = {
        "name": "contentRoleToUserCompany",
        "type": "many-to-many",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "contentRoleToUserCompany",
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
                "objectTypeName": "contentRoleToUserCompany",
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
                "objectTypeName": "contentRoleToUserCompany",
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
                "objectTypeName": "contentRoleToUserCompany",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "userCompanyId": {
                "name": "userCompanyId",
                "objectTypeName": "contentRoleToUserCompany",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "userCompanyId",
                    "targetModelName": "userCompany",
                    "propertyTypeName": "userCompany"
                }
            },
            "userCompany": {
                "name": "userCompany",
                "objectTypeName": "contentRoleToUserCompany",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "userCompanyId",
                    "targetModelName": "userCompany",
                    "propertyTypeName": "userCompany"
                }
            },
            "contentRoleId": {
                "name": "contentRoleId",
                "objectTypeName": "contentRoleToUserCompany",
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
                    "propertyTypeName": "contentRole"
                }
            },
            "contentRole": {
                "name": "contentRole",
                "objectTypeName": "contentRoleToUserCompany",
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
                    "propertyTypeName": "contentRole"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "contentRoleToUserCompany",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "contentRoleToUserCompany",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "contentRoleToUserCompanies",
        "camelized": {
            "singular": "contentRoleToUserCompany",
            "plural": "contentRoleToUserCompanies",
            "id": "contentRoleToUserCompanyId"
        },
        "capitalized": {
            "singular": "ContentRoleToUserCompany",
            "plural": "ContentRoleToUserCompanies",
            "id": "ContentRoleToUserCompanyId"
        }
    }
    export const contentRoleToFloor: IObjectTypeDefinition = {
        "name": "contentRoleToFloor",
        "type": "many-to-many",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "contentRoleToFloor",
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
                "objectTypeName": "contentRoleToFloor",
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
                "objectTypeName": "contentRoleToFloor",
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
                "objectTypeName": "contentRoleToFloor",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "contentRoleId": {
                "name": "contentRoleId",
                "objectTypeName": "contentRoleToFloor",
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
                    "propertyTypeName": "contentRole"
                }
            },
            "contentRole": {
                "name": "contentRole",
                "objectTypeName": "contentRoleToFloor",
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
                    "propertyTypeName": "contentRole"
                }
            },
            "floorId": {
                "name": "floorId",
                "objectTypeName": "contentRoleToFloor",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "floorId",
                    "targetModelName": "floor",
                    "propertyTypeName": "floor"
                }
            },
            "floor": {
                "name": "floor",
                "objectTypeName": "contentRoleToFloor",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "floorId",
                    "targetModelName": "floor",
                    "propertyTypeName": "floor"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "contentRoleToFloor",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "contentRoleToFloor",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "contentRoleToFloors",
        "camelized": {
            "singular": "contentRoleToFloor",
            "plural": "contentRoleToFloors",
            "id": "contentRoleToFloorId"
        },
        "capitalized": {
            "singular": "ContentRoleToFloor",
            "plural": "ContentRoleToFloors",
            "id": "ContentRoleToFloorId"
        }
    }
    export const partnerApiCredential: IObjectTypeDefinition = {
        "name": "partnerApiCredential",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "partnerApiCredential",
                "type": "primary-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "label": {
                "name": "label",
                "objectTypeName": "partnerApiCredential",
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
                "objectTypeName": "partnerApiCredential",
                "type": "string",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "host": {
                "name": "host",
                "objectTypeName": "partnerApiCredential",
                "type": "string",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "clientId": {
                "name": "clientId",
                "objectTypeName": "partnerApiCredential",
                "type": "string",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "clientSecret": {
                "name": "clientSecret",
                "objectTypeName": "partnerApiCredential",
                "type": "password",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "enable": {
                "name": "enable",
                "objectTypeName": "partnerApiCredential",
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
                "objectTypeName": "partnerApiCredential",
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
                "objectTypeName": "partnerApiCredential",
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
                "objectTypeName": "partnerApiCredential",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "partnerApiCredential",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "partnerApiCredential",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "partnerApiCredentials",
        "camelized": {
            "singular": "partnerApiCredential",
            "plural": "partnerApiCredentials",
            "id": "partnerApiCredentialId"
        },
        "capitalized": {
            "singular": "PartnerApiCredential",
            "plural": "PartnerApiCredentials",
            "id": "PartnerApiCredentialId"
        }
    }
    export const apiUser: IObjectTypeDefinition = {
        "name": "apiUser",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "apiUser",
                "type": "primary-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "clientSecret": {
                "name": "clientSecret",
                "objectTypeName": "apiUser",
                "type": "password",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "apiUser",
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
                "objectTypeName": "apiUser",
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
                "objectTypeName": "apiUser",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "apiUserToJupRoles": {
                "name": "apiUserToJupRoles",
                "objectTypeName": "apiUser",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "apiUserId",
                    "targetModelName": "apiUserToJupRole",
                    "propertyTypeName": "apiUserToJupRoles"
                }
            },
            "apiUserToContentRoles": {
                "name": "apiUserToContentRoles",
                "objectTypeName": "apiUser",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "apiUserId",
                    "targetModelName": "apiUserToContentRole",
                    "propertyTypeName": "apiUserToContentRoles"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "apiUser",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "apiUser",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "apiUsers",
        "camelized": {
            "singular": "apiUser",
            "plural": "apiUsers",
            "id": "apiUserId"
        },
        "capitalized": {
            "singular": "ApiUser",
            "plural": "ApiUsers",
            "id": "ApiUserId"
        }
    }
    export const apiUserToJupRole: IObjectTypeDefinition = {
        "name": "apiUserToJupRole",
        "type": "many-to-many",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "apiUserToJupRole",
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
                "objectTypeName": "apiUserToJupRole",
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
                "objectTypeName": "apiUserToJupRole",
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
                "objectTypeName": "apiUserToJupRole",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "apiUserId": {
                "name": "apiUserId",
                "objectTypeName": "apiUserToJupRole",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "apiUserId",
                    "targetModelName": "apiUser",
                    "propertyTypeName": "apiUser"
                }
            },
            "apiUser": {
                "name": "apiUser",
                "objectTypeName": "apiUserToJupRole",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "apiUserId",
                    "targetModelName": "apiUser",
                    "propertyTypeName": "apiUser"
                }
            },
            "jupRoleId": {
                "name": "jupRoleId",
                "objectTypeName": "apiUserToJupRole",
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
                    "propertyTypeName": "jupRole"
                }
            },
            "jupRole": {
                "name": "jupRole",
                "objectTypeName": "apiUserToJupRole",
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
                    "propertyTypeName": "jupRole"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "apiUserToJupRole",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "apiUserToJupRole",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "apiUserToJupRoles",
        "camelized": {
            "singular": "apiUserToJupRole",
            "plural": "apiUserToJupRoles",
            "id": "apiUserToJupRoleId"
        },
        "capitalized": {
            "singular": "ApiUserToJupRole",
            "plural": "ApiUserToJupRoles",
            "id": "ApiUserToJupRoleId"
        }
    }
    export const apiUserToContentRole: IObjectTypeDefinition = {
        "name": "apiUserToContentRole",
        "type": "many-to-many",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "apiUserToContentRole",
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
                "objectTypeName": "apiUserToContentRole",
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
                "objectTypeName": "apiUserToContentRole",
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
                "objectTypeName": "apiUserToContentRole",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "apiUserId": {
                "name": "apiUserId",
                "objectTypeName": "apiUserToContentRole",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "apiUserId",
                    "targetModelName": "apiUser",
                    "propertyTypeName": "apiUser"
                }
            },
            "apiUser": {
                "name": "apiUser",
                "objectTypeName": "apiUserToContentRole",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "apiUserId",
                    "targetModelName": "apiUser",
                    "propertyTypeName": "apiUser"
                }
            },
            "contentRoleId": {
                "name": "contentRoleId",
                "objectTypeName": "apiUserToContentRole",
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
                    "propertyTypeName": "contentRole"
                }
            },
            "contentRole": {
                "name": "contentRole",
                "objectTypeName": "apiUserToContentRole",
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
                    "propertyTypeName": "contentRole"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "apiUserToContentRole",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "apiUserToContentRole",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "apiUserToContentRoles",
        "camelized": {
            "singular": "apiUserToContentRole",
            "plural": "apiUserToContentRoles",
            "id": "apiUserToContentRoleId"
        },
        "capitalized": {
            "singular": "ApiUserToContentRole",
            "plural": "ApiUserToContentRoles",
            "id": "ApiUserToContentRoleId"
        }
    }
    export const jupUiTenantOperation: IObjectTypeDefinition = {
        "name": "jupUiTenantOperation",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "jupUiTenantOperation",
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
                "objectTypeName": "jupUiTenantOperation",
                "type": "string",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "jupUiTenantOperation",
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
                "objectTypeName": "jupUiTenantOperation",
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
                "objectTypeName": "jupUiTenantOperation",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "contentRoleToJupUiTenantOperations": {
                "name": "contentRoleToJupUiTenantOperations",
                "objectTypeName": "jupUiTenantOperation",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "jupUiTenantOperationId",
                    "targetModelName": "contentRoleToJupUiTenantOperation",
                    "propertyTypeName": "contentRoleToJupUiTenantOperations"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "jupUiTenantOperation",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "jupUiTenantOperation",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "jupUiTenantOperations",
        "camelized": {
            "singular": "jupUiTenantOperation",
            "plural": "jupUiTenantOperations",
            "id": "jupUiTenantOperationId"
        },
        "capitalized": {
            "singular": "JupUiTenantOperation",
            "plural": "JupUiTenantOperations",
            "id": "JupUiTenantOperationId"
        }
    }
    export const contentRoleToJupUiTenantOperation: IObjectTypeDefinition = {
        "name": "contentRoleToJupUiTenantOperation",
        "type": "many-to-many",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "contentRoleToJupUiTenantOperation",
                "type": "primary-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "canSee": {
                "name": "canSee",
                "objectTypeName": "contentRoleToJupUiTenantOperation",
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
                "objectTypeName": "contentRoleToJupUiTenantOperation",
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
                "objectTypeName": "contentRoleToJupUiTenantOperation",
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
                "objectTypeName": "contentRoleToJupUiTenantOperation",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "jupUiTenantOperationId": {
                "name": "jupUiTenantOperationId",
                "objectTypeName": "contentRoleToJupUiTenantOperation",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "jupUiTenantOperationId",
                    "targetModelName": "jupUiTenantOperation",
                    "propertyTypeName": "jupUiTenantOperation"
                }
            },
            "jupUiTenantOperation": {
                "name": "jupUiTenantOperation",
                "objectTypeName": "contentRoleToJupUiTenantOperation",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "jupUiTenantOperationId",
                    "targetModelName": "jupUiTenantOperation",
                    "propertyTypeName": "jupUiTenantOperation"
                }
            },
            "contentRoleId": {
                "name": "contentRoleId",
                "objectTypeName": "contentRoleToJupUiTenantOperation",
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
                    "propertyTypeName": "contentRole"
                }
            },
            "contentRole": {
                "name": "contentRole",
                "objectTypeName": "contentRoleToJupUiTenantOperation",
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
                    "propertyTypeName": "contentRole"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "contentRoleToJupUiTenantOperation",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "contentRoleToJupUiTenantOperation",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "contentRoleToJupUiTenantOperations",
        "camelized": {
            "singular": "contentRoleToJupUiTenantOperation",
            "plural": "contentRoleToJupUiTenantOperations",
            "id": "contentRoleToJupUiTenantOperationId"
        },
        "capitalized": {
            "singular": "ContentRoleToJupUiTenantOperation",
            "plural": "ContentRoleToJupUiTenantOperations",
            "id": "ContentRoleToJupUiTenantOperationId"
        }
    }
    export const company: IObjectTypeDefinition = {
        "name": "company",
        "type": "table",
        "scope": "public",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "company",
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
                "objectTypeName": "company",
                "type": "string",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "logoPath": {
                "name": "logoPath",
                "objectTypeName": "company",
                "type": "image",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "iconPath": {
                "name": "iconPath",
                "objectTypeName": "company",
                "type": "square-image",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "company",
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
                "objectTypeName": "company",
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
                "objectTypeName": "company",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "buildingTypes": {
                "name": "buildingTypes",
                "objectTypeName": "company",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "companyId",
                    "targetModelName": "buildingType",
                    "propertyTypeName": "buildingTypes"
                }
            },
            "buildings": {
                "name": "buildings",
                "objectTypeName": "company",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "companyId",
                    "targetModelName": "building",
                    "propertyTypeName": "buildings"
                }
            },
            "userCompanies": {
                "name": "userCompanies",
                "objectTypeName": "company",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "companyId",
                    "targetModelName": "userCompany",
                    "propertyTypeName": "userCompanies"
                }
            }
        },
        "plural": "companies",
        "camelized": {
            "singular": "company",
            "plural": "companies",
            "id": "companyId"
        },
        "capitalized": {
            "singular": "Company",
            "plural": "Companies",
            "id": "CompanyId"
        }
    }
    export const buildingType: IObjectTypeDefinition = {
        "name": "buildingType",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "buildingType",
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
                "objectTypeName": "buildingType",
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
                "objectTypeName": "buildingType",
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
                "objectTypeName": "buildingType",
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
                "objectTypeName": "buildingType",
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
                "objectTypeName": "buildingType",
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
                "objectTypeName": "buildingType",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "buildingType",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "companyId",
                    "targetModelName": "company",
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "buildingType",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "companyId",
                    "targetModelName": "company",
                    "propertyTypeName": "company"
                }
            },
            "buildings": {
                "name": "buildings",
                "objectTypeName": "buildingType",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "buildingTypeId",
                    "targetModelName": "building",
                    "propertyTypeName": "buildings"
                }
            }
        },
        "plural": "buildingTypes",
        "camelized": {
            "singular": "buildingType",
            "plural": "buildingTypes",
            "id": "buildingTypeId"
        },
        "capitalized": {
            "singular": "BuildingType",
            "plural": "BuildingTypes",
            "id": "BuildingTypeId"
        }
    }
    export const organization: IObjectTypeDefinition = {
        "name": "organization",
        "type": "table",
        "scope": "private",
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
                    "propertyTypeName": "organization"
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
                    "propertyTypeName": "organization"
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
                    "propertyTypeName": "organizations"
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
                    "propertyTypeName": "rooms"
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
                    "propertyTypeName": "people"
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
                    "propertyTypeName": "workplaces"
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
                    "propertyTypeName": "organizationFloors"
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
                    "propertyTypeName": "organizationBuildings"
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
                    "propertyTypeName": "company"
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
                    "propertyTypeName": "company"
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
        }
    }
    export const itemTypeFamily: IObjectTypeDefinition = {
        "name": "itemTypeFamily",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "itemTypeFamily",
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
                "objectTypeName": "itemTypeFamily",
                "type": "string",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "itemTypeFamily",
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
                "objectTypeName": "itemTypeFamily",
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
                "objectTypeName": "itemTypeFamily",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "itemTypes": {
                "name": "itemTypes",
                "objectTypeName": "itemTypeFamily",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "itemTypeFamilyId",
                    "targetModelName": "itemType",
                    "propertyTypeName": "itemTypes"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "itemTypeFamily",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "itemTypeFamily",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "itemTypeFamilies",
        "camelized": {
            "singular": "itemTypeFamily",
            "plural": "itemTypeFamilies",
            "id": "itemTypeFamilyId"
        },
        "capitalized": {
            "singular": "ItemTypeFamily",
            "plural": "ItemTypeFamilies",
            "id": "ItemTypeFamilyId"
        }
    }
    export const manufacturer: IObjectTypeDefinition = {
        "name": "manufacturer",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "manufacturer",
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
                "objectTypeName": "manufacturer",
                "type": "string",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "website": {
                "name": "website",
                "objectTypeName": "manufacturer",
                "type": "url",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "manufacturer",
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
                "objectTypeName": "manufacturer",
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
                "objectTypeName": "manufacturer",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "itemTypes": {
                "name": "itemTypes",
                "objectTypeName": "manufacturer",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "manufacturerId",
                    "targetModelName": "itemType",
                    "propertyTypeName": "itemTypes"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "manufacturer",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "manufacturer",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "manufacturers",
        "camelized": {
            "singular": "manufacturer",
            "plural": "manufacturers",
            "id": "manufacturerId"
        },
        "capitalized": {
            "singular": "Manufacturer",
            "plural": "Manufacturers",
            "id": "ManufacturerId"
        }
    }
    export const itemType: IObjectTypeDefinition = {
        "name": "itemType",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "itemType",
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
                "objectTypeName": "itemType",
                "type": "string",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "picture": {
                "name": "picture",
                "objectTypeName": "itemType",
                "type": "image",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "displayItemReferenceInMap": {
                "name": "displayItemReferenceInMap",
                "objectTypeName": "itemType",
                "type": "boolean",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": false
                }
            },
            "code": {
                "name": "code",
                "objectTypeName": "itemType",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "icon": {
                "name": "icon",
                "objectTypeName": "itemType",
                "type": "icon",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "color": {
                "name": "color",
                "objectTypeName": "itemType",
                "type": "color",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "height": {
                "name": "height",
                "objectTypeName": "itemType",
                "type": "distance",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false,
                    "unit": "centimeter",
                    "defaultValue": 0
                }
            },
            "zIndex": {
                "name": "zIndex",
                "objectTypeName": "itemType",
                "type": "integer",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "description": {
                "name": "description",
                "objectTypeName": "itemType",
                "type": "text",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "price": {
                "name": "price",
                "objectTypeName": "itemType",
                "type": "currency",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "itemType",
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
                "objectTypeName": "itemType",
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
                "objectTypeName": "itemType",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "itemTypeFamilyId": {
                "name": "itemTypeFamilyId",
                "objectTypeName": "itemType",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "itemTypeFamilyId",
                    "targetModelName": "itemTypeFamily",
                    "propertyTypeName": "itemTypeFamily"
                }
            },
            "itemTypeFamily": {
                "name": "itemTypeFamily",
                "objectTypeName": "itemType",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "itemTypeFamilyId",
                    "targetModelName": "itemTypeFamily",
                    "propertyTypeName": "itemTypeFamily"
                }
            },
            "manufacturerId": {
                "name": "manufacturerId",
                "objectTypeName": "itemType",
                "type": "foreign-key",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "manufacturerId",
                    "targetModelName": "manufacturer",
                    "propertyTypeName": "manufacturer"
                }
            },
            "manufacturer": {
                "name": "manufacturer",
                "objectTypeName": "itemType",
                "type": "belongs-to",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "manufacturerId",
                    "targetModelName": "manufacturer",
                    "propertyTypeName": "manufacturer"
                }
            },
            "itemTypePoints": {
                "name": "itemTypePoints",
                "objectTypeName": "itemType",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "itemTypeId",
                    "targetModelName": "itemTypePoint",
                    "propertyTypeName": "itemTypePoints"
                }
            },
            "workplaceTypeItemTypes": {
                "name": "workplaceTypeItemTypes",
                "objectTypeName": "itemType",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "itemTypeId",
                    "targetModelName": "workplaceTypeItemType",
                    "propertyTypeName": "workplaceTypeItemTypes"
                }
            },
            "items": {
                "name": "items",
                "objectTypeName": "itemType",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "itemTypeId",
                    "targetModelName": "item",
                    "propertyTypeName": "items"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "itemType",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "itemType",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "itemTypes",
        "camelized": {
            "singular": "itemType",
            "plural": "itemTypes",
            "id": "itemTypeId"
        },
        "capitalized": {
            "singular": "ItemType",
            "plural": "ItemTypes",
            "id": "ItemTypeId"
        }
    }
    export const building: IObjectTypeDefinition = {
        "name": "building",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "building",
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
                "objectTypeName": "building",
                "type": "string",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "color": {
                "name": "color",
                "objectTypeName": "building",
                "type": "color",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "surface": {
                "name": "surface",
                "objectTypeName": "building",
                "type": "surface",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "leaseStartDate": {
                "name": "leaseStartDate",
                "objectTypeName": "building",
                "type": "date",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "leaseEndDate": {
                "name": "leaseEndDate",
                "objectTypeName": "building",
                "type": "date",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "purchaseDate": {
                "name": "purchaseDate",
                "objectTypeName": "building",
                "type": "date",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "documents": {
                "name": "documents",
                "objectTypeName": "building",
                "type": "url",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "picture": {
                "name": "picture",
                "objectTypeName": "building",
                "type": "image",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "regulatoryCapacity": {
                "name": "regulatoryCapacity",
                "objectTypeName": "building",
                "type": "integer",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "parkingSpaceCount": {
                "name": "parkingSpaceCount",
                "objectTypeName": "building",
                "type": "integer",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "constructionYear": {
                "name": "constructionYear",
                "objectTypeName": "building",
                "type": "year",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "yearlyCondominiumFees": {
                "name": "yearlyCondominiumFees",
                "objectTypeName": "building",
                "type": "currency",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "yearlyRent": {
                "name": "yearlyRent",
                "objectTypeName": "building",
                "type": "currency",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "yearlyParkingRent": {
                "name": "yearlyParkingRent",
                "objectTypeName": "building",
                "type": "currency",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "yearlyTaxFees": {
                "name": "yearlyTaxFees",
                "objectTypeName": "building",
                "type": "currency",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "yearlyExploitationFees": {
                "name": "yearlyExploitationFees",
                "objectTypeName": "building",
                "type": "currency",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "rentReferenceIndex": {
                "name": "rentReferenceIndex",
                "objectTypeName": "building",
                "type": "float",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "roomsArea": {
                "name": "roomsArea",
                "objectTypeName": "building",
                "type": "surface",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "roomsCount": {
                "name": "roomsCount",
                "objectTypeName": "building",
                "type": "integer-count",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "workplacesCount": {
                "name": "workplacesCount",
                "objectTypeName": "building",
                "type": "integer-count",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "workplacesRatio": {
                "name": "workplacesRatio",
                "objectTypeName": "building",
                "type": "surface-by-workplace",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "peopleCount": {
                "name": "peopleCount",
                "objectTypeName": "building",
                "type": "integer-count",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "peopleRatio": {
                "name": "peopleRatio",
                "objectTypeName": "building",
                "type": "surface-by-people",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "occupancyRate": {
                "name": "occupancyRate",
                "objectTypeName": "building",
                "type": "percentage",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "expansionRatio": {
                "name": "expansionRatio",
                "objectTypeName": "building",
                "type": "percentage0-1",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "freeWorkplacesCount": {
                "name": "freeWorkplacesCount",
                "objectTypeName": "building",
                "type": "integer-count",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "flexWorkplacesCount": {
                "name": "flexWorkplacesCount",
                "objectTypeName": "building",
                "type": "integer-count",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "sharedWorkplacesCount": {
                "name": "sharedWorkplacesCount",
                "objectTypeName": "building",
                "type": "integer-count",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "sharedWorkplacesRatio": {
                "name": "sharedWorkplacesRatio",
                "objectTypeName": "building",
                "type": "percentage",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "transitWorkplacesCount": {
                "name": "transitWorkplacesCount",
                "objectTypeName": "building",
                "type": "integer-count",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "address": {
                "name": "address",
                "objectTypeName": "building",
                "type": "address",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "building",
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
                "objectTypeName": "building",
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
                "objectTypeName": "building",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "contentRoleToBuildings": {
                "name": "contentRoleToBuildings",
                "objectTypeName": "building",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "buildingId",
                    "targetModelName": "contentRoleToBuilding",
                    "propertyTypeName": "contentRoleToBuildings"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "building",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "companyId",
                    "targetModelName": "company",
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "building",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "companyId",
                    "targetModelName": "company",
                    "propertyTypeName": "company"
                }
            },
            "buildingTypeId": {
                "name": "buildingTypeId",
                "objectTypeName": "building",
                "type": "foreign-key",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "buildingTypeId",
                    "targetModelName": "buildingType",
                    "propertyTypeName": "buildingType"
                }
            },
            "buildingType": {
                "name": "buildingType",
                "objectTypeName": "building",
                "type": "belongs-to",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "buildingTypeId",
                    "targetModelName": "buildingType",
                    "propertyTypeName": "buildingType"
                }
            },
            "buildingId": {
                "name": "buildingId",
                "objectTypeName": "building",
                "type": "foreign-key",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "buildingId",
                    "targetModelName": "building",
                    "propertyTypeName": "building"
                }
            },
            "building": {
                "name": "building",
                "objectTypeName": "building",
                "type": "belongs-to",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "buildingId",
                    "targetModelName": "building",
                    "propertyTypeName": "building"
                }
            },
            "buildings": {
                "name": "buildings",
                "objectTypeName": "building",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "buildingId",
                    "targetModelName": "building",
                    "propertyTypeName": "buildings"
                }
            },
            "floors": {
                "name": "floors",
                "objectTypeName": "building",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "buildingId",
                    "targetModelName": "floor",
                    "propertyTypeName": "floors"
                }
            },
            "costCenterBuildings": {
                "name": "costCenterBuildings",
                "objectTypeName": "building",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "buildingId",
                    "targetModelName": "costCenterBuilding",
                    "propertyTypeName": "costCenterBuildings"
                }
            },
            "dimensionBuildings": {
                "name": "dimensionBuildings",
                "objectTypeName": "building",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "buildingId",
                    "targetModelName": "dimensionBuilding",
                    "propertyTypeName": "dimensionBuildings"
                }
            },
            "facts": {
                "name": "facts",
                "objectTypeName": "building",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "buildingId",
                    "targetModelName": "fact",
                    "propertyTypeName": "facts"
                }
            },
            "organizationBuildings": {
                "name": "organizationBuildings",
                "objectTypeName": "building",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "buildingId",
                    "targetModelName": "organizationBuilding",
                    "propertyTypeName": "organizationBuildings"
                }
            },
            "roomTypeBuildings": {
                "name": "roomTypeBuildings",
                "objectTypeName": "building",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "buildingId",
                    "targetModelName": "roomTypeBuilding",
                    "propertyTypeName": "roomTypeBuildings"
                }
            }
        },
        "plural": "buildings",
        "camelized": {
            "singular": "building",
            "plural": "buildings",
            "id": "buildingId"
        },
        "capitalized": {
            "singular": "Building",
            "plural": "Buildings",
            "id": "BuildingId"
        }
    }
    export const mapScale: IObjectTypeDefinition = {
        "name": "mapScale",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "mapScale",
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
                "objectTypeName": "mapScale",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "p1": {
                "name": "p1",
                "objectTypeName": "mapScale",
                "type": "point2d",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": {
                        "x": 0,
                        "y": 0
                    }
                }
            },
            "p2": {
                "name": "p2",
                "objectTypeName": "mapScale",
                "type": "point2d",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": {
                        "x": 0,
                        "y": 0
                    }
                }
            },
            "length": {
                "name": "length",
                "objectTypeName": "mapScale",
                "type": "distance",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false,
                    "unit": "meter",
                    "defaultValue": 0
                }
            },
            "ratio": {
                "name": "ratio",
                "objectTypeName": "mapScale",
                "type": "float",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": false,
                    "technical": false
                }
            },
            "strokeWidth": {
                "name": "strokeWidth",
                "objectTypeName": "mapScale",
                "type": "float",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": 1
                }
            },
            "roomTextSize": {
                "name": "roomTextSize",
                "objectTypeName": "mapScale",
                "type": "float",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": 18
                }
            },
            "workplaceTextSize": {
                "name": "workplaceTextSize",
                "objectTypeName": "mapScale",
                "type": "float",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": 12
                }
            },
            "segmentDistanceTextSize": {
                "name": "segmentDistanceTextSize",
                "objectTypeName": "mapScale",
                "type": "float",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": 6
                }
            },
            "itemTypeIconSize": {
                "name": "itemTypeIconSize",
                "objectTypeName": "mapScale",
                "type": "float",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": 12
                }
            },
            "roomIconSize": {
                "name": "roomIconSize",
                "objectTypeName": "mapScale",
                "type": "float",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": 64
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "mapScale",
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
                "objectTypeName": "mapScale",
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
                "objectTypeName": "mapScale",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "floors": {
                "name": "floors",
                "objectTypeName": "mapScale",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "mapScaleId",
                    "targetModelName": "floor",
                    "propertyTypeName": "floors"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "mapScale",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "mapScale",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "mapScales",
        "camelized": {
            "singular": "mapScale",
            "plural": "mapScales",
            "id": "mapScaleId"
        },
        "capitalized": {
            "singular": "MapScale",
            "plural": "MapScales",
            "id": "MapScaleId"
        }
    }
    export const floor: IObjectTypeDefinition = {
        "name": "floor",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "floor",
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
                "objectTypeName": "floor",
                "type": "string",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "level": {
                "name": "level",
                "objectTypeName": "floor",
                "type": "integer",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "regulatoryCapacity": {
                "name": "regulatoryCapacity",
                "objectTypeName": "floor",
                "type": "integer",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "roomsArea": {
                "name": "roomsArea",
                "objectTypeName": "floor",
                "type": "surface",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "roomsCount": {
                "name": "roomsCount",
                "objectTypeName": "floor",
                "type": "integer-count",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "workplacesCount": {
                "name": "workplacesCount",
                "objectTypeName": "floor",
                "type": "integer-count",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "workplacesRatio": {
                "name": "workplacesRatio",
                "objectTypeName": "floor",
                "type": "surface-by-workplace",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "peopleCount": {
                "name": "peopleCount",
                "objectTypeName": "floor",
                "type": "integer-count",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "peopleRatio": {
                "name": "peopleRatio",
                "objectTypeName": "floor",
                "type": "surface-by-people",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "occupancyRate": {
                "name": "occupancyRate",
                "objectTypeName": "floor",
                "type": "percentage",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "expansionRatio": {
                "name": "expansionRatio",
                "objectTypeName": "floor",
                "type": "percentage0-1",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "freeWorkplacesCount": {
                "name": "freeWorkplacesCount",
                "objectTypeName": "floor",
                "type": "integer-count",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "flexWorkplacesCount": {
                "name": "flexWorkplacesCount",
                "objectTypeName": "floor",
                "type": "integer-count",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "sharedWorkplacesCount": {
                "name": "sharedWorkplacesCount",
                "objectTypeName": "floor",
                "type": "integer-count",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "sharedWorkplacesRatio": {
                "name": "sharedWorkplacesRatio",
                "objectTypeName": "floor",
                "type": "percentage",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "transitWorkplacesCount": {
                "name": "transitWorkplacesCount",
                "objectTypeName": "floor",
                "type": "integer-count",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "backgroundLayout": {
                "name": "backgroundLayout",
                "objectTypeName": "floor",
                "type": "image",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "backgroundLayoutOpacity": {
                "name": "backgroundLayoutOpacity",
                "objectTypeName": "floor",
                "type": "percentage",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": 1
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "floor",
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
                "objectTypeName": "floor",
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
                "objectTypeName": "floor",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "contentRoleToFloors": {
                "name": "contentRoleToFloors",
                "objectTypeName": "floor",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "floorId",
                    "targetModelName": "contentRoleToFloor",
                    "propertyTypeName": "contentRoleToFloors"
                }
            },
            "buildingId": {
                "name": "buildingId",
                "objectTypeName": "floor",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "buildingId",
                    "targetModelName": "building",
                    "propertyTypeName": "building"
                }
            },
            "building": {
                "name": "building",
                "objectTypeName": "floor",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "buildingId",
                    "targetModelName": "building",
                    "propertyTypeName": "building"
                }
            },
            "mapScaleId": {
                "name": "mapScaleId",
                "objectTypeName": "floor",
                "type": "foreign-key",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "mapScaleId",
                    "targetModelName": "mapScale",
                    "propertyTypeName": "mapScale"
                }
            },
            "mapScale": {
                "name": "mapScale",
                "objectTypeName": "floor",
                "type": "belongs-to",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "mapScaleId",
                    "targetModelName": "mapScale",
                    "propertyTypeName": "mapScale"
                }
            },
            "costCenterFloors": {
                "name": "costCenterFloors",
                "objectTypeName": "floor",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "floorId",
                    "targetModelName": "costCenterFloor",
                    "propertyTypeName": "costCenterFloors"
                }
            },
            "rooms": {
                "name": "rooms",
                "objectTypeName": "floor",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "floorId",
                    "targetModelName": "room",
                    "propertyTypeName": "rooms"
                }
            },
            "roomPoints": {
                "name": "roomPoints",
                "objectTypeName": "floor",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "floorId",
                    "targetModelName": "roomPoint",
                    "propertyTypeName": "roomPoints"
                }
            },
            "dimensionFloors": {
                "name": "dimensionFloors",
                "objectTypeName": "floor",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "floorId",
                    "targetModelName": "dimensionFloor",
                    "propertyTypeName": "dimensionFloors"
                }
            },
            "organizationFloors": {
                "name": "organizationFloors",
                "objectTypeName": "floor",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "floorId",
                    "targetModelName": "organizationFloor",
                    "propertyTypeName": "organizationFloors"
                }
            },
            "roomTypeFloors": {
                "name": "roomTypeFloors",
                "objectTypeName": "floor",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "floorId",
                    "targetModelName": "roomTypeFloor",
                    "propertyTypeName": "roomTypeFloors"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "floor",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "floor",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "floors",
        "camelized": {
            "singular": "floor",
            "plural": "floors",
            "id": "floorId"
        },
        "capitalized": {
            "singular": "Floor",
            "plural": "Floors",
            "id": "FloorId"
        }
    }
    export const distributionCostType: IObjectTypeDefinition = {
        "name": "distributionCostType",
        "type": "many-to-many",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "distributionCostType",
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
                "objectTypeName": "distributionCostType",
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
                "objectTypeName": "distributionCostType",
                "type": "string",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "distributionCostType",
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
                "objectTypeName": "distributionCostType",
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
                "objectTypeName": "distributionCostType",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "roomTypes": {
                "name": "roomTypes",
                "objectTypeName": "distributionCostType",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "distributionCostTypeId",
                    "targetModelName": "roomType",
                    "propertyTypeName": "roomTypes"
                }
            },
            "rooms": {
                "name": "rooms",
                "objectTypeName": "distributionCostType",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "distributionCostTypeId",
                    "targetModelName": "room",
                    "propertyTypeName": "rooms"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "distributionCostType",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "distributionCostType",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "distributionCostTypes",
        "camelized": {
            "singular": "distributionCostType",
            "plural": "distributionCostTypes",
            "id": "distributionCostTypeId"
        },
        "capitalized": {
            "singular": "DistributionCostType",
            "plural": "DistributionCostTypes",
            "id": "DistributionCostTypeId"
        }
    }
    export const roomType: IObjectTypeDefinition = {
        "name": "roomType",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "roomType",
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
                "objectTypeName": "roomType",
                "type": "string",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "color": {
                "name": "color",
                "objectTypeName": "roomType",
                "type": "color",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "icon": {
                "name": "icon",
                "objectTypeName": "roomType",
                "type": "icon",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "color3d": {
                "name": "color3d",
                "objectTypeName": "roomType",
                "type": "color",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "displayWallsOn3d": {
                "name": "displayWallsOn3d",
                "objectTypeName": "roomType",
                "type": "boolean",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": true
                }
            },
            "cadence": {
                "name": "cadence",
                "objectTypeName": "roomType",
                "type": "float",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "isBookable": {
                "name": "isBookable",
                "objectTypeName": "roomType",
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
                "objectTypeName": "roomType",
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
                "objectTypeName": "roomType",
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
                "objectTypeName": "roomType",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "distributionCostTypeId": {
                "name": "distributionCostTypeId",
                "objectTypeName": "roomType",
                "type": "foreign-key",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "distributionCostTypeId",
                    "targetModelName": "distributionCostType",
                    "propertyTypeName": "distributionCostType"
                }
            },
            "distributionCostType": {
                "name": "distributionCostType",
                "objectTypeName": "roomType",
                "type": "belongs-to",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "distributionCostTypeId",
                    "targetModelName": "distributionCostType",
                    "propertyTypeName": "distributionCostType"
                }
            },
            "rooms": {
                "name": "rooms",
                "objectTypeName": "roomType",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "roomTypeId",
                    "targetModelName": "room",
                    "propertyTypeName": "rooms"
                }
            },
            "roomTypeFloors": {
                "name": "roomTypeFloors",
                "objectTypeName": "roomType",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "roomTypeId",
                    "targetModelName": "roomTypeFloor",
                    "propertyTypeName": "roomTypeFloors"
                }
            },
            "roomTypeBuildings": {
                "name": "roomTypeBuildings",
                "objectTypeName": "roomType",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "roomTypeId",
                    "targetModelName": "roomTypeBuilding",
                    "propertyTypeName": "roomTypeBuildings"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "roomType",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "roomType",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "roomTypes",
        "camelized": {
            "singular": "roomType",
            "plural": "roomTypes",
            "id": "roomTypeId"
        },
        "capitalized": {
            "singular": "RoomType",
            "plural": "RoomTypes",
            "id": "RoomTypeId"
        }
    }
    export const costCenter: IObjectTypeDefinition = {
        "name": "costCenter",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "costCenter",
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
                "objectTypeName": "costCenter",
                "type": "string",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "color": {
                "name": "color",
                "objectTypeName": "costCenter",
                "type": "color",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "info": {
                "name": "info",
                "objectTypeName": "costCenter",
                "type": "text",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "distributeByFloor": {
                "name": "distributeByFloor",
                "objectTypeName": "costCenter",
                "type": "boolean",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": false
                }
            },
            "distributeByBuilding": {
                "name": "distributeByBuilding",
                "objectTypeName": "costCenter",
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
                "objectTypeName": "costCenter",
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
                "objectTypeName": "costCenter",
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
                "objectTypeName": "costCenter",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "costCenterBuildings": {
                "name": "costCenterBuildings",
                "objectTypeName": "costCenter",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "costCenterId",
                    "targetModelName": "costCenterBuilding",
                    "propertyTypeName": "costCenterBuildings"
                }
            },
            "costCenterFloors": {
                "name": "costCenterFloors",
                "objectTypeName": "costCenter",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "costCenterId",
                    "targetModelName": "costCenterFloor",
                    "propertyTypeName": "costCenterFloors"
                }
            },
            "rooms": {
                "name": "rooms",
                "objectTypeName": "costCenter",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "costCenterId",
                    "targetModelName": "room",
                    "propertyTypeName": "rooms"
                }
            },
            "people": {
                "name": "people",
                "objectTypeName": "costCenter",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "costCenterId",
                    "targetModelName": "person",
                    "propertyTypeName": "people"
                }
            },
            "workplaces": {
                "name": "workplaces",
                "objectTypeName": "costCenter",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "costCenterId",
                    "targetModelName": "workplace",
                    "propertyTypeName": "workplaces"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "costCenter",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "costCenter",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "costCenters",
        "camelized": {
            "singular": "costCenter",
            "plural": "costCenters",
            "id": "costCenterId"
        },
        "capitalized": {
            "singular": "CostCenter",
            "plural": "CostCenters",
            "id": "CostCenterId"
        }
    }
    export const costCenterBuilding: IObjectTypeDefinition = {
        "name": "costCenterBuilding",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "costCenterBuilding",
                "type": "primary-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "roomsArea": {
                "name": "roomsArea",
                "objectTypeName": "costCenterBuilding",
                "type": "surface",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "roomsCount": {
                "name": "roomsCount",
                "objectTypeName": "costCenterBuilding",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "workplacesCount": {
                "name": "workplacesCount",
                "objectTypeName": "costCenterBuilding",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "workplacesRatio": {
                "name": "workplacesRatio",
                "objectTypeName": "costCenterBuilding",
                "type": "surface-by-workplace",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "peopleCount": {
                "name": "peopleCount",
                "objectTypeName": "costCenterBuilding",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "peopleRatio": {
                "name": "peopleRatio",
                "objectTypeName": "costCenterBuilding",
                "type": "surface-by-people",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "occupancyRate": {
                "name": "occupancyRate",
                "objectTypeName": "costCenterBuilding",
                "type": "percentage",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "expansionRatio": {
                "name": "expansionRatio",
                "objectTypeName": "costCenterBuilding",
                "type": "percentage0-1",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "freeWorkplacesCount": {
                "name": "freeWorkplacesCount",
                "objectTypeName": "costCenterBuilding",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "flexWorkplacesCount": {
                "name": "flexWorkplacesCount",
                "objectTypeName": "costCenterBuilding",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "sharedWorkplacesCount": {
                "name": "sharedWorkplacesCount",
                "objectTypeName": "costCenterBuilding",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "sharedWorkplacesRatio": {
                "name": "sharedWorkplacesRatio",
                "objectTypeName": "costCenterBuilding",
                "type": "percentage",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "transitWorkplacesCount": {
                "name": "transitWorkplacesCount",
                "objectTypeName": "costCenterBuilding",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "costCenterBuilding",
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
                "objectTypeName": "costCenterBuilding",
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
                "objectTypeName": "costCenterBuilding",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "costCenterId": {
                "name": "costCenterId",
                "objectTypeName": "costCenterBuilding",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "costCenterId",
                    "targetModelName": "costCenter",
                    "propertyTypeName": "costCenter"
                }
            },
            "costCenter": {
                "name": "costCenter",
                "objectTypeName": "costCenterBuilding",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "costCenterId",
                    "targetModelName": "costCenter",
                    "propertyTypeName": "costCenter"
                }
            },
            "buildingId": {
                "name": "buildingId",
                "objectTypeName": "costCenterBuilding",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "buildingId",
                    "targetModelName": "building",
                    "propertyTypeName": "building"
                }
            },
            "building": {
                "name": "building",
                "objectTypeName": "costCenterBuilding",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "buildingId",
                    "targetModelName": "building",
                    "propertyTypeName": "building"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "costCenterBuilding",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "costCenterBuilding",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "costCenterBuildings",
        "camelized": {
            "singular": "costCenterBuilding",
            "plural": "costCenterBuildings",
            "id": "costCenterBuildingId"
        },
        "capitalized": {
            "singular": "CostCenterBuilding",
            "plural": "CostCenterBuildings",
            "id": "CostCenterBuildingId"
        }
    }
    export const costCenterFloor: IObjectTypeDefinition = {
        "name": "costCenterFloor",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "costCenterFloor",
                "type": "primary-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "roomsArea": {
                "name": "roomsArea",
                "objectTypeName": "costCenterFloor",
                "type": "surface",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "roomsCount": {
                "name": "roomsCount",
                "objectTypeName": "costCenterFloor",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "workplacesCount": {
                "name": "workplacesCount",
                "objectTypeName": "costCenterFloor",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "workplacesRatio": {
                "name": "workplacesRatio",
                "objectTypeName": "costCenterFloor",
                "type": "surface-by-workplace",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "peopleCount": {
                "name": "peopleCount",
                "objectTypeName": "costCenterFloor",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "peopleRatio": {
                "name": "peopleRatio",
                "objectTypeName": "costCenterFloor",
                "type": "surface-by-people",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "occupancyRate": {
                "name": "occupancyRate",
                "objectTypeName": "costCenterFloor",
                "type": "percentage",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "expansionRatio": {
                "name": "expansionRatio",
                "objectTypeName": "costCenterFloor",
                "type": "percentage0-1",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "freeWorkplacesCount": {
                "name": "freeWorkplacesCount",
                "objectTypeName": "costCenterFloor",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "flexWorkplacesCount": {
                "name": "flexWorkplacesCount",
                "objectTypeName": "costCenterFloor",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "sharedWorkplacesCount": {
                "name": "sharedWorkplacesCount",
                "objectTypeName": "costCenterFloor",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "sharedWorkplacesRatio": {
                "name": "sharedWorkplacesRatio",
                "objectTypeName": "costCenterFloor",
                "type": "percentage",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "transitWorkplacesCount": {
                "name": "transitWorkplacesCount",
                "objectTypeName": "costCenterFloor",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "costCenterFloor",
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
                "objectTypeName": "costCenterFloor",
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
                "objectTypeName": "costCenterFloor",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "costCenterId": {
                "name": "costCenterId",
                "objectTypeName": "costCenterFloor",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "costCenterId",
                    "targetModelName": "costCenter",
                    "propertyTypeName": "costCenter"
                }
            },
            "costCenter": {
                "name": "costCenter",
                "objectTypeName": "costCenterFloor",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "costCenterId",
                    "targetModelName": "costCenter",
                    "propertyTypeName": "costCenter"
                }
            },
            "floorId": {
                "name": "floorId",
                "objectTypeName": "costCenterFloor",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "floorId",
                    "targetModelName": "floor",
                    "propertyTypeName": "floor"
                }
            },
            "floor": {
                "name": "floor",
                "objectTypeName": "costCenterFloor",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "floorId",
                    "targetModelName": "floor",
                    "propertyTypeName": "floor"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "costCenterFloor",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "costCenterFloor",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "costCenterFloors",
        "camelized": {
            "singular": "costCenterFloor",
            "plural": "costCenterFloors",
            "id": "costCenterFloorId"
        },
        "capitalized": {
            "singular": "CostCenterFloor",
            "plural": "CostCenterFloors",
            "id": "CostCenterFloorId"
        }
    }
    export const room: IObjectTypeDefinition = {
        "name": "room",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "room",
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
                "objectTypeName": "room",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "position": {
                "name": "position",
                "objectTypeName": "room",
                "type": "point2d",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": {
                        "x": 0,
                        "y": 0
                    }
                }
            },
            "area": {
                "name": "area",
                "objectTypeName": "room",
                "type": "surface",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false
                }
            },
            "perimeter": {
                "name": "perimeter",
                "objectTypeName": "room",
                "type": "distance",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "unit": "meter",
                    "defaultValue": 0
                }
            },
            "textAnchor": {
                "name": "textAnchor",
                "objectTypeName": "room",
                "type": "textAnchor",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": false,
                    "technical": false
                }
            },
            "capacity": {
                "name": "capacity",
                "objectTypeName": "room",
                "type": "integer",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "workplacesCount": {
                "name": "workplacesCount",
                "objectTypeName": "room",
                "type": "integer-count",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "workplacesRatio": {
                "name": "workplacesRatio",
                "objectTypeName": "room",
                "type": "surface-by-workplace",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "peopleCount": {
                "name": "peopleCount",
                "objectTypeName": "room",
                "type": "integer-count",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "peopleRatio": {
                "name": "peopleRatio",
                "objectTypeName": "room",
                "type": "surface-by-people",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "occupancyRate": {
                "name": "occupancyRate",
                "objectTypeName": "room",
                "type": "percentage",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "expansionRatio": {
                "name": "expansionRatio",
                "objectTypeName": "room",
                "type": "percentage0-1",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "freeWorkplacesCount": {
                "name": "freeWorkplacesCount",
                "objectTypeName": "room",
                "type": "integer-count",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "flexWorkplacesCount": {
                "name": "flexWorkplacesCount",
                "objectTypeName": "room",
                "type": "integer-count",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "sharedWorkplacesCount": {
                "name": "sharedWorkplacesCount",
                "objectTypeName": "room",
                "type": "integer-count",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "sharedWorkplacesRatio": {
                "name": "sharedWorkplacesRatio",
                "objectTypeName": "room",
                "type": "percentage",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "transitWorkplacesCount": {
                "name": "transitWorkplacesCount",
                "objectTypeName": "room",
                "type": "integer-count",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "info": {
                "name": "info",
                "objectTypeName": "room",
                "type": "text",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "bookingEmail": {
                "name": "bookingEmail",
                "objectTypeName": "room",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "externalId2": {
                "name": "externalId2",
                "objectTypeName": "room",
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
                "objectTypeName": "room",
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
                "objectTypeName": "room",
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
                "objectTypeName": "room",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "floorId": {
                "name": "floorId",
                "objectTypeName": "room",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "floorId",
                    "targetModelName": "floor",
                    "propertyTypeName": "floor"
                }
            },
            "floor": {
                "name": "floor",
                "objectTypeName": "room",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "floorId",
                    "targetModelName": "floor",
                    "propertyTypeName": "floor"
                }
            },
            "roomTypeId": {
                "name": "roomTypeId",
                "objectTypeName": "room",
                "type": "foreign-key",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "roomTypeId",
                    "targetModelName": "roomType",
                    "propertyTypeName": "roomType"
                }
            },
            "roomType": {
                "name": "roomType",
                "objectTypeName": "room",
                "type": "belongs-to",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "roomTypeId",
                    "targetModelName": "roomType",
                    "propertyTypeName": "roomType"
                }
            },
            "organizationId": {
                "name": "organizationId",
                "objectTypeName": "room",
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
                    "propertyTypeName": "organization"
                }
            },
            "organization": {
                "name": "organization",
                "objectTypeName": "room",
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
                    "propertyTypeName": "organization"
                }
            },
            "costCenterId": {
                "name": "costCenterId",
                "objectTypeName": "room",
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
                    "propertyTypeName": "costCenter"
                }
            },
            "costCenter": {
                "name": "costCenter",
                "objectTypeName": "room",
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
                    "propertyTypeName": "costCenter"
                }
            },
            "distributionCostTypeId": {
                "name": "distributionCostTypeId",
                "objectTypeName": "room",
                "type": "foreign-key",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "distributionCostTypeId",
                    "targetModelName": "distributionCostType",
                    "propertyTypeName": "distributionCostType"
                }
            },
            "distributionCostType": {
                "name": "distributionCostType",
                "objectTypeName": "room",
                "type": "belongs-to",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "distributionCostTypeId",
                    "targetModelName": "distributionCostType",
                    "propertyTypeName": "distributionCostType"
                }
            },
            "roomPointRooms": {
                "name": "roomPointRooms",
                "objectTypeName": "room",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "roomId",
                    "targetModelName": "roomPointRoom",
                    "propertyTypeName": "roomPointRooms"
                }
            },
            "dimensionRooms": {
                "name": "dimensionRooms",
                "objectTypeName": "room",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "roomId",
                    "targetModelName": "dimensionRoom",
                    "propertyTypeName": "dimensionRooms"
                }
            },
            "roomAffectations": {
                "name": "roomAffectations",
                "objectTypeName": "room",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "roomId",
                    "targetModelName": "roomAffectation",
                    "propertyTypeName": "roomAffectations"
                }
            },
            "workplaces": {
                "name": "workplaces",
                "objectTypeName": "room",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "roomId",
                    "targetModelName": "workplace",
                    "propertyTypeName": "workplaces"
                }
            },
            "items": {
                "name": "items",
                "objectTypeName": "room",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "roomId",
                    "targetModelName": "item",
                    "propertyTypeName": "items"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "room",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "room",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "rooms",
        "camelized": {
            "singular": "room",
            "plural": "rooms",
            "id": "roomId"
        },
        "capitalized": {
            "singular": "Room",
            "plural": "Rooms",
            "id": "RoomId"
        }
    }
    export const roomPoint: IObjectTypeDefinition = {
        "name": "roomPoint",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "roomPoint",
                "type": "primary-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "x": {
                "name": "x",
                "objectTypeName": "roomPoint",
                "type": "float",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "y": {
                "name": "y",
                "objectTypeName": "roomPoint",
                "type": "float",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "roomPoint",
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
                "objectTypeName": "roomPoint",
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
                "objectTypeName": "roomPoint",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "floorId": {
                "name": "floorId",
                "objectTypeName": "roomPoint",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "floorId",
                    "targetModelName": "floor",
                    "propertyTypeName": "floor"
                }
            },
            "floor": {
                "name": "floor",
                "objectTypeName": "roomPoint",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "floorId",
                    "targetModelName": "floor",
                    "propertyTypeName": "floor"
                }
            },
            "roomPointRooms": {
                "name": "roomPointRooms",
                "objectTypeName": "roomPoint",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "roomPointId",
                    "targetModelName": "roomPointRoom",
                    "propertyTypeName": "roomPointRooms"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "roomPoint",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "roomPoint",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "roomPoints",
        "camelized": {
            "singular": "roomPoint",
            "plural": "roomPoints",
            "id": "roomPointId"
        },
        "capitalized": {
            "singular": "RoomPoint",
            "plural": "RoomPoints",
            "id": "RoomPointId"
        }
    }
    export const roomPointRoom: IObjectTypeDefinition = {
        "name": "roomPointRoom",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "roomPointRoom",
                "type": "primary-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "sortIndex": {
                "name": "sortIndex",
                "objectTypeName": "roomPointRoom",
                "type": "integer",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "roomPointRoom",
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
                "objectTypeName": "roomPointRoom",
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
                "objectTypeName": "roomPointRoom",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "roomId": {
                "name": "roomId",
                "objectTypeName": "roomPointRoom",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "roomId",
                    "targetModelName": "room",
                    "propertyTypeName": "room"
                }
            },
            "room": {
                "name": "room",
                "objectTypeName": "roomPointRoom",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "roomId",
                    "targetModelName": "room",
                    "propertyTypeName": "room"
                }
            },
            "roomPointId": {
                "name": "roomPointId",
                "objectTypeName": "roomPointRoom",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "roomPointId",
                    "targetModelName": "roomPoint",
                    "propertyTypeName": "roomPoint"
                }
            },
            "roomPoint": {
                "name": "roomPoint",
                "objectTypeName": "roomPointRoom",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "roomPointId",
                    "targetModelName": "roomPoint",
                    "propertyTypeName": "roomPoint"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "roomPointRoom",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "roomPointRoom",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "roomPointRooms",
        "camelized": {
            "singular": "roomPointRoom",
            "plural": "roomPointRooms",
            "id": "roomPointRoomId"
        },
        "capitalized": {
            "singular": "RoomPointRoom",
            "plural": "RoomPointRooms",
            "id": "RoomPointRoomId"
        }
    }
    export const itemTypePoint: IObjectTypeDefinition = {
        "name": "itemTypePoint",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "itemTypePoint",
                "type": "primary-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "x": {
                "name": "x",
                "objectTypeName": "itemTypePoint",
                "type": "float",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": false,
                    "technical": false
                }
            },
            "y": {
                "name": "y",
                "objectTypeName": "itemTypePoint",
                "type": "float",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": false,
                    "technical": false
                }
            },
            "sortIndex": {
                "name": "sortIndex",
                "objectTypeName": "itemTypePoint",
                "type": "integer",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "itemTypePoint",
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
                "objectTypeName": "itemTypePoint",
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
                "objectTypeName": "itemTypePoint",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "itemTypeId": {
                "name": "itemTypeId",
                "objectTypeName": "itemTypePoint",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "itemTypeId",
                    "targetModelName": "itemType",
                    "propertyTypeName": "itemType"
                }
            },
            "itemType": {
                "name": "itemType",
                "objectTypeName": "itemTypePoint",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "itemTypeId",
                    "targetModelName": "itemType",
                    "propertyTypeName": "itemType"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "itemTypePoint",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "itemTypePoint",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "itemTypePoints",
        "camelized": {
            "singular": "itemTypePoint",
            "plural": "itemTypePoints",
            "id": "itemTypePointId"
        },
        "capitalized": {
            "singular": "ItemTypePoint",
            "plural": "ItemTypePoints",
            "id": "ItemTypePointId"
        }
    }
    export const dimensionType: IObjectTypeDefinition = {
        "name": "dimensionType",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "dimensionType",
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
                "objectTypeName": "dimensionType",
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
                "objectTypeName": "dimensionType",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "order": {
                "name": "order",
                "objectTypeName": "dimensionType",
                "type": "integer",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "description": {
                "name": "description",
                "objectTypeName": "dimensionType",
                "type": "text",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "dimensionType",
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
                "objectTypeName": "dimensionType",
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
                "objectTypeName": "dimensionType",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "dimensions": {
                "name": "dimensions",
                "objectTypeName": "dimensionType",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "dimensionTypeId",
                    "targetModelName": "dimension",
                    "propertyTypeName": "dimensions"
                }
            },
            "dimensionRooms": {
                "name": "dimensionRooms",
                "objectTypeName": "dimensionType",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "dimensionTypeId",
                    "targetModelName": "dimensionRoom",
                    "propertyTypeName": "dimensionRooms"
                }
            },
            "dimensionFloors": {
                "name": "dimensionFloors",
                "objectTypeName": "dimensionType",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "dimensionTypeId",
                    "targetModelName": "dimensionFloor",
                    "propertyTypeName": "dimensionFloors"
                }
            },
            "dimensionBuildings": {
                "name": "dimensionBuildings",
                "objectTypeName": "dimensionType",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "dimensionTypeId",
                    "targetModelName": "dimensionBuilding",
                    "propertyTypeName": "dimensionBuildings"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "dimensionType",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "dimensionType",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "dimensionTypes",
        "camelized": {
            "singular": "dimensionType",
            "plural": "dimensionTypes",
            "id": "dimensionTypeId"
        },
        "capitalized": {
            "singular": "DimensionType",
            "plural": "DimensionTypes",
            "id": "DimensionTypeId"
        }
    }
    export const dimension: IObjectTypeDefinition = {
        "name": "dimension",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "dimension",
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
                "objectTypeName": "dimension",
                "type": "string",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "color": {
                "name": "color",
                "objectTypeName": "dimension",
                "type": "color",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "value": {
                "name": "value",
                "objectTypeName": "dimension",
                "type": "float",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "dimension",
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
                "objectTypeName": "dimension",
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
                "objectTypeName": "dimension",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "dimensionTypeId": {
                "name": "dimensionTypeId",
                "objectTypeName": "dimension",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "dimensionTypeId",
                    "targetModelName": "dimensionType",
                    "propertyTypeName": "dimensionType"
                }
            },
            "dimensionType": {
                "name": "dimensionType",
                "objectTypeName": "dimension",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "dimensionTypeId",
                    "targetModelName": "dimensionType",
                    "propertyTypeName": "dimensionType"
                }
            },
            "dimensionRooms": {
                "name": "dimensionRooms",
                "objectTypeName": "dimension",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "dimensionId",
                    "targetModelName": "dimensionRoom",
                    "propertyTypeName": "dimensionRooms"
                }
            },
            "dimensionFloors": {
                "name": "dimensionFloors",
                "objectTypeName": "dimension",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "dimensionId",
                    "targetModelName": "dimensionFloor",
                    "propertyTypeName": "dimensionFloors"
                }
            },
            "dimensionBuildings": {
                "name": "dimensionBuildings",
                "objectTypeName": "dimension",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "dimensionId",
                    "targetModelName": "dimensionBuilding",
                    "propertyTypeName": "dimensionBuildings"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "dimension",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "dimension",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "dimensions",
        "camelized": {
            "singular": "dimension",
            "plural": "dimensions",
            "id": "dimensionId"
        },
        "capitalized": {
            "singular": "Dimension",
            "plural": "Dimensions",
            "id": "DimensionId"
        }
    }
    export const dimensionRoom: IObjectTypeDefinition = {
        "name": "dimensionRoom",
        "type": "many-to-many",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "dimensionRoom",
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
                "objectTypeName": "dimensionRoom",
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
                "objectTypeName": "dimensionRoom",
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
                "objectTypeName": "dimensionRoom",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "dimensionId": {
                "name": "dimensionId",
                "objectTypeName": "dimensionRoom",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "dimensionId",
                    "targetModelName": "dimension",
                    "propertyTypeName": "dimension"
                }
            },
            "dimension": {
                "name": "dimension",
                "objectTypeName": "dimensionRoom",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "dimensionId",
                    "targetModelName": "dimension",
                    "propertyTypeName": "dimension"
                }
            },
            "roomId": {
                "name": "roomId",
                "objectTypeName": "dimensionRoom",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "roomId",
                    "targetModelName": "room",
                    "propertyTypeName": "room"
                }
            },
            "room": {
                "name": "room",
                "objectTypeName": "dimensionRoom",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "roomId",
                    "targetModelName": "room",
                    "propertyTypeName": "room"
                }
            },
            "dimensionTypeId": {
                "name": "dimensionTypeId",
                "objectTypeName": "dimensionRoom",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "dimensionTypeId",
                    "targetModelName": "dimensionType",
                    "propertyTypeName": "dimensionType"
                }
            },
            "dimensionType": {
                "name": "dimensionType",
                "objectTypeName": "dimensionRoom",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "dimensionTypeId",
                    "targetModelName": "dimensionType",
                    "propertyTypeName": "dimensionType"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "dimensionRoom",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "dimensionRoom",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "dimensionRooms",
        "camelized": {
            "singular": "dimensionRoom",
            "plural": "dimensionRooms",
            "id": "dimensionRoomId"
        },
        "capitalized": {
            "singular": "DimensionRoom",
            "plural": "DimensionRooms",
            "id": "DimensionRoomId"
        }
    }
    export const dimensionFloor: IObjectTypeDefinition = {
        "name": "dimensionFloor",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "dimensionFloor",
                "type": "primary-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "roomsArea": {
                "name": "roomsArea",
                "objectTypeName": "dimensionFloor",
                "type": "surface",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "roomsCount": {
                "name": "roomsCount",
                "objectTypeName": "dimensionFloor",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "workplacesCount": {
                "name": "workplacesCount",
                "objectTypeName": "dimensionFloor",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "workplacesRatio": {
                "name": "workplacesRatio",
                "objectTypeName": "dimensionFloor",
                "type": "surface-by-workplace",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "peopleCount": {
                "name": "peopleCount",
                "objectTypeName": "dimensionFloor",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "peopleRatio": {
                "name": "peopleRatio",
                "objectTypeName": "dimensionFloor",
                "type": "surface-by-people",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "occupancyRate": {
                "name": "occupancyRate",
                "objectTypeName": "dimensionFloor",
                "type": "percentage",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "expansionRatio": {
                "name": "expansionRatio",
                "objectTypeName": "dimensionFloor",
                "type": "percentage0-1",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "freeWorkplacesCount": {
                "name": "freeWorkplacesCount",
                "objectTypeName": "dimensionFloor",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "flexWorkplacesCount": {
                "name": "flexWorkplacesCount",
                "objectTypeName": "dimensionFloor",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "sharedWorkplacesCount": {
                "name": "sharedWorkplacesCount",
                "objectTypeName": "dimensionFloor",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "sharedWorkplacesRatio": {
                "name": "sharedWorkplacesRatio",
                "objectTypeName": "dimensionFloor",
                "type": "percentage",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "transitWorkplacesCount": {
                "name": "transitWorkplacesCount",
                "objectTypeName": "dimensionFloor",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "dimensionFloor",
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
                "objectTypeName": "dimensionFloor",
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
                "objectTypeName": "dimensionFloor",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "dimensionId": {
                "name": "dimensionId",
                "objectTypeName": "dimensionFloor",
                "type": "foreign-key",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "dimensionId",
                    "targetModelName": "dimension",
                    "propertyTypeName": "dimension"
                }
            },
            "dimension": {
                "name": "dimension",
                "objectTypeName": "dimensionFloor",
                "type": "belongs-to",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "dimensionId",
                    "targetModelName": "dimension",
                    "propertyTypeName": "dimension"
                }
            },
            "dimensionTypeId": {
                "name": "dimensionTypeId",
                "objectTypeName": "dimensionFloor",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "dimensionTypeId",
                    "targetModelName": "dimensionType",
                    "propertyTypeName": "dimensionType"
                }
            },
            "dimensionType": {
                "name": "dimensionType",
                "objectTypeName": "dimensionFloor",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "dimensionTypeId",
                    "targetModelName": "dimensionType",
                    "propertyTypeName": "dimensionType"
                }
            },
            "floorId": {
                "name": "floorId",
                "objectTypeName": "dimensionFloor",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "floorId",
                    "targetModelName": "floor",
                    "propertyTypeName": "floor"
                }
            },
            "floor": {
                "name": "floor",
                "objectTypeName": "dimensionFloor",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "floorId",
                    "targetModelName": "floor",
                    "propertyTypeName": "floor"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "dimensionFloor",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "dimensionFloor",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "dimensionFloors",
        "camelized": {
            "singular": "dimensionFloor",
            "plural": "dimensionFloors",
            "id": "dimensionFloorId"
        },
        "capitalized": {
            "singular": "DimensionFloor",
            "plural": "DimensionFloors",
            "id": "DimensionFloorId"
        }
    }
    export const dimensionBuilding: IObjectTypeDefinition = {
        "name": "dimensionBuilding",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "dimensionBuilding",
                "type": "primary-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "roomsArea": {
                "name": "roomsArea",
                "objectTypeName": "dimensionBuilding",
                "type": "surface",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "roomsCount": {
                "name": "roomsCount",
                "objectTypeName": "dimensionBuilding",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "workplacesCount": {
                "name": "workplacesCount",
                "objectTypeName": "dimensionBuilding",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "workplacesRatio": {
                "name": "workplacesRatio",
                "objectTypeName": "dimensionBuilding",
                "type": "surface-by-workplace",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "peopleCount": {
                "name": "peopleCount",
                "objectTypeName": "dimensionBuilding",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "peopleRatio": {
                "name": "peopleRatio",
                "objectTypeName": "dimensionBuilding",
                "type": "surface-by-people",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "occupancyRate": {
                "name": "occupancyRate",
                "objectTypeName": "dimensionBuilding",
                "type": "percentage",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "expansionRatio": {
                "name": "expansionRatio",
                "objectTypeName": "dimensionBuilding",
                "type": "percentage0-1",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "freeWorkplacesCount": {
                "name": "freeWorkplacesCount",
                "objectTypeName": "dimensionBuilding",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "flexWorkplacesCount": {
                "name": "flexWorkplacesCount",
                "objectTypeName": "dimensionBuilding",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "sharedWorkplacesCount": {
                "name": "sharedWorkplacesCount",
                "objectTypeName": "dimensionBuilding",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "sharedWorkplacesRatio": {
                "name": "sharedWorkplacesRatio",
                "objectTypeName": "dimensionBuilding",
                "type": "percentage",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "transitWorkplacesCount": {
                "name": "transitWorkplacesCount",
                "objectTypeName": "dimensionBuilding",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "dimensionBuilding",
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
                "objectTypeName": "dimensionBuilding",
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
                "objectTypeName": "dimensionBuilding",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "dimensionId": {
                "name": "dimensionId",
                "objectTypeName": "dimensionBuilding",
                "type": "foreign-key",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "dimensionId",
                    "targetModelName": "dimension",
                    "propertyTypeName": "dimension"
                }
            },
            "dimension": {
                "name": "dimension",
                "objectTypeName": "dimensionBuilding",
                "type": "belongs-to",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "dimensionId",
                    "targetModelName": "dimension",
                    "propertyTypeName": "dimension"
                }
            },
            "dimensionTypeId": {
                "name": "dimensionTypeId",
                "objectTypeName": "dimensionBuilding",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "dimensionTypeId",
                    "targetModelName": "dimensionType",
                    "propertyTypeName": "dimensionType"
                }
            },
            "dimensionType": {
                "name": "dimensionType",
                "objectTypeName": "dimensionBuilding",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "dimensionTypeId",
                    "targetModelName": "dimensionType",
                    "propertyTypeName": "dimensionType"
                }
            },
            "buildingId": {
                "name": "buildingId",
                "objectTypeName": "dimensionBuilding",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "buildingId",
                    "targetModelName": "building",
                    "propertyTypeName": "building"
                }
            },
            "building": {
                "name": "building",
                "objectTypeName": "dimensionBuilding",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "buildingId",
                    "targetModelName": "building",
                    "propertyTypeName": "building"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "dimensionBuilding",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "dimensionBuilding",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "dimensionBuildings",
        "camelized": {
            "singular": "dimensionBuilding",
            "plural": "dimensionBuildings",
            "id": "dimensionBuildingId"
        },
        "capitalized": {
            "singular": "DimensionBuilding",
            "plural": "DimensionBuildings",
            "id": "DimensionBuildingId"
        }
    }
    export const factType: IObjectTypeDefinition = {
        "name": "factType",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "factType",
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
                "objectTypeName": "factType",
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
                "objectTypeName": "factType",
                "type": "string",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "factType",
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
                "objectTypeName": "factType",
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
                "objectTypeName": "factType",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "facts": {
                "name": "facts",
                "objectTypeName": "factType",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "factTypeId",
                    "targetModelName": "fact",
                    "propertyTypeName": "facts"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "factType",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "factType",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "factTypes",
        "camelized": {
            "singular": "factType",
            "plural": "factTypes",
            "id": "factTypeId"
        },
        "capitalized": {
            "singular": "FactType",
            "plural": "FactTypes",
            "id": "FactTypeId"
        }
    }
    export const fact: IObjectTypeDefinition = {
        "name": "fact",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "fact",
                "type": "primary-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "value": {
                "name": "value",
                "objectTypeName": "fact",
                "type": "float",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "date": {
                "name": "date",
                "objectTypeName": "fact",
                "type": "date",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "fact",
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
                "objectTypeName": "fact",
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
                "objectTypeName": "fact",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "factTypeId": {
                "name": "factTypeId",
                "objectTypeName": "fact",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "factTypeId",
                    "targetModelName": "factType",
                    "propertyTypeName": "factType"
                }
            },
            "factType": {
                "name": "factType",
                "objectTypeName": "fact",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "factTypeId",
                    "targetModelName": "factType",
                    "propertyTypeName": "factType"
                }
            },
            "buildingId": {
                "name": "buildingId",
                "objectTypeName": "fact",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "buildingId",
                    "targetModelName": "building",
                    "propertyTypeName": "building"
                }
            },
            "building": {
                "name": "building",
                "objectTypeName": "fact",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "buildingId",
                    "targetModelName": "building",
                    "propertyTypeName": "building"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "fact",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "fact",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "facts",
        "camelized": {
            "singular": "fact",
            "plural": "facts",
            "id": "factId"
        },
        "capitalized": {
            "singular": "Fact",
            "plural": "Facts",
            "id": "FactId"
        }
    }
    export const personState: IObjectTypeDefinition = {
        "name": "personState",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "personState",
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
                "objectTypeName": "personState",
                "type": "string",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "personState",
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
                "objectTypeName": "personState",
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
                "objectTypeName": "personState",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "people": {
                "name": "people",
                "objectTypeName": "personState",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "personStateId",
                    "targetModelName": "person",
                    "propertyTypeName": "people"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "personState",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "personState",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "personStates",
        "camelized": {
            "singular": "personState",
            "plural": "personStates",
            "id": "personStateId"
        },
        "capitalized": {
            "singular": "PersonState",
            "plural": "PersonStates",
            "id": "PersonStateId"
        }
    }
    export const personSecurityProfile: IObjectTypeDefinition = {
        "name": "personSecurityProfile",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "personSecurityProfile",
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
                "objectTypeName": "personSecurityProfile",
                "type": "string",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "personSecurityProfile",
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
                "objectTypeName": "personSecurityProfile",
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
                "objectTypeName": "personSecurityProfile",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "people": {
                "name": "people",
                "objectTypeName": "personSecurityProfile",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "personSecurityProfileId",
                    "targetModelName": "person",
                    "propertyTypeName": "people"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "personSecurityProfile",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "personSecurityProfile",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "personSecurityProfiles",
        "camelized": {
            "singular": "personSecurityProfile",
            "plural": "personSecurityProfiles",
            "id": "personSecurityProfileId"
        },
        "capitalized": {
            "singular": "PersonSecurityProfile",
            "plural": "PersonSecurityProfiles",
            "id": "PersonSecurityProfileId"
        }
    }
    export const person: IObjectTypeDefinition = {
        "name": "person",
        "type": "table",
        "scope": "private",
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
                    "propertyTypeName": "organization"
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
                    "propertyTypeName": "organization"
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
                    "propertyTypeName": "personState"
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
                    "propertyTypeName": "personState"
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
                    "propertyTypeName": "personSecurityProfile"
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
                    "propertyTypeName": "personSecurityProfile"
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
                    "propertyTypeName": "costCenter"
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
                    "propertyTypeName": "costCenter"
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
                    "propertyTypeName": "personToPersonSources"
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
                    "propertyTypeName": "personToPersonTargets"
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
                    "propertyTypeName": "roomAffectations"
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
                    "propertyTypeName": "workplaceAffectations"
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
                    "propertyTypeName": "itemToPeople"
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
                    "propertyTypeName": "company"
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
                    "propertyTypeName": "company"
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
        }
    }
    export const personToPersonType: IObjectTypeDefinition = {
        "name": "personToPersonType",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "personToPersonType",
                "type": "primary-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "labelForward": {
                "name": "labelForward",
                "objectTypeName": "personToPersonType",
                "type": "string",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "labelBackward": {
                "name": "labelBackward",
                "objectTypeName": "personToPersonType",
                "type": "string",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "personToPersonType",
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
                "objectTypeName": "personToPersonType",
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
                "objectTypeName": "personToPersonType",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "personToPeople": {
                "name": "personToPeople",
                "objectTypeName": "personToPersonType",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "personToPersonTypeId",
                    "targetModelName": "personToPerson",
                    "propertyTypeName": "personToPeople"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "personToPersonType",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "personToPersonType",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "personToPersonTypes",
        "camelized": {
            "singular": "personToPersonType",
            "plural": "personToPersonTypes",
            "id": "personToPersonTypeId"
        },
        "capitalized": {
            "singular": "PersonToPersonType",
            "plural": "PersonToPersonTypes",
            "id": "PersonToPersonTypeId"
        }
    }
    export const personToPerson: IObjectTypeDefinition = {
        "name": "personToPerson",
        "type": "many-to-many",
        "scope": "private",
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
                    "propertyTypeName": "personToPersonType"
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
                    "propertyTypeName": "personToPersonType"
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
                    "propertyTypeName": "personSource"
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
                    "propertyTypeName": "personSource"
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
                    "propertyTypeName": "personTarget"
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
                    "propertyTypeName": "personTarget"
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
                    "propertyTypeName": "company"
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
                    "propertyTypeName": "company"
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
        }
    }
    export const roomAffectation: IObjectTypeDefinition = {
        "name": "roomAffectation",
        "type": "many-to-many",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "roomAffectation",
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
                "objectTypeName": "roomAffectation",
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
                "objectTypeName": "roomAffectation",
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
                "objectTypeName": "roomAffectation",
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
                "objectTypeName": "roomAffectation",
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
                    "propertyTypeName": "person"
                }
            },
            "person": {
                "name": "person",
                "objectTypeName": "roomAffectation",
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
                    "propertyTypeName": "person"
                }
            },
            "roomId": {
                "name": "roomId",
                "objectTypeName": "roomAffectation",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "roomId",
                    "targetModelName": "room",
                    "propertyTypeName": "room"
                }
            },
            "room": {
                "name": "room",
                "objectTypeName": "roomAffectation",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "roomId",
                    "targetModelName": "room",
                    "propertyTypeName": "room"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "roomAffectation",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "roomAffectation",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "roomAffectations",
        "camelized": {
            "singular": "roomAffectation",
            "plural": "roomAffectations",
            "id": "roomAffectationId"
        },
        "capitalized": {
            "singular": "RoomAffectation",
            "plural": "RoomAffectations",
            "id": "RoomAffectationId"
        }
    }
    export const user: IObjectTypeDefinition = {
        "name": "user",
        "type": "table",
        "scope": "public",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "user",
                "type": "primary-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "email": {
                "name": "email",
                "objectTypeName": "user",
                "type": "string",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "firstname": {
                "name": "firstname",
                "objectTypeName": "user",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "lastname": {
                "name": "lastname",
                "objectTypeName": "user",
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
                "objectTypeName": "user",
                "type": "image",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "sub": {
                "name": "sub",
                "objectTypeName": "user",
                "type": "string",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "user",
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
                "objectTypeName": "user",
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
                "objectTypeName": "user",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "userCompanies": {
                "name": "userCompanies",
                "objectTypeName": "user",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "userId",
                    "targetModelName": "userCompany",
                    "propertyTypeName": "userCompanies"
                }
            }
        },
        "plural": "users",
        "camelized": {
            "singular": "user",
            "plural": "users",
            "id": "userId"
        },
        "capitalized": {
            "singular": "User",
            "plural": "Users",
            "id": "UserId"
        }
    }
    export const userCompany: IObjectTypeDefinition = {
        "name": "userCompany",
        "type": "many-to-many",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "userCompany",
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
                "objectTypeName": "userCompany",
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
                "objectTypeName": "userCompany",
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
                "objectTypeName": "userCompany",
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
                "objectTypeName": "userCompany",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "userCompanyId",
                    "targetModelName": "jupUserCompanyToJupRole",
                    "propertyTypeName": "jupUserCompanyToJupRoles"
                }
            },
            "contentRoleToUserCompanies": {
                "name": "contentRoleToUserCompanies",
                "objectTypeName": "userCompany",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "userCompanyId",
                    "targetModelName": "contentRoleToUserCompany",
                    "propertyTypeName": "contentRoleToUserCompanies"
                }
            },
            "userId": {
                "name": "userId",
                "objectTypeName": "userCompany",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "userId",
                    "targetModelName": "user",
                    "propertyTypeName": "user"
                }
            },
            "user": {
                "name": "user",
                "objectTypeName": "userCompany",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "userId",
                    "targetModelName": "user",
                    "propertyTypeName": "user"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "userCompany",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "companyId",
                    "targetModelName": "company",
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "userCompany",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "companyId",
                    "targetModelName": "company",
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "userCompanies",
        "camelized": {
            "singular": "userCompany",
            "plural": "userCompanies",
            "id": "userCompanyId"
        },
        "capitalized": {
            "singular": "UserCompany",
            "plural": "UserCompanies",
            "id": "UserCompanyId"
        }
    }
    export const workplaceType: IObjectTypeDefinition = {
        "name": "workplaceType",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "workplaceType",
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
                "objectTypeName": "workplaceType",
                "type": "string",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "zIndex": {
                "name": "zIndex",
                "objectTypeName": "workplaceType",
                "type": "integer",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "color": {
                "name": "color",
                "objectTypeName": "workplaceType",
                "type": "color",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": "#FFFFFF"
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "workplaceType",
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
                "objectTypeName": "workplaceType",
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
                "objectTypeName": "workplaceType",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "workplaceTypeItemTypes": {
                "name": "workplaceTypeItemTypes",
                "objectTypeName": "workplaceType",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "workplaceTypeId",
                    "targetModelName": "workplaceTypeItemType",
                    "propertyTypeName": "workplaceTypeItemTypes"
                }
            },
            "workplaces": {
                "name": "workplaces",
                "objectTypeName": "workplaceType",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "workplaceTypeId",
                    "targetModelName": "workplace",
                    "propertyTypeName": "workplaces"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "workplaceType",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "workplaceType",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "workplaceTypes",
        "camelized": {
            "singular": "workplaceType",
            "plural": "workplaceTypes",
            "id": "workplaceTypeId"
        },
        "capitalized": {
            "singular": "WorkplaceType",
            "plural": "WorkplaceTypes",
            "id": "WorkplaceTypeId"
        }
    }
    export const workplaceTypeItemType: IObjectTypeDefinition = {
        "name": "workplaceTypeItemType",
        "type": "many-to-many",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "workplaceTypeItemType",
                "type": "primary-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "position": {
                "name": "position",
                "objectTypeName": "workplaceTypeItemType",
                "type": "point3d",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": false,
                    "technical": false
                }
            },
            "physicalInventory": {
                "name": "physicalInventory",
                "objectTypeName": "workplaceTypeItemType",
                "type": "boolean",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": false
                }
            },
            "rotation": {
                "name": "rotation",
                "objectTypeName": "workplaceTypeItemType",
                "type": "float",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": false,
                    "technical": false
                }
            },
            "zIndex": {
                "name": "zIndex",
                "objectTypeName": "workplaceTypeItemType",
                "type": "integer",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "workplaceTypeItemType",
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
                "objectTypeName": "workplaceTypeItemType",
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
                "objectTypeName": "workplaceTypeItemType",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "workplaceTypeId": {
                "name": "workplaceTypeId",
                "objectTypeName": "workplaceTypeItemType",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "workplaceTypeId",
                    "targetModelName": "workplaceType",
                    "propertyTypeName": "workplaceType"
                }
            },
            "workplaceType": {
                "name": "workplaceType",
                "objectTypeName": "workplaceTypeItemType",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "workplaceTypeId",
                    "targetModelName": "workplaceType",
                    "propertyTypeName": "workplaceType"
                }
            },
            "itemTypeId": {
                "name": "itemTypeId",
                "objectTypeName": "workplaceTypeItemType",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "itemTypeId",
                    "targetModelName": "itemType",
                    "propertyTypeName": "itemType"
                }
            },
            "itemType": {
                "name": "itemType",
                "objectTypeName": "workplaceTypeItemType",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "itemTypeId",
                    "targetModelName": "itemType",
                    "propertyTypeName": "itemType"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "workplaceTypeItemType",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "workplaceTypeItemType",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "workplaceTypeItemTypes",
        "camelized": {
            "singular": "workplaceTypeItemType",
            "plural": "workplaceTypeItemTypes",
            "id": "workplaceTypeItemTypeId"
        },
        "capitalized": {
            "singular": "WorkplaceTypeItemType",
            "plural": "WorkplaceTypeItemTypes",
            "id": "WorkplaceTypeItemTypeId"
        }
    }
    export const workplace: IObjectTypeDefinition = {
        "name": "workplace",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "workplace",
                "type": "primary-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "position": {
                "name": "position",
                "objectTypeName": "workplace",
                "type": "point3d",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": {
                        "x": 0,
                        "y": 0,
                        "z": 0
                    }
                }
            },
            "rotation": {
                "name": "rotation",
                "objectTypeName": "workplace",
                "type": "float",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "isFlex": {
                "name": "isFlex",
                "objectTypeName": "workplace",
                "type": "boolean",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": false
                }
            },
            "isTransit": {
                "name": "isTransit",
                "objectTypeName": "workplace",
                "type": "boolean",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": false
                }
            },
            "isShared": {
                "name": "isShared",
                "objectTypeName": "workplace",
                "type": "boolean",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": false
                }
            },
            "textAnchor": {
                "name": "textAnchor",
                "objectTypeName": "workplace",
                "type": "textAnchor",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": false,
                    "technical": false
                }
            },
            "name": {
                "name": "name",
                "objectTypeName": "workplace",
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
                "objectTypeName": "workplace",
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
                "objectTypeName": "workplace",
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
                "objectTypeName": "workplace",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "workplaceTypeId": {
                "name": "workplaceTypeId",
                "objectTypeName": "workplace",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "workplaceTypeId",
                    "targetModelName": "workplaceType",
                    "propertyTypeName": "workplaceType"
                }
            },
            "workplaceType": {
                "name": "workplaceType",
                "objectTypeName": "workplace",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "workplaceTypeId",
                    "targetModelName": "workplaceType",
                    "propertyTypeName": "workplaceType"
                }
            },
            "roomId": {
                "name": "roomId",
                "objectTypeName": "workplace",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "roomId",
                    "targetModelName": "room",
                    "propertyTypeName": "room"
                }
            },
            "room": {
                "name": "room",
                "objectTypeName": "workplace",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "roomId",
                    "targetModelName": "room",
                    "propertyTypeName": "room"
                }
            },
            "organizationId": {
                "name": "organizationId",
                "objectTypeName": "workplace",
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
                    "propertyTypeName": "organization"
                }
            },
            "organization": {
                "name": "organization",
                "objectTypeName": "workplace",
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
                    "propertyTypeName": "organization"
                }
            },
            "costCenterId": {
                "name": "costCenterId",
                "objectTypeName": "workplace",
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
                    "propertyTypeName": "costCenter"
                }
            },
            "costCenter": {
                "name": "costCenter",
                "objectTypeName": "workplace",
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
                    "propertyTypeName": "costCenter"
                }
            },
            "items": {
                "name": "items",
                "objectTypeName": "workplace",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "workplaceId",
                    "targetModelName": "item",
                    "propertyTypeName": "items"
                }
            },
            "workplaceAffectations": {
                "name": "workplaceAffectations",
                "objectTypeName": "workplace",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "workplaceId",
                    "targetModelName": "workplaceAffectation",
                    "propertyTypeName": "workplaceAffectations"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "workplace",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "workplace",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "workplaces",
        "camelized": {
            "singular": "workplace",
            "plural": "workplaces",
            "id": "workplaceId"
        },
        "capitalized": {
            "singular": "Workplace",
            "plural": "Workplaces",
            "id": "WorkplaceId"
        }
    }
    export const item: IObjectTypeDefinition = {
        "name": "item",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "item",
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
                "objectTypeName": "item",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "reference": {
                "name": "reference",
                "objectTypeName": "item",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "purchaseDate": {
                "name": "purchaseDate",
                "objectTypeName": "item",
                "type": "date",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "position": {
                "name": "position",
                "objectTypeName": "item",
                "type": "point3d",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": false,
                    "technical": false
                }
            },
            "rotation": {
                "name": "rotation",
                "objectTypeName": "item",
                "type": "float",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "textAnchor": {
                "name": "textAnchor",
                "objectTypeName": "item",
                "type": "textAnchor",
                "options": {
                    "mandatory": false,
                    "readOnly": true,
                    "calculated": false,
                    "technical": false
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "item",
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
                "objectTypeName": "item",
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
                "objectTypeName": "item",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "itemTypeId": {
                "name": "itemTypeId",
                "objectTypeName": "item",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "itemTypeId",
                    "targetModelName": "itemType",
                    "propertyTypeName": "itemType"
                }
            },
            "itemType": {
                "name": "itemType",
                "objectTypeName": "item",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "itemTypeId",
                    "targetModelName": "itemType",
                    "propertyTypeName": "itemType"
                }
            },
            "roomId": {
                "name": "roomId",
                "objectTypeName": "item",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "roomId",
                    "targetModelName": "room",
                    "propertyTypeName": "room"
                }
            },
            "room": {
                "name": "room",
                "objectTypeName": "item",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "roomId",
                    "targetModelName": "room",
                    "propertyTypeName": "room"
                }
            },
            "workplaceId": {
                "name": "workplaceId",
                "objectTypeName": "item",
                "type": "foreign-key",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "workplaceId",
                    "targetModelName": "workplace",
                    "propertyTypeName": "workplace"
                }
            },
            "workplace": {
                "name": "workplace",
                "objectTypeName": "item",
                "type": "belongs-to",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "workplaceId",
                    "targetModelName": "workplace",
                    "propertyTypeName": "workplace"
                }
            },
            "itemToPeople": {
                "name": "itemToPeople",
                "objectTypeName": "item",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "itemId",
                    "targetModelName": "itemToPerson",
                    "propertyTypeName": "itemToPeople"
                }
            },
            "itemFacts": {
                "name": "itemFacts",
                "objectTypeName": "item",
                "type": "has-many-paginated",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "itemId",
                    "targetModelName": "itemFact",
                    "propertyTypeName": "itemFacts"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "item",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "item",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "items",
        "camelized": {
            "singular": "item",
            "plural": "items",
            "id": "itemId"
        },
        "capitalized": {
            "singular": "Item",
            "plural": "Items",
            "id": "ItemId"
        }
    }
    export const workplaceAffectation: IObjectTypeDefinition = {
        "name": "workplaceAffectation",
        "type": "many-to-many",
        "scope": "private",
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
                    "propertyTypeName": "person"
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
                    "propertyTypeName": "person"
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
                    "propertyTypeName": "workplace"
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
                    "propertyTypeName": "workplace"
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
                    "propertyTypeName": "company"
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
                    "propertyTypeName": "company"
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
        }
    }
    export const organizationFloor: IObjectTypeDefinition = {
        "name": "organizationFloor",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "organizationFloor",
                "type": "primary-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "roomsArea": {
                "name": "roomsArea",
                "objectTypeName": "organizationFloor",
                "type": "surface",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "roomsCount": {
                "name": "roomsCount",
                "objectTypeName": "organizationFloor",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "workplacesCount": {
                "name": "workplacesCount",
                "objectTypeName": "organizationFloor",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "workplacesRatio": {
                "name": "workplacesRatio",
                "objectTypeName": "organizationFloor",
                "type": "surface-by-workplace",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "peopleCount": {
                "name": "peopleCount",
                "objectTypeName": "organizationFloor",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "peopleRatio": {
                "name": "peopleRatio",
                "objectTypeName": "organizationFloor",
                "type": "surface-by-people",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "occupancyRate": {
                "name": "occupancyRate",
                "objectTypeName": "organizationFloor",
                "type": "percentage",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "expansionRatio": {
                "name": "expansionRatio",
                "objectTypeName": "organizationFloor",
                "type": "percentage0-1",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "freeWorkplacesCount": {
                "name": "freeWorkplacesCount",
                "objectTypeName": "organizationFloor",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "flexWorkplacesCount": {
                "name": "flexWorkplacesCount",
                "objectTypeName": "organizationFloor",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "sharedWorkplacesCount": {
                "name": "sharedWorkplacesCount",
                "objectTypeName": "organizationFloor",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "sharedWorkplacesRatio": {
                "name": "sharedWorkplacesRatio",
                "objectTypeName": "organizationFloor",
                "type": "percentage",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "transitWorkplacesCount": {
                "name": "transitWorkplacesCount",
                "objectTypeName": "organizationFloor",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "organizationFloor",
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
                "objectTypeName": "organizationFloor",
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
                "objectTypeName": "organizationFloor",
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
                "objectTypeName": "organizationFloor",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "organizationId",
                    "targetModelName": "organization",
                    "propertyTypeName": "organization"
                }
            },
            "organization": {
                "name": "organization",
                "objectTypeName": "organizationFloor",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "organizationId",
                    "targetModelName": "organization",
                    "propertyTypeName": "organization"
                }
            },
            "floorId": {
                "name": "floorId",
                "objectTypeName": "organizationFloor",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "floorId",
                    "targetModelName": "floor",
                    "propertyTypeName": "floor"
                }
            },
            "floor": {
                "name": "floor",
                "objectTypeName": "organizationFloor",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "floorId",
                    "targetModelName": "floor",
                    "propertyTypeName": "floor"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "organizationFloor",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "organizationFloor",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "organizationFloors",
        "camelized": {
            "singular": "organizationFloor",
            "plural": "organizationFloors",
            "id": "organizationFloorId"
        },
        "capitalized": {
            "singular": "OrganizationFloor",
            "plural": "OrganizationFloors",
            "id": "OrganizationFloorId"
        }
    }
    export const organizationBuilding: IObjectTypeDefinition = {
        "name": "organizationBuilding",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "organizationBuilding",
                "type": "primary-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "roomsArea": {
                "name": "roomsArea",
                "objectTypeName": "organizationBuilding",
                "type": "surface",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "roomsCount": {
                "name": "roomsCount",
                "objectTypeName": "organizationBuilding",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "workplacesCount": {
                "name": "workplacesCount",
                "objectTypeName": "organizationBuilding",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "workplacesRatio": {
                "name": "workplacesRatio",
                "objectTypeName": "organizationBuilding",
                "type": "surface-by-workplace",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "peopleCount": {
                "name": "peopleCount",
                "objectTypeName": "organizationBuilding",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "peopleRatio": {
                "name": "peopleRatio",
                "objectTypeName": "organizationBuilding",
                "type": "surface-by-people",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "occupancyRate": {
                "name": "occupancyRate",
                "objectTypeName": "organizationBuilding",
                "type": "percentage",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "expansionRatio": {
                "name": "expansionRatio",
                "objectTypeName": "organizationBuilding",
                "type": "percentage0-1",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "freeWorkplacesCount": {
                "name": "freeWorkplacesCount",
                "objectTypeName": "organizationBuilding",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "flexWorkplacesCount": {
                "name": "flexWorkplacesCount",
                "objectTypeName": "organizationBuilding",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "sharedWorkplacesCount": {
                "name": "sharedWorkplacesCount",
                "objectTypeName": "organizationBuilding",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "sharedWorkplacesRatio": {
                "name": "sharedWorkplacesRatio",
                "objectTypeName": "organizationBuilding",
                "type": "percentage",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "transitWorkplacesCount": {
                "name": "transitWorkplacesCount",
                "objectTypeName": "organizationBuilding",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "organizationBuilding",
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
                "objectTypeName": "organizationBuilding",
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
                "objectTypeName": "organizationBuilding",
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
                "objectTypeName": "organizationBuilding",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "organizationId",
                    "targetModelName": "organization",
                    "propertyTypeName": "organization"
                }
            },
            "organization": {
                "name": "organization",
                "objectTypeName": "organizationBuilding",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "organizationId",
                    "targetModelName": "organization",
                    "propertyTypeName": "organization"
                }
            },
            "buildingId": {
                "name": "buildingId",
                "objectTypeName": "organizationBuilding",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "buildingId",
                    "targetModelName": "building",
                    "propertyTypeName": "building"
                }
            },
            "building": {
                "name": "building",
                "objectTypeName": "organizationBuilding",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "buildingId",
                    "targetModelName": "building",
                    "propertyTypeName": "building"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "organizationBuilding",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "organizationBuilding",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "organizationBuildings",
        "camelized": {
            "singular": "organizationBuilding",
            "plural": "organizationBuildings",
            "id": "organizationBuildingId"
        },
        "capitalized": {
            "singular": "OrganizationBuilding",
            "plural": "OrganizationBuildings",
            "id": "OrganizationBuildingId"
        }
    }
    export const roomTypeFloor: IObjectTypeDefinition = {
        "name": "roomTypeFloor",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "roomTypeFloor",
                "type": "primary-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "roomsArea": {
                "name": "roomsArea",
                "objectTypeName": "roomTypeFloor",
                "type": "surface",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "roomsCount": {
                "name": "roomsCount",
                "objectTypeName": "roomTypeFloor",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "workplacesCount": {
                "name": "workplacesCount",
                "objectTypeName": "roomTypeFloor",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "workplacesRatio": {
                "name": "workplacesRatio",
                "objectTypeName": "roomTypeFloor",
                "type": "surface-by-workplace",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "peopleCount": {
                "name": "peopleCount",
                "objectTypeName": "roomTypeFloor",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "peopleRatio": {
                "name": "peopleRatio",
                "objectTypeName": "roomTypeFloor",
                "type": "surface-by-people",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "occupancyRate": {
                "name": "occupancyRate",
                "objectTypeName": "roomTypeFloor",
                "type": "percentage",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "expansionRatio": {
                "name": "expansionRatio",
                "objectTypeName": "roomTypeFloor",
                "type": "percentage0-1",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "freeWorkplacesCount": {
                "name": "freeWorkplacesCount",
                "objectTypeName": "roomTypeFloor",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "flexWorkplacesCount": {
                "name": "flexWorkplacesCount",
                "objectTypeName": "roomTypeFloor",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "sharedWorkplacesCount": {
                "name": "sharedWorkplacesCount",
                "objectTypeName": "roomTypeFloor",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "sharedWorkplacesRatio": {
                "name": "sharedWorkplacesRatio",
                "objectTypeName": "roomTypeFloor",
                "type": "percentage",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "transitWorkplacesCount": {
                "name": "transitWorkplacesCount",
                "objectTypeName": "roomTypeFloor",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "roomTypeFloor",
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
                "objectTypeName": "roomTypeFloor",
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
                "objectTypeName": "roomTypeFloor",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "roomTypeId": {
                "name": "roomTypeId",
                "objectTypeName": "roomTypeFloor",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "roomTypeId",
                    "targetModelName": "roomType",
                    "propertyTypeName": "roomType"
                }
            },
            "roomType": {
                "name": "roomType",
                "objectTypeName": "roomTypeFloor",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "roomTypeId",
                    "targetModelName": "roomType",
                    "propertyTypeName": "roomType"
                }
            },
            "floorId": {
                "name": "floorId",
                "objectTypeName": "roomTypeFloor",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "floorId",
                    "targetModelName": "floor",
                    "propertyTypeName": "floor"
                }
            },
            "floor": {
                "name": "floor",
                "objectTypeName": "roomTypeFloor",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "floorId",
                    "targetModelName": "floor",
                    "propertyTypeName": "floor"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "roomTypeFloor",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "roomTypeFloor",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "roomTypeFloors",
        "camelized": {
            "singular": "roomTypeFloor",
            "plural": "roomTypeFloors",
            "id": "roomTypeFloorId"
        },
        "capitalized": {
            "singular": "RoomTypeFloor",
            "plural": "RoomTypeFloors",
            "id": "RoomTypeFloorId"
        }
    }
    export const roomTypeBuilding: IObjectTypeDefinition = {
        "name": "roomTypeBuilding",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "roomTypeBuilding",
                "type": "primary-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "roomsArea": {
                "name": "roomsArea",
                "objectTypeName": "roomTypeBuilding",
                "type": "surface",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "roomsCount": {
                "name": "roomsCount",
                "objectTypeName": "roomTypeBuilding",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "workplacesCount": {
                "name": "workplacesCount",
                "objectTypeName": "roomTypeBuilding",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "workplacesRatio": {
                "name": "workplacesRatio",
                "objectTypeName": "roomTypeBuilding",
                "type": "surface-by-workplace",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "peopleCount": {
                "name": "peopleCount",
                "objectTypeName": "roomTypeBuilding",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "peopleRatio": {
                "name": "peopleRatio",
                "objectTypeName": "roomTypeBuilding",
                "type": "surface-by-people",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "occupancyRate": {
                "name": "occupancyRate",
                "objectTypeName": "roomTypeBuilding",
                "type": "percentage",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "expansionRatio": {
                "name": "expansionRatio",
                "objectTypeName": "roomTypeBuilding",
                "type": "percentage0-1",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "freeWorkplacesCount": {
                "name": "freeWorkplacesCount",
                "objectTypeName": "roomTypeBuilding",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "flexWorkplacesCount": {
                "name": "flexWorkplacesCount",
                "objectTypeName": "roomTypeBuilding",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "sharedWorkplacesCount": {
                "name": "sharedWorkplacesCount",
                "objectTypeName": "roomTypeBuilding",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "sharedWorkplacesRatio": {
                "name": "sharedWorkplacesRatio",
                "objectTypeName": "roomTypeBuilding",
                "type": "percentage",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "transitWorkplacesCount": {
                "name": "transitWorkplacesCount",
                "objectTypeName": "roomTypeBuilding",
                "type": "integer-count",
                "options": {
                    "mandatory": true,
                    "readOnly": true,
                    "calculated": true,
                    "technical": false,
                    "defaultValue": 0
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "roomTypeBuilding",
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
                "objectTypeName": "roomTypeBuilding",
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
                "objectTypeName": "roomTypeBuilding",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "roomTypeId": {
                "name": "roomTypeId",
                "objectTypeName": "roomTypeBuilding",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "roomTypeId",
                    "targetModelName": "roomType",
                    "propertyTypeName": "roomType"
                }
            },
            "roomType": {
                "name": "roomType",
                "objectTypeName": "roomTypeBuilding",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "roomTypeId",
                    "targetModelName": "roomType",
                    "propertyTypeName": "roomType"
                }
            },
            "buildingId": {
                "name": "buildingId",
                "objectTypeName": "roomTypeBuilding",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "buildingId",
                    "targetModelName": "building",
                    "propertyTypeName": "building"
                }
            },
            "building": {
                "name": "building",
                "objectTypeName": "roomTypeBuilding",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "buildingId",
                    "targetModelName": "building",
                    "propertyTypeName": "building"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "roomTypeBuilding",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "roomTypeBuilding",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "roomTypeBuildings",
        "camelized": {
            "singular": "roomTypeBuilding",
            "plural": "roomTypeBuildings",
            "id": "roomTypeBuildingId"
        },
        "capitalized": {
            "singular": "RoomTypeBuilding",
            "plural": "RoomTypeBuildings",
            "id": "RoomTypeBuildingId"
        }
    }
    export const itemToPerson: IObjectTypeDefinition = {
        "name": "itemToPerson",
        "type": "many-to-many",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "itemToPerson",
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
                "objectTypeName": "itemToPerson",
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
                "objectTypeName": "itemToPerson",
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
                "objectTypeName": "itemToPerson",
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
                "objectTypeName": "itemToPerson",
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
                    "propertyTypeName": "person"
                }
            },
            "person": {
                "name": "person",
                "objectTypeName": "itemToPerson",
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
                    "propertyTypeName": "person"
                }
            },
            "itemId": {
                "name": "itemId",
                "objectTypeName": "itemToPerson",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "itemId",
                    "targetModelName": "item",
                    "propertyTypeName": "item"
                }
            },
            "item": {
                "name": "item",
                "objectTypeName": "itemToPerson",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "itemId",
                    "targetModelName": "item",
                    "propertyTypeName": "item"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "itemToPerson",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "itemToPerson",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "itemToPeople",
        "camelized": {
            "singular": "itemToPerson",
            "plural": "itemToPeople",
            "id": "itemToPersonId"
        },
        "capitalized": {
            "singular": "ItemToPerson",
            "plural": "ItemToPeople",
            "id": "ItemToPersonId"
        }
    }
    export const itemFact: IObjectTypeDefinition = {
        "name": "itemFact",
        "type": "table",
        "scope": "private",
        "propertiesByName": {
            "id": {
                "name": "id",
                "objectTypeName": "itemFact",
                "type": "primary-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "measure": {
                "name": "measure",
                "objectTypeName": "itemFact",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "value": {
                "name": "value",
                "objectTypeName": "itemFact",
                "type": "float",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "voltage": {
                "name": "voltage",
                "objectTypeName": "itemFact",
                "type": "float",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                }
            },
            "createdAt": {
                "name": "createdAt",
                "objectTypeName": "itemFact",
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
                "objectTypeName": "itemFact",
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
                "objectTypeName": "itemFact",
                "type": "string",
                "options": {
                    "mandatory": false,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                }
            },
            "itemId": {
                "name": "itemId",
                "objectTypeName": "itemFact",
                "type": "foreign-key",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": true
                },
                "association": {
                    "foreignKey": "itemId",
                    "targetModelName": "item",
                    "propertyTypeName": "item"
                }
            },
            "item": {
                "name": "item",
                "objectTypeName": "itemFact",
                "type": "belongs-to",
                "options": {
                    "mandatory": true,
                    "readOnly": false,
                    "calculated": false,
                    "technical": false
                },
                "association": {
                    "foreignKey": "itemId",
                    "targetModelName": "item",
                    "propertyTypeName": "item"
                }
            },
            "companyId": {
                "name": "companyId",
                "objectTypeName": "itemFact",
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
                    "propertyTypeName": "company"
                }
            },
            "company": {
                "name": "company",
                "objectTypeName": "itemFact",
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
                    "propertyTypeName": "company"
                }
            }
        },
        "plural": "itemFacts",
        "camelized": {
            "singular": "itemFact",
            "plural": "itemFacts",
            "id": "itemFactId"
        },
        "capitalized": {
            "singular": "ItemFact",
            "plural": "ItemFacts",
            "id": "ItemFactId"
        }
    }
    export const objectTypes = [jupObjectType, jupUiView, jupRole, jupUiOption, jupUiOperation, contentRole, jupUserCompanyToJupRole, jupRoleToJupUiView, jupRoleToJupObjectType, jupRoleToJupUiOption, jupRoleToJupUiOperation, contentRoleToBuilding, contentRoleToUserCompany, contentRoleToFloor, partnerApiCredential, apiUser, apiUserToJupRole, apiUserToContentRole, jupUiTenantOperation, contentRoleToJupUiTenantOperation, company, buildingType, organization, itemTypeFamily, manufacturer, itemType, building, mapScale, floor, distributionCostType, roomType, costCenter, costCenterBuilding, costCenterFloor, room, roomPoint, roomPointRoom, itemTypePoint, dimensionType, dimension, dimensionRoom, dimensionFloor, dimensionBuilding, factType, fact, personState, personSecurityProfile, person, personToPersonType, personToPerson, roomAffectation, user, userCompany, workplaceType, workplaceTypeItemType, workplace, item, workplaceAffectation, organizationFloor, organizationBuilding, roomTypeFloor, roomTypeBuilding, itemToPerson, itemFact];
    export const objectTypesBySingular = {
        jupObjectType,
        jupUiView,
        jupRole,
        jupUiOption,
        jupUiOperation,
        contentRole,
        jupUserCompanyToJupRole,
        jupRoleToJupUiView,
        jupRoleToJupObjectType,
        jupRoleToJupUiOption,
        jupRoleToJupUiOperation,
        contentRoleToBuilding,
        contentRoleToUserCompany,
        contentRoleToFloor,
        partnerApiCredential,
        apiUser,
        apiUserToJupRole,
        apiUserToContentRole,
        jupUiTenantOperation,
        contentRoleToJupUiTenantOperation,
        company,
        buildingType,
        organization,
        itemTypeFamily,
        manufacturer,
        itemType,
        building,
        mapScale,
        floor,
        distributionCostType,
        roomType,
        costCenter,
        costCenterBuilding,
        costCenterFloor,
        room,
        roomPoint,
        roomPointRoom,
        itemTypePoint,
        dimensionType,
        dimension,
        dimensionRoom,
        dimensionFloor,
        dimensionBuilding,
        factType,
        fact,
        personState,
        personSecurityProfile,
        person,
        personToPersonType,
        personToPerson,
        roomAffectation,
        user,
        userCompany,
        workplaceType,
        workplaceTypeItemType,
        workplace,
        item,
        workplaceAffectation,
        organizationFloor,
        organizationBuilding,
        roomTypeFloor,
        roomTypeBuilding,
        itemToPerson,
        itemFact
    };
}
