import { JupQueryNode } from "../jup.models";

export namespace QueryNodes {

    export type JupObjectTypeScalarProperties = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId';
    export type JupObjectTypeHasManyProperties = JupUiViews | JupRoleToJupObjectTypes
    export type JupObjectTypeProperties = JupObjectTypeScalarProperties | JupObjectTypeHasManyProperties

    export interface JupObjectType extends JupQueryNode {
        name: 'jupObjectType',
        _: JupObjectTypeProperties[]
    }


    export type JupUiViewScalarProperties = 'id' | 'name' | 'isDefaultView' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupObjectTypeId';
    export type JupUiViewBelongsToProperties = JupObjectType;
    export type JupUiViewHasManyProperties = JupRoleToJupUiViews
    export type JupUiViewProperties = JupUiViewScalarProperties | JupUiViewBelongsToProperties | JupUiViewHasManyProperties

    export interface JupUiView extends JupQueryNode {
        name: 'jupUiView',
        _: JupUiViewProperties[]
    }

    export interface JupUiViews extends JupQueryNode {
        name: 'jupUiViews',
        _: JupUiViewProperties[]
    }



    export type JupRoleScalarProperties = 'id' | 'code' | 'name' | 'createdAt' | 'updatedAt' | 'externalId';
    export type JupRoleHasManyProperties = JupUserCompanyToJupRoles | JupRoleToJupUiViews | JupRoleToJupObjectTypes | JupRoleToJupUiOptions | JupRoleToJupUiOperations | ApiUserToJupRoles
    export type JupRoleProperties = JupRoleScalarProperties | JupRoleHasManyProperties

    export interface JupRole extends JupQueryNode {
        name: 'jupRole',
        _: JupRoleProperties[]
    }





    export type JupUiOptionScalarProperties = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId';
    export type JupUiOptionHasManyProperties = JupRoleToJupUiOptions
    export type JupUiOptionProperties = JupUiOptionScalarProperties | JupUiOptionHasManyProperties

    export interface JupUiOption extends JupQueryNode {
        name: 'jupUiOption',
        _: JupUiOptionProperties[]
    }





    export type JupUiOperationScalarProperties = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId';
    export type JupUiOperationHasManyProperties = JupRoleToJupUiOperations
    export type JupUiOperationProperties = JupUiOperationScalarProperties | JupUiOperationHasManyProperties

    export interface JupUiOperation extends JupQueryNode {
        name: 'jupUiOperation',
        _: JupUiOperationProperties[]
    }





    export type ContentRoleScalarProperties = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'companyId';
    export type ContentRoleBelongsToProperties = Company;
    export type ContentRoleHasManyProperties = ContentRoleToBuildings | ContentRoleToUserCompanies | ContentRoleToFloors | ApiUserToContentRoles | ContentRoleToJupUiTenantOperations
    export type ContentRoleProperties = ContentRoleScalarProperties | ContentRoleBelongsToProperties | ContentRoleHasManyProperties

    export interface ContentRole extends JupQueryNode {
        name: 'contentRole',
        _: ContentRoleProperties[]
    }





    export type JupUserCompanyToJupRoleScalarProperties = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyId' | 'jupRoleId' | 'companyId';
    export type JupUserCompanyToJupRoleBelongsToProperties = UserCompany | JupRole | Company;
    export type JupUserCompanyToJupRoleProperties = JupUserCompanyToJupRoleScalarProperties | JupUserCompanyToJupRoleBelongsToProperties

    export interface JupUserCompanyToJupRole extends JupQueryNode {
        name: 'jupUserCompanyToJupRole',
        _: JupUserCompanyToJupRoleProperties[]
    }

    export interface JupUserCompanyToJupRoles extends JupQueryNode {
        name: 'jupUserCompanyToJupRoles',
        _: JupUserCompanyToJupRoleProperties[]
    }



    export type JupRoleToJupUiViewScalarProperties = 'id' | 'canSee' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupUiViewId' | 'jupRoleId';
    export type JupRoleToJupUiViewBelongsToProperties = JupUiView | JupRole;
    export type JupRoleToJupUiViewProperties = JupRoleToJupUiViewScalarProperties | JupRoleToJupUiViewBelongsToProperties

    export interface JupRoleToJupUiView extends JupQueryNode {
        name: 'jupRoleToJupUiView',
        _: JupRoleToJupUiViewProperties[]
    }

    export interface JupRoleToJupUiViews extends JupQueryNode {
        name: 'jupRoleToJupUiViews',
        _: JupRoleToJupUiViewProperties[]
    }



    export type JupRoleToJupObjectTypeScalarProperties = 'id' | 'arCreate' | 'arRead' | 'arUpdate' | 'arDelete' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupObjectTypeId' | 'jupRoleId';
    export type JupRoleToJupObjectTypeBelongsToProperties = JupObjectType | JupRole;
    export type JupRoleToJupObjectTypeProperties = JupRoleToJupObjectTypeScalarProperties | JupRoleToJupObjectTypeBelongsToProperties

    export interface JupRoleToJupObjectType extends JupQueryNode {
        name: 'jupRoleToJupObjectType',
        _: JupRoleToJupObjectTypeProperties[]
    }

    export interface JupRoleToJupObjectTypes extends JupQueryNode {
        name: 'jupRoleToJupObjectTypes',
        _: JupRoleToJupObjectTypeProperties[]
    }



    export type JupRoleToJupUiOptionScalarProperties = 'id' | 'canSee' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupUiOptionId' | 'jupRoleId';
    export type JupRoleToJupUiOptionBelongsToProperties = JupUiOption | JupRole;
    export type JupRoleToJupUiOptionProperties = JupRoleToJupUiOptionScalarProperties | JupRoleToJupUiOptionBelongsToProperties

    export interface JupRoleToJupUiOption extends JupQueryNode {
        name: 'jupRoleToJupUiOption',
        _: JupRoleToJupUiOptionProperties[]
    }

    export interface JupRoleToJupUiOptions extends JupQueryNode {
        name: 'jupRoleToJupUiOptions',
        _: JupRoleToJupUiOptionProperties[]
    }



    export type JupRoleToJupUiOperationScalarProperties = 'id' | 'canSee' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupUiOperationId' | 'jupRoleId';
    export type JupRoleToJupUiOperationBelongsToProperties = JupUiOperation | JupRole;
    export type JupRoleToJupUiOperationProperties = JupRoleToJupUiOperationScalarProperties | JupRoleToJupUiOperationBelongsToProperties

    export interface JupRoleToJupUiOperation extends JupQueryNode {
        name: 'jupRoleToJupUiOperation',
        _: JupRoleToJupUiOperationProperties[]
    }

    export interface JupRoleToJupUiOperations extends JupQueryNode {
        name: 'jupRoleToJupUiOperations',
        _: JupRoleToJupUiOperationProperties[]
    }



    export type ContentRoleToBuildingScalarProperties = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'contentRoleId' | 'buildingId' | 'companyId';
    export type ContentRoleToBuildingBelongsToProperties = ContentRole | Building | Company;
    export type ContentRoleToBuildingProperties = ContentRoleToBuildingScalarProperties | ContentRoleToBuildingBelongsToProperties

    export interface ContentRoleToBuilding extends JupQueryNode {
        name: 'contentRoleToBuilding',
        _: ContentRoleToBuildingProperties[]
    }

    export interface ContentRoleToBuildings extends JupQueryNode {
        name: 'contentRoleToBuildings',
        _: ContentRoleToBuildingProperties[]
    }



    export type ContentRoleToUserCompanyScalarProperties = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyId' | 'contentRoleId' | 'companyId';
    export type ContentRoleToUserCompanyBelongsToProperties = UserCompany | ContentRole | Company;
    export type ContentRoleToUserCompanyProperties = ContentRoleToUserCompanyScalarProperties | ContentRoleToUserCompanyBelongsToProperties

    export interface ContentRoleToUserCompany extends JupQueryNode {
        name: 'contentRoleToUserCompany',
        _: ContentRoleToUserCompanyProperties[]
    }

    export interface ContentRoleToUserCompanies extends JupQueryNode {
        name: 'contentRoleToUserCompanies',
        _: ContentRoleToUserCompanyProperties[]
    }



    export type ContentRoleToFloorScalarProperties = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'contentRoleId' | 'floorId' | 'companyId';
    export type ContentRoleToFloorBelongsToProperties = ContentRole | Floor | Company;
    export type ContentRoleToFloorProperties = ContentRoleToFloorScalarProperties | ContentRoleToFloorBelongsToProperties

    export interface ContentRoleToFloor extends JupQueryNode {
        name: 'contentRoleToFloor',
        _: ContentRoleToFloorProperties[]
    }

    export interface ContentRoleToFloors extends JupQueryNode {
        name: 'contentRoleToFloors',
        _: ContentRoleToFloorProperties[]
    }



    export type PartnerApiCredentialScalarProperties = 'id' | 'label' | 'code' | 'host' | 'clientId' | 'clientSecret' | 'enable' | 'createdAt' | 'updatedAt' | 'externalId' | 'companyId';
    export type PartnerApiCredentialBelongsToProperties = Company;
    export type PartnerApiCredentialProperties = PartnerApiCredentialScalarProperties | PartnerApiCredentialBelongsToProperties

    export interface PartnerApiCredential extends JupQueryNode {
        name: 'partnerApiCredential',
        _: PartnerApiCredentialProperties[]
    }





    export type ApiUserScalarProperties = 'id' | 'clientSecret' | 'createdAt' | 'updatedAt' | 'externalId' | 'companyId';
    export type ApiUserBelongsToProperties = Company;
    export type ApiUserHasManyProperties = ApiUserToJupRoles | ApiUserToContentRoles
    export type ApiUserProperties = ApiUserScalarProperties | ApiUserBelongsToProperties | ApiUserHasManyProperties

    export interface ApiUser extends JupQueryNode {
        name: 'apiUser',
        _: ApiUserProperties[]
    }





    export type ApiUserToJupRoleScalarProperties = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'apiUserId' | 'jupRoleId' | 'companyId';
    export type ApiUserToJupRoleBelongsToProperties = ApiUser | JupRole | Company;
    export type ApiUserToJupRoleProperties = ApiUserToJupRoleScalarProperties | ApiUserToJupRoleBelongsToProperties

    export interface ApiUserToJupRole extends JupQueryNode {
        name: 'apiUserToJupRole',
        _: ApiUserToJupRoleProperties[]
    }

    export interface ApiUserToJupRoles extends JupQueryNode {
        name: 'apiUserToJupRoles',
        _: ApiUserToJupRoleProperties[]
    }



    export type ApiUserToContentRoleScalarProperties = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'apiUserId' | 'contentRoleId' | 'companyId';
    export type ApiUserToContentRoleBelongsToProperties = ApiUser | ContentRole | Company;
    export type ApiUserToContentRoleProperties = ApiUserToContentRoleScalarProperties | ApiUserToContentRoleBelongsToProperties

    export interface ApiUserToContentRole extends JupQueryNode {
        name: 'apiUserToContentRole',
        _: ApiUserToContentRoleProperties[]
    }

    export interface ApiUserToContentRoles extends JupQueryNode {
        name: 'apiUserToContentRoles',
        _: ApiUserToContentRoleProperties[]
    }



    export type JupUiTenantOperationScalarProperties = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'companyId';
    export type JupUiTenantOperationBelongsToProperties = Company;
    export type JupUiTenantOperationHasManyProperties = ContentRoleToJupUiTenantOperations
    export type JupUiTenantOperationProperties = JupUiTenantOperationScalarProperties | JupUiTenantOperationBelongsToProperties | JupUiTenantOperationHasManyProperties

    export interface JupUiTenantOperation extends JupQueryNode {
        name: 'jupUiTenantOperation',
        _: JupUiTenantOperationProperties[]
    }





    export type ContentRoleToJupUiTenantOperationScalarProperties = 'id' | 'canSee' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupUiTenantOperationId' | 'contentRoleId' | 'companyId';
    export type ContentRoleToJupUiTenantOperationBelongsToProperties = JupUiTenantOperation | ContentRole | Company;
    export type ContentRoleToJupUiTenantOperationProperties = ContentRoleToJupUiTenantOperationScalarProperties | ContentRoleToJupUiTenantOperationBelongsToProperties

    export interface ContentRoleToJupUiTenantOperation extends JupQueryNode {
        name: 'contentRoleToJupUiTenantOperation',
        _: ContentRoleToJupUiTenantOperationProperties[]
    }

    export interface ContentRoleToJupUiTenantOperations extends JupQueryNode {
        name: 'contentRoleToJupUiTenantOperations',
        _: ContentRoleToJupUiTenantOperationProperties[]
    }



    export type CompanyScalarProperties = 'id' | 'name' | 'logoPath' | 'iconPath' | 'createdAt' | 'updatedAt' | 'externalId';
    export type CompanyHasManyProperties = BuildingTypes | Buildings | UserCompanies
    export type CompanyProperties = CompanyScalarProperties | CompanyHasManyProperties

    export interface Company extends JupQueryNode {
        name: 'company',
        _: CompanyProperties[]
    }





    export type BuildingTypeScalarProperties = 'id' | 'name' | 'code' | 'color' | 'createdAt' | 'updatedAt' | 'externalId' | 'companyId';
    export type BuildingTypeBelongsToProperties = Company;
    export type BuildingTypeHasManyProperties = Buildings
    export type BuildingTypeProperties = BuildingTypeScalarProperties | BuildingTypeBelongsToProperties | BuildingTypeHasManyProperties

    export interface BuildingType extends JupQueryNode {
        name: 'buildingType',
        _: BuildingTypeProperties[]
    }

    export interface BuildingTypes extends JupQueryNode {
        name: 'buildingTypes',
        _: BuildingTypeProperties[]
    }



    export type OrganizationScalarProperties = 'id' | 'name' | 'code' | 'color' | 'createdAt' | 'updatedAt' | 'externalId' | 'organizationId' | 'companyId';
    export type OrganizationBelongsToProperties = Organization | Company;
    export type OrganizationHasManyProperties = Organizations | Rooms | People | Workplaces | OrganizationFloors | OrganizationBuildings
    export type OrganizationProperties = OrganizationScalarProperties | OrganizationBelongsToProperties | OrganizationHasManyProperties

    export interface Organization extends JupQueryNode {
        name: 'organization',
        _: OrganizationProperties[]
    }

    export interface Organizations extends JupQueryNode {
        name: 'organizations',
        _: OrganizationProperties[]
    }



    export type ItemTypeFamilyScalarProperties = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'companyId';
    export type ItemTypeFamilyBelongsToProperties = Company;
    export type ItemTypeFamilyHasManyProperties = ItemTypes
    export type ItemTypeFamilyProperties = ItemTypeFamilyScalarProperties | ItemTypeFamilyBelongsToProperties | ItemTypeFamilyHasManyProperties

    export interface ItemTypeFamily extends JupQueryNode {
        name: 'itemTypeFamily',
        _: ItemTypeFamilyProperties[]
    }





    export type ManufacturerScalarProperties = 'id' | 'name' | 'website' | 'createdAt' | 'updatedAt' | 'externalId' | 'companyId';
    export type ManufacturerBelongsToProperties = Company;
    export type ManufacturerHasManyProperties = ItemTypes
    export type ManufacturerProperties = ManufacturerScalarProperties | ManufacturerBelongsToProperties | ManufacturerHasManyProperties

    export interface Manufacturer extends JupQueryNode {
        name: 'manufacturer',
        _: ManufacturerProperties[]
    }





    export type ItemTypeScalarProperties = 'id' | 'name' | 'picture' | 'displayItemReferenceInMap' | 'code' | 'icon' | 'color' | 'height' | 'zIndex' | 'description' | 'price' | 'createdAt' | 'updatedAt' | 'externalId' | 'itemTypeFamilyId' | 'manufacturerId' | 'companyId';
    export type ItemTypeBelongsToProperties = ItemTypeFamily | Manufacturer | Company;
    export type ItemTypeHasManyProperties = ItemTypePoints | WorkplaceTypeItemTypes | Items
    export type ItemTypeProperties = ItemTypeScalarProperties | ItemTypeBelongsToProperties | ItemTypeHasManyProperties

    export interface ItemType extends JupQueryNode {
        name: 'itemType',
        _: ItemTypeProperties[]
    }

    export interface ItemTypes extends JupQueryNode {
        name: 'itemTypes',
        _: ItemTypeProperties[]
    }



    export type BuildingScalarProperties = 'id' | 'name' | 'color' | 'surface' | 'leaseStartDate' | 'leaseEndDate' | 'purchaseDate' | 'documents' | 'picture' | 'regulatoryCapacity' | 'parkingSpaceCount' | 'constructionYear' | 'yearlyCondominiumFees' | 'yearlyRent' | 'yearlyParkingRent' | 'yearlyTaxFees' | 'yearlyExploitationFees' | 'rentReferenceIndex' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'address' | 'createdAt' | 'updatedAt' | 'externalId' | 'companyId' | 'buildingTypeId' | 'buildingId';
    export type BuildingBelongsToProperties = Company | BuildingType | Building;
    export type BuildingHasManyProperties = ContentRoleToBuildings | Buildings | Floors | CostCenterBuildings | DimensionBuildings | Facts | OrganizationBuildings | RoomTypeBuildings
    export type BuildingProperties = BuildingScalarProperties | BuildingBelongsToProperties | BuildingHasManyProperties

    export interface Building extends JupQueryNode {
        name: 'building',
        _: BuildingProperties[]
    }

    export interface Buildings extends JupQueryNode {
        name: 'buildings',
        _: BuildingProperties[]
    }



    export type MapScaleScalarProperties = 'id' | 'name' | 'p1' | 'p2' | 'length' | 'ratio' | 'strokeWidth' | 'roomTextSize' | 'workplaceTextSize' | 'segmentDistanceTextSize' | 'itemTypeIconSize' | 'roomIconSize' | 'createdAt' | 'updatedAt' | 'externalId' | 'companyId';
    export type MapScaleBelongsToProperties = Company;
    export type MapScaleHasManyProperties = Floors
    export type MapScaleProperties = MapScaleScalarProperties | MapScaleBelongsToProperties | MapScaleHasManyProperties

    export interface MapScale extends JupQueryNode {
        name: 'mapScale',
        _: MapScaleProperties[]
    }





    export type FloorScalarProperties = 'id' | 'name' | 'level' | 'regulatoryCapacity' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'backgroundLayout' | 'backgroundLayoutOpacity' | 'createdAt' | 'updatedAt' | 'externalId' | 'buildingId' | 'mapScaleId' | 'companyId';
    export type FloorBelongsToProperties = Building | MapScale | Company;
    export type FloorHasManyProperties = ContentRoleToFloors | CostCenterFloors | Rooms | RoomPoints | DimensionFloors | OrganizationFloors | RoomTypeFloors
    export type FloorProperties = FloorScalarProperties | FloorBelongsToProperties | FloorHasManyProperties

    export interface Floor extends JupQueryNode {
        name: 'floor',
        _: FloorProperties[]
    }

    export interface Floors extends JupQueryNode {
        name: 'floors',
        _: FloorProperties[]
    }



    export type DistributionCostTypeScalarProperties = 'id' | 'name' | 'code' | 'createdAt' | 'updatedAt' | 'externalId' | 'companyId';
    export type DistributionCostTypeBelongsToProperties = Company;
    export type DistributionCostTypeHasManyProperties = RoomTypes | Rooms
    export type DistributionCostTypeProperties = DistributionCostTypeScalarProperties | DistributionCostTypeBelongsToProperties | DistributionCostTypeHasManyProperties

    export interface DistributionCostType extends JupQueryNode {
        name: 'distributionCostType',
        _: DistributionCostTypeProperties[]
    }





    export type RoomTypeScalarProperties = 'id' | 'name' | 'color' | 'icon' | 'color3d' | 'displayWallsOn3d' | 'cadence' | 'isBookable' | 'createdAt' | 'updatedAt' | 'externalId' | 'distributionCostTypeId' | 'companyId';
    export type RoomTypeBelongsToProperties = DistributionCostType | Company;
    export type RoomTypeHasManyProperties = Rooms | RoomTypeFloors | RoomTypeBuildings
    export type RoomTypeProperties = RoomTypeScalarProperties | RoomTypeBelongsToProperties | RoomTypeHasManyProperties

    export interface RoomType extends JupQueryNode {
        name: 'roomType',
        _: RoomTypeProperties[]
    }

    export interface RoomTypes extends JupQueryNode {
        name: 'roomTypes',
        _: RoomTypeProperties[]
    }



    export type CostCenterScalarProperties = 'id' | 'name' | 'color' | 'info' | 'distributeByFloor' | 'distributeByBuilding' | 'createdAt' | 'updatedAt' | 'externalId' | 'companyId';
    export type CostCenterBelongsToProperties = Company;
    export type CostCenterHasManyProperties = CostCenterBuildings | CostCenterFloors | Rooms | People | Workplaces
    export type CostCenterProperties = CostCenterScalarProperties | CostCenterBelongsToProperties | CostCenterHasManyProperties

    export interface CostCenter extends JupQueryNode {
        name: 'costCenter',
        _: CostCenterProperties[]
    }





    export type CostCenterBuildingScalarProperties = 'id' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'createdAt' | 'updatedAt' | 'externalId' | 'costCenterId' | 'buildingId' | 'companyId';
    export type CostCenterBuildingBelongsToProperties = CostCenter | Building | Company;
    export type CostCenterBuildingProperties = CostCenterBuildingScalarProperties | CostCenterBuildingBelongsToProperties

    export interface CostCenterBuilding extends JupQueryNode {
        name: 'costCenterBuilding',
        _: CostCenterBuildingProperties[]
    }

    export interface CostCenterBuildings extends JupQueryNode {
        name: 'costCenterBuildings',
        _: CostCenterBuildingProperties[]
    }



    export type CostCenterFloorScalarProperties = 'id' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'createdAt' | 'updatedAt' | 'externalId' | 'costCenterId' | 'floorId' | 'companyId';
    export type CostCenterFloorBelongsToProperties = CostCenter | Floor | Company;
    export type CostCenterFloorProperties = CostCenterFloorScalarProperties | CostCenterFloorBelongsToProperties

    export interface CostCenterFloor extends JupQueryNode {
        name: 'costCenterFloor',
        _: CostCenterFloorProperties[]
    }

    export interface CostCenterFloors extends JupQueryNode {
        name: 'costCenterFloors',
        _: CostCenterFloorProperties[]
    }



    export type RoomScalarProperties = 'id' | 'name' | 'position' | 'area' | 'perimeter' | 'textAnchor' | 'capacity' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'info' | 'bookingEmail' | 'externalId2' | 'createdAt' | 'updatedAt' | 'externalId' | 'floorId' | 'roomTypeId' | 'organizationId' | 'costCenterId' | 'distributionCostTypeId' | 'companyId';
    export type RoomBelongsToProperties = Floor | RoomType | Organization | CostCenter | DistributionCostType | Company;
    export type RoomHasManyProperties = RoomPointRooms | DimensionRooms | RoomAffectations | Workplaces | Items
    export type RoomProperties = RoomScalarProperties | RoomBelongsToProperties | RoomHasManyProperties

    export interface Room extends JupQueryNode {
        name: 'room',
        _: RoomProperties[]
    }

    export interface Rooms extends JupQueryNode {
        name: 'rooms',
        _: RoomProperties[]
    }



    export type RoomPointScalarProperties = 'id' | 'x' | 'y' | 'createdAt' | 'updatedAt' | 'externalId' | 'floorId' | 'companyId';
    export type RoomPointBelongsToProperties = Floor | Company;
    export type RoomPointHasManyProperties = RoomPointRooms
    export type RoomPointProperties = RoomPointScalarProperties | RoomPointBelongsToProperties | RoomPointHasManyProperties

    export interface RoomPoint extends JupQueryNode {
        name: 'roomPoint',
        _: RoomPointProperties[]
    }

    export interface RoomPoints extends JupQueryNode {
        name: 'roomPoints',
        _: RoomPointProperties[]
    }



    export type RoomPointRoomScalarProperties = 'id' | 'sortIndex' | 'createdAt' | 'updatedAt' | 'externalId' | 'roomId' | 'roomPointId' | 'companyId';
    export type RoomPointRoomBelongsToProperties = Room | RoomPoint | Company;
    export type RoomPointRoomProperties = RoomPointRoomScalarProperties | RoomPointRoomBelongsToProperties

    export interface RoomPointRoom extends JupQueryNode {
        name: 'roomPointRoom',
        _: RoomPointRoomProperties[]
    }

    export interface RoomPointRooms extends JupQueryNode {
        name: 'roomPointRooms',
        _: RoomPointRoomProperties[]
    }



    export type ItemTypePointScalarProperties = 'id' | 'x' | 'y' | 'sortIndex' | 'createdAt' | 'updatedAt' | 'externalId' | 'itemTypeId' | 'companyId';
    export type ItemTypePointBelongsToProperties = ItemType | Company;
    export type ItemTypePointProperties = ItemTypePointScalarProperties | ItemTypePointBelongsToProperties

    export interface ItemTypePoint extends JupQueryNode {
        name: 'itemTypePoint',
        _: ItemTypePointProperties[]
    }

    export interface ItemTypePoints extends JupQueryNode {
        name: 'itemTypePoints',
        _: ItemTypePointProperties[]
    }



    export type DimensionTypeScalarProperties = 'id' | 'name' | 'code' | 'order' | 'description' | 'createdAt' | 'updatedAt' | 'externalId' | 'companyId';
    export type DimensionTypeBelongsToProperties = Company;
    export type DimensionTypeHasManyProperties = Dimensions | DimensionRooms | DimensionFloors | DimensionBuildings
    export type DimensionTypeProperties = DimensionTypeScalarProperties | DimensionTypeBelongsToProperties | DimensionTypeHasManyProperties

    export interface DimensionType extends JupQueryNode {
        name: 'dimensionType',
        _: DimensionTypeProperties[]
    }





    export type DimensionScalarProperties = 'id' | 'name' | 'color' | 'value' | 'createdAt' | 'updatedAt' | 'externalId' | 'dimensionTypeId' | 'companyId';
    export type DimensionBelongsToProperties = DimensionType | Company;
    export type DimensionHasManyProperties = DimensionRooms | DimensionFloors | DimensionBuildings
    export type DimensionProperties = DimensionScalarProperties | DimensionBelongsToProperties | DimensionHasManyProperties

    export interface Dimension extends JupQueryNode {
        name: 'dimension',
        _: DimensionProperties[]
    }

    export interface Dimensions extends JupQueryNode {
        name: 'dimensions',
        _: DimensionProperties[]
    }



    export type DimensionRoomScalarProperties = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'dimensionId' | 'roomId' | 'dimensionTypeId' | 'companyId';
    export type DimensionRoomBelongsToProperties = Dimension | Room | DimensionType | Company;
    export type DimensionRoomProperties = DimensionRoomScalarProperties | DimensionRoomBelongsToProperties

    export interface DimensionRoom extends JupQueryNode {
        name: 'dimensionRoom',
        _: DimensionRoomProperties[]
    }

    export interface DimensionRooms extends JupQueryNode {
        name: 'dimensionRooms',
        _: DimensionRoomProperties[]
    }



    export type DimensionFloorScalarProperties = 'id' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'createdAt' | 'updatedAt' | 'externalId' | 'dimensionId' | 'dimensionTypeId' | 'floorId' | 'companyId';
    export type DimensionFloorBelongsToProperties = Dimension | DimensionType | Floor | Company;
    export type DimensionFloorProperties = DimensionFloorScalarProperties | DimensionFloorBelongsToProperties

    export interface DimensionFloor extends JupQueryNode {
        name: 'dimensionFloor',
        _: DimensionFloorProperties[]
    }

    export interface DimensionFloors extends JupQueryNode {
        name: 'dimensionFloors',
        _: DimensionFloorProperties[]
    }



    export type DimensionBuildingScalarProperties = 'id' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'createdAt' | 'updatedAt' | 'externalId' | 'dimensionId' | 'dimensionTypeId' | 'buildingId' | 'companyId';
    export type DimensionBuildingBelongsToProperties = Dimension | DimensionType | Building | Company;
    export type DimensionBuildingProperties = DimensionBuildingScalarProperties | DimensionBuildingBelongsToProperties

    export interface DimensionBuilding extends JupQueryNode {
        name: 'dimensionBuilding',
        _: DimensionBuildingProperties[]
    }

    export interface DimensionBuildings extends JupQueryNode {
        name: 'dimensionBuildings',
        _: DimensionBuildingProperties[]
    }



    export type FactTypeScalarProperties = 'id' | 'name' | 'code' | 'createdAt' | 'updatedAt' | 'externalId' | 'companyId';
    export type FactTypeBelongsToProperties = Company;
    export type FactTypeHasManyProperties = Facts
    export type FactTypeProperties = FactTypeScalarProperties | FactTypeBelongsToProperties | FactTypeHasManyProperties

    export interface FactType extends JupQueryNode {
        name: 'factType',
        _: FactTypeProperties[]
    }





    export type FactScalarProperties = 'id' | 'value' | 'date' | 'createdAt' | 'updatedAt' | 'externalId' | 'factTypeId' | 'buildingId' | 'companyId';
    export type FactBelongsToProperties = FactType | Building | Company;
    export type FactProperties = FactScalarProperties | FactBelongsToProperties

    export interface Fact extends JupQueryNode {
        name: 'fact',
        _: FactProperties[]
    }

    export interface Facts extends JupQueryNode {
        name: 'facts',
        _: FactProperties[]
    }



    export type PersonStateScalarProperties = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'companyId';
    export type PersonStateBelongsToProperties = Company;
    export type PersonStateHasManyProperties = People
    export type PersonStateProperties = PersonStateScalarProperties | PersonStateBelongsToProperties | PersonStateHasManyProperties

    export interface PersonState extends JupQueryNode {
        name: 'personState',
        _: PersonStateProperties[]
    }





    export type PersonSecurityProfileScalarProperties = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'companyId';
    export type PersonSecurityProfileBelongsToProperties = Company;
    export type PersonSecurityProfileHasManyProperties = People
    export type PersonSecurityProfileProperties = PersonSecurityProfileScalarProperties | PersonSecurityProfileBelongsToProperties | PersonSecurityProfileHasManyProperties

    export interface PersonSecurityProfile extends JupQueryNode {
        name: 'personSecurityProfile',
        _: PersonSecurityProfileProperties[]
    }





    export type PersonScalarProperties = 'id' | 'firstname' | 'lastname' | 'email' | 'picture' | 'title' | 'monitorReference' | 'computerReference' | 'telephone' | 'cellphone' | 'code' | 'badgeNumber' | 'badgeRestaurant' | 'boxNumber' | 'registrationNumber' | 'startDate' | 'endDate' | 'createdAt' | 'updatedAt' | 'externalId' | 'organizationId' | 'personStateId' | 'personSecurityProfileId' | 'costCenterId' | 'companyId';
    export type PersonBelongsToProperties = Organization | PersonState | PersonSecurityProfile | CostCenter | Company;
    export type PersonHasManyProperties = PersonToPersonSources | PersonToPersonTargets | RoomAffectations | WorkplaceAffectations | ItemToPeople
    export type PersonProperties = PersonScalarProperties | PersonBelongsToProperties | PersonHasManyProperties
    export interface PersonToPersonSources {
        name: 'personToPersonSources',
        _: PersonToPersonProperties[]
    }
    export interface PersonToPersonTargets {
        name: 'personToPersonTargets',
        _: PersonToPersonProperties[]
    }
    export interface Person extends JupQueryNode {
        name: 'person',
        _: PersonProperties[]
    }

    export interface People extends JupQueryNode {
        name: 'people',
        _: PersonProperties[]
    }



    export type PersonToPersonTypeScalarProperties = 'id' | 'labelForward' | 'labelBackward' | 'createdAt' | 'updatedAt' | 'externalId' | 'companyId';
    export type PersonToPersonTypeBelongsToProperties = Company;
    export type PersonToPersonTypeHasManyProperties = PersonToPeople
    export type PersonToPersonTypeProperties = PersonToPersonTypeScalarProperties | PersonToPersonTypeBelongsToProperties | PersonToPersonTypeHasManyProperties

    export interface PersonToPersonType extends JupQueryNode {
        name: 'personToPersonType',
        _: PersonToPersonTypeProperties[]
    }





    export type PersonToPersonScalarProperties = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'personToPersonTypeId' | 'personSourceId' | 'personTargetId' | 'companyId';
    export type PersonToPersonBelongsToProperties = PersonToPersonType | PersonSource | PersonTarget | Company;
    export type PersonToPersonProperties = PersonToPersonScalarProperties | PersonToPersonBelongsToProperties
    export interface PersonSource {
        name: 'personSource',
        _: PersonProperties[]
    }
    export interface PersonTarget {
        name: 'personTarget',
        _: PersonProperties[]
    }
    export interface PersonToPerson extends JupQueryNode {
        name: 'personToPerson',
        _: PersonToPersonProperties[]
    }

    export interface PersonToPeople extends JupQueryNode {
        name: 'personToPeople',
        _: PersonToPersonProperties[]
    }



    export type RoomAffectationScalarProperties = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'personId' | 'roomId' | 'companyId';
    export type RoomAffectationBelongsToProperties = Person | Room | Company;
    export type RoomAffectationProperties = RoomAffectationScalarProperties | RoomAffectationBelongsToProperties

    export interface RoomAffectation extends JupQueryNode {
        name: 'roomAffectation',
        _: RoomAffectationProperties[]
    }

    export interface RoomAffectations extends JupQueryNode {
        name: 'roomAffectations',
        _: RoomAffectationProperties[]
    }



    export type UserScalarProperties = 'id' | 'email' | 'firstname' | 'lastname' | 'picture' | 'sub' | 'createdAt' | 'updatedAt' | 'externalId';
    export type UserHasManyProperties = UserCompanies
    export type UserProperties = UserScalarProperties | UserHasManyProperties

    export interface User extends JupQueryNode {
        name: 'user',
        _: UserProperties[]
    }





    export type UserCompanyScalarProperties = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'userId' | 'companyId';
    export type UserCompanyBelongsToProperties = User | Company;
    export type UserCompanyHasManyProperties = JupUserCompanyToJupRoles | ContentRoleToUserCompanies
    export type UserCompanyProperties = UserCompanyScalarProperties | UserCompanyBelongsToProperties | UserCompanyHasManyProperties

    export interface UserCompany extends JupQueryNode {
        name: 'userCompany',
        _: UserCompanyProperties[]
    }

    export interface UserCompanies extends JupQueryNode {
        name: 'userCompanies',
        _: UserCompanyProperties[]
    }



    export type WorkplaceTypeScalarProperties = 'id' | 'name' | 'zIndex' | 'color' | 'createdAt' | 'updatedAt' | 'externalId' | 'companyId';
    export type WorkplaceTypeBelongsToProperties = Company;
    export type WorkplaceTypeHasManyProperties = WorkplaceTypeItemTypes | Workplaces
    export type WorkplaceTypeProperties = WorkplaceTypeScalarProperties | WorkplaceTypeBelongsToProperties | WorkplaceTypeHasManyProperties

    export interface WorkplaceType extends JupQueryNode {
        name: 'workplaceType',
        _: WorkplaceTypeProperties[]
    }





    export type WorkplaceTypeItemTypeScalarProperties = 'id' | 'position' | 'physicalInventory' | 'rotation' | 'zIndex' | 'createdAt' | 'updatedAt' | 'externalId' | 'workplaceTypeId' | 'itemTypeId' | 'companyId';
    export type WorkplaceTypeItemTypeBelongsToProperties = WorkplaceType | ItemType | Company;
    export type WorkplaceTypeItemTypeProperties = WorkplaceTypeItemTypeScalarProperties | WorkplaceTypeItemTypeBelongsToProperties

    export interface WorkplaceTypeItemType extends JupQueryNode {
        name: 'workplaceTypeItemType',
        _: WorkplaceTypeItemTypeProperties[]
    }

    export interface WorkplaceTypeItemTypes extends JupQueryNode {
        name: 'workplaceTypeItemTypes',
        _: WorkplaceTypeItemTypeProperties[]
    }



    export type WorkplaceScalarProperties = 'id' | 'position' | 'rotation' | 'isFlex' | 'isTransit' | 'isShared' | 'textAnchor' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'workplaceTypeId' | 'roomId' | 'organizationId' | 'costCenterId' | 'companyId';
    export type WorkplaceBelongsToProperties = WorkplaceType | Room | Organization | CostCenter | Company;
    export type WorkplaceHasManyProperties = Items | WorkplaceAffectations
    export type WorkplaceProperties = WorkplaceScalarProperties | WorkplaceBelongsToProperties | WorkplaceHasManyProperties

    export interface Workplace extends JupQueryNode {
        name: 'workplace',
        _: WorkplaceProperties[]
    }

    export interface Workplaces extends JupQueryNode {
        name: 'workplaces',
        _: WorkplaceProperties[]
    }



    export type ItemScalarProperties = 'id' | 'code' | 'reference' | 'purchaseDate' | 'position' | 'rotation' | 'textAnchor' | 'createdAt' | 'updatedAt' | 'externalId' | 'itemTypeId' | 'roomId' | 'workplaceId' | 'companyId';
    export type ItemBelongsToProperties = ItemType | Room | Workplace | Company;
    export type ItemHasManyProperties = ItemToPeople | ItemFacts
    export type ItemProperties = ItemScalarProperties | ItemBelongsToProperties | ItemHasManyProperties

    export interface Item extends JupQueryNode {
        name: 'item',
        _: ItemProperties[]
    }

    export interface Items extends JupQueryNode {
        name: 'items',
        _: ItemProperties[]
    }



    export type WorkplaceAffectationScalarProperties = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'personId' | 'workplaceId' | 'companyId';
    export type WorkplaceAffectationBelongsToProperties = Person | Workplace | Company;
    export type WorkplaceAffectationProperties = WorkplaceAffectationScalarProperties | WorkplaceAffectationBelongsToProperties

    export interface WorkplaceAffectation extends JupQueryNode {
        name: 'workplaceAffectation',
        _: WorkplaceAffectationProperties[]
    }

    export interface WorkplaceAffectations extends JupQueryNode {
        name: 'workplaceAffectations',
        _: WorkplaceAffectationProperties[]
    }



    export type OrganizationFloorScalarProperties = 'id' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'createdAt' | 'updatedAt' | 'externalId' | 'organizationId' | 'floorId' | 'companyId';
    export type OrganizationFloorBelongsToProperties = Organization | Floor | Company;
    export type OrganizationFloorProperties = OrganizationFloorScalarProperties | OrganizationFloorBelongsToProperties

    export interface OrganizationFloor extends JupQueryNode {
        name: 'organizationFloor',
        _: OrganizationFloorProperties[]
    }

    export interface OrganizationFloors extends JupQueryNode {
        name: 'organizationFloors',
        _: OrganizationFloorProperties[]
    }



    export type OrganizationBuildingScalarProperties = 'id' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'createdAt' | 'updatedAt' | 'externalId' | 'organizationId' | 'buildingId' | 'companyId';
    export type OrganizationBuildingBelongsToProperties = Organization | Building | Company;
    export type OrganizationBuildingProperties = OrganizationBuildingScalarProperties | OrganizationBuildingBelongsToProperties

    export interface OrganizationBuilding extends JupQueryNode {
        name: 'organizationBuilding',
        _: OrganizationBuildingProperties[]
    }

    export interface OrganizationBuildings extends JupQueryNode {
        name: 'organizationBuildings',
        _: OrganizationBuildingProperties[]
    }



    export type RoomTypeFloorScalarProperties = 'id' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'createdAt' | 'updatedAt' | 'externalId' | 'roomTypeId' | 'floorId' | 'companyId';
    export type RoomTypeFloorBelongsToProperties = RoomType | Floor | Company;
    export type RoomTypeFloorProperties = RoomTypeFloorScalarProperties | RoomTypeFloorBelongsToProperties

    export interface RoomTypeFloor extends JupQueryNode {
        name: 'roomTypeFloor',
        _: RoomTypeFloorProperties[]
    }

    export interface RoomTypeFloors extends JupQueryNode {
        name: 'roomTypeFloors',
        _: RoomTypeFloorProperties[]
    }



    export type RoomTypeBuildingScalarProperties = 'id' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'createdAt' | 'updatedAt' | 'externalId' | 'roomTypeId' | 'buildingId' | 'companyId';
    export type RoomTypeBuildingBelongsToProperties = RoomType | Building | Company;
    export type RoomTypeBuildingProperties = RoomTypeBuildingScalarProperties | RoomTypeBuildingBelongsToProperties

    export interface RoomTypeBuilding extends JupQueryNode {
        name: 'roomTypeBuilding',
        _: RoomTypeBuildingProperties[]
    }

    export interface RoomTypeBuildings extends JupQueryNode {
        name: 'roomTypeBuildings',
        _: RoomTypeBuildingProperties[]
    }



    export type ItemToPersonScalarProperties = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'personId' | 'itemId' | 'companyId';
    export type ItemToPersonBelongsToProperties = Person | Item | Company;
    export type ItemToPersonProperties = ItemToPersonScalarProperties | ItemToPersonBelongsToProperties

    export interface ItemToPerson extends JupQueryNode {
        name: 'itemToPerson',
        _: ItemToPersonProperties[]
    }

    export interface ItemToPeople extends JupQueryNode {
        name: 'itemToPeople',
        _: ItemToPersonProperties[]
    }



    export type ItemFactScalarProperties = 'id' | 'measure' | 'value' | 'voltage' | 'createdAt' | 'updatedAt' | 'externalId' | 'itemId' | 'companyId';
    export type ItemFactBelongsToProperties = Item | Company;
    export type ItemFactProperties = ItemFactScalarProperties | ItemFactBelongsToProperties

    export interface ItemFact extends JupQueryNode {
        name: 'itemFact',
        _: ItemFactProperties[]
    }

    export interface ItemFacts extends JupQueryNode {
        name: 'itemFacts',
        _: ItemFactProperties[]
    }


}