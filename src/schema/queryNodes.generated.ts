import { GJupQueryNode } from "../jup.models";

export namespace QueryNodes {

    export type OccupancyStatusPropertyNames = 'id' | 'name' | 'code' | 'color' | 'createdAt' | 'updatedAt' | 'externalId' | 'rooms'
    export type OccupancyStatusScalarProperties = 'id' | 'name' | 'code' | 'color' | 'createdAt' | 'updatedAt' | 'externalId';
    export type OccupancyStatusHasManyProperties = Rooms
    export type OccupancyStatusProperties = OccupancyStatusScalarProperties | OccupancyStatusHasManyProperties

    export interface OccupancyStatus extends GJupQueryNode<OccupancyStatusScalarProperties> {
        name: 'occupancyStatus',
        _: OccupancyStatusProperties[]
    }





    export type UserPropertyNames = 'id' | 'email' | 'firstname' | 'lastname' | 'picture' | 'sub' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanies'
    export type UserScalarProperties = 'id' | 'email' | 'firstname' | 'lastname' | 'picture' | 'sub' | 'createdAt' | 'updatedAt' | 'externalId';
    export type UserHasManyProperties = UserCompanies
    export type UserProperties = UserScalarProperties | UserHasManyProperties

    export interface User extends GJupQueryNode<UserScalarProperties> {
        name: 'user',
        _: UserProperties[]
    }





    export type CompanyTypePropertyNames = 'id' | 'name' | 'billable' | 'createdAt' | 'updatedAt' | 'externalId' | 'companies'
    export type CompanyTypeScalarProperties = 'id' | 'name' | 'billable' | 'createdAt' | 'updatedAt' | 'externalId';
    export type CompanyTypeHasManyProperties = Companies
    export type CompanyTypeProperties = CompanyTypeScalarProperties | CompanyTypeHasManyProperties

    export interface CompanyType extends GJupQueryNode<CompanyTypeScalarProperties> {
        name: 'companyType',
        _: CompanyTypeProperties[]
    }





    export type CompanyPropertyNames = 'id' | 'name' | 'logoPath' | 'iconPath' | 'proxyImages' | 'workingDaysCount' | 'createdAt' | 'updatedAt' | 'externalId' | 'companyTypeId' | 'companyType' | 'userCompanies' | 'buildingTypes' | 'buildings'
    export type CompanyScalarProperties = 'id' | 'name' | 'logoPath' | 'iconPath' | 'proxyImages' | 'workingDaysCount' | 'createdAt' | 'updatedAt' | 'externalId' | 'companyTypeId';
    export type CompanyBelongsToProperties = CompanyType;
    export type CompanyHasManyProperties = UserCompanies | BuildingTypes | Buildings
    export type CompanyProperties = CompanyScalarProperties | CompanyBelongsToProperties | CompanyHasManyProperties

    export interface Company extends GJupQueryNode<CompanyScalarProperties> {
        name: 'company',
        _: CompanyProperties[]
    }

    export interface Companies extends GJupQueryNode<CompanyScalarProperties> {
        name: 'companies',
        _: CompanyProperties[]
    }



    export type RoomConnectorTypePropertyNames = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'roomConnectors'
    export type RoomConnectorTypeScalarProperties = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId';
    export type RoomConnectorTypeHasManyProperties = RoomConnectors
    export type RoomConnectorTypeProperties = RoomConnectorTypeScalarProperties | RoomConnectorTypeHasManyProperties

    export interface RoomConnectorType extends GJupQueryNode<RoomConnectorTypeScalarProperties> {
        name: 'roomConnectorType',
        _: RoomConnectorTypeProperties[]
    }





    export type RoomConnectorPropertyNames = 'id' | 'name' | 'waitTime' | 'timePerFloor' | 'createdAt' | 'updatedAt' | 'externalId' | 'roomConnectorTypeId' | 'roomConnectorType' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'rooms' | 'companyId' | 'company'
    export type RoomConnectorScalarProperties = 'id' | 'name' | 'waitTime' | 'timePerFloor' | 'createdAt' | 'updatedAt' | 'externalId' | 'roomConnectorTypeId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type RoomConnectorBelongsToProperties = RoomConnectorType | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type RoomConnectorHasManyProperties = Rooms
    export type RoomConnectorProperties = RoomConnectorScalarProperties | RoomConnectorBelongsToProperties | RoomConnectorHasManyProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface RoomConnector extends GJupQueryNode<RoomConnectorScalarProperties> {
        name: 'roomConnector',
        _: RoomConnectorProperties[]
    }

    export interface RoomConnectors extends GJupQueryNode<RoomConnectorScalarProperties> {
        name: 'roomConnectors',
        _: RoomConnectorProperties[]
    }



    export type UserCompanyPropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'roomConnectorCreatedBies' | 'roomConnectorUpdatedBies' | 'userId' | 'user' | 'companyId' | 'company' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyCreatedBies' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'userCompanyUpdatedBies' | 'personCompanyCreatedBies' | 'personCompanyUpdatedBies' | 'buildingTypeCreatedBies' | 'buildingTypeUpdatedBies' | 'organizationCreatedBies' | 'organizationUpdatedBies' | 'itemTypeFamilyCreatedBies' | 'itemTypeFamilyUpdatedBies' | 'manufacturerCreatedBies' | 'manufacturerUpdatedBies' | 'itemTypeCreatedBies' | 'itemTypeUpdatedBies' | 'buildingOwners' | 'buildingCreatedBies' | 'buildingUpdatedBies' | 'mapScaleCreatedBies' | 'mapScaleUpdatedBies' | 'structureCreatedBies' | 'structureUpdatedBies' | 'structurePointCreatedBies' | 'structurePointUpdatedBies' | 'floorCreatedBies' | 'floorUpdatedBies' | 'distributionCostTypeCreatedBies' | 'distributionCostTypeUpdatedBies' | 'roomTypeCreatedBies' | 'roomTypeUpdatedBies' | 'costCenterCreatedBies' | 'costCenterUpdatedBies' | 'costCenterBuildingCreatedBies' | 'costCenterBuildingUpdatedBies' | 'costCenterFloorCreatedBies' | 'costCenterFloorUpdatedBies' | 'roomCreatedBies' | 'roomUpdatedBies' | 'roomPointCreatedBies' | 'roomPointUpdatedBies' | 'roomPointRoomCreatedBies' | 'roomPointRoomUpdatedBies' | 'roomPointSegmentCreatedBies' | 'roomPointSegmentUpdatedBies' | 'itemTypePointCreatedBies' | 'itemTypePointUpdatedBies' | 'dimensionTypeCreatedBies' | 'dimensionTypeUpdatedBies' | 'dimensionCreatedBies' | 'dimensionUpdatedBies' | 'dimensionRoomCreatedBies' | 'dimensionRoomUpdatedBies' | 'dimensionFloorCreatedBies' | 'dimensionFloorUpdatedBies' | 'dimensionBuildingCreatedBies' | 'dimensionBuildingUpdatedBies' | 'factTypeCreatedBies' | 'factTypeUpdatedBies' | 'factCreatedBies' | 'factUpdatedBies' | 'personStateCreatedBies' | 'personStateUpdatedBies' | 'personSecurityProfileCreatedBies' | 'personSecurityProfileUpdatedBies' | 'personCreatedBies' | 'personUpdatedBies' | 'personToPersonTypeCreatedBies' | 'personToPersonTypeUpdatedBies' | 'personToPersonCreatedBies' | 'personToPersonUpdatedBies' | 'roomAffectationCreatedBies' | 'roomAffectationUpdatedBies' | 'workplaceTypeCreatedBies' | 'workplaceTypeUpdatedBies' | 'workplaceTypeItemTypeCreatedBies' | 'workplaceTypeItemTypeUpdatedBies' | 'workplaceCreatedBies' | 'workplaceUpdatedBies' | 'itemCreatedBies' | 'itemUpdatedBies' | 'workplaceAffectationCreatedBies' | 'workplaceAffectationUpdatedBies' | 'organizationFloorCreatedBies' | 'organizationFloorUpdatedBies' | 'organizationBuildingCreatedBies' | 'organizationBuildingUpdatedBies' | 'roomTypeFloorCreatedBies' | 'roomTypeFloorUpdatedBies' | 'roomTypeBuildingCreatedBies' | 'roomTypeBuildingUpdatedBies' | 'itemToPersonCreatedBies' | 'itemToPersonUpdatedBies' | 'personToBuildingCreatedBies' | 'personToBuildingUpdatedBies' | 'dimensionToPersonCreatedBies' | 'dimensionToPersonUpdatedBies' | 'dimensionTypeToBuildingCreatedBies' | 'dimensionTypeToBuildingUpdatedBies' | 'contentRoleCreatedBies' | 'contentRoleUpdatedBies' | 'jupUserCompanyToJupRoles' | 'jupUserCompanyToJupRoleCreatedBies' | 'jupUserCompanyToJupRoleUpdatedBies' | 'contentRoleToBuildingCreatedBies' | 'contentRoleToBuildingUpdatedBies' | 'contentRoleToUserCompanies' | 'contentRoleToUserCompanyCreatedBies' | 'contentRoleToUserCompanyUpdatedBies' | 'contentRoleToFloorCreatedBies' | 'contentRoleToFloorUpdatedBies' | 'partnerApiCredentialCreatedBies' | 'partnerApiCredentialUpdatedBies' | 'apiUserCreatedBies' | 'apiUserUpdatedBies' | 'apiUserToJupRoleCreatedBies' | 'apiUserToJupRoleUpdatedBies' | 'apiUserToContentRoleCreatedBies' | 'apiUserToContentRoleUpdatedBies' | 'jupUiTenantOperationCreatedBies' | 'jupUiTenantOperationUpdatedBies' | 'contentRoleToJupUiTenantOperationCreatedBies' | 'contentRoleToJupUiTenantOperationUpdatedBies' | 'userRegistrationTenantRuleCreatedBies' | 'userRegistrationTenantRuleUpdatedBies' | 'userRegistrationTenantRuleToJupRoleCreatedBies' | 'userRegistrationTenantRuleToJupRoleUpdatedBies' | 'userRegistrationTenantRuleToContentRoleCreatedBies' | 'userRegistrationTenantRuleToContentRoleUpdatedBies' | 'partnerExportMappingConfigurationCreatedBies' | 'partnerExportMappingConfigurationUpdatedBies' | 'partnerExportMappingCreatedBies' | 'partnerExportMappingUpdatedBies' | 'partnerExportMappingToRoomTypeCreatedBies' | 'partnerExportMappingToRoomTypeUpdatedBies' | 'partnerExportMappingConfigurationToFloorCreatedBies' | 'partnerExportMappingConfigurationToFloorUpdatedBies' | 'itemFactCreatedBies' | 'itemFactUpdatedBies'
    export type UserCompanyScalarProperties = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'userId' | 'companyId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById';
    export type UserCompanyBelongsToProperties = User | Company | UserCompanyCreatedBy | UserCompanyUpdatedBy;
    export type UserCompanyHasManyProperties = RoomConnectorCreatedBies | RoomConnectorUpdatedBies | UserCompanyCreatedBies | UserCompanyUpdatedBies | PersonCompanyCreatedBies | PersonCompanyUpdatedBies | BuildingTypeCreatedBies | BuildingTypeUpdatedBies | OrganizationCreatedBies | OrganizationUpdatedBies | ItemTypeFamilyCreatedBies | ItemTypeFamilyUpdatedBies | ManufacturerCreatedBies | ManufacturerUpdatedBies | ItemTypeCreatedBies | ItemTypeUpdatedBies | BuildingOwners | BuildingCreatedBies | BuildingUpdatedBies | MapScaleCreatedBies | MapScaleUpdatedBies | StructureCreatedBies | StructureUpdatedBies | StructurePointCreatedBies | StructurePointUpdatedBies | FloorCreatedBies | FloorUpdatedBies | DistributionCostTypeCreatedBies | DistributionCostTypeUpdatedBies | RoomTypeCreatedBies | RoomTypeUpdatedBies | CostCenterCreatedBies | CostCenterUpdatedBies | CostCenterBuildingCreatedBies | CostCenterBuildingUpdatedBies | CostCenterFloorCreatedBies | CostCenterFloorUpdatedBies | RoomCreatedBies | RoomUpdatedBies | RoomPointCreatedBies | RoomPointUpdatedBies | RoomPointRoomCreatedBies | RoomPointRoomUpdatedBies | RoomPointSegmentCreatedBies | RoomPointSegmentUpdatedBies | ItemTypePointCreatedBies | ItemTypePointUpdatedBies | DimensionTypeCreatedBies | DimensionTypeUpdatedBies | DimensionCreatedBies | DimensionUpdatedBies | DimensionRoomCreatedBies | DimensionRoomUpdatedBies | DimensionFloorCreatedBies | DimensionFloorUpdatedBies | DimensionBuildingCreatedBies | DimensionBuildingUpdatedBies | FactTypeCreatedBies | FactTypeUpdatedBies | FactCreatedBies | FactUpdatedBies | PersonStateCreatedBies | PersonStateUpdatedBies | PersonSecurityProfileCreatedBies | PersonSecurityProfileUpdatedBies | PersonCreatedBies | PersonUpdatedBies | PersonToPersonTypeCreatedBies | PersonToPersonTypeUpdatedBies | PersonToPersonCreatedBies | PersonToPersonUpdatedBies | RoomAffectationCreatedBies | RoomAffectationUpdatedBies | WorkplaceTypeCreatedBies | WorkplaceTypeUpdatedBies | WorkplaceTypeItemTypeCreatedBies | WorkplaceTypeItemTypeUpdatedBies | WorkplaceCreatedBies | WorkplaceUpdatedBies | ItemCreatedBies | ItemUpdatedBies | WorkplaceAffectationCreatedBies | WorkplaceAffectationUpdatedBies | OrganizationFloorCreatedBies | OrganizationFloorUpdatedBies | OrganizationBuildingCreatedBies | OrganizationBuildingUpdatedBies | RoomTypeFloorCreatedBies | RoomTypeFloorUpdatedBies | RoomTypeBuildingCreatedBies | RoomTypeBuildingUpdatedBies | ItemToPersonCreatedBies | ItemToPersonUpdatedBies | PersonToBuildingCreatedBies | PersonToBuildingUpdatedBies | DimensionToPersonCreatedBies | DimensionToPersonUpdatedBies | DimensionTypeToBuildingCreatedBies | DimensionTypeToBuildingUpdatedBies | ContentRoleCreatedBies | ContentRoleUpdatedBies | JupUserCompanyToJupRoles | JupUserCompanyToJupRoleCreatedBies | JupUserCompanyToJupRoleUpdatedBies | ContentRoleToBuildingCreatedBies | ContentRoleToBuildingUpdatedBies | ContentRoleToUserCompanies | ContentRoleToUserCompanyCreatedBies | ContentRoleToUserCompanyUpdatedBies | ContentRoleToFloorCreatedBies | ContentRoleToFloorUpdatedBies | PartnerApiCredentialCreatedBies | PartnerApiCredentialUpdatedBies | ApiUserCreatedBies | ApiUserUpdatedBies | ApiUserToJupRoleCreatedBies | ApiUserToJupRoleUpdatedBies | ApiUserToContentRoleCreatedBies | ApiUserToContentRoleUpdatedBies | JupUiTenantOperationCreatedBies | JupUiTenantOperationUpdatedBies | ContentRoleToJupUiTenantOperationCreatedBies | ContentRoleToJupUiTenantOperationUpdatedBies | UserRegistrationTenantRuleCreatedBies | UserRegistrationTenantRuleUpdatedBies | UserRegistrationTenantRuleToJupRoleCreatedBies | UserRegistrationTenantRuleToJupRoleUpdatedBies | UserRegistrationTenantRuleToContentRoleCreatedBies | UserRegistrationTenantRuleToContentRoleUpdatedBies | PartnerExportMappingConfigurationCreatedBies | PartnerExportMappingConfigurationUpdatedBies | PartnerExportMappingCreatedBies | PartnerExportMappingUpdatedBies | PartnerExportMappingToRoomTypeCreatedBies | PartnerExportMappingToRoomTypeUpdatedBies | PartnerExportMappingConfigurationToFloorCreatedBies | PartnerExportMappingConfigurationToFloorUpdatedBies | ItemFactCreatedBies | ItemFactUpdatedBies
    export type UserCompanyProperties = UserCompanyScalarProperties | UserCompanyBelongsToProperties | UserCompanyHasManyProperties
    export interface RoomConnectorCreatedBies {
        name: 'roomConnectorCreatedBies',
        _: RoomConnectorProperties[]
    }
    export interface RoomConnectorUpdatedBies {
        name: 'roomConnectorUpdatedBies',
        _: RoomConnectorProperties[]
    }
    export interface UserCompanyCreatedBies {
        name: 'userCompanyCreatedBies',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBies {
        name: 'userCompanyUpdatedBies',
        _: UserCompanyProperties[]
    }
    export interface PersonCompanyCreatedBies {
        name: 'personCompanyCreatedBies',
        _: PersonCompanyProperties[]
    }
    export interface PersonCompanyUpdatedBies {
        name: 'personCompanyUpdatedBies',
        _: PersonCompanyProperties[]
    }
    export interface BuildingTypeCreatedBies {
        name: 'buildingTypeCreatedBies',
        _: BuildingTypeProperties[]
    }
    export interface BuildingTypeUpdatedBies {
        name: 'buildingTypeUpdatedBies',
        _: BuildingTypeProperties[]
    }
    export interface OrganizationCreatedBies {
        name: 'organizationCreatedBies',
        _: OrganizationProperties[]
    }
    export interface OrganizationUpdatedBies {
        name: 'organizationUpdatedBies',
        _: OrganizationProperties[]
    }
    export interface ItemTypeFamilyCreatedBies {
        name: 'itemTypeFamilyCreatedBies',
        _: ItemTypeFamilyProperties[]
    }
    export interface ItemTypeFamilyUpdatedBies {
        name: 'itemTypeFamilyUpdatedBies',
        _: ItemTypeFamilyProperties[]
    }
    export interface ManufacturerCreatedBies {
        name: 'manufacturerCreatedBies',
        _: ManufacturerProperties[]
    }
    export interface ManufacturerUpdatedBies {
        name: 'manufacturerUpdatedBies',
        _: ManufacturerProperties[]
    }
    export interface ItemTypeCreatedBies {
        name: 'itemTypeCreatedBies',
        _: ItemTypeProperties[]
    }
    export interface ItemTypeUpdatedBies {
        name: 'itemTypeUpdatedBies',
        _: ItemTypeProperties[]
    }
    export interface BuildingOwners {
        name: 'buildingOwners',
        _: BuildingProperties[]
    }
    export interface BuildingCreatedBies {
        name: 'buildingCreatedBies',
        _: BuildingProperties[]
    }
    export interface BuildingUpdatedBies {
        name: 'buildingUpdatedBies',
        _: BuildingProperties[]
    }
    export interface MapScaleCreatedBies {
        name: 'mapScaleCreatedBies',
        _: MapScaleProperties[]
    }
    export interface MapScaleUpdatedBies {
        name: 'mapScaleUpdatedBies',
        _: MapScaleProperties[]
    }
    export interface StructureCreatedBies {
        name: 'structureCreatedBies',
        _: StructureProperties[]
    }
    export interface StructureUpdatedBies {
        name: 'structureUpdatedBies',
        _: StructureProperties[]
    }
    export interface StructurePointCreatedBies {
        name: 'structurePointCreatedBies',
        _: StructurePointProperties[]
    }
    export interface StructurePointUpdatedBies {
        name: 'structurePointUpdatedBies',
        _: StructurePointProperties[]
    }
    export interface FloorCreatedBies {
        name: 'floorCreatedBies',
        _: FloorProperties[]
    }
    export interface FloorUpdatedBies {
        name: 'floorUpdatedBies',
        _: FloorProperties[]
    }
    export interface DistributionCostTypeCreatedBies {
        name: 'distributionCostTypeCreatedBies',
        _: DistributionCostTypeProperties[]
    }
    export interface DistributionCostTypeUpdatedBies {
        name: 'distributionCostTypeUpdatedBies',
        _: DistributionCostTypeProperties[]
    }
    export interface RoomTypeCreatedBies {
        name: 'roomTypeCreatedBies',
        _: RoomTypeProperties[]
    }
    export interface RoomTypeUpdatedBies {
        name: 'roomTypeUpdatedBies',
        _: RoomTypeProperties[]
    }
    export interface CostCenterCreatedBies {
        name: 'costCenterCreatedBies',
        _: CostCenterProperties[]
    }
    export interface CostCenterUpdatedBies {
        name: 'costCenterUpdatedBies',
        _: CostCenterProperties[]
    }
    export interface CostCenterBuildingCreatedBies {
        name: 'costCenterBuildingCreatedBies',
        _: CostCenterBuildingProperties[]
    }
    export interface CostCenterBuildingUpdatedBies {
        name: 'costCenterBuildingUpdatedBies',
        _: CostCenterBuildingProperties[]
    }
    export interface CostCenterFloorCreatedBies {
        name: 'costCenterFloorCreatedBies',
        _: CostCenterFloorProperties[]
    }
    export interface CostCenterFloorUpdatedBies {
        name: 'costCenterFloorUpdatedBies',
        _: CostCenterFloorProperties[]
    }
    export interface RoomCreatedBies {
        name: 'roomCreatedBies',
        _: RoomProperties[]
    }
    export interface RoomUpdatedBies {
        name: 'roomUpdatedBies',
        _: RoomProperties[]
    }
    export interface RoomPointCreatedBies {
        name: 'roomPointCreatedBies',
        _: RoomPointProperties[]
    }
    export interface RoomPointUpdatedBies {
        name: 'roomPointUpdatedBies',
        _: RoomPointProperties[]
    }
    export interface RoomPointRoomCreatedBies {
        name: 'roomPointRoomCreatedBies',
        _: RoomPointRoomProperties[]
    }
    export interface RoomPointRoomUpdatedBies {
        name: 'roomPointRoomUpdatedBies',
        _: RoomPointRoomProperties[]
    }
    export interface RoomPointSegmentCreatedBies {
        name: 'roomPointSegmentCreatedBies',
        _: RoomPointSegmentProperties[]
    }
    export interface RoomPointSegmentUpdatedBies {
        name: 'roomPointSegmentUpdatedBies',
        _: RoomPointSegmentProperties[]
    }
    export interface ItemTypePointCreatedBies {
        name: 'itemTypePointCreatedBies',
        _: ItemTypePointProperties[]
    }
    export interface ItemTypePointUpdatedBies {
        name: 'itemTypePointUpdatedBies',
        _: ItemTypePointProperties[]
    }
    export interface DimensionTypeCreatedBies {
        name: 'dimensionTypeCreatedBies',
        _: DimensionTypeProperties[]
    }
    export interface DimensionTypeUpdatedBies {
        name: 'dimensionTypeUpdatedBies',
        _: DimensionTypeProperties[]
    }
    export interface DimensionCreatedBies {
        name: 'dimensionCreatedBies',
        _: DimensionProperties[]
    }
    export interface DimensionUpdatedBies {
        name: 'dimensionUpdatedBies',
        _: DimensionProperties[]
    }
    export interface DimensionRoomCreatedBies {
        name: 'dimensionRoomCreatedBies',
        _: DimensionRoomProperties[]
    }
    export interface DimensionRoomUpdatedBies {
        name: 'dimensionRoomUpdatedBies',
        _: DimensionRoomProperties[]
    }
    export interface DimensionFloorCreatedBies {
        name: 'dimensionFloorCreatedBies',
        _: DimensionFloorProperties[]
    }
    export interface DimensionFloorUpdatedBies {
        name: 'dimensionFloorUpdatedBies',
        _: DimensionFloorProperties[]
    }
    export interface DimensionBuildingCreatedBies {
        name: 'dimensionBuildingCreatedBies',
        _: DimensionBuildingProperties[]
    }
    export interface DimensionBuildingUpdatedBies {
        name: 'dimensionBuildingUpdatedBies',
        _: DimensionBuildingProperties[]
    }
    export interface FactTypeCreatedBies {
        name: 'factTypeCreatedBies',
        _: FactTypeProperties[]
    }
    export interface FactTypeUpdatedBies {
        name: 'factTypeUpdatedBies',
        _: FactTypeProperties[]
    }
    export interface FactCreatedBies {
        name: 'factCreatedBies',
        _: FactProperties[]
    }
    export interface FactUpdatedBies {
        name: 'factUpdatedBies',
        _: FactProperties[]
    }
    export interface PersonStateCreatedBies {
        name: 'personStateCreatedBies',
        _: PersonStateProperties[]
    }
    export interface PersonStateUpdatedBies {
        name: 'personStateUpdatedBies',
        _: PersonStateProperties[]
    }
    export interface PersonSecurityProfileCreatedBies {
        name: 'personSecurityProfileCreatedBies',
        _: PersonSecurityProfileProperties[]
    }
    export interface PersonSecurityProfileUpdatedBies {
        name: 'personSecurityProfileUpdatedBies',
        _: PersonSecurityProfileProperties[]
    }
    export interface PersonCreatedBies {
        name: 'personCreatedBies',
        _: PersonProperties[]
    }
    export interface PersonUpdatedBies {
        name: 'personUpdatedBies',
        _: PersonProperties[]
    }
    export interface PersonToPersonTypeCreatedBies {
        name: 'personToPersonTypeCreatedBies',
        _: PersonToPersonTypeProperties[]
    }
    export interface PersonToPersonTypeUpdatedBies {
        name: 'personToPersonTypeUpdatedBies',
        _: PersonToPersonTypeProperties[]
    }
    export interface PersonToPersonCreatedBies {
        name: 'personToPersonCreatedBies',
        _: PersonToPersonProperties[]
    }
    export interface PersonToPersonUpdatedBies {
        name: 'personToPersonUpdatedBies',
        _: PersonToPersonProperties[]
    }
    export interface RoomAffectationCreatedBies {
        name: 'roomAffectationCreatedBies',
        _: RoomAffectationProperties[]
    }
    export interface RoomAffectationUpdatedBies {
        name: 'roomAffectationUpdatedBies',
        _: RoomAffectationProperties[]
    }
    export interface WorkplaceTypeCreatedBies {
        name: 'workplaceTypeCreatedBies',
        _: WorkplaceTypeProperties[]
    }
    export interface WorkplaceTypeUpdatedBies {
        name: 'workplaceTypeUpdatedBies',
        _: WorkplaceTypeProperties[]
    }
    export interface WorkplaceTypeItemTypeCreatedBies {
        name: 'workplaceTypeItemTypeCreatedBies',
        _: WorkplaceTypeItemTypeProperties[]
    }
    export interface WorkplaceTypeItemTypeUpdatedBies {
        name: 'workplaceTypeItemTypeUpdatedBies',
        _: WorkplaceTypeItemTypeProperties[]
    }
    export interface WorkplaceCreatedBies {
        name: 'workplaceCreatedBies',
        _: WorkplaceProperties[]
    }
    export interface WorkplaceUpdatedBies {
        name: 'workplaceUpdatedBies',
        _: WorkplaceProperties[]
    }
    export interface ItemCreatedBies {
        name: 'itemCreatedBies',
        _: ItemProperties[]
    }
    export interface ItemUpdatedBies {
        name: 'itemUpdatedBies',
        _: ItemProperties[]
    }
    export interface WorkplaceAffectationCreatedBies {
        name: 'workplaceAffectationCreatedBies',
        _: WorkplaceAffectationProperties[]
    }
    export interface WorkplaceAffectationUpdatedBies {
        name: 'workplaceAffectationUpdatedBies',
        _: WorkplaceAffectationProperties[]
    }
    export interface OrganizationFloorCreatedBies {
        name: 'organizationFloorCreatedBies',
        _: OrganizationFloorProperties[]
    }
    export interface OrganizationFloorUpdatedBies {
        name: 'organizationFloorUpdatedBies',
        _: OrganizationFloorProperties[]
    }
    export interface OrganizationBuildingCreatedBies {
        name: 'organizationBuildingCreatedBies',
        _: OrganizationBuildingProperties[]
    }
    export interface OrganizationBuildingUpdatedBies {
        name: 'organizationBuildingUpdatedBies',
        _: OrganizationBuildingProperties[]
    }
    export interface RoomTypeFloorCreatedBies {
        name: 'roomTypeFloorCreatedBies',
        _: RoomTypeFloorProperties[]
    }
    export interface RoomTypeFloorUpdatedBies {
        name: 'roomTypeFloorUpdatedBies',
        _: RoomTypeFloorProperties[]
    }
    export interface RoomTypeBuildingCreatedBies {
        name: 'roomTypeBuildingCreatedBies',
        _: RoomTypeBuildingProperties[]
    }
    export interface RoomTypeBuildingUpdatedBies {
        name: 'roomTypeBuildingUpdatedBies',
        _: RoomTypeBuildingProperties[]
    }
    export interface ItemToPersonCreatedBies {
        name: 'itemToPersonCreatedBies',
        _: ItemToPersonProperties[]
    }
    export interface ItemToPersonUpdatedBies {
        name: 'itemToPersonUpdatedBies',
        _: ItemToPersonProperties[]
    }
    export interface PersonToBuildingCreatedBies {
        name: 'personToBuildingCreatedBies',
        _: PersonToBuildingProperties[]
    }
    export interface PersonToBuildingUpdatedBies {
        name: 'personToBuildingUpdatedBies',
        _: PersonToBuildingProperties[]
    }
    export interface DimensionToPersonCreatedBies {
        name: 'dimensionToPersonCreatedBies',
        _: DimensionToPersonProperties[]
    }
    export interface DimensionToPersonUpdatedBies {
        name: 'dimensionToPersonUpdatedBies',
        _: DimensionToPersonProperties[]
    }
    export interface DimensionTypeToBuildingCreatedBies {
        name: 'dimensionTypeToBuildingCreatedBies',
        _: DimensionTypeToBuildingProperties[]
    }
    export interface DimensionTypeToBuildingUpdatedBies {
        name: 'dimensionTypeToBuildingUpdatedBies',
        _: DimensionTypeToBuildingProperties[]
    }
    export interface ContentRoleCreatedBies {
        name: 'contentRoleCreatedBies',
        _: ContentRoleProperties[]
    }
    export interface ContentRoleUpdatedBies {
        name: 'contentRoleUpdatedBies',
        _: ContentRoleProperties[]
    }
    export interface JupUserCompanyToJupRoleCreatedBies {
        name: 'jupUserCompanyToJupRoleCreatedBies',
        _: JupUserCompanyToJupRoleProperties[]
    }
    export interface JupUserCompanyToJupRoleUpdatedBies {
        name: 'jupUserCompanyToJupRoleUpdatedBies',
        _: JupUserCompanyToJupRoleProperties[]
    }
    export interface ContentRoleToBuildingCreatedBies {
        name: 'contentRoleToBuildingCreatedBies',
        _: ContentRoleToBuildingProperties[]
    }
    export interface ContentRoleToBuildingUpdatedBies {
        name: 'contentRoleToBuildingUpdatedBies',
        _: ContentRoleToBuildingProperties[]
    }
    export interface ContentRoleToUserCompanyCreatedBies {
        name: 'contentRoleToUserCompanyCreatedBies',
        _: ContentRoleToUserCompanyProperties[]
    }
    export interface ContentRoleToUserCompanyUpdatedBies {
        name: 'contentRoleToUserCompanyUpdatedBies',
        _: ContentRoleToUserCompanyProperties[]
    }
    export interface ContentRoleToFloorCreatedBies {
        name: 'contentRoleToFloorCreatedBies',
        _: ContentRoleToFloorProperties[]
    }
    export interface ContentRoleToFloorUpdatedBies {
        name: 'contentRoleToFloorUpdatedBies',
        _: ContentRoleToFloorProperties[]
    }
    export interface PartnerApiCredentialCreatedBies {
        name: 'partnerApiCredentialCreatedBies',
        _: PartnerApiCredentialProperties[]
    }
    export interface PartnerApiCredentialUpdatedBies {
        name: 'partnerApiCredentialUpdatedBies',
        _: PartnerApiCredentialProperties[]
    }
    export interface ApiUserCreatedBies {
        name: 'apiUserCreatedBies',
        _: ApiUserProperties[]
    }
    export interface ApiUserUpdatedBies {
        name: 'apiUserUpdatedBies',
        _: ApiUserProperties[]
    }
    export interface ApiUserToJupRoleCreatedBies {
        name: 'apiUserToJupRoleCreatedBies',
        _: ApiUserToJupRoleProperties[]
    }
    export interface ApiUserToJupRoleUpdatedBies {
        name: 'apiUserToJupRoleUpdatedBies',
        _: ApiUserToJupRoleProperties[]
    }
    export interface ApiUserToContentRoleCreatedBies {
        name: 'apiUserToContentRoleCreatedBies',
        _: ApiUserToContentRoleProperties[]
    }
    export interface ApiUserToContentRoleUpdatedBies {
        name: 'apiUserToContentRoleUpdatedBies',
        _: ApiUserToContentRoleProperties[]
    }
    export interface JupUiTenantOperationCreatedBies {
        name: 'jupUiTenantOperationCreatedBies',
        _: JupUiTenantOperationProperties[]
    }
    export interface JupUiTenantOperationUpdatedBies {
        name: 'jupUiTenantOperationUpdatedBies',
        _: JupUiTenantOperationProperties[]
    }
    export interface ContentRoleToJupUiTenantOperationCreatedBies {
        name: 'contentRoleToJupUiTenantOperationCreatedBies',
        _: ContentRoleToJupUiTenantOperationProperties[]
    }
    export interface ContentRoleToJupUiTenantOperationUpdatedBies {
        name: 'contentRoleToJupUiTenantOperationUpdatedBies',
        _: ContentRoleToJupUiTenantOperationProperties[]
    }
    export interface UserRegistrationTenantRuleCreatedBies {
        name: 'userRegistrationTenantRuleCreatedBies',
        _: UserRegistrationTenantRuleProperties[]
    }
    export interface UserRegistrationTenantRuleUpdatedBies {
        name: 'userRegistrationTenantRuleUpdatedBies',
        _: UserRegistrationTenantRuleProperties[]
    }
    export interface UserRegistrationTenantRuleToJupRoleCreatedBies {
        name: 'userRegistrationTenantRuleToJupRoleCreatedBies',
        _: UserRegistrationTenantRuleToJupRoleProperties[]
    }
    export interface UserRegistrationTenantRuleToJupRoleUpdatedBies {
        name: 'userRegistrationTenantRuleToJupRoleUpdatedBies',
        _: UserRegistrationTenantRuleToJupRoleProperties[]
    }
    export interface UserRegistrationTenantRuleToContentRoleCreatedBies {
        name: 'userRegistrationTenantRuleToContentRoleCreatedBies',
        _: UserRegistrationTenantRuleToContentRoleProperties[]
    }
    export interface UserRegistrationTenantRuleToContentRoleUpdatedBies {
        name: 'userRegistrationTenantRuleToContentRoleUpdatedBies',
        _: UserRegistrationTenantRuleToContentRoleProperties[]
    }
    export interface PartnerExportMappingConfigurationCreatedBies {
        name: 'partnerExportMappingConfigurationCreatedBies',
        _: PartnerExportMappingConfigurationProperties[]
    }
    export interface PartnerExportMappingConfigurationUpdatedBies {
        name: 'partnerExportMappingConfigurationUpdatedBies',
        _: PartnerExportMappingConfigurationProperties[]
    }
    export interface PartnerExportMappingCreatedBies {
        name: 'partnerExportMappingCreatedBies',
        _: PartnerExportMappingProperties[]
    }
    export interface PartnerExportMappingUpdatedBies {
        name: 'partnerExportMappingUpdatedBies',
        _: PartnerExportMappingProperties[]
    }
    export interface PartnerExportMappingToRoomTypeCreatedBies {
        name: 'partnerExportMappingToRoomTypeCreatedBies',
        _: PartnerExportMappingToRoomTypeProperties[]
    }
    export interface PartnerExportMappingToRoomTypeUpdatedBies {
        name: 'partnerExportMappingToRoomTypeUpdatedBies',
        _: PartnerExportMappingToRoomTypeProperties[]
    }
    export interface PartnerExportMappingConfigurationToFloorCreatedBies {
        name: 'partnerExportMappingConfigurationToFloorCreatedBies',
        _: PartnerExportMappingConfigurationToFloorProperties[]
    }
    export interface PartnerExportMappingConfigurationToFloorUpdatedBies {
        name: 'partnerExportMappingConfigurationToFloorUpdatedBies',
        _: PartnerExportMappingConfigurationToFloorProperties[]
    }
    export interface ItemFactCreatedBies {
        name: 'itemFactCreatedBies',
        _: ItemFactProperties[]
    }
    export interface ItemFactUpdatedBies {
        name: 'itemFactUpdatedBies',
        _: ItemFactProperties[]
    }
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompany extends GJupQueryNode<UserCompanyScalarProperties> {
        name: 'userCompany',
        _: UserCompanyProperties[]
    }

    export interface UserCompanies extends GJupQueryNode<UserCompanyScalarProperties> {
        name: 'userCompanies',
        _: UserCompanyProperties[]
    }



    export type PersonGenderPropertyNames = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'people'
    export type PersonGenderScalarProperties = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId';
    export type PersonGenderHasManyProperties = People
    export type PersonGenderProperties = PersonGenderScalarProperties | PersonGenderHasManyProperties

    export interface PersonGender extends GJupQueryNode<PersonGenderScalarProperties> {
        name: 'personGender',
        _: PersonGenderProperties[]
    }





    export type PersonCompanyPropertyNames = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'people' | 'companyId' | 'company'
    export type PersonCompanyScalarProperties = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type PersonCompanyBelongsToProperties = UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type PersonCompanyHasManyProperties = People
    export type PersonCompanyProperties = PersonCompanyScalarProperties | PersonCompanyBelongsToProperties | PersonCompanyHasManyProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface PersonCompany extends GJupQueryNode<PersonCompanyScalarProperties> {
        name: 'personCompany',
        _: PersonCompanyProperties[]
    }

    export interface PersonCompanies extends GJupQueryNode<PersonCompanyScalarProperties> {
        name: 'personCompanies',
        _: PersonCompanyProperties[]
    }



    export type JupUiLayoutPropertyNames = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'buildings' | 'jupRoleToJupUiLayouts'
    export type JupUiLayoutScalarProperties = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId';
    export type JupUiLayoutHasManyProperties = Buildings | JupRoleToJupUiLayouts
    export type JupUiLayoutProperties = JupUiLayoutScalarProperties | JupUiLayoutHasManyProperties

    export interface JupUiLayout extends GJupQueryNode<JupUiLayoutScalarProperties> {
        name: 'jupUiLayout',
        _: JupUiLayoutProperties[]
    }





    export type BuildingTypePropertyNames = 'id' | 'name' | 'code' | 'color' | 'createdAt' | 'updatedAt' | 'externalId' | 'companyId' | 'company' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'buildings'
    export type BuildingTypeScalarProperties = 'id' | 'name' | 'code' | 'color' | 'createdAt' | 'updatedAt' | 'externalId' | 'companyId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById';
    export type BuildingTypeBelongsToProperties = Company | UserCompanyCreatedBy | UserCompanyUpdatedBy;
    export type BuildingTypeHasManyProperties = Buildings
    export type BuildingTypeProperties = BuildingTypeScalarProperties | BuildingTypeBelongsToProperties | BuildingTypeHasManyProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface BuildingType extends GJupQueryNode<BuildingTypeScalarProperties> {
        name: 'buildingType',
        _: BuildingTypeProperties[]
    }

    export interface BuildingTypes extends GJupQueryNode<BuildingTypeScalarProperties> {
        name: 'buildingTypes',
        _: BuildingTypeProperties[]
    }



    export type OrganizationPropertyNames = 'id' | 'name' | 'code' | 'color' | 'createdAt' | 'updatedAt' | 'externalId' | 'organizationId' | 'organization' | 'organizations' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'rooms' | 'people' | 'workplaces' | 'organizationFloors' | 'organizationBuildings' | 'companyId' | 'company'
    export type OrganizationScalarProperties = 'id' | 'name' | 'code' | 'color' | 'createdAt' | 'updatedAt' | 'externalId' | 'organizationId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type OrganizationBelongsToProperties = Organization | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type OrganizationHasManyProperties = Organizations | Rooms | People | Workplaces | OrganizationFloors | OrganizationBuildings
    export type OrganizationProperties = OrganizationScalarProperties | OrganizationBelongsToProperties | OrganizationHasManyProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface Organization extends GJupQueryNode<OrganizationScalarProperties> {
        name: 'organization',
        _: OrganizationProperties[]
    }

    export interface Organizations extends GJupQueryNode<OrganizationScalarProperties> {
        name: 'organizations',
        _: OrganizationProperties[]
    }



    export type ItemTypeFamilyPropertyNames = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'itemTypes' | 'companyId' | 'company'
    export type ItemTypeFamilyScalarProperties = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type ItemTypeFamilyBelongsToProperties = UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type ItemTypeFamilyHasManyProperties = ItemTypes
    export type ItemTypeFamilyProperties = ItemTypeFamilyScalarProperties | ItemTypeFamilyBelongsToProperties | ItemTypeFamilyHasManyProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface ItemTypeFamily extends GJupQueryNode<ItemTypeFamilyScalarProperties> {
        name: 'itemTypeFamily',
        _: ItemTypeFamilyProperties[]
    }

    export interface ItemTypeFamilies extends GJupQueryNode<ItemTypeFamilyScalarProperties> {
        name: 'itemTypeFamilies',
        _: ItemTypeFamilyProperties[]
    }



    export type ManufacturerPropertyNames = 'id' | 'name' | 'website' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'itemTypes' | 'companyId' | 'company'
    export type ManufacturerScalarProperties = 'id' | 'name' | 'website' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type ManufacturerBelongsToProperties = UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type ManufacturerHasManyProperties = ItemTypes
    export type ManufacturerProperties = ManufacturerScalarProperties | ManufacturerBelongsToProperties | ManufacturerHasManyProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface Manufacturer extends GJupQueryNode<ManufacturerScalarProperties> {
        name: 'manufacturer',
        _: ManufacturerProperties[]
    }

    export interface Manufacturers extends GJupQueryNode<ManufacturerScalarProperties> {
        name: 'manufacturers',
        _: ManufacturerProperties[]
    }



    export type Object3dModelPropertyNames = 'id' | 'name' | 'type' | 'rotation' | 'origin' | 'model' | 'createdAt' | 'updatedAt' | 'externalId' | 'itemTypes'
    export type Object3dModelScalarProperties = 'id' | 'name' | 'type' | 'rotation' | 'origin' | 'model' | 'createdAt' | 'updatedAt' | 'externalId';
    export type Object3dModelHasManyProperties = ItemTypes
    export type Object3dModelProperties = Object3dModelScalarProperties | Object3dModelHasManyProperties

    export interface Object3dModel extends GJupQueryNode<Object3dModelScalarProperties> {
        name: 'object3dModel',
        _: Object3dModelProperties[]
    }





    export type ItemTypePropertyNames = 'id' | 'name' | 'picture' | 'displayItemReferenceInMap' | 'code' | 'icon' | 'color' | 'height' | 'zIndex' | 'description' | 'price' | 'seatsCount' | 'carbonFootprint' | 'iconShape' | 'iconBackgroundColor' | 'iconBorderColor' | 'createdAt' | 'updatedAt' | 'externalId' | 'itemTypeFamilyId' | 'itemTypeFamily' | 'manufacturerId' | 'manufacturer' | 'object3dModelId' | 'object3dModel' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'itemTypePoints' | 'workplaceTypeItemTypes' | 'items' | 'companyId' | 'company'
    export type ItemTypeScalarProperties = 'id' | 'name' | 'picture' | 'displayItemReferenceInMap' | 'code' | 'icon' | 'color' | 'height' | 'zIndex' | 'description' | 'price' | 'seatsCount' | 'carbonFootprint' | 'iconShape' | 'iconBackgroundColor' | 'iconBorderColor' | 'createdAt' | 'updatedAt' | 'externalId' | 'itemTypeFamilyId' | 'manufacturerId' | 'object3dModelId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type ItemTypeBelongsToProperties = ItemTypeFamily | Manufacturer | Object3dModel | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type ItemTypeHasManyProperties = ItemTypePoints | WorkplaceTypeItemTypes | Items
    export type ItemTypeProperties = ItemTypeScalarProperties | ItemTypeBelongsToProperties | ItemTypeHasManyProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface ItemType extends GJupQueryNode<ItemTypeScalarProperties> {
        name: 'itemType',
        _: ItemTypeProperties[]
    }

    export interface ItemTypes extends GJupQueryNode<ItemTypeScalarProperties> {
        name: 'itemTypes',
        _: ItemTypeProperties[]
    }



    export type BuildingPropertyNames = 'id' | 'name' | 'color' | 'surface' | 'leaseStartDate' | 'leaseEndDate' | 'purchaseDate' | 'documents' | 'picture' | 'regulatoryCapacity' | 'parkingSpaceCount' | 'constructionYear' | 'yearlyCondominiumFees' | 'yearlyRent' | 'yearlyParkingRent' | 'yearlyTaxFees' | 'yearlyExploitationFees' | 'rentReferenceIndex' | 'securityDeposit' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'dimensionPeopleCount' | 'address' | 'createdAt' | 'updatedAt' | 'externalId' | 'companyId' | 'company' | 'buildingTypeId' | 'buildingType' | 'userCompanyOwnerId' | 'userCompanyOwner' | 'jupUiLayoutId' | 'jupUiLayout' | 'buildingId' | 'building' | 'buildings' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'floors' | 'costCenterBuildings' | 'dimensionBuildings' | 'facts' | 'organizationBuildings' | 'roomTypeBuildings' | 'personToBuildings' | 'dimensionTypeToBuildings' | 'contentRoleToBuildings'
    export type BuildingScalarProperties = 'id' | 'name' | 'color' | 'surface' | 'leaseStartDate' | 'leaseEndDate' | 'purchaseDate' | 'documents' | 'picture' | 'regulatoryCapacity' | 'parkingSpaceCount' | 'constructionYear' | 'yearlyCondominiumFees' | 'yearlyRent' | 'yearlyParkingRent' | 'yearlyTaxFees' | 'yearlyExploitationFees' | 'rentReferenceIndex' | 'securityDeposit' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'dimensionPeopleCount' | 'address' | 'createdAt' | 'updatedAt' | 'externalId' | 'companyId' | 'buildingTypeId' | 'userCompanyOwnerId' | 'jupUiLayoutId' | 'buildingId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById';
    export type BuildingBelongsToProperties = Company | BuildingType | UserCompanyOwner | JupUiLayout | Building | UserCompanyCreatedBy | UserCompanyUpdatedBy;
    export type BuildingHasManyProperties = Buildings | Floors | CostCenterBuildings | DimensionBuildings | Facts | OrganizationBuildings | RoomTypeBuildings | PersonToBuildings | DimensionTypeToBuildings | ContentRoleToBuildings
    export type BuildingProperties = BuildingScalarProperties | BuildingBelongsToProperties | BuildingHasManyProperties
    export interface UserCompanyOwner {
        name: 'userCompanyOwner',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface Building extends GJupQueryNode<BuildingScalarProperties> {
        name: 'building',
        _: BuildingProperties[]
    }

    export interface Buildings extends GJupQueryNode<BuildingScalarProperties> {
        name: 'buildings',
        _: BuildingProperties[]
    }



    export type MapScalePropertyNames = 'id' | 'name' | 'p1' | 'p2' | 'length' | 'ratio' | 'strokeWidth' | 'roomTextSize' | 'workplaceTextSize' | 'segmentDistanceTextSize' | 'itemTypeIconSize' | 'roomIconSize' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'floors' | 'companyId' | 'company'
    export type MapScaleScalarProperties = 'id' | 'name' | 'p1' | 'p2' | 'length' | 'ratio' | 'strokeWidth' | 'roomTextSize' | 'workplaceTextSize' | 'segmentDistanceTextSize' | 'itemTypeIconSize' | 'roomIconSize' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type MapScaleBelongsToProperties = UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type MapScaleHasManyProperties = Floors
    export type MapScaleProperties = MapScaleScalarProperties | MapScaleBelongsToProperties | MapScaleHasManyProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface MapScale extends GJupQueryNode<MapScaleScalarProperties> {
        name: 'mapScale',
        _: MapScaleProperties[]
    }

    export interface MapScales extends GJupQueryNode<MapScaleScalarProperties> {
        name: 'mapScales',
        _: MapScaleProperties[]
    }



    export type StructurePropertyNames = 'id' | 'name' | 'transform' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'structurePoints' | 'floors' | 'companyId' | 'company'
    export type StructureScalarProperties = 'id' | 'name' | 'transform' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type StructureBelongsToProperties = UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type StructureHasManyProperties = StructurePoints | Floors
    export type StructureProperties = StructureScalarProperties | StructureBelongsToProperties | StructureHasManyProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface Structure extends GJupQueryNode<StructureScalarProperties> {
        name: 'structure',
        _: StructureProperties[]
    }

    export interface Structures extends GJupQueryNode<StructureScalarProperties> {
        name: 'structures',
        _: StructureProperties[]
    }



    export type StructurePointPropertyNames = 'id' | 'x' | 'y' | 'sortIndex' | 'createdAt' | 'updatedAt' | 'externalId' | 'structureId' | 'structure' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type StructurePointScalarProperties = 'id' | 'x' | 'y' | 'sortIndex' | 'createdAt' | 'updatedAt' | 'externalId' | 'structureId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type StructurePointBelongsToProperties = Structure | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type StructurePointProperties = StructurePointScalarProperties | StructurePointBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface StructurePoint extends GJupQueryNode<StructurePointScalarProperties> {
        name: 'structurePoint',
        _: StructurePointProperties[]
    }

    export interface StructurePoints extends GJupQueryNode<StructurePointScalarProperties> {
        name: 'structurePoints',
        _: StructurePointProperties[]
    }



    export type FloorPropertyNames = 'id' | 'name' | 'level' | 'height' | 'regulatoryCapacity' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'backgroundLayout' | 'backgroundLayoutOpacity' | 'createdAt' | 'updatedAt' | 'externalId' | 'buildingId' | 'building' | 'mapScaleId' | 'mapScale' | 'structureId' | 'structure' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'costCenterFloors' | 'rooms' | 'roomPoints' | 'dimensionFloors' | 'organizationFloors' | 'roomTypeFloors' | 'contentRoleToFloors' | 'partnerExportMappingConfigurationToFloors' | 'companyId' | 'company'
    export type FloorScalarProperties = 'id' | 'name' | 'level' | 'height' | 'regulatoryCapacity' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'backgroundLayout' | 'backgroundLayoutOpacity' | 'createdAt' | 'updatedAt' | 'externalId' | 'buildingId' | 'mapScaleId' | 'structureId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type FloorBelongsToProperties = Building | MapScale | Structure | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type FloorHasManyProperties = CostCenterFloors | Rooms | RoomPoints | DimensionFloors | OrganizationFloors | RoomTypeFloors | ContentRoleToFloors | PartnerExportMappingConfigurationToFloors
    export type FloorProperties = FloorScalarProperties | FloorBelongsToProperties | FloorHasManyProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface Floor extends GJupQueryNode<FloorScalarProperties> {
        name: 'floor',
        _: FloorProperties[]
    }

    export interface Floors extends GJupQueryNode<FloorScalarProperties> {
        name: 'floors',
        _: FloorProperties[]
    }



    export type DistributionCostTypePropertyNames = 'id' | 'name' | 'code' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'roomTypes' | 'rooms' | 'companyId' | 'company'
    export type DistributionCostTypeScalarProperties = 'id' | 'name' | 'code' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type DistributionCostTypeBelongsToProperties = UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type DistributionCostTypeHasManyProperties = RoomTypes | Rooms
    export type DistributionCostTypeProperties = DistributionCostTypeScalarProperties | DistributionCostTypeBelongsToProperties | DistributionCostTypeHasManyProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface DistributionCostType extends GJupQueryNode<DistributionCostTypeScalarProperties> {
        name: 'distributionCostType',
        _: DistributionCostTypeProperties[]
    }

    export interface DistributionCostTypes extends GJupQueryNode<DistributionCostTypeScalarProperties> {
        name: 'distributionCostTypes',
        _: DistributionCostTypeProperties[]
    }



    export type RoomTypePropertyNames = 'id' | 'name' | 'color' | 'icon' | 'color3d' | 'displayWallsOn3d' | 'cadence' | 'isBookable' | 'createdAt' | 'updatedAt' | 'externalId' | 'distributionCostTypeId' | 'distributionCostType' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'rooms' | 'roomTypeFloors' | 'roomTypeBuildings' | 'partnerExportMappingToRoomTypes' | 'companyId' | 'company'
    export type RoomTypeScalarProperties = 'id' | 'name' | 'color' | 'icon' | 'color3d' | 'displayWallsOn3d' | 'cadence' | 'isBookable' | 'createdAt' | 'updatedAt' | 'externalId' | 'distributionCostTypeId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type RoomTypeBelongsToProperties = DistributionCostType | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type RoomTypeHasManyProperties = Rooms | RoomTypeFloors | RoomTypeBuildings | PartnerExportMappingToRoomTypes
    export type RoomTypeProperties = RoomTypeScalarProperties | RoomTypeBelongsToProperties | RoomTypeHasManyProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface RoomType extends GJupQueryNode<RoomTypeScalarProperties> {
        name: 'roomType',
        _: RoomTypeProperties[]
    }

    export interface RoomTypes extends GJupQueryNode<RoomTypeScalarProperties> {
        name: 'roomTypes',
        _: RoomTypeProperties[]
    }



    export type CostCenterPropertyNames = 'id' | 'name' | 'color' | 'info' | 'distributeByFloor' | 'distributeByBuilding' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'costCenterBuildings' | 'costCenterFloors' | 'rooms' | 'people' | 'workplaces' | 'companyId' | 'company'
    export type CostCenterScalarProperties = 'id' | 'name' | 'color' | 'info' | 'distributeByFloor' | 'distributeByBuilding' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type CostCenterBelongsToProperties = UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type CostCenterHasManyProperties = CostCenterBuildings | CostCenterFloors | Rooms | People | Workplaces
    export type CostCenterProperties = CostCenterScalarProperties | CostCenterBelongsToProperties | CostCenterHasManyProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface CostCenter extends GJupQueryNode<CostCenterScalarProperties> {
        name: 'costCenter',
        _: CostCenterProperties[]
    }

    export interface CostCenters extends GJupQueryNode<CostCenterScalarProperties> {
        name: 'costCenters',
        _: CostCenterProperties[]
    }



    export type CostCenterBuildingPropertyNames = 'id' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'createdAt' | 'updatedAt' | 'externalId' | 'costCenterId' | 'costCenter' | 'buildingId' | 'building' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type CostCenterBuildingScalarProperties = 'id' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'createdAt' | 'updatedAt' | 'externalId' | 'costCenterId' | 'buildingId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type CostCenterBuildingBelongsToProperties = CostCenter | Building | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type CostCenterBuildingProperties = CostCenterBuildingScalarProperties | CostCenterBuildingBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface CostCenterBuilding extends GJupQueryNode<CostCenterBuildingScalarProperties> {
        name: 'costCenterBuilding',
        _: CostCenterBuildingProperties[]
    }

    export interface CostCenterBuildings extends GJupQueryNode<CostCenterBuildingScalarProperties> {
        name: 'costCenterBuildings',
        _: CostCenterBuildingProperties[]
    }



    export type CostCenterFloorPropertyNames = 'id' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'createdAt' | 'updatedAt' | 'externalId' | 'costCenterId' | 'costCenter' | 'floorId' | 'floor' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type CostCenterFloorScalarProperties = 'id' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'createdAt' | 'updatedAt' | 'externalId' | 'costCenterId' | 'floorId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type CostCenterFloorBelongsToProperties = CostCenter | Floor | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type CostCenterFloorProperties = CostCenterFloorScalarProperties | CostCenterFloorBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface CostCenterFloor extends GJupQueryNode<CostCenterFloorScalarProperties> {
        name: 'costCenterFloor',
        _: CostCenterFloorProperties[]
    }

    export interface CostCenterFloors extends GJupQueryNode<CostCenterFloorScalarProperties> {
        name: 'costCenterFloors',
        _: CostCenterFloorProperties[]
    }



    export type RoomPropertyNames = 'id' | 'name' | 'area' | 'perimeter' | 'textAnchor' | 'capacity' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'info' | 'bookingEmail' | 'externalId2' | 'picture' | 'keyCylinderCode' | 'livePeopleCount' | 'createdAt' | 'updatedAt' | 'externalId' | 'floorId' | 'floor' | 'occupancyStatusId' | 'occupancyStatus' | 'roomTypeId' | 'roomType' | 'organizationId' | 'organization' | 'costCenterId' | 'costCenter' | 'distributionCostTypeId' | 'distributionCostType' | 'roomConnectorId' | 'roomConnector' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'roomPointRooms' | 'dimensionRooms' | 'roomAffectations' | 'workplaces' | 'items' | 'companyId' | 'company'
    export type RoomScalarProperties = 'id' | 'name' | 'area' | 'perimeter' | 'textAnchor' | 'capacity' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'info' | 'bookingEmail' | 'externalId2' | 'picture' | 'keyCylinderCode' | 'livePeopleCount' | 'createdAt' | 'updatedAt' | 'externalId' | 'floorId' | 'occupancyStatusId' | 'roomTypeId' | 'organizationId' | 'costCenterId' | 'distributionCostTypeId' | 'roomConnectorId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type RoomBelongsToProperties = Floor | OccupancyStatus | RoomType | Organization | CostCenter | DistributionCostType | RoomConnector | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type RoomHasManyProperties = RoomPointRooms | DimensionRooms | RoomAffectations | Workplaces | Items
    export type RoomProperties = RoomScalarProperties | RoomBelongsToProperties | RoomHasManyProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface Room extends GJupQueryNode<RoomScalarProperties> {
        name: 'room',
        _: RoomProperties[]
    }

    export interface Rooms extends GJupQueryNode<RoomScalarProperties> {
        name: 'rooms',
        _: RoomProperties[]
    }



    export type RoomPointPropertyNames = 'id' | 'x' | 'y' | 'createdAt' | 'updatedAt' | 'externalId' | 'floorId' | 'floor' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'roomPointRooms' | 'roomPointSegmentStarts' | 'roomPointSegmentEnds' | 'companyId' | 'company'
    export type RoomPointScalarProperties = 'id' | 'x' | 'y' | 'createdAt' | 'updatedAt' | 'externalId' | 'floorId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type RoomPointBelongsToProperties = Floor | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type RoomPointHasManyProperties = RoomPointRooms | RoomPointSegmentStarts | RoomPointSegmentEnds
    export type RoomPointProperties = RoomPointScalarProperties | RoomPointBelongsToProperties | RoomPointHasManyProperties
    export interface RoomPointSegmentStarts {
        name: 'roomPointSegmentStarts',
        _: RoomPointSegmentProperties[]
    }
    export interface RoomPointSegmentEnds {
        name: 'roomPointSegmentEnds',
        _: RoomPointSegmentProperties[]
    }
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface RoomPoint extends GJupQueryNode<RoomPointScalarProperties> {
        name: 'roomPoint',
        _: RoomPointProperties[]
    }

    export interface RoomPoints extends GJupQueryNode<RoomPointScalarProperties> {
        name: 'roomPoints',
        _: RoomPointProperties[]
    }



    export type RoomPointRoomPropertyNames = 'id' | 'sortIndex' | 'createdAt' | 'updatedAt' | 'externalId' | 'roomId' | 'room' | 'roomPointId' | 'roomPoint' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type RoomPointRoomScalarProperties = 'id' | 'sortIndex' | 'createdAt' | 'updatedAt' | 'externalId' | 'roomId' | 'roomPointId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type RoomPointRoomBelongsToProperties = Room | RoomPoint | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type RoomPointRoomProperties = RoomPointRoomScalarProperties | RoomPointRoomBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface RoomPointRoom extends GJupQueryNode<RoomPointRoomScalarProperties> {
        name: 'roomPointRoom',
        _: RoomPointRoomProperties[]
    }

    export interface RoomPointRooms extends GJupQueryNode<RoomPointRoomScalarProperties> {
        name: 'roomPointRooms',
        _: RoomPointRoomProperties[]
    }



    export type RoomPointSegmentTypePropertyNames = 'id' | 'name' | 'code' | 'createdAt' | 'updatedAt' | 'externalId' | 'roomPointSegments'
    export type RoomPointSegmentTypeScalarProperties = 'id' | 'name' | 'code' | 'createdAt' | 'updatedAt' | 'externalId';
    export type RoomPointSegmentTypeHasManyProperties = RoomPointSegments
    export type RoomPointSegmentTypeProperties = RoomPointSegmentTypeScalarProperties | RoomPointSegmentTypeHasManyProperties

    export interface RoomPointSegmentType extends GJupQueryNode<RoomPointSegmentTypeScalarProperties> {
        name: 'roomPointSegmentType',
        _: RoomPointSegmentTypeProperties[]
    }





    export type RoomPointSegmentPropertyNames = 'id' | 'reversePoints' | 'displayBothSides' | 'createdAt' | 'updatedAt' | 'externalId' | 'roomPointSegmentTypeId' | 'roomPointSegmentType' | 'roomPointStartId' | 'roomPointStart' | 'roomPointEndId' | 'roomPointEnd' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type RoomPointSegmentScalarProperties = 'id' | 'reversePoints' | 'displayBothSides' | 'createdAt' | 'updatedAt' | 'externalId' | 'roomPointSegmentTypeId' | 'roomPointStartId' | 'roomPointEndId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type RoomPointSegmentBelongsToProperties = RoomPointSegmentType | RoomPointStart | RoomPointEnd | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type RoomPointSegmentProperties = RoomPointSegmentScalarProperties | RoomPointSegmentBelongsToProperties
    export interface RoomPointStart {
        name: 'roomPointStart',
        _: RoomPointProperties[]
    }
    export interface RoomPointEnd {
        name: 'roomPointEnd',
        _: RoomPointProperties[]
    }
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface RoomPointSegment extends GJupQueryNode<RoomPointSegmentScalarProperties> {
        name: 'roomPointSegment',
        _: RoomPointSegmentProperties[]
    }

    export interface RoomPointSegments extends GJupQueryNode<RoomPointSegmentScalarProperties> {
        name: 'roomPointSegments',
        _: RoomPointSegmentProperties[]
    }



    export type ItemTypePointPropertyNames = 'id' | 'x' | 'y' | 'sortIndex' | 'createdAt' | 'updatedAt' | 'externalId' | 'itemTypeId' | 'itemType' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type ItemTypePointScalarProperties = 'id' | 'x' | 'y' | 'sortIndex' | 'createdAt' | 'updatedAt' | 'externalId' | 'itemTypeId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type ItemTypePointBelongsToProperties = ItemType | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type ItemTypePointProperties = ItemTypePointScalarProperties | ItemTypePointBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface ItemTypePoint extends GJupQueryNode<ItemTypePointScalarProperties> {
        name: 'itemTypePoint',
        _: ItemTypePointProperties[]
    }

    export interface ItemTypePoints extends GJupQueryNode<ItemTypePointScalarProperties> {
        name: 'itemTypePoints',
        _: ItemTypePointProperties[]
    }



    export type DimensionTypePropertyNames = 'id' | 'name' | 'code' | 'order' | 'description' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'dimensions' | 'dimensionRooms' | 'dimensionFloors' | 'dimensionBuildings' | 'dimensionTypeToBuildings' | 'companyId' | 'company'
    export type DimensionTypeScalarProperties = 'id' | 'name' | 'code' | 'order' | 'description' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type DimensionTypeBelongsToProperties = UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type DimensionTypeHasManyProperties = Dimensions | DimensionRooms | DimensionFloors | DimensionBuildings | DimensionTypeToBuildings
    export type DimensionTypeProperties = DimensionTypeScalarProperties | DimensionTypeBelongsToProperties | DimensionTypeHasManyProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface DimensionType extends GJupQueryNode<DimensionTypeScalarProperties> {
        name: 'dimensionType',
        _: DimensionTypeProperties[]
    }

    export interface DimensionTypes extends GJupQueryNode<DimensionTypeScalarProperties> {
        name: 'dimensionTypes',
        _: DimensionTypeProperties[]
    }



    export type DimensionPropertyNames = 'id' | 'name' | 'color' | 'value' | 'peopleCount' | 'carbonFootprintPerMeter' | 'createdAt' | 'updatedAt' | 'externalId' | 'dimensionTypeId' | 'dimensionType' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'dimensionRooms' | 'dimensionFloors' | 'dimensionBuildings' | 'dimensionToPeople' | 'companyId' | 'company'
    export type DimensionScalarProperties = 'id' | 'name' | 'color' | 'value' | 'peopleCount' | 'carbonFootprintPerMeter' | 'createdAt' | 'updatedAt' | 'externalId' | 'dimensionTypeId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type DimensionBelongsToProperties = DimensionType | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type DimensionHasManyProperties = DimensionRooms | DimensionFloors | DimensionBuildings | DimensionToPeople
    export type DimensionProperties = DimensionScalarProperties | DimensionBelongsToProperties | DimensionHasManyProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface Dimension extends GJupQueryNode<DimensionScalarProperties> {
        name: 'dimension',
        _: DimensionProperties[]
    }

    export interface Dimensions extends GJupQueryNode<DimensionScalarProperties> {
        name: 'dimensions',
        _: DimensionProperties[]
    }



    export type DimensionRoomPropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'dimensionId' | 'dimension' | 'roomId' | 'room' | 'dimensionTypeId' | 'dimensionType' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type DimensionRoomScalarProperties = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'dimensionId' | 'roomId' | 'dimensionTypeId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type DimensionRoomBelongsToProperties = Dimension | Room | DimensionType | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type DimensionRoomProperties = DimensionRoomScalarProperties | DimensionRoomBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface DimensionRoom extends GJupQueryNode<DimensionRoomScalarProperties> {
        name: 'dimensionRoom',
        _: DimensionRoomProperties[]
    }

    export interface DimensionRooms extends GJupQueryNode<DimensionRoomScalarProperties> {
        name: 'dimensionRooms',
        _: DimensionRoomProperties[]
    }



    export type DimensionFloorPropertyNames = 'id' | 'dimensionPeopleCount' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'createdAt' | 'updatedAt' | 'externalId' | 'dimensionId' | 'dimension' | 'dimensionTypeId' | 'dimensionType' | 'floorId' | 'floor' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type DimensionFloorScalarProperties = 'id' | 'dimensionPeopleCount' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'createdAt' | 'updatedAt' | 'externalId' | 'dimensionId' | 'dimensionTypeId' | 'floorId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type DimensionFloorBelongsToProperties = Dimension | DimensionType | Floor | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type DimensionFloorProperties = DimensionFloorScalarProperties | DimensionFloorBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface DimensionFloor extends GJupQueryNode<DimensionFloorScalarProperties> {
        name: 'dimensionFloor',
        _: DimensionFloorProperties[]
    }

    export interface DimensionFloors extends GJupQueryNode<DimensionFloorScalarProperties> {
        name: 'dimensionFloors',
        _: DimensionFloorProperties[]
    }



    export type DimensionBuildingPropertyNames = 'id' | 'dimensionPeopleCount' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'createdAt' | 'updatedAt' | 'externalId' | 'dimensionId' | 'dimension' | 'dimensionTypeId' | 'dimensionType' | 'buildingId' | 'building' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type DimensionBuildingScalarProperties = 'id' | 'dimensionPeopleCount' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'createdAt' | 'updatedAt' | 'externalId' | 'dimensionId' | 'dimensionTypeId' | 'buildingId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type DimensionBuildingBelongsToProperties = Dimension | DimensionType | Building | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type DimensionBuildingProperties = DimensionBuildingScalarProperties | DimensionBuildingBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface DimensionBuilding extends GJupQueryNode<DimensionBuildingScalarProperties> {
        name: 'dimensionBuilding',
        _: DimensionBuildingProperties[]
    }

    export interface DimensionBuildings extends GJupQueryNode<DimensionBuildingScalarProperties> {
        name: 'dimensionBuildings',
        _: DimensionBuildingProperties[]
    }



    export type FactTypePropertyNames = 'id' | 'name' | 'code' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'facts' | 'companyId' | 'company'
    export type FactTypeScalarProperties = 'id' | 'name' | 'code' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type FactTypeBelongsToProperties = UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type FactTypeHasManyProperties = Facts
    export type FactTypeProperties = FactTypeScalarProperties | FactTypeBelongsToProperties | FactTypeHasManyProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface FactType extends GJupQueryNode<FactTypeScalarProperties> {
        name: 'factType',
        _: FactTypeProperties[]
    }

    export interface FactTypes extends GJupQueryNode<FactTypeScalarProperties> {
        name: 'factTypes',
        _: FactTypeProperties[]
    }



    export type FactPropertyNames = 'id' | 'value' | 'date' | 'createdAt' | 'updatedAt' | 'externalId' | 'factTypeId' | 'factType' | 'buildingId' | 'building' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type FactScalarProperties = 'id' | 'value' | 'date' | 'createdAt' | 'updatedAt' | 'externalId' | 'factTypeId' | 'buildingId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type FactBelongsToProperties = FactType | Building | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type FactProperties = FactScalarProperties | FactBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface Fact extends GJupQueryNode<FactScalarProperties> {
        name: 'fact',
        _: FactProperties[]
    }

    export interface Facts extends GJupQueryNode<FactScalarProperties> {
        name: 'facts',
        _: FactProperties[]
    }



    export type PersonStatePropertyNames = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'people' | 'companyId' | 'company'
    export type PersonStateScalarProperties = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type PersonStateBelongsToProperties = UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type PersonStateHasManyProperties = People
    export type PersonStateProperties = PersonStateScalarProperties | PersonStateBelongsToProperties | PersonStateHasManyProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface PersonState extends GJupQueryNode<PersonStateScalarProperties> {
        name: 'personState',
        _: PersonStateProperties[]
    }

    export interface PersonStates extends GJupQueryNode<PersonStateScalarProperties> {
        name: 'personStates',
        _: PersonStateProperties[]
    }



    export type PersonSecurityProfilePropertyNames = 'id' | 'name' | 'color' | 'icon' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'people' | 'companyId' | 'company'
    export type PersonSecurityProfileScalarProperties = 'id' | 'name' | 'color' | 'icon' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type PersonSecurityProfileBelongsToProperties = UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type PersonSecurityProfileHasManyProperties = People
    export type PersonSecurityProfileProperties = PersonSecurityProfileScalarProperties | PersonSecurityProfileBelongsToProperties | PersonSecurityProfileHasManyProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface PersonSecurityProfile extends GJupQueryNode<PersonSecurityProfileScalarProperties> {
        name: 'personSecurityProfile',
        _: PersonSecurityProfileProperties[]
    }

    export interface PersonSecurityProfiles extends GJupQueryNode<PersonSecurityProfileScalarProperties> {
        name: 'personSecurityProfiles',
        _: PersonSecurityProfileProperties[]
    }



    export type PersonPropertyNames = 'id' | 'firstname' | 'lastname' | 'fullname' | 'email' | 'picture' | 'title' | 'monitorReference' | 'computerReference' | 'telephone' | 'cellphone' | 'code' | 'badgeNumber' | 'badgeRestaurant' | 'boxNumber' | 'registrationNumber' | 'startDate' | 'endDate' | 'info' | 'notAffectable' | 'createdAt' | 'updatedAt' | 'externalId' | 'organizationId' | 'organization' | 'personStateId' | 'personState' | 'personSecurityProfileId' | 'personSecurityProfile' | 'costCenterId' | 'costCenter' | 'personCompanyId' | 'personCompany' | 'personGenderId' | 'personGender' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'personToPersonSources' | 'personToPersonTargets' | 'roomAffectations' | 'workplaceAffectations' | 'itemToPeople' | 'personToBuildings' | 'dimensionToPeople' | 'companyId' | 'company'
    export type PersonScalarProperties = 'id' | 'firstname' | 'lastname' | 'fullname' | 'email' | 'picture' | 'title' | 'monitorReference' | 'computerReference' | 'telephone' | 'cellphone' | 'code' | 'badgeNumber' | 'badgeRestaurant' | 'boxNumber' | 'registrationNumber' | 'startDate' | 'endDate' | 'info' | 'notAffectable' | 'createdAt' | 'updatedAt' | 'externalId' | 'organizationId' | 'personStateId' | 'personSecurityProfileId' | 'costCenterId' | 'personCompanyId' | 'personGenderId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type PersonBelongsToProperties = Organization | PersonState | PersonSecurityProfile | CostCenter | PersonCompany | PersonGender | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type PersonHasManyProperties = PersonToPersonSources | PersonToPersonTargets | RoomAffectations | WorkplaceAffectations | ItemToPeople | PersonToBuildings | DimensionToPeople
    export type PersonProperties = PersonScalarProperties | PersonBelongsToProperties | PersonHasManyProperties
    export interface PersonToPersonSources {
        name: 'personToPersonSources',
        _: PersonToPersonProperties[]
    }
    export interface PersonToPersonTargets {
        name: 'personToPersonTargets',
        _: PersonToPersonProperties[]
    }
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface Person extends GJupQueryNode<PersonScalarProperties> {
        name: 'person',
        _: PersonProperties[]
    }

    export interface People extends GJupQueryNode<PersonScalarProperties> {
        name: 'people',
        _: PersonProperties[]
    }



    export type PersonToPersonTypePropertyNames = 'id' | 'labelForward' | 'labelBackward' | 'code' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'personToPeople' | 'companyId' | 'company'
    export type PersonToPersonTypeScalarProperties = 'id' | 'labelForward' | 'labelBackward' | 'code' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type PersonToPersonTypeBelongsToProperties = UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type PersonToPersonTypeHasManyProperties = PersonToPeople
    export type PersonToPersonTypeProperties = PersonToPersonTypeScalarProperties | PersonToPersonTypeBelongsToProperties | PersonToPersonTypeHasManyProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface PersonToPersonType extends GJupQueryNode<PersonToPersonTypeScalarProperties> {
        name: 'personToPersonType',
        _: PersonToPersonTypeProperties[]
    }

    export interface PersonToPersonTypes extends GJupQueryNode<PersonToPersonTypeScalarProperties> {
        name: 'personToPersonTypes',
        _: PersonToPersonTypeProperties[]
    }



    export type PersonToPersonPropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'personToPersonTypeId' | 'personToPersonType' | 'personSourceId' | 'personSource' | 'personTargetId' | 'personTarget' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type PersonToPersonScalarProperties = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'personToPersonTypeId' | 'personSourceId' | 'personTargetId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type PersonToPersonBelongsToProperties = PersonToPersonType | PersonSource | PersonTarget | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type PersonToPersonProperties = PersonToPersonScalarProperties | PersonToPersonBelongsToProperties
    export interface PersonSource {
        name: 'personSource',
        _: PersonProperties[]
    }
    export interface PersonTarget {
        name: 'personTarget',
        _: PersonProperties[]
    }
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface PersonToPerson extends GJupQueryNode<PersonToPersonScalarProperties> {
        name: 'personToPerson',
        _: PersonToPersonProperties[]
    }

    export interface PersonToPeople extends GJupQueryNode<PersonToPersonScalarProperties> {
        name: 'personToPeople',
        _: PersonToPersonProperties[]
    }



    export type RoomAffectationPropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'personId' | 'person' | 'roomId' | 'room' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type RoomAffectationScalarProperties = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'personId' | 'roomId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type RoomAffectationBelongsToProperties = Person | Room | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type RoomAffectationProperties = RoomAffectationScalarProperties | RoomAffectationBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface RoomAffectation extends GJupQueryNode<RoomAffectationScalarProperties> {
        name: 'roomAffectation',
        _: RoomAffectationProperties[]
    }

    export interface RoomAffectations extends GJupQueryNode<RoomAffectationScalarProperties> {
        name: 'roomAffectations',
        _: RoomAffectationProperties[]
    }



    export type WorkplaceTypePropertyNames = 'id' | 'name' | 'zIndex' | 'color' | 'center' | 'size' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'workplaceTypeItemTypes' | 'workplaces' | 'companyId' | 'company'
    export type WorkplaceTypeScalarProperties = 'id' | 'name' | 'zIndex' | 'color' | 'center' | 'size' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type WorkplaceTypeBelongsToProperties = UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type WorkplaceTypeHasManyProperties = WorkplaceTypeItemTypes | Workplaces
    export type WorkplaceTypeProperties = WorkplaceTypeScalarProperties | WorkplaceTypeBelongsToProperties | WorkplaceTypeHasManyProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface WorkplaceType extends GJupQueryNode<WorkplaceTypeScalarProperties> {
        name: 'workplaceType',
        _: WorkplaceTypeProperties[]
    }

    export interface WorkplaceTypes extends GJupQueryNode<WorkplaceTypeScalarProperties> {
        name: 'workplaceTypes',
        _: WorkplaceTypeProperties[]
    }



    export type WorkplaceTypeItemTypePropertyNames = 'id' | 'position' | 'physicalInventory' | 'rotation' | 'zIndex' | 'seatsCount' | 'createdAt' | 'updatedAt' | 'externalId' | 'workplaceTypeId' | 'workplaceType' | 'itemTypeId' | 'itemType' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type WorkplaceTypeItemTypeScalarProperties = 'id' | 'position' | 'physicalInventory' | 'rotation' | 'zIndex' | 'seatsCount' | 'createdAt' | 'updatedAt' | 'externalId' | 'workplaceTypeId' | 'itemTypeId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type WorkplaceTypeItemTypeBelongsToProperties = WorkplaceType | ItemType | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type WorkplaceTypeItemTypeProperties = WorkplaceTypeItemTypeScalarProperties | WorkplaceTypeItemTypeBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface WorkplaceTypeItemType extends GJupQueryNode<WorkplaceTypeItemTypeScalarProperties> {
        name: 'workplaceTypeItemType',
        _: WorkplaceTypeItemTypeProperties[]
    }

    export interface WorkplaceTypeItemTypes extends GJupQueryNode<WorkplaceTypeItemTypeScalarProperties> {
        name: 'workplaceTypeItemTypes',
        _: WorkplaceTypeItemTypeProperties[]
    }



    export type WorkplacePropertyNames = 'id' | 'position' | 'rotation' | 'isFlex' | 'isTransit' | 'isShared' | 'textAnchor' | 'name' | 'workplaceAffectationsCalculatedRateSum' | 'workplaceAffectationsCount' | 'comment' | 'createdAt' | 'updatedAt' | 'externalId' | 'workplaceTypeId' | 'workplaceType' | 'roomId' | 'room' | 'organizationId' | 'organization' | 'costCenterId' | 'costCenter' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'items' | 'workplaceAffectations' | 'companyId' | 'company'
    export type WorkplaceScalarProperties = 'id' | 'position' | 'rotation' | 'isFlex' | 'isTransit' | 'isShared' | 'textAnchor' | 'name' | 'workplaceAffectationsCalculatedRateSum' | 'workplaceAffectationsCount' | 'comment' | 'createdAt' | 'updatedAt' | 'externalId' | 'workplaceTypeId' | 'roomId' | 'organizationId' | 'costCenterId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type WorkplaceBelongsToProperties = WorkplaceType | Room | Organization | CostCenter | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type WorkplaceHasManyProperties = Items | WorkplaceAffectations
    export type WorkplaceProperties = WorkplaceScalarProperties | WorkplaceBelongsToProperties | WorkplaceHasManyProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface Workplace extends GJupQueryNode<WorkplaceScalarProperties> {
        name: 'workplace',
        _: WorkplaceProperties[]
    }

    export interface Workplaces extends GJupQueryNode<WorkplaceScalarProperties> {
        name: 'workplaces',
        _: WorkplaceProperties[]
    }



    export type ItemPropertyNames = 'id' | 'code' | 'reference' | 'purchaseDate' | 'position' | 'rotation' | 'textAnchor' | 'createdAt' | 'updatedAt' | 'externalId' | 'itemTypeId' | 'itemType' | 'roomId' | 'room' | 'workplaceId' | 'workplace' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'itemToPeople' | 'itemFacts' | 'companyId' | 'company'
    export type ItemScalarProperties = 'id' | 'code' | 'reference' | 'purchaseDate' | 'position' | 'rotation' | 'textAnchor' | 'createdAt' | 'updatedAt' | 'externalId' | 'itemTypeId' | 'roomId' | 'workplaceId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type ItemBelongsToProperties = ItemType | Room | Workplace | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type ItemHasManyProperties = ItemToPeople | ItemFacts
    export type ItemProperties = ItemScalarProperties | ItemBelongsToProperties | ItemHasManyProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface Item extends GJupQueryNode<ItemScalarProperties> {
        name: 'item',
        _: ItemProperties[]
    }

    export interface Items extends GJupQueryNode<ItemScalarProperties> {
        name: 'items',
        _: ItemProperties[]
    }



    export type WorkplaceAffectationPropertyNames = 'id' | 'rate' | 'calculatedRate' | 'mondayRate' | 'tuesdayRate' | 'wednesdayRate' | 'thursdayRate' | 'fridayRate' | 'saturdayRate' | 'sundayRate' | 'createdAt' | 'updatedAt' | 'externalId' | 'personId' | 'person' | 'workplaceId' | 'workplace' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type WorkplaceAffectationScalarProperties = 'id' | 'rate' | 'calculatedRate' | 'mondayRate' | 'tuesdayRate' | 'wednesdayRate' | 'thursdayRate' | 'fridayRate' | 'saturdayRate' | 'sundayRate' | 'createdAt' | 'updatedAt' | 'externalId' | 'personId' | 'workplaceId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type WorkplaceAffectationBelongsToProperties = Person | Workplace | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type WorkplaceAffectationProperties = WorkplaceAffectationScalarProperties | WorkplaceAffectationBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface WorkplaceAffectation extends GJupQueryNode<WorkplaceAffectationScalarProperties> {
        name: 'workplaceAffectation',
        _: WorkplaceAffectationProperties[]
    }

    export interface WorkplaceAffectations extends GJupQueryNode<WorkplaceAffectationScalarProperties> {
        name: 'workplaceAffectations',
        _: WorkplaceAffectationProperties[]
    }



    export type OrganizationFloorPropertyNames = 'id' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'createdAt' | 'updatedAt' | 'externalId' | 'organizationId' | 'organization' | 'floorId' | 'floor' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type OrganizationFloorScalarProperties = 'id' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'createdAt' | 'updatedAt' | 'externalId' | 'organizationId' | 'floorId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type OrganizationFloorBelongsToProperties = Organization | Floor | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type OrganizationFloorProperties = OrganizationFloorScalarProperties | OrganizationFloorBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface OrganizationFloor extends GJupQueryNode<OrganizationFloorScalarProperties> {
        name: 'organizationFloor',
        _: OrganizationFloorProperties[]
    }

    export interface OrganizationFloors extends GJupQueryNode<OrganizationFloorScalarProperties> {
        name: 'organizationFloors',
        _: OrganizationFloorProperties[]
    }



    export type OrganizationBuildingPropertyNames = 'id' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'createdAt' | 'updatedAt' | 'externalId' | 'organizationId' | 'organization' | 'buildingId' | 'building' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type OrganizationBuildingScalarProperties = 'id' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'createdAt' | 'updatedAt' | 'externalId' | 'organizationId' | 'buildingId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type OrganizationBuildingBelongsToProperties = Organization | Building | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type OrganizationBuildingProperties = OrganizationBuildingScalarProperties | OrganizationBuildingBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface OrganizationBuilding extends GJupQueryNode<OrganizationBuildingScalarProperties> {
        name: 'organizationBuilding',
        _: OrganizationBuildingProperties[]
    }

    export interface OrganizationBuildings extends GJupQueryNode<OrganizationBuildingScalarProperties> {
        name: 'organizationBuildings',
        _: OrganizationBuildingProperties[]
    }



    export type RoomTypeFloorPropertyNames = 'id' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'createdAt' | 'updatedAt' | 'externalId' | 'roomTypeId' | 'roomType' | 'floorId' | 'floor' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type RoomTypeFloorScalarProperties = 'id' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'createdAt' | 'updatedAt' | 'externalId' | 'roomTypeId' | 'floorId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type RoomTypeFloorBelongsToProperties = RoomType | Floor | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type RoomTypeFloorProperties = RoomTypeFloorScalarProperties | RoomTypeFloorBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface RoomTypeFloor extends GJupQueryNode<RoomTypeFloorScalarProperties> {
        name: 'roomTypeFloor',
        _: RoomTypeFloorProperties[]
    }

    export interface RoomTypeFloors extends GJupQueryNode<RoomTypeFloorScalarProperties> {
        name: 'roomTypeFloors',
        _: RoomTypeFloorProperties[]
    }



    export type RoomTypeBuildingPropertyNames = 'id' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'createdAt' | 'updatedAt' | 'externalId' | 'roomTypeId' | 'roomType' | 'buildingId' | 'building' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type RoomTypeBuildingScalarProperties = 'id' | 'roomsArea' | 'roomsCount' | 'workplacesCount' | 'workplacesRatio' | 'peopleCount' | 'seatsCount' | 'peopleRatio' | 'occupancyRate' | 'expansionRatio' | 'freeWorkplacesCount' | 'flexWorkplacesCount' | 'sharedWorkplacesCount' | 'sharedWorkplacesRatio' | 'transitWorkplacesCount' | 'flexRatio' | 'seatsPeopleRatio' | 'totalPeopleCount' | 'carbonFootprint' | 'createdAt' | 'updatedAt' | 'externalId' | 'roomTypeId' | 'buildingId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type RoomTypeBuildingBelongsToProperties = RoomType | Building | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type RoomTypeBuildingProperties = RoomTypeBuildingScalarProperties | RoomTypeBuildingBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface RoomTypeBuilding extends GJupQueryNode<RoomTypeBuildingScalarProperties> {
        name: 'roomTypeBuilding',
        _: RoomTypeBuildingProperties[]
    }

    export interface RoomTypeBuildings extends GJupQueryNode<RoomTypeBuildingScalarProperties> {
        name: 'roomTypeBuildings',
        _: RoomTypeBuildingProperties[]
    }



    export type ItemToPersonPropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'personId' | 'person' | 'itemId' | 'item' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type ItemToPersonScalarProperties = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'personId' | 'itemId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type ItemToPersonBelongsToProperties = Person | Item | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type ItemToPersonProperties = ItemToPersonScalarProperties | ItemToPersonBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface ItemToPerson extends GJupQueryNode<ItemToPersonScalarProperties> {
        name: 'itemToPerson',
        _: ItemToPersonProperties[]
    }

    export interface ItemToPeople extends GJupQueryNode<ItemToPersonScalarProperties> {
        name: 'itemToPeople',
        _: ItemToPersonProperties[]
    }



    export type PersonToBuildingPropertyNames = 'id' | 'addToPeopleCount' | 'createdAt' | 'updatedAt' | 'externalId' | 'personId' | 'person' | 'buildingId' | 'building' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type PersonToBuildingScalarProperties = 'id' | 'addToPeopleCount' | 'createdAt' | 'updatedAt' | 'externalId' | 'personId' | 'buildingId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type PersonToBuildingBelongsToProperties = Person | Building | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type PersonToBuildingProperties = PersonToBuildingScalarProperties | PersonToBuildingBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface PersonToBuilding extends GJupQueryNode<PersonToBuildingScalarProperties> {
        name: 'personToBuilding',
        _: PersonToBuildingProperties[]
    }

    export interface PersonToBuildings extends GJupQueryNode<PersonToBuildingScalarProperties> {
        name: 'personToBuildings',
        _: PersonToBuildingProperties[]
    }



    export type DimensionToPersonPropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'dimensionId' | 'dimension' | 'personId' | 'person' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type DimensionToPersonScalarProperties = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'dimensionId' | 'personId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type DimensionToPersonBelongsToProperties = Dimension | Person | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type DimensionToPersonProperties = DimensionToPersonScalarProperties | DimensionToPersonBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface DimensionToPerson extends GJupQueryNode<DimensionToPersonScalarProperties> {
        name: 'dimensionToPerson',
        _: DimensionToPersonProperties[]
    }

    export interface DimensionToPeople extends GJupQueryNode<DimensionToPersonScalarProperties> {
        name: 'dimensionToPeople',
        _: DimensionToPersonProperties[]
    }



    export type DimensionTypeToBuildingPropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'dimensionTypeId' | 'dimensionType' | 'buildingId' | 'building' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type DimensionTypeToBuildingScalarProperties = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'dimensionTypeId' | 'buildingId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type DimensionTypeToBuildingBelongsToProperties = DimensionType | Building | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type DimensionTypeToBuildingProperties = DimensionTypeToBuildingScalarProperties | DimensionTypeToBuildingBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface DimensionTypeToBuilding extends GJupQueryNode<DimensionTypeToBuildingScalarProperties> {
        name: 'dimensionTypeToBuilding',
        _: DimensionTypeToBuildingProperties[]
    }

    export interface DimensionTypeToBuildings extends GJupQueryNode<DimensionTypeToBuildingScalarProperties> {
        name: 'dimensionTypeToBuildings',
        _: DimensionTypeToBuildingProperties[]
    }



    export type JupObjectTypePropertyNames = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupUiViews' | 'jupRoleToJupObjectTypes'
    export type JupObjectTypeScalarProperties = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId';
    export type JupObjectTypeHasManyProperties = JupUiViews | JupRoleToJupObjectTypes
    export type JupObjectTypeProperties = JupObjectTypeScalarProperties | JupObjectTypeHasManyProperties

    export interface JupObjectType extends GJupQueryNode<JupObjectTypeScalarProperties> {
        name: 'jupObjectType',
        _: JupObjectTypeProperties[]
    }





    export type JupUiViewPropertyNames = 'id' | 'name' | 'isDefaultView' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupObjectTypeId' | 'jupObjectType' | 'jupRoleToJupUiViews'
    export type JupUiViewScalarProperties = 'id' | 'name' | 'isDefaultView' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupObjectTypeId';
    export type JupUiViewBelongsToProperties = JupObjectType;
    export type JupUiViewHasManyProperties = JupRoleToJupUiViews
    export type JupUiViewProperties = JupUiViewScalarProperties | JupUiViewBelongsToProperties | JupUiViewHasManyProperties

    export interface JupUiView extends GJupQueryNode<JupUiViewScalarProperties> {
        name: 'jupUiView',
        _: JupUiViewProperties[]
    }

    export interface JupUiViews extends GJupQueryNode<JupUiViewScalarProperties> {
        name: 'jupUiViews',
        _: JupUiViewProperties[]
    }



    export type JupRolePropertyNames = 'id' | 'code' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupUserCompanyToJupRoles' | 'jupRoleToJupUiViews' | 'jupRoleToJupObjectTypes' | 'jupRoleToJupUiOptions' | 'jupRoleToJupUiOperations' | 'apiUserToJupRoles' | 'userRegistrationTenantRuleToJupRoles' | 'jupRoleToJupUiLayouts'
    export type JupRoleScalarProperties = 'id' | 'code' | 'name' | 'createdAt' | 'updatedAt' | 'externalId';
    export type JupRoleHasManyProperties = JupUserCompanyToJupRoles | JupRoleToJupUiViews | JupRoleToJupObjectTypes | JupRoleToJupUiOptions | JupRoleToJupUiOperations | ApiUserToJupRoles | UserRegistrationTenantRuleToJupRoles | JupRoleToJupUiLayouts
    export type JupRoleProperties = JupRoleScalarProperties | JupRoleHasManyProperties

    export interface JupRole extends GJupQueryNode<JupRoleScalarProperties> {
        name: 'jupRole',
        _: JupRoleProperties[]
    }





    export type JupUiOptionPropertyNames = 'id' | 'name' | 'scope' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupRoleToJupUiOptions'
    export type JupUiOptionScalarProperties = 'id' | 'name' | 'scope' | 'createdAt' | 'updatedAt' | 'externalId';
    export type JupUiOptionHasManyProperties = JupRoleToJupUiOptions
    export type JupUiOptionProperties = JupUiOptionScalarProperties | JupUiOptionHasManyProperties

    export interface JupUiOption extends GJupQueryNode<JupUiOptionScalarProperties> {
        name: 'jupUiOption',
        _: JupUiOptionProperties[]
    }





    export type JupUiOperationPropertyNames = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupRoleToJupUiOperations'
    export type JupUiOperationScalarProperties = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId';
    export type JupUiOperationHasManyProperties = JupRoleToJupUiOperations
    export type JupUiOperationProperties = JupUiOperationScalarProperties | JupUiOperationHasManyProperties

    export interface JupUiOperation extends GJupQueryNode<JupUiOperationScalarProperties> {
        name: 'jupUiOperation',
        _: JupUiOperationProperties[]
    }





    export type ContentRolePropertyNames = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'contentRoleToBuildings' | 'contentRoleToUserCompanies' | 'contentRoleToFloors' | 'apiUserToContentRoles' | 'contentRoleToJupUiTenantOperations' | 'userRegistrationTenantRuleToContentRoles' | 'companyId' | 'company'
    export type ContentRoleScalarProperties = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type ContentRoleBelongsToProperties = UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type ContentRoleHasManyProperties = ContentRoleToBuildings | ContentRoleToUserCompanies | ContentRoleToFloors | ApiUserToContentRoles | ContentRoleToJupUiTenantOperations | UserRegistrationTenantRuleToContentRoles
    export type ContentRoleProperties = ContentRoleScalarProperties | ContentRoleBelongsToProperties | ContentRoleHasManyProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface ContentRole extends GJupQueryNode<ContentRoleScalarProperties> {
        name: 'contentRole',
        _: ContentRoleProperties[]
    }

    export interface ContentRoles extends GJupQueryNode<ContentRoleScalarProperties> {
        name: 'contentRoles',
        _: ContentRoleProperties[]
    }



    export type JupUserCompanyToJupRolePropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyId' | 'userCompany' | 'jupRoleId' | 'jupRole' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type JupUserCompanyToJupRoleScalarProperties = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyId' | 'jupRoleId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type JupUserCompanyToJupRoleBelongsToProperties = UserCompany | JupRole | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type JupUserCompanyToJupRoleProperties = JupUserCompanyToJupRoleScalarProperties | JupUserCompanyToJupRoleBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface JupUserCompanyToJupRole extends GJupQueryNode<JupUserCompanyToJupRoleScalarProperties> {
        name: 'jupUserCompanyToJupRole',
        _: JupUserCompanyToJupRoleProperties[]
    }

    export interface JupUserCompanyToJupRoles extends GJupQueryNode<JupUserCompanyToJupRoleScalarProperties> {
        name: 'jupUserCompanyToJupRoles',
        _: JupUserCompanyToJupRoleProperties[]
    }



    export type JupRoleToJupUiViewPropertyNames = 'id' | 'canSee' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupUiViewId' | 'jupUiView' | 'jupRoleId' | 'jupRole'
    export type JupRoleToJupUiViewScalarProperties = 'id' | 'canSee' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupUiViewId' | 'jupRoleId';
    export type JupRoleToJupUiViewBelongsToProperties = JupUiView | JupRole;
    export type JupRoleToJupUiViewProperties = JupRoleToJupUiViewScalarProperties | JupRoleToJupUiViewBelongsToProperties

    export interface JupRoleToJupUiView extends GJupQueryNode<JupRoleToJupUiViewScalarProperties> {
        name: 'jupRoleToJupUiView',
        _: JupRoleToJupUiViewProperties[]
    }

    export interface JupRoleToJupUiViews extends GJupQueryNode<JupRoleToJupUiViewScalarProperties> {
        name: 'jupRoleToJupUiViews',
        _: JupRoleToJupUiViewProperties[]
    }



    export type JupRoleToJupObjectTypePropertyNames = 'id' | 'arCreate' | 'arRead' | 'arUpdate' | 'arDelete' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupObjectTypeId' | 'jupObjectType' | 'jupRoleId' | 'jupRole'
    export type JupRoleToJupObjectTypeScalarProperties = 'id' | 'arCreate' | 'arRead' | 'arUpdate' | 'arDelete' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupObjectTypeId' | 'jupRoleId';
    export type JupRoleToJupObjectTypeBelongsToProperties = JupObjectType | JupRole;
    export type JupRoleToJupObjectTypeProperties = JupRoleToJupObjectTypeScalarProperties | JupRoleToJupObjectTypeBelongsToProperties

    export interface JupRoleToJupObjectType extends GJupQueryNode<JupRoleToJupObjectTypeScalarProperties> {
        name: 'jupRoleToJupObjectType',
        _: JupRoleToJupObjectTypeProperties[]
    }

    export interface JupRoleToJupObjectTypes extends GJupQueryNode<JupRoleToJupObjectTypeScalarProperties> {
        name: 'jupRoleToJupObjectTypes',
        _: JupRoleToJupObjectTypeProperties[]
    }



    export type JupRoleToJupUiOptionPropertyNames = 'id' | 'canSee' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupUiOptionId' | 'jupUiOption' | 'jupRoleId' | 'jupRole'
    export type JupRoleToJupUiOptionScalarProperties = 'id' | 'canSee' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupUiOptionId' | 'jupRoleId';
    export type JupRoleToJupUiOptionBelongsToProperties = JupUiOption | JupRole;
    export type JupRoleToJupUiOptionProperties = JupRoleToJupUiOptionScalarProperties | JupRoleToJupUiOptionBelongsToProperties

    export interface JupRoleToJupUiOption extends GJupQueryNode<JupRoleToJupUiOptionScalarProperties> {
        name: 'jupRoleToJupUiOption',
        _: JupRoleToJupUiOptionProperties[]
    }

    export interface JupRoleToJupUiOptions extends GJupQueryNode<JupRoleToJupUiOptionScalarProperties> {
        name: 'jupRoleToJupUiOptions',
        _: JupRoleToJupUiOptionProperties[]
    }



    export type JupRoleToJupUiOperationPropertyNames = 'id' | 'canSee' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupUiOperationId' | 'jupUiOperation' | 'jupRoleId' | 'jupRole'
    export type JupRoleToJupUiOperationScalarProperties = 'id' | 'canSee' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupUiOperationId' | 'jupRoleId';
    export type JupRoleToJupUiOperationBelongsToProperties = JupUiOperation | JupRole;
    export type JupRoleToJupUiOperationProperties = JupRoleToJupUiOperationScalarProperties | JupRoleToJupUiOperationBelongsToProperties

    export interface JupRoleToJupUiOperation extends GJupQueryNode<JupRoleToJupUiOperationScalarProperties> {
        name: 'jupRoleToJupUiOperation',
        _: JupRoleToJupUiOperationProperties[]
    }

    export interface JupRoleToJupUiOperations extends GJupQueryNode<JupRoleToJupUiOperationScalarProperties> {
        name: 'jupRoleToJupUiOperations',
        _: JupRoleToJupUiOperationProperties[]
    }



    export type ContentRoleToBuildingPropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'contentRoleId' | 'contentRole' | 'buildingId' | 'building' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type ContentRoleToBuildingScalarProperties = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'contentRoleId' | 'buildingId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type ContentRoleToBuildingBelongsToProperties = ContentRole | Building | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type ContentRoleToBuildingProperties = ContentRoleToBuildingScalarProperties | ContentRoleToBuildingBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface ContentRoleToBuilding extends GJupQueryNode<ContentRoleToBuildingScalarProperties> {
        name: 'contentRoleToBuilding',
        _: ContentRoleToBuildingProperties[]
    }

    export interface ContentRoleToBuildings extends GJupQueryNode<ContentRoleToBuildingScalarProperties> {
        name: 'contentRoleToBuildings',
        _: ContentRoleToBuildingProperties[]
    }



    export type ContentRoleToUserCompanyPropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyId' | 'userCompany' | 'contentRoleId' | 'contentRole' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type ContentRoleToUserCompanyScalarProperties = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyId' | 'contentRoleId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type ContentRoleToUserCompanyBelongsToProperties = UserCompany | ContentRole | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type ContentRoleToUserCompanyProperties = ContentRoleToUserCompanyScalarProperties | ContentRoleToUserCompanyBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface ContentRoleToUserCompany extends GJupQueryNode<ContentRoleToUserCompanyScalarProperties> {
        name: 'contentRoleToUserCompany',
        _: ContentRoleToUserCompanyProperties[]
    }

    export interface ContentRoleToUserCompanies extends GJupQueryNode<ContentRoleToUserCompanyScalarProperties> {
        name: 'contentRoleToUserCompanies',
        _: ContentRoleToUserCompanyProperties[]
    }



    export type ContentRoleToFloorPropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'contentRoleId' | 'contentRole' | 'floorId' | 'floor' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type ContentRoleToFloorScalarProperties = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'contentRoleId' | 'floorId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type ContentRoleToFloorBelongsToProperties = ContentRole | Floor | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type ContentRoleToFloorProperties = ContentRoleToFloorScalarProperties | ContentRoleToFloorBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface ContentRoleToFloor extends GJupQueryNode<ContentRoleToFloorScalarProperties> {
        name: 'contentRoleToFloor',
        _: ContentRoleToFloorProperties[]
    }

    export interface ContentRoleToFloors extends GJupQueryNode<ContentRoleToFloorScalarProperties> {
        name: 'contentRoleToFloors',
        _: ContentRoleToFloorProperties[]
    }



    export type PartnerApiCredentialPropertyNames = 'id' | 'label' | 'code' | 'host' | 'clientId' | 'clientSecret' | 'enable' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type PartnerApiCredentialScalarProperties = 'id' | 'label' | 'code' | 'host' | 'clientId' | 'clientSecret' | 'enable' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type PartnerApiCredentialBelongsToProperties = UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type PartnerApiCredentialProperties = PartnerApiCredentialScalarProperties | PartnerApiCredentialBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface PartnerApiCredential extends GJupQueryNode<PartnerApiCredentialScalarProperties> {
        name: 'partnerApiCredential',
        _: PartnerApiCredentialProperties[]
    }

    export interface PartnerApiCredentials extends GJupQueryNode<PartnerApiCredentialScalarProperties> {
        name: 'partnerApiCredentials',
        _: PartnerApiCredentialProperties[]
    }



    export type ApiUserPropertyNames = 'id' | 'clientSecret' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'apiUserToJupRoles' | 'apiUserToContentRoles' | 'companyId' | 'company'
    export type ApiUserScalarProperties = 'id' | 'clientSecret' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type ApiUserBelongsToProperties = UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type ApiUserHasManyProperties = ApiUserToJupRoles | ApiUserToContentRoles
    export type ApiUserProperties = ApiUserScalarProperties | ApiUserBelongsToProperties | ApiUserHasManyProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface ApiUser extends GJupQueryNode<ApiUserScalarProperties> {
        name: 'apiUser',
        _: ApiUserProperties[]
    }

    export interface ApiUsers extends GJupQueryNode<ApiUserScalarProperties> {
        name: 'apiUsers',
        _: ApiUserProperties[]
    }



    export type ApiUserToJupRolePropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'apiUserId' | 'apiUser' | 'jupRoleId' | 'jupRole' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type ApiUserToJupRoleScalarProperties = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'apiUserId' | 'jupRoleId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type ApiUserToJupRoleBelongsToProperties = ApiUser | JupRole | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type ApiUserToJupRoleProperties = ApiUserToJupRoleScalarProperties | ApiUserToJupRoleBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface ApiUserToJupRole extends GJupQueryNode<ApiUserToJupRoleScalarProperties> {
        name: 'apiUserToJupRole',
        _: ApiUserToJupRoleProperties[]
    }

    export interface ApiUserToJupRoles extends GJupQueryNode<ApiUserToJupRoleScalarProperties> {
        name: 'apiUserToJupRoles',
        _: ApiUserToJupRoleProperties[]
    }



    export type ApiUserToContentRolePropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'apiUserId' | 'apiUser' | 'contentRoleId' | 'contentRole' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type ApiUserToContentRoleScalarProperties = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'apiUserId' | 'contentRoleId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type ApiUserToContentRoleBelongsToProperties = ApiUser | ContentRole | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type ApiUserToContentRoleProperties = ApiUserToContentRoleScalarProperties | ApiUserToContentRoleBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface ApiUserToContentRole extends GJupQueryNode<ApiUserToContentRoleScalarProperties> {
        name: 'apiUserToContentRole',
        _: ApiUserToContentRoleProperties[]
    }

    export interface ApiUserToContentRoles extends GJupQueryNode<ApiUserToContentRoleScalarProperties> {
        name: 'apiUserToContentRoles',
        _: ApiUserToContentRoleProperties[]
    }



    export type JupUiTenantOperationPropertyNames = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'contentRoleToJupUiTenantOperations' | 'companyId' | 'company'
    export type JupUiTenantOperationScalarProperties = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type JupUiTenantOperationBelongsToProperties = UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type JupUiTenantOperationHasManyProperties = ContentRoleToJupUiTenantOperations
    export type JupUiTenantOperationProperties = JupUiTenantOperationScalarProperties | JupUiTenantOperationBelongsToProperties | JupUiTenantOperationHasManyProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface JupUiTenantOperation extends GJupQueryNode<JupUiTenantOperationScalarProperties> {
        name: 'jupUiTenantOperation',
        _: JupUiTenantOperationProperties[]
    }

    export interface JupUiTenantOperations extends GJupQueryNode<JupUiTenantOperationScalarProperties> {
        name: 'jupUiTenantOperations',
        _: JupUiTenantOperationProperties[]
    }



    export type ContentRoleToJupUiTenantOperationPropertyNames = 'id' | 'canSee' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupUiTenantOperationId' | 'jupUiTenantOperation' | 'contentRoleId' | 'contentRole' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type ContentRoleToJupUiTenantOperationScalarProperties = 'id' | 'canSee' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupUiTenantOperationId' | 'contentRoleId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type ContentRoleToJupUiTenantOperationBelongsToProperties = JupUiTenantOperation | ContentRole | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type ContentRoleToJupUiTenantOperationProperties = ContentRoleToJupUiTenantOperationScalarProperties | ContentRoleToJupUiTenantOperationBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface ContentRoleToJupUiTenantOperation extends GJupQueryNode<ContentRoleToJupUiTenantOperationScalarProperties> {
        name: 'contentRoleToJupUiTenantOperation',
        _: ContentRoleToJupUiTenantOperationProperties[]
    }

    export interface ContentRoleToJupUiTenantOperations extends GJupQueryNode<ContentRoleToJupUiTenantOperationScalarProperties> {
        name: 'contentRoleToJupUiTenantOperations',
        _: ContentRoleToJupUiTenantOperationProperties[]
    }



    export type AuthentificationConnectionPropertyNames = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId' | 'userRegistrationTenantRules'
    export type AuthentificationConnectionScalarProperties = 'id' | 'name' | 'createdAt' | 'updatedAt' | 'externalId';
    export type AuthentificationConnectionHasManyProperties = UserRegistrationTenantRules
    export type AuthentificationConnectionProperties = AuthentificationConnectionScalarProperties | AuthentificationConnectionHasManyProperties

    export interface AuthentificationConnection extends GJupQueryNode<AuthentificationConnectionScalarProperties> {
        name: 'authentificationConnection',
        _: AuthentificationConnectionProperties[]
    }





    export type UserRegistrationTenantRulePropertyNames = 'id' | 'name' | 'domains' | 'automaticUserToRoleMapping' | 'createdAt' | 'updatedAt' | 'externalId' | 'authentificationConnectionId' | 'authentificationConnection' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'userRegistrationTenantRuleToJupRoles' | 'userRegistrationTenantRuleToContentRoles' | 'companyId' | 'company'
    export type UserRegistrationTenantRuleScalarProperties = 'id' | 'name' | 'domains' | 'automaticUserToRoleMapping' | 'createdAt' | 'updatedAt' | 'externalId' | 'authentificationConnectionId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type UserRegistrationTenantRuleBelongsToProperties = AuthentificationConnection | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type UserRegistrationTenantRuleHasManyProperties = UserRegistrationTenantRuleToJupRoles | UserRegistrationTenantRuleToContentRoles
    export type UserRegistrationTenantRuleProperties = UserRegistrationTenantRuleScalarProperties | UserRegistrationTenantRuleBelongsToProperties | UserRegistrationTenantRuleHasManyProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserRegistrationTenantRule extends GJupQueryNode<UserRegistrationTenantRuleScalarProperties> {
        name: 'userRegistrationTenantRule',
        _: UserRegistrationTenantRuleProperties[]
    }

    export interface UserRegistrationTenantRules extends GJupQueryNode<UserRegistrationTenantRuleScalarProperties> {
        name: 'userRegistrationTenantRules',
        _: UserRegistrationTenantRuleProperties[]
    }



    export type UserRegistrationTenantRuleToJupRolePropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'userRegistrationTenantRuleId' | 'userRegistrationTenantRule' | 'jupRoleId' | 'jupRole' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type UserRegistrationTenantRuleToJupRoleScalarProperties = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'userRegistrationTenantRuleId' | 'jupRoleId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type UserRegistrationTenantRuleToJupRoleBelongsToProperties = UserRegistrationTenantRule | JupRole | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type UserRegistrationTenantRuleToJupRoleProperties = UserRegistrationTenantRuleToJupRoleScalarProperties | UserRegistrationTenantRuleToJupRoleBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserRegistrationTenantRuleToJupRole extends GJupQueryNode<UserRegistrationTenantRuleToJupRoleScalarProperties> {
        name: 'userRegistrationTenantRuleToJupRole',
        _: UserRegistrationTenantRuleToJupRoleProperties[]
    }

    export interface UserRegistrationTenantRuleToJupRoles extends GJupQueryNode<UserRegistrationTenantRuleToJupRoleScalarProperties> {
        name: 'userRegistrationTenantRuleToJupRoles',
        _: UserRegistrationTenantRuleToJupRoleProperties[]
    }



    export type UserRegistrationTenantRuleToContentRolePropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'userRegistrationTenantRuleId' | 'userRegistrationTenantRule' | 'contentRoleId' | 'contentRole' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type UserRegistrationTenantRuleToContentRoleScalarProperties = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'userRegistrationTenantRuleId' | 'contentRoleId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type UserRegistrationTenantRuleToContentRoleBelongsToProperties = UserRegistrationTenantRule | ContentRole | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type UserRegistrationTenantRuleToContentRoleProperties = UserRegistrationTenantRuleToContentRoleScalarProperties | UserRegistrationTenantRuleToContentRoleBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserRegistrationTenantRuleToContentRole extends GJupQueryNode<UserRegistrationTenantRuleToContentRoleScalarProperties> {
        name: 'userRegistrationTenantRuleToContentRole',
        _: UserRegistrationTenantRuleToContentRoleProperties[]
    }

    export interface UserRegistrationTenantRuleToContentRoles extends GJupQueryNode<UserRegistrationTenantRuleToContentRoleScalarProperties> {
        name: 'userRegistrationTenantRuleToContentRoles',
        _: UserRegistrationTenantRuleToContentRoleProperties[]
    }



    export type PartnerExportMappingConfigurationPropertyNames = 'id' | 'code' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'partnerExportMappings' | 'partnerExportMappingConfigurationToFloors' | 'companyId' | 'company'
    export type PartnerExportMappingConfigurationScalarProperties = 'id' | 'code' | 'createdAt' | 'updatedAt' | 'externalId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type PartnerExportMappingConfigurationBelongsToProperties = UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type PartnerExportMappingConfigurationHasManyProperties = PartnerExportMappings | PartnerExportMappingConfigurationToFloors
    export type PartnerExportMappingConfigurationProperties = PartnerExportMappingConfigurationScalarProperties | PartnerExportMappingConfigurationBelongsToProperties | PartnerExportMappingConfigurationHasManyProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface PartnerExportMappingConfiguration extends GJupQueryNode<PartnerExportMappingConfigurationScalarProperties> {
        name: 'partnerExportMappingConfiguration',
        _: PartnerExportMappingConfigurationProperties[]
    }

    export interface PartnerExportMappingConfigurations extends GJupQueryNode<PartnerExportMappingConfigurationScalarProperties> {
        name: 'partnerExportMappingConfigurations',
        _: PartnerExportMappingConfigurationProperties[]
    }



    export type PartnerExportMappingPropertyNames = 'id' | 'partnerCode' | 'label' | 'createdAt' | 'updatedAt' | 'externalId' | 'partnerExportMappingConfigurationId' | 'partnerExportMappingConfiguration' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'partnerExportMappingToRoomTypes' | 'companyId' | 'company'
    export type PartnerExportMappingScalarProperties = 'id' | 'partnerCode' | 'label' | 'createdAt' | 'updatedAt' | 'externalId' | 'partnerExportMappingConfigurationId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type PartnerExportMappingBelongsToProperties = PartnerExportMappingConfiguration | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type PartnerExportMappingHasManyProperties = PartnerExportMappingToRoomTypes
    export type PartnerExportMappingProperties = PartnerExportMappingScalarProperties | PartnerExportMappingBelongsToProperties | PartnerExportMappingHasManyProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface PartnerExportMapping extends GJupQueryNode<PartnerExportMappingScalarProperties> {
        name: 'partnerExportMapping',
        _: PartnerExportMappingProperties[]
    }

    export interface PartnerExportMappings extends GJupQueryNode<PartnerExportMappingScalarProperties> {
        name: 'partnerExportMappings',
        _: PartnerExportMappingProperties[]
    }



    export type PartnerExportMappingToRoomTypePropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'partnerExportMappingId' | 'partnerExportMapping' | 'roomTypeId' | 'roomType' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type PartnerExportMappingToRoomTypeScalarProperties = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'partnerExportMappingId' | 'roomTypeId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type PartnerExportMappingToRoomTypeBelongsToProperties = PartnerExportMapping | RoomType | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type PartnerExportMappingToRoomTypeProperties = PartnerExportMappingToRoomTypeScalarProperties | PartnerExportMappingToRoomTypeBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface PartnerExportMappingToRoomType extends GJupQueryNode<PartnerExportMappingToRoomTypeScalarProperties> {
        name: 'partnerExportMappingToRoomType',
        _: PartnerExportMappingToRoomTypeProperties[]
    }

    export interface PartnerExportMappingToRoomTypes extends GJupQueryNode<PartnerExportMappingToRoomTypeScalarProperties> {
        name: 'partnerExportMappingToRoomTypes',
        _: PartnerExportMappingToRoomTypeProperties[]
    }



    export type PartnerExportMappingConfigurationToFloorPropertyNames = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'partnerExportMappingConfigurationId' | 'partnerExportMappingConfiguration' | 'floorId' | 'floor' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type PartnerExportMappingConfigurationToFloorScalarProperties = 'id' | 'createdAt' | 'updatedAt' | 'externalId' | 'partnerExportMappingConfigurationId' | 'floorId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type PartnerExportMappingConfigurationToFloorBelongsToProperties = PartnerExportMappingConfiguration | Floor | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type PartnerExportMappingConfigurationToFloorProperties = PartnerExportMappingConfigurationToFloorScalarProperties | PartnerExportMappingConfigurationToFloorBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface PartnerExportMappingConfigurationToFloor extends GJupQueryNode<PartnerExportMappingConfigurationToFloorScalarProperties> {
        name: 'partnerExportMappingConfigurationToFloor',
        _: PartnerExportMappingConfigurationToFloorProperties[]
    }

    export interface PartnerExportMappingConfigurationToFloors extends GJupQueryNode<PartnerExportMappingConfigurationToFloorScalarProperties> {
        name: 'partnerExportMappingConfigurationToFloors',
        _: PartnerExportMappingConfigurationToFloorProperties[]
    }



    export type JupRoleToJupUiLayoutPropertyNames = 'id' | 'canSee' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupUiLayoutId' | 'jupUiLayout' | 'jupRoleId' | 'jupRole'
    export type JupRoleToJupUiLayoutScalarProperties = 'id' | 'canSee' | 'createdAt' | 'updatedAt' | 'externalId' | 'jupUiLayoutId' | 'jupRoleId';
    export type JupRoleToJupUiLayoutBelongsToProperties = JupUiLayout | JupRole;
    export type JupRoleToJupUiLayoutProperties = JupRoleToJupUiLayoutScalarProperties | JupRoleToJupUiLayoutBelongsToProperties

    export interface JupRoleToJupUiLayout extends GJupQueryNode<JupRoleToJupUiLayoutScalarProperties> {
        name: 'jupRoleToJupUiLayout',
        _: JupRoleToJupUiLayoutProperties[]
    }

    export interface JupRoleToJupUiLayouts extends GJupQueryNode<JupRoleToJupUiLayoutScalarProperties> {
        name: 'jupRoleToJupUiLayouts',
        _: JupRoleToJupUiLayoutProperties[]
    }



    export type ItemFactPropertyNames = 'id' | 'measure' | 'value' | 'voltage' | 'createdAt' | 'updatedAt' | 'externalId' | 'itemId' | 'item' | 'userCompanyCreatedById' | 'userCompanyCreatedBy' | 'userCompanyUpdatedById' | 'userCompanyUpdatedBy' | 'companyId' | 'company'
    export type ItemFactScalarProperties = 'id' | 'measure' | 'value' | 'voltage' | 'createdAt' | 'updatedAt' | 'externalId' | 'itemId' | 'userCompanyCreatedById' | 'userCompanyUpdatedById' | 'companyId';
    export type ItemFactBelongsToProperties = Item | UserCompanyCreatedBy | UserCompanyUpdatedBy | Company;
    export type ItemFactProperties = ItemFactScalarProperties | ItemFactBelongsToProperties
    export interface UserCompanyCreatedBy {
        name: 'userCompanyCreatedBy',
        _: UserCompanyProperties[]
    }
    export interface UserCompanyUpdatedBy {
        name: 'userCompanyUpdatedBy',
        _: UserCompanyProperties[]
    }
    export interface ItemFact extends GJupQueryNode<ItemFactScalarProperties> {
        name: 'itemFact',
        _: ItemFactProperties[]
    }

    export interface ItemFacts extends GJupQueryNode<ItemFactScalarProperties> {
        name: 'itemFacts',
        _: ItemFactProperties[]
    }


}