
/* eslint-disable */

import { IEntity, IPaginationList } from "../jup.models";
import { IJupImage, IModel3d, IJupIcon, IconShapeType, IJupAddress, IPoint2d, IJupTransform, ITextAnchor, IPoint3d, ISize } from "../propertyType.json.models";


export namespace Surfy {
    export interface OccupancyStatus extends IEntity {
        id: number;
        name: string;
        code: string;
        color: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        rooms?: IPaginationList<Room>;
    }

    export interface User extends IEntity {
        id: number;
        email: string;
        firstname?: string;
        lastname?: string;
        picture?: IJupImage;
        sub: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanies?: IPaginationList<UserCompany>;
    }

    export interface CompanyType extends IEntity {
        id: number;
        name: string;
        billable?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        companies?: IPaginationList<Company>;
    }

    export interface Company extends IEntity {
        id: number;
        name: string;
        logoPath?: IJupImage;
        iconPath?: IJupImage;
        proxyImages?: boolean;
        workingDaysCount?: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        companyTypeId?: number | null;
        companyType?: CompanyType;
        userCompanies?: IPaginationList<UserCompany>;
        buildingTypes?: IPaginationList<BuildingType>;
        buildings?: IPaginationList<Building>;
    }

    export interface RoomConnectorType extends IEntity {
        id: number;
        name: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        roomConnectors?: IPaginationList<RoomConnector>;
    }

    export interface RoomConnector extends IEntity {
        id: number;
        name: string;
        waitTime?: number;
        timePerFloor?: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        roomConnectorTypeId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        roomConnectorType?: RoomConnectorType;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        rooms?: IPaginationList<Room>;
    }

    export interface UserCompany extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userId: number;
        companyId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        user?: User;
        company?: Company;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        roomConnectorCreatedBies?: IPaginationList<RoomConnector>;
        roomConnectorUpdatedBies?: IPaginationList<RoomConnector>;
        userCompanyCreatedBies?: IPaginationList<UserCompany>;
        userCompanyUpdatedBies?: IPaginationList<UserCompany>;
        personCompanyCreatedBies?: IPaginationList<PersonCompany>;
        personCompanyUpdatedBies?: IPaginationList<PersonCompany>;
        buildingTypeCreatedBies?: IPaginationList<BuildingType>;
        buildingTypeUpdatedBies?: IPaginationList<BuildingType>;
        organizationCreatedBies?: IPaginationList<Organization>;
        organizationUpdatedBies?: IPaginationList<Organization>;
        itemTypeFamilyCreatedBies?: IPaginationList<ItemTypeFamily>;
        itemTypeFamilyUpdatedBies?: IPaginationList<ItemTypeFamily>;
        manufacturerCreatedBies?: IPaginationList<Manufacturer>;
        manufacturerUpdatedBies?: IPaginationList<Manufacturer>;
        itemTypeCreatedBies?: IPaginationList<ItemType>;
        itemTypeUpdatedBies?: IPaginationList<ItemType>;
        buildingOwners?: IPaginationList<Building>;
        buildingCreatedBies?: IPaginationList<Building>;
        buildingUpdatedBies?: IPaginationList<Building>;
        mapScaleCreatedBies?: IPaginationList<MapScale>;
        mapScaleUpdatedBies?: IPaginationList<MapScale>;
        structureCreatedBies?: IPaginationList<Structure>;
        structureUpdatedBies?: IPaginationList<Structure>;
        structurePointCreatedBies?: IPaginationList<StructurePoint>;
        structurePointUpdatedBies?: IPaginationList<StructurePoint>;
        floorCreatedBies?: IPaginationList<Floor>;
        floorUpdatedBies?: IPaginationList<Floor>;
        distributionCostTypeCreatedBies?: IPaginationList<DistributionCostType>;
        distributionCostTypeUpdatedBies?: IPaginationList<DistributionCostType>;
        roomTypeCreatedBies?: IPaginationList<RoomType>;
        roomTypeUpdatedBies?: IPaginationList<RoomType>;
        costCenterCreatedBies?: IPaginationList<CostCenter>;
        costCenterUpdatedBies?: IPaginationList<CostCenter>;
        costCenterBuildingCreatedBies?: IPaginationList<CostCenterBuilding>;
        costCenterBuildingUpdatedBies?: IPaginationList<CostCenterBuilding>;
        costCenterFloorCreatedBies?: IPaginationList<CostCenterFloor>;
        costCenterFloorUpdatedBies?: IPaginationList<CostCenterFloor>;
        roomCreatedBies?: IPaginationList<Room>;
        roomUpdatedBies?: IPaginationList<Room>;
        roomPointCreatedBies?: IPaginationList<RoomPoint>;
        roomPointUpdatedBies?: IPaginationList<RoomPoint>;
        roomPointRoomCreatedBies?: IPaginationList<RoomPointRoom>;
        roomPointRoomUpdatedBies?: IPaginationList<RoomPointRoom>;
        roomPointSegmentCreatedBies?: IPaginationList<RoomPointSegment>;
        roomPointSegmentUpdatedBies?: IPaginationList<RoomPointSegment>;
        itemTypePointCreatedBies?: IPaginationList<ItemTypePoint>;
        itemTypePointUpdatedBies?: IPaginationList<ItemTypePoint>;
        dimensionTypeCreatedBies?: IPaginationList<DimensionType>;
        dimensionTypeUpdatedBies?: IPaginationList<DimensionType>;
        dimensionCreatedBies?: IPaginationList<Dimension>;
        dimensionUpdatedBies?: IPaginationList<Dimension>;
        dimensionRoomCreatedBies?: IPaginationList<DimensionRoom>;
        dimensionRoomUpdatedBies?: IPaginationList<DimensionRoom>;
        dimensionFloorCreatedBies?: IPaginationList<DimensionFloor>;
        dimensionFloorUpdatedBies?: IPaginationList<DimensionFloor>;
        dimensionBuildingCreatedBies?: IPaginationList<DimensionBuilding>;
        dimensionBuildingUpdatedBies?: IPaginationList<DimensionBuilding>;
        factTypeCreatedBies?: IPaginationList<FactType>;
        factTypeUpdatedBies?: IPaginationList<FactType>;
        factCreatedBies?: IPaginationList<Fact>;
        factUpdatedBies?: IPaginationList<Fact>;
        personStateCreatedBies?: IPaginationList<PersonState>;
        personStateUpdatedBies?: IPaginationList<PersonState>;
        personSecurityProfileCreatedBies?: IPaginationList<PersonSecurityProfile>;
        personSecurityProfileUpdatedBies?: IPaginationList<PersonSecurityProfile>;
        personCreatedBies?: IPaginationList<Person>;
        personUpdatedBies?: IPaginationList<Person>;
        personToPersonTypeCreatedBies?: IPaginationList<PersonToPersonType>;
        personToPersonTypeUpdatedBies?: IPaginationList<PersonToPersonType>;
        personToPersonCreatedBies?: IPaginationList<PersonToPerson>;
        personToPersonUpdatedBies?: IPaginationList<PersonToPerson>;
        roomAffectationCreatedBies?: IPaginationList<RoomAffectation>;
        roomAffectationUpdatedBies?: IPaginationList<RoomAffectation>;
        workplaceTypeCreatedBies?: IPaginationList<WorkplaceType>;
        workplaceTypeUpdatedBies?: IPaginationList<WorkplaceType>;
        workplaceTypeItemTypeCreatedBies?: IPaginationList<WorkplaceTypeItemType>;
        workplaceTypeItemTypeUpdatedBies?: IPaginationList<WorkplaceTypeItemType>;
        workplaceCreatedBies?: IPaginationList<Workplace>;
        workplaceUpdatedBies?: IPaginationList<Workplace>;
        itemCreatedBies?: IPaginationList<Item>;
        itemUpdatedBies?: IPaginationList<Item>;
        workplaceAffectationCreatedBies?: IPaginationList<WorkplaceAffectation>;
        workplaceAffectationUpdatedBies?: IPaginationList<WorkplaceAffectation>;
        organizationFloorCreatedBies?: IPaginationList<OrganizationFloor>;
        organizationFloorUpdatedBies?: IPaginationList<OrganizationFloor>;
        organizationBuildingCreatedBies?: IPaginationList<OrganizationBuilding>;
        organizationBuildingUpdatedBies?: IPaginationList<OrganizationBuilding>;
        roomTypeFloorCreatedBies?: IPaginationList<RoomTypeFloor>;
        roomTypeFloorUpdatedBies?: IPaginationList<RoomTypeFloor>;
        roomTypeBuildingCreatedBies?: IPaginationList<RoomTypeBuilding>;
        roomTypeBuildingUpdatedBies?: IPaginationList<RoomTypeBuilding>;
        itemToPersonCreatedBies?: IPaginationList<ItemToPerson>;
        itemToPersonUpdatedBies?: IPaginationList<ItemToPerson>;
        personToBuildingCreatedBies?: IPaginationList<PersonToBuilding>;
        personToBuildingUpdatedBies?: IPaginationList<PersonToBuilding>;
        dimensionToPersonCreatedBies?: IPaginationList<DimensionToPerson>;
        dimensionToPersonUpdatedBies?: IPaginationList<DimensionToPerson>;
        dimensionTypeToBuildingCreatedBies?: IPaginationList<DimensionTypeToBuilding>;
        dimensionTypeToBuildingUpdatedBies?: IPaginationList<DimensionTypeToBuilding>;
        contentRoleCreatedBies?: IPaginationList<ContentRole>;
        contentRoleUpdatedBies?: IPaginationList<ContentRole>;
        jupUserCompanyToJupRoles?: IPaginationList<JupUserCompanyToJupRole>;
        jupUserCompanyToJupRoleCreatedBies?: IPaginationList<JupUserCompanyToJupRole>;
        jupUserCompanyToJupRoleUpdatedBies?: IPaginationList<JupUserCompanyToJupRole>;
        contentRoleToBuildingCreatedBies?: IPaginationList<ContentRoleToBuilding>;
        contentRoleToBuildingUpdatedBies?: IPaginationList<ContentRoleToBuilding>;
        contentRoleToUserCompanies?: IPaginationList<ContentRoleToUserCompany>;
        contentRoleToUserCompanyCreatedBies?: IPaginationList<ContentRoleToUserCompany>;
        contentRoleToUserCompanyUpdatedBies?: IPaginationList<ContentRoleToUserCompany>;
        contentRoleToFloorCreatedBies?: IPaginationList<ContentRoleToFloor>;
        contentRoleToFloorUpdatedBies?: IPaginationList<ContentRoleToFloor>;
        partnerApiCredentialCreatedBies?: IPaginationList<PartnerApiCredential>;
        partnerApiCredentialUpdatedBies?: IPaginationList<PartnerApiCredential>;
        apiUserCreatedBies?: IPaginationList<ApiUser>;
        apiUserUpdatedBies?: IPaginationList<ApiUser>;
        apiUserToJupRoleCreatedBies?: IPaginationList<ApiUserToJupRole>;
        apiUserToJupRoleUpdatedBies?: IPaginationList<ApiUserToJupRole>;
        apiUserToContentRoleCreatedBies?: IPaginationList<ApiUserToContentRole>;
        apiUserToContentRoleUpdatedBies?: IPaginationList<ApiUserToContentRole>;
        jupUiTenantOperationCreatedBies?: IPaginationList<JupUiTenantOperation>;
        jupUiTenantOperationUpdatedBies?: IPaginationList<JupUiTenantOperation>;
        contentRoleToJupUiTenantOperationCreatedBies?: IPaginationList<ContentRoleToJupUiTenantOperation>;
        contentRoleToJupUiTenantOperationUpdatedBies?: IPaginationList<ContentRoleToJupUiTenantOperation>;
        userRegistrationTenantRuleCreatedBies?: IPaginationList<UserRegistrationTenantRule>;
        userRegistrationTenantRuleUpdatedBies?: IPaginationList<UserRegistrationTenantRule>;
        userRegistrationTenantRuleToJupRoleCreatedBies?: IPaginationList<UserRegistrationTenantRuleToJupRole>;
        userRegistrationTenantRuleToJupRoleUpdatedBies?: IPaginationList<UserRegistrationTenantRuleToJupRole>;
        userRegistrationTenantRuleToContentRoleCreatedBies?: IPaginationList<UserRegistrationTenantRuleToContentRole>;
        userRegistrationTenantRuleToContentRoleUpdatedBies?: IPaginationList<UserRegistrationTenantRuleToContentRole>;
        partnerExportMappingConfigurationCreatedBies?: IPaginationList<PartnerExportMappingConfiguration>;
        partnerExportMappingConfigurationUpdatedBies?: IPaginationList<PartnerExportMappingConfiguration>;
        partnerExportMappingCreatedBies?: IPaginationList<PartnerExportMapping>;
        partnerExportMappingUpdatedBies?: IPaginationList<PartnerExportMapping>;
        partnerExportMappingToRoomTypeCreatedBies?: IPaginationList<PartnerExportMappingToRoomType>;
        partnerExportMappingToRoomTypeUpdatedBies?: IPaginationList<PartnerExportMappingToRoomType>;
        partnerExportMappingConfigurationToFloorCreatedBies?: IPaginationList<PartnerExportMappingConfigurationToFloor>;
        partnerExportMappingConfigurationToFloorUpdatedBies?: IPaginationList<PartnerExportMappingConfigurationToFloor>;
        itemFactCreatedBies?: IPaginationList<ItemFact>;
        itemFactUpdatedBies?: IPaginationList<ItemFact>;
    }

    export interface PersonGender extends IEntity {
        id: number;
        name: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        people?: IPaginationList<Person>;
    }

    export interface PersonCompany extends IEntity {
        id: number;
        name: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        people?: IPaginationList<Person>;
    }

    export interface JupUiLayout extends IEntity {
        id: number;
        name: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        buildings?: IPaginationList<Building>;
        jupRoleToJupUiLayouts?: IPaginationList<JupRoleToJupUiLayout>;
    }

    export interface BuildingType extends IEntity {
        id: number;
        name: string;
        code?: string;
        color?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        companyId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        company?: Company;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        buildings?: IPaginationList<Building>;
    }

    export interface Organization extends IEntity {
        id: number;
        name: string;
        code?: string;
        color?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        organizationId?: number | null;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        organization?: Organization;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        organizations?: IPaginationList<Organization>;
        rooms?: IPaginationList<Room>;
        people?: IPaginationList<Person>;
        workplaces?: IPaginationList<Workplace>;
        organizationFloors?: IPaginationList<OrganizationFloor>;
        organizationBuildings?: IPaginationList<OrganizationBuilding>;
    }

    export interface ItemTypeFamily extends IEntity {
        id: number;
        name: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        itemTypes?: IPaginationList<ItemType>;
    }

    export interface Manufacturer extends IEntity {
        id: number;
        name: string;
        website?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        itemTypes?: IPaginationList<ItemType>;
    }

    export interface Object3dModel extends IEntity {
        id: number;
        name: string;
        type: string;
        rotation: number;
        origin: string;
        model: IModel3d;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        itemTypes?: IPaginationList<ItemType>;
    }

    export interface ItemType extends IEntity {
        id: number;
        name: string;
        picture?: IJupImage;
        displayItemReferenceInMap?: boolean;
        code?: string;
        icon?: IJupIcon;
        color?: string;
        height?: number;
        zIndex: number;
        description?: string;
        price?: number;
        seatsCount?: number;
        carbonFootprint?: number;
        iconShape?: IconShapeType;
        iconBackgroundColor?: string;
        iconBorderColor?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        itemTypeFamilyId: number;
        manufacturerId?: number | null;
        object3dModelId?: number | null;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        itemTypeFamily?: ItemTypeFamily;
        manufacturer?: Manufacturer;
        object3dModel?: Object3dModel;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        itemTypePoints?: IPaginationList<ItemTypePoint>;
        workplaceTypeItemTypes?: IPaginationList<WorkplaceTypeItemType>;
        items?: IPaginationList<Item>;
    }

    export interface Building extends IEntity {
        id: number;
        name: string;
        color: string;
        surface?: number;
        leaseStartDate?: string;
        leaseEndDate?: string;
        purchaseDate?: string;
        documents?: string;
        picture?: IJupImage;
        regulatoryCapacity?: number;
        parkingSpaceCount?: number;
        constructionYear?: number;
        yearlyCondominiumFees?: number;
        yearlyRent?: number;
        yearlyParkingRent?: number;
        yearlyTaxFees?: number;
        yearlyExploitationFees?: number;
        rentReferenceIndex?: number;
        securityDeposit?: number;
        roomsArea?: number;
        roomsCount?: number;
        workplacesCount?: number;
        workplacesRatio?: number;
        peopleCount?: number;
        seatsCount?: number;
        peopleRatio?: number;
        occupancyRate?: number;
        expansionRatio?: number;
        freeWorkplacesCount?: number;
        flexWorkplacesCount?: number;
        sharedWorkplacesCount?: number;
        sharedWorkplacesRatio?: number;
        transitWorkplacesCount?: number;
        flexRatio?: number;
        seatsPeopleRatio?: number;
        totalPeopleCount?: number;
        carbonFootprint?: number;
        dimensionPeopleCount?: number;
        address?: IJupAddress;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        companyId: number;
        buildingTypeId?: number | null;
        userCompanyOwnerId?: number | null;
        jupUiLayoutId?: number | null;
        buildingId?: number | null;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        company?: Company;
        buildingType?: BuildingType;
        userCompanyOwner?: UserCompany;
        jupUiLayout?: JupUiLayout;
        building?: Building;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        buildings?: IPaginationList<Building>;
        floors?: IPaginationList<Floor>;
        costCenterBuildings?: IPaginationList<CostCenterBuilding>;
        dimensionBuildings?: IPaginationList<DimensionBuilding>;
        facts?: IPaginationList<Fact>;
        organizationBuildings?: IPaginationList<OrganizationBuilding>;
        roomTypeBuildings?: IPaginationList<RoomTypeBuilding>;
        personToBuildings?: IPaginationList<PersonToBuilding>;
        dimensionTypeToBuildings?: IPaginationList<DimensionTypeToBuilding>;
        contentRoleToBuildings?: IPaginationList<ContentRoleToBuilding>;
    }

    export interface MapScale extends IEntity {
        id: number;
        name?: string;
        p1: IPoint2d;
        p2: IPoint2d;
        length?: number;
        ratio?: number;
        strokeWidth?: number;
        roomTextSize?: number;
        workplaceTextSize?: number;
        segmentDistanceTextSize?: number;
        itemTypeIconSize?: number;
        roomIconSize?: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        floors?: IPaginationList<Floor>;
    }

    export interface Structure extends IEntity {
        id: number;
        name: string;
        transform?: IJupTransform;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        structurePoints?: IPaginationList<StructurePoint>;
        floors?: IPaginationList<Floor>;
    }

    export interface StructurePoint extends IEntity {
        id: number;
        x: number;
        y: number;
        sortIndex: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        structureId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        structure?: Structure;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface Floor extends IEntity {
        id: number;
        name: string;
        level: number;
        height?: number;
        regulatoryCapacity?: number;
        roomsArea?: number;
        roomsCount?: number;
        workplacesCount?: number;
        workplacesRatio?: number;
        peopleCount?: number;
        seatsCount?: number;
        peopleRatio?: number;
        occupancyRate?: number;
        expansionRatio?: number;
        freeWorkplacesCount?: number;
        flexWorkplacesCount?: number;
        sharedWorkplacesCount?: number;
        sharedWorkplacesRatio?: number;
        transitWorkplacesCount?: number;
        flexRatio?: number;
        seatsPeopleRatio?: number;
        totalPeopleCount?: number;
        carbonFootprint?: number;
        backgroundLayout?: IJupImage;
        backgroundLayoutOpacity?: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        buildingId: number;
        mapScaleId?: number | null;
        structureId?: number | null;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        building?: Building;
        mapScale?: MapScale;
        structure?: Structure;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        costCenterFloors?: IPaginationList<CostCenterFloor>;
        rooms?: IPaginationList<Room>;
        roomPoints?: IPaginationList<RoomPoint>;
        dimensionFloors?: IPaginationList<DimensionFloor>;
        organizationFloors?: IPaginationList<OrganizationFloor>;
        roomTypeFloors?: IPaginationList<RoomTypeFloor>;
        contentRoleToFloors?: IPaginationList<ContentRoleToFloor>;
        partnerExportMappingConfigurationToFloors?: IPaginationList<PartnerExportMappingConfigurationToFloor>;
    }

    export interface DistributionCostType extends IEntity {
        id: number;
        name: string;
        code: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        roomTypes?: IPaginationList<RoomType>;
        rooms?: IPaginationList<Room>;
    }

    export interface RoomType extends IEntity {
        id: number;
        name: string;
        color?: string;
        icon?: IJupIcon;
        color3d?: string;
        displayWallsOn3d?: boolean;
        cadence?: number;
        isBookable?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        distributionCostTypeId?: number | null;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        distributionCostType?: DistributionCostType;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        rooms?: IPaginationList<Room>;
        roomTypeFloors?: IPaginationList<RoomTypeFloor>;
        roomTypeBuildings?: IPaginationList<RoomTypeBuilding>;
        partnerExportMappingToRoomTypes?: IPaginationList<PartnerExportMappingToRoomType>;
    }

    export interface CostCenter extends IEntity {
        id: number;
        name: string;
        color?: string;
        info?: string;
        distributeByFloor?: boolean;
        distributeByBuilding?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        costCenterBuildings?: IPaginationList<CostCenterBuilding>;
        costCenterFloors?: IPaginationList<CostCenterFloor>;
        rooms?: IPaginationList<Room>;
        people?: IPaginationList<Person>;
        workplaces?: IPaginationList<Workplace>;
    }

    export interface CostCenterBuilding extends IEntity {
        id: number;
        roomsArea: number;
        roomsCount: number;
        workplacesCount: number;
        workplacesRatio: number;
        peopleCount: number;
        seatsCount: number;
        peopleRatio: number;
        occupancyRate: number;
        expansionRatio: number;
        freeWorkplacesCount: number;
        flexWorkplacesCount: number;
        sharedWorkplacesCount: number;
        sharedWorkplacesRatio: number;
        transitWorkplacesCount: number;
        flexRatio: number;
        seatsPeopleRatio: number;
        totalPeopleCount: number;
        carbonFootprint: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        costCenterId: number;
        buildingId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        costCenter?: CostCenter;
        building?: Building;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface CostCenterFloor extends IEntity {
        id: number;
        roomsArea: number;
        roomsCount: number;
        workplacesCount: number;
        workplacesRatio: number;
        peopleCount: number;
        seatsCount: number;
        peopleRatio: number;
        occupancyRate: number;
        expansionRatio: number;
        freeWorkplacesCount: number;
        flexWorkplacesCount: number;
        sharedWorkplacesCount: number;
        sharedWorkplacesRatio: number;
        transitWorkplacesCount: number;
        flexRatio: number;
        seatsPeopleRatio: number;
        totalPeopleCount: number;
        carbonFootprint: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        costCenterId: number;
        floorId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        costCenter?: CostCenter;
        floor?: Floor;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface Room extends IEntity {
        id: number;
        name?: string;
        area?: number;
        perimeter?: number;
        textAnchor?: ITextAnchor;
        capacity?: number;
        workplacesCount?: number;
        workplacesRatio?: number;
        peopleCount?: number;
        seatsCount?: number;
        peopleRatio?: number;
        occupancyRate?: number;
        expansionRatio?: number;
        freeWorkplacesCount?: number;
        flexWorkplacesCount?: number;
        sharedWorkplacesCount?: number;
        sharedWorkplacesRatio?: number;
        transitWorkplacesCount?: number;
        flexRatio?: number;
        seatsPeopleRatio?: number;
        totalPeopleCount?: number;
        carbonFootprint?: number;
        info?: string;
        bookingEmail?: string;
        externalId2?: string;
        picture?: IJupImage;
        keyCylinderCode?: string;
        livePeopleCount?: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        floorId: number;
        occupancyStatusId?: number | null;
        roomTypeId?: number | null;
        organizationId?: number | null;
        costCenterId?: number | null;
        distributionCostTypeId?: number | null;
        roomConnectorId?: number | null;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        floor?: Floor;
        occupancyStatus?: OccupancyStatus;
        roomType?: RoomType;
        organization?: Organization;
        costCenter?: CostCenter;
        distributionCostType?: DistributionCostType;
        roomConnector?: RoomConnector;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        roomPointRooms?: IPaginationList<RoomPointRoom>;
        dimensionRooms?: IPaginationList<DimensionRoom>;
        roomAffectations?: IPaginationList<RoomAffectation>;
        workplaces?: IPaginationList<Workplace>;
        items?: IPaginationList<Item>;
    }

    export interface RoomPoint extends IEntity {
        id: number;
        x: number;
        y: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        floorId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        floor?: Floor;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        roomPointRooms?: IPaginationList<RoomPointRoom>;
        roomPointSegmentStarts?: IPaginationList<RoomPointSegment>;
        roomPointSegmentEnds?: IPaginationList<RoomPointSegment>;
    }

    export interface RoomPointRoom extends IEntity {
        id: number;
        sortIndex: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        roomId: number;
        roomPointId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        room?: Room;
        roomPoint?: RoomPoint;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface RoomPointSegmentType extends IEntity {
        id: number;
        name: string;
        code: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        roomPointSegments?: IPaginationList<RoomPointSegment>;
    }

    export interface RoomPointSegment extends IEntity {
        id: number;
        reversePoints?: boolean;
        displayBothSides?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        roomPointSegmentTypeId: number;
        roomPointStartId: number;
        roomPointEndId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        roomPointSegmentType?: RoomPointSegmentType;
        roomPointStart?: RoomPoint;
        roomPointEnd?: RoomPoint;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface ItemTypePoint extends IEntity {
        id: number;
        x: number;
        y: number;
        sortIndex: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        itemTypeId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        itemType?: ItemType;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface DimensionType extends IEntity {
        id: number;
        name: string;
        code?: string;
        order?: number;
        description?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        dimensions?: IPaginationList<Dimension>;
        dimensionRooms?: IPaginationList<DimensionRoom>;
        dimensionFloors?: IPaginationList<DimensionFloor>;
        dimensionBuildings?: IPaginationList<DimensionBuilding>;
        dimensionTypeToBuildings?: IPaginationList<DimensionTypeToBuilding>;
    }

    export interface Dimension extends IEntity {
        id: number;
        name: string;
        color?: string;
        value?: number;
        peopleCount?: number;
        carbonFootprintPerMeter?: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        dimensionTypeId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        dimensionType?: DimensionType;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        dimensionRooms?: IPaginationList<DimensionRoom>;
        dimensionFloors?: IPaginationList<DimensionFloor>;
        dimensionBuildings?: IPaginationList<DimensionBuilding>;
        dimensionToPeople?: IPaginationList<DimensionToPerson>;
    }

    export interface DimensionRoom extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        dimensionId: number;
        roomId: number;
        dimensionTypeId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        dimension?: Dimension;
        room?: Room;
        dimensionType?: DimensionType;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface DimensionFloor extends IEntity {
        id: number;
        dimensionPeopleCount: number;
        roomsArea: number;
        roomsCount: number;
        workplacesCount: number;
        workplacesRatio: number;
        peopleCount: number;
        seatsCount: number;
        peopleRatio: number;
        occupancyRate: number;
        expansionRatio: number;
        freeWorkplacesCount: number;
        flexWorkplacesCount: number;
        sharedWorkplacesCount: number;
        sharedWorkplacesRatio: number;
        transitWorkplacesCount: number;
        flexRatio: number;
        seatsPeopleRatio: number;
        totalPeopleCount: number;
        carbonFootprint: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        dimensionId?: number | null;
        dimensionTypeId: number;
        floorId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        dimension?: Dimension;
        dimensionType?: DimensionType;
        floor?: Floor;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface DimensionBuilding extends IEntity {
        id: number;
        dimensionPeopleCount: number;
        roomsArea: number;
        roomsCount: number;
        workplacesCount: number;
        workplacesRatio: number;
        peopleCount: number;
        seatsCount: number;
        peopleRatio: number;
        occupancyRate: number;
        expansionRatio: number;
        freeWorkplacesCount: number;
        flexWorkplacesCount: number;
        sharedWorkplacesCount: number;
        sharedWorkplacesRatio: number;
        transitWorkplacesCount: number;
        flexRatio: number;
        seatsPeopleRatio: number;
        totalPeopleCount: number;
        carbonFootprint: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        dimensionId?: number | null;
        dimensionTypeId: number;
        buildingId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        dimension?: Dimension;
        dimensionType?: DimensionType;
        building?: Building;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface FactType extends IEntity {
        id: number;
        name: string;
        code: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        facts?: IPaginationList<Fact>;
    }

    export interface Fact extends IEntity {
        id: number;
        value: number;
        date: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        factTypeId: number;
        buildingId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        factType?: FactType;
        building?: Building;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface PersonState extends IEntity {
        id: number;
        name: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        people?: IPaginationList<Person>;
    }

    export interface PersonSecurityProfile extends IEntity {
        id: number;
        name: string;
        color?: string;
        icon?: IJupIcon;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        people?: IPaginationList<Person>;
    }

    export interface Person extends IEntity {
        id: number;
        firstname: string;
        lastname: string;
        fullname?: string;
        email?: string;
        picture?: IJupImage;
        title?: string;
        monitorReference?: string;
        computerReference?: string;
        telephone?: string;
        cellphone?: string;
        code?: string;
        badgeNumber?: string;
        badgeRestaurant?: string;
        boxNumber?: string;
        registrationNumber?: string;
        startDate?: string;
        endDate?: string;
        info?: string;
        notAffectable?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        organizationId?: number | null;
        personStateId?: number | null;
        personSecurityProfileId?: number | null;
        costCenterId?: number | null;
        personCompanyId?: number | null;
        personGenderId?: number | null;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        organization?: Organization;
        personState?: PersonState;
        personSecurityProfile?: PersonSecurityProfile;
        costCenter?: CostCenter;
        personCompany?: PersonCompany;
        personGender?: PersonGender;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        personToPersonSources?: IPaginationList<PersonToPerson>;
        personToPersonTargets?: IPaginationList<PersonToPerson>;
        roomAffectations?: IPaginationList<RoomAffectation>;
        workplaceAffectations?: IPaginationList<WorkplaceAffectation>;
        itemToPeople?: IPaginationList<ItemToPerson>;
        personToBuildings?: IPaginationList<PersonToBuilding>;
        dimensionToPeople?: IPaginationList<DimensionToPerson>;
    }

    export interface PersonToPersonType extends IEntity {
        id: number;
        labelForward: string;
        labelBackward: string;
        code?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        personToPeople?: IPaginationList<PersonToPerson>;
    }

    export interface PersonToPerson extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        personToPersonTypeId?: number | null;
        personSourceId: number;
        personTargetId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        personToPersonType?: PersonToPersonType;
        personSource?: Person;
        personTarget?: Person;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface RoomAffectation extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        personId: number;
        roomId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        person?: Person;
        room?: Room;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface WorkplaceType extends IEntity {
        id: number;
        name: string;
        zIndex: number;
        color?: string;
        center?: IPoint3d;
        size?: ISize;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        workplaceTypeItemTypes?: IPaginationList<WorkplaceTypeItemType>;
        workplaces?: IPaginationList<Workplace>;
    }

    export interface WorkplaceTypeItemType extends IEntity {
        id: number;
        position: IPoint3d;
        physicalInventory?: boolean;
        rotation: number;
        zIndex: number;
        seatsCount?: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        workplaceTypeId: number;
        itemTypeId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        workplaceType?: WorkplaceType;
        itemType?: ItemType;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface Workplace extends IEntity {
        id: number;
        position: IPoint3d;
        rotation: number;
        isFlex?: boolean;
        isTransit?: boolean;
        isShared?: boolean;
        textAnchor?: ITextAnchor;
        name?: string;
        workplaceAffectationsCalculatedRateSum?: number;
        workplaceAffectationsCount?: number;
        comment?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        workplaceTypeId: number;
        roomId: number;
        organizationId?: number | null;
        costCenterId?: number | null;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        workplaceType?: WorkplaceType;
        room?: Room;
        organization?: Organization;
        costCenter?: CostCenter;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        items?: IPaginationList<Item>;
        workplaceAffectations?: IPaginationList<WorkplaceAffectation>;
    }

    export interface Item extends IEntity {
        id: number;
        code?: string;
        reference?: string;
        purchaseDate?: string;
        position: IPoint3d;
        rotation: number;
        textAnchor?: ITextAnchor;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        itemTypeId: number;
        roomId: number;
        workplaceId?: number | null;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        itemType?: ItemType;
        room?: Room;
        workplace?: Workplace;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        itemToPeople?: IPaginationList<ItemToPerson>;
        itemFacts?: IPaginationList<ItemFact>;
    }

    export interface WorkplaceAffectation extends IEntity {
        id: number;
        rate?: number;
        calculatedRate?: number;
        mondayRate?: number;
        tuesdayRate?: number;
        wednesdayRate?: number;
        thursdayRate?: number;
        fridayRate?: number;
        saturdayRate?: number;
        sundayRate?: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        personId: number;
        workplaceId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        person?: Person;
        workplace?: Workplace;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface OrganizationFloor extends IEntity {
        id: number;
        roomsArea: number;
        roomsCount: number;
        workplacesCount: number;
        workplacesRatio: number;
        peopleCount: number;
        seatsCount: number;
        peopleRatio: number;
        occupancyRate: number;
        expansionRatio: number;
        freeWorkplacesCount: number;
        flexWorkplacesCount: number;
        sharedWorkplacesCount: number;
        sharedWorkplacesRatio: number;
        transitWorkplacesCount: number;
        flexRatio: number;
        seatsPeopleRatio: number;
        totalPeopleCount: number;
        carbonFootprint: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        organizationId: number;
        floorId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        organization?: Organization;
        floor?: Floor;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface OrganizationBuilding extends IEntity {
        id: number;
        roomsArea: number;
        roomsCount: number;
        workplacesCount: number;
        workplacesRatio: number;
        peopleCount: number;
        seatsCount: number;
        peopleRatio: number;
        occupancyRate: number;
        expansionRatio: number;
        freeWorkplacesCount: number;
        flexWorkplacesCount: number;
        sharedWorkplacesCount: number;
        sharedWorkplacesRatio: number;
        transitWorkplacesCount: number;
        flexRatio: number;
        seatsPeopleRatio: number;
        totalPeopleCount: number;
        carbonFootprint: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        organizationId: number;
        buildingId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        organization?: Organization;
        building?: Building;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface RoomTypeFloor extends IEntity {
        id: number;
        roomsArea: number;
        roomsCount: number;
        workplacesCount: number;
        workplacesRatio: number;
        peopleCount: number;
        seatsCount: number;
        peopleRatio: number;
        occupancyRate: number;
        expansionRatio: number;
        freeWorkplacesCount: number;
        flexWorkplacesCount: number;
        sharedWorkplacesCount: number;
        sharedWorkplacesRatio: number;
        transitWorkplacesCount: number;
        flexRatio: number;
        seatsPeopleRatio: number;
        totalPeopleCount: number;
        carbonFootprint: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        roomTypeId: number;
        floorId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        roomType?: RoomType;
        floor?: Floor;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface RoomTypeBuilding extends IEntity {
        id: number;
        roomsArea: number;
        roomsCount: number;
        workplacesCount: number;
        workplacesRatio: number;
        peopleCount: number;
        seatsCount: number;
        peopleRatio: number;
        occupancyRate: number;
        expansionRatio: number;
        freeWorkplacesCount: number;
        flexWorkplacesCount: number;
        sharedWorkplacesCount: number;
        sharedWorkplacesRatio: number;
        transitWorkplacesCount: number;
        flexRatio: number;
        seatsPeopleRatio: number;
        totalPeopleCount: number;
        carbonFootprint: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        roomTypeId: number;
        buildingId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        roomType?: RoomType;
        building?: Building;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface ItemToPerson extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        personId: number;
        itemId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        person?: Person;
        item?: Item;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface PersonToBuilding extends IEntity {
        id: number;
        addToPeopleCount?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        personId: number;
        buildingId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        person?: Person;
        building?: Building;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface DimensionToPerson extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        dimensionId: number;
        personId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        dimension?: Dimension;
        person?: Person;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface DimensionTypeToBuilding extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        dimensionTypeId: number;
        buildingId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        dimensionType?: DimensionType;
        building?: Building;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface JupObjectType extends IEntity {
        id: number;
        name: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        jupUiViews?: IPaginationList<JupUiView>;
        jupRoleToJupObjectTypes?: IPaginationList<JupRoleToJupObjectType>;
    }

    export interface JupUiView extends IEntity {
        id: number;
        name: string;
        isDefaultView?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        jupObjectTypeId: number;
        jupObjectType?: JupObjectType;
        jupRoleToJupUiViews?: IPaginationList<JupRoleToJupUiView>;
    }

    export interface JupRole extends IEntity {
        id: number;
        code: string;
        name?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        jupUserCompanyToJupRoles?: IPaginationList<JupUserCompanyToJupRole>;
        jupRoleToJupUiViews?: IPaginationList<JupRoleToJupUiView>;
        jupRoleToJupObjectTypes?: IPaginationList<JupRoleToJupObjectType>;
        jupRoleToJupUiOptions?: IPaginationList<JupRoleToJupUiOption>;
        jupRoleToJupUiOperations?: IPaginationList<JupRoleToJupUiOperation>;
        apiUserToJupRoles?: IPaginationList<ApiUserToJupRole>;
        userRegistrationTenantRuleToJupRoles?: IPaginationList<UserRegistrationTenantRuleToJupRole>;
        jupRoleToJupUiLayouts?: IPaginationList<JupRoleToJupUiLayout>;
    }

    export interface JupUiOption extends IEntity {
        id: number;
        name: string;
        scope?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        jupRoleToJupUiOptions?: IPaginationList<JupRoleToJupUiOption>;
    }

    export interface JupUiOperation extends IEntity {
        id: number;
        name: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        jupRoleToJupUiOperations?: IPaginationList<JupRoleToJupUiOperation>;
    }

    export interface ContentRole extends IEntity {
        id: number;
        name?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        contentRoleToBuildings?: IPaginationList<ContentRoleToBuilding>;
        contentRoleToUserCompanies?: IPaginationList<ContentRoleToUserCompany>;
        contentRoleToFloors?: IPaginationList<ContentRoleToFloor>;
        apiUserToContentRoles?: IPaginationList<ApiUserToContentRole>;
        contentRoleToJupUiTenantOperations?: IPaginationList<ContentRoleToJupUiTenantOperation>;
        userRegistrationTenantRuleToContentRoles?: IPaginationList<UserRegistrationTenantRuleToContentRole>;
    }

    export interface JupUserCompanyToJupRole extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyId: number;
        jupRoleId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompany?: UserCompany;
        jupRole?: JupRole;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface JupRoleToJupUiView extends IEntity {
        id: number;
        canSee?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        jupUiViewId: number;
        jupRoleId: number;
        jupUiView?: JupUiView;
        jupRole?: JupRole;
    }

    export interface JupRoleToJupObjectType extends IEntity {
        id: number;
        arCreate?: boolean;
        arRead?: boolean;
        arUpdate?: boolean;
        arDelete?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        jupObjectTypeId: number;
        jupRoleId: number;
        jupObjectType?: JupObjectType;
        jupRole?: JupRole;
    }

    export interface JupRoleToJupUiOption extends IEntity {
        id: number;
        canSee?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        jupUiOptionId: number;
        jupRoleId: number;
        jupUiOption?: JupUiOption;
        jupRole?: JupRole;
    }

    export interface JupRoleToJupUiOperation extends IEntity {
        id: number;
        canSee?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        jupUiOperationId: number;
        jupRoleId: number;
        jupUiOperation?: JupUiOperation;
        jupRole?: JupRole;
    }

    export interface ContentRoleToBuilding extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        contentRoleId: number;
        buildingId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        contentRole?: ContentRole;
        building?: Building;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface ContentRoleToUserCompany extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyId: number;
        contentRoleId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompany?: UserCompany;
        contentRole?: ContentRole;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface ContentRoleToFloor extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        contentRoleId: number;
        floorId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        contentRole?: ContentRole;
        floor?: Floor;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface PartnerApiCredential extends IEntity {
        id: number;
        label: string;
        code: string;
        host: string;
        clientId: string;
        clientSecret: string;
        enable?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface ApiUser extends IEntity {
        id: number;
        clientSecret: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        apiUserToJupRoles?: IPaginationList<ApiUserToJupRole>;
        apiUserToContentRoles?: IPaginationList<ApiUserToContentRole>;
    }

    export interface ApiUserToJupRole extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        apiUserId: number;
        jupRoleId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        apiUser?: ApiUser;
        jupRole?: JupRole;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface ApiUserToContentRole extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        apiUserId: number;
        contentRoleId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        apiUser?: ApiUser;
        contentRole?: ContentRole;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface JupUiTenantOperation extends IEntity {
        id: number;
        name: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        contentRoleToJupUiTenantOperations?: IPaginationList<ContentRoleToJupUiTenantOperation>;
    }

    export interface ContentRoleToJupUiTenantOperation extends IEntity {
        id: number;
        canSee?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        jupUiTenantOperationId: number;
        contentRoleId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        jupUiTenantOperation?: JupUiTenantOperation;
        contentRole?: ContentRole;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface AuthentificationConnection extends IEntity {
        id: number;
        name: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userRegistrationTenantRules?: IPaginationList<UserRegistrationTenantRule>;
    }

    export interface UserRegistrationTenantRule extends IEntity {
        id: number;
        name?: string;
        domains?: string;
        automaticUserToRoleMapping?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        authentificationConnectionId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        authentificationConnection?: AuthentificationConnection;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        userRegistrationTenantRuleToJupRoles?: IPaginationList<UserRegistrationTenantRuleToJupRole>;
        userRegistrationTenantRuleToContentRoles?: IPaginationList<UserRegistrationTenantRuleToContentRole>;
    }

    export interface UserRegistrationTenantRuleToJupRole extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userRegistrationTenantRuleId: number;
        jupRoleId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userRegistrationTenantRule?: UserRegistrationTenantRule;
        jupRole?: JupRole;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface UserRegistrationTenantRuleToContentRole extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userRegistrationTenantRuleId: number;
        contentRoleId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userRegistrationTenantRule?: UserRegistrationTenantRule;
        contentRole?: ContentRole;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface PartnerExportMappingConfiguration extends IEntity {
        id: number;
        code: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        partnerExportMappings?: IPaginationList<PartnerExportMapping>;
        partnerExportMappingConfigurationToFloors?: IPaginationList<PartnerExportMappingConfigurationToFloor>;
    }

    export interface PartnerExportMapping extends IEntity {
        id: number;
        partnerCode: string;
        label?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        partnerExportMappingConfigurationId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        partnerExportMappingConfiguration?: PartnerExportMappingConfiguration;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
        partnerExportMappingToRoomTypes?: IPaginationList<PartnerExportMappingToRoomType>;
    }

    export interface PartnerExportMappingToRoomType extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        partnerExportMappingId: number;
        roomTypeId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        partnerExportMapping?: PartnerExportMapping;
        roomType?: RoomType;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface PartnerExportMappingConfigurationToFloor extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        partnerExportMappingConfigurationId: number;
        floorId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        partnerExportMappingConfiguration?: PartnerExportMappingConfiguration;
        floor?: Floor;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }

    export interface JupRoleToJupUiLayout extends IEntity {
        id: number;
        canSee?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        jupUiLayoutId: number;
        jupRoleId: number;
        jupUiLayout?: JupUiLayout;
        jupRole?: JupRole;
    }

    export interface ItemFact extends IEntity {
        id: number;
        measure?: string;
        value: number;
        voltage?: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        itemId: number;
        userCompanyCreatedById?: number | null;
        userCompanyUpdatedById?: number | null;
        companyId?: number | null;
        item?: Item;
        userCompanyCreatedBy?: UserCompany;
        userCompanyUpdatedBy?: UserCompany;
        company?: Company;
    }
    export type ObjectTypes = "OccupancyStatus" | "User" | "CompanyType" | "Company" | "RoomConnectorType" | "RoomConnector" | "UserCompany" | "PersonGender" | "PersonCompany" | "JupUiLayout" | "BuildingType" | "Organization" | "ItemTypeFamily" | "Manufacturer" | "Object3dModel" | "ItemType" | "Building" | "MapScale" | "Structure" | "StructurePoint" | "Floor" | "DistributionCostType" | "RoomType" | "CostCenter" | "CostCenterBuilding" | "CostCenterFloor" | "Room" | "RoomPoint" | "RoomPointRoom" | "RoomPointSegmentType" | "RoomPointSegment" | "ItemTypePoint" | "DimensionType" | "Dimension" | "DimensionRoom" | "DimensionFloor" | "DimensionBuilding" | "FactType" | "Fact" | "PersonState" | "PersonSecurityProfile" | "Person" | "PersonToPersonType" | "PersonToPerson" | "RoomAffectation" | "WorkplaceType" | "WorkplaceTypeItemType" | "Workplace" | "Item" | "WorkplaceAffectation" | "OrganizationFloor" | "OrganizationBuilding" | "RoomTypeFloor" | "RoomTypeBuilding" | "ItemToPerson" | "PersonToBuilding" | "DimensionToPerson" | "DimensionTypeToBuilding" | "JupObjectType" | "JupUiView" | "JupRole" | "JupUiOption" | "JupUiOperation" | "ContentRole" | "JupUserCompanyToJupRole" | "JupRoleToJupUiView" | "JupRoleToJupObjectType" | "JupRoleToJupUiOption" | "JupRoleToJupUiOperation" | "ContentRoleToBuilding" | "ContentRoleToUserCompany" | "ContentRoleToFloor" | "PartnerApiCredential" | "ApiUser" | "ApiUserToJupRole" | "ApiUserToContentRole" | "JupUiTenantOperation" | "ContentRoleToJupUiTenantOperation" | "AuthentificationConnection" | "UserRegistrationTenantRule" | "UserRegistrationTenantRuleToJupRole" | "UserRegistrationTenantRuleToContentRole" | "PartnerExportMappingConfiguration" | "PartnerExportMapping" | "PartnerExportMappingToRoomType" | "PartnerExportMappingConfigurationToFloor" | "JupRoleToJupUiLayout" | "ItemFact";
    export type CamelizedObjectTypes = "occupancyStatus" | "user" | "companyType" | "company" | "roomConnectorType" | "roomConnector" | "userCompany" | "personGender" | "personCompany" | "jupUiLayout" | "buildingType" | "organization" | "itemTypeFamily" | "manufacturer" | "object3dModel" | "itemType" | "building" | "mapScale" | "structure" | "structurePoint" | "floor" | "distributionCostType" | "roomType" | "costCenter" | "costCenterBuilding" | "costCenterFloor" | "room" | "roomPoint" | "roomPointRoom" | "roomPointSegmentType" | "roomPointSegment" | "itemTypePoint" | "dimensionType" | "dimension" | "dimensionRoom" | "dimensionFloor" | "dimensionBuilding" | "factType" | "fact" | "personState" | "personSecurityProfile" | "person" | "personToPersonType" | "personToPerson" | "roomAffectation" | "workplaceType" | "workplaceTypeItemType" | "workplace" | "item" | "workplaceAffectation" | "organizationFloor" | "organizationBuilding" | "roomTypeFloor" | "roomTypeBuilding" | "itemToPerson" | "personToBuilding" | "dimensionToPerson" | "dimensionTypeToBuilding" | "jupObjectType" | "jupUiView" | "jupRole" | "jupUiOption" | "jupUiOperation" | "contentRole" | "jupUserCompanyToJupRole" | "jupRoleToJupUiView" | "jupRoleToJupObjectType" | "jupRoleToJupUiOption" | "jupRoleToJupUiOperation" | "contentRoleToBuilding" | "contentRoleToUserCompany" | "contentRoleToFloor" | "partnerApiCredential" | "apiUser" | "apiUserToJupRole" | "apiUserToContentRole" | "jupUiTenantOperation" | "contentRoleToJupUiTenantOperation" | "authentificationConnection" | "userRegistrationTenantRule" | "userRegistrationTenantRuleToJupRole" | "userRegistrationTenantRuleToContentRole" | "partnerExportMappingConfiguration" | "partnerExportMapping" | "partnerExportMappingToRoomType" | "partnerExportMappingConfigurationToFloor" | "jupRoleToJupUiLayout" | "itemFact";
    export type Types = Surfy.OccupancyStatus | Surfy.User | Surfy.CompanyType | Surfy.Company | Surfy.RoomConnectorType | Surfy.RoomConnector | Surfy.UserCompany | Surfy.PersonGender | Surfy.PersonCompany | Surfy.JupUiLayout | Surfy.BuildingType | Surfy.Organization | Surfy.ItemTypeFamily | Surfy.Manufacturer | Surfy.Object3dModel | Surfy.ItemType | Surfy.Building | Surfy.MapScale | Surfy.Structure | Surfy.StructurePoint | Surfy.Floor | Surfy.DistributionCostType | Surfy.RoomType | Surfy.CostCenter | Surfy.CostCenterBuilding | Surfy.CostCenterFloor | Surfy.Room | Surfy.RoomPoint | Surfy.RoomPointRoom | Surfy.RoomPointSegmentType | Surfy.RoomPointSegment | Surfy.ItemTypePoint | Surfy.DimensionType | Surfy.Dimension | Surfy.DimensionRoom | Surfy.DimensionFloor | Surfy.DimensionBuilding | Surfy.FactType | Surfy.Fact | Surfy.PersonState | Surfy.PersonSecurityProfile | Surfy.Person | Surfy.PersonToPersonType | Surfy.PersonToPerson | Surfy.RoomAffectation | Surfy.WorkplaceType | Surfy.WorkplaceTypeItemType | Surfy.Workplace | Surfy.Item | Surfy.WorkplaceAffectation | Surfy.OrganizationFloor | Surfy.OrganizationBuilding | Surfy.RoomTypeFloor | Surfy.RoomTypeBuilding | Surfy.ItemToPerson | Surfy.PersonToBuilding | Surfy.DimensionToPerson | Surfy.DimensionTypeToBuilding | Surfy.JupObjectType | Surfy.JupUiView | Surfy.JupRole | Surfy.JupUiOption | Surfy.JupUiOperation | Surfy.ContentRole | Surfy.JupUserCompanyToJupRole | Surfy.JupRoleToJupUiView | Surfy.JupRoleToJupObjectType | Surfy.JupRoleToJupUiOption | Surfy.JupRoleToJupUiOperation | Surfy.ContentRoleToBuilding | Surfy.ContentRoleToUserCompany | Surfy.ContentRoleToFloor | Surfy.PartnerApiCredential | Surfy.ApiUser | Surfy.ApiUserToJupRole | Surfy.ApiUserToContentRole | Surfy.JupUiTenantOperation | Surfy.ContentRoleToJupUiTenantOperation | Surfy.AuthentificationConnection | Surfy.UserRegistrationTenantRule | Surfy.UserRegistrationTenantRuleToJupRole | Surfy.UserRegistrationTenantRuleToContentRole | Surfy.PartnerExportMappingConfiguration | Surfy.PartnerExportMapping | Surfy.PartnerExportMappingToRoomType | Surfy.PartnerExportMappingConfigurationToFloor | Surfy.JupRoleToJupUiLayout | Surfy.ItemFact;

}
