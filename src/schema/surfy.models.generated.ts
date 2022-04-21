
/* eslint-disable */

import { IEntity, IJupImage, IJupIcon, IJupAddress, IPoint2d, IPoint3d, IPaginationList, ITextAnchor } from "../jup.models";

export namespace Surfy {
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
    }

    export interface JupUiOption extends IEntity {
        id: number;
        name: string;
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
        companyId?: number;
        company?: Company;
        contentRoleToBuildings?: IPaginationList<ContentRoleToBuilding>;
        contentRoleToUserCompanies?: IPaginationList<ContentRoleToUserCompany>;
        contentRoleToFloors?: IPaginationList<ContentRoleToFloor>;
        apiUserToContentRoles?: IPaginationList<ApiUserToContentRole>;
        contentRoleToJupUiTenantOperations?: IPaginationList<ContentRoleToJupUiTenantOperation>;
    }

    export interface JupUserCompanyToJupRole extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyId: number;
        jupRoleId: number;
        companyId?: number;
        userCompany?: UserCompany;
        jupRole?: JupRole;
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
        companyId?: number;
        contentRole?: ContentRole;
        building?: Building;
        company?: Company;
    }

    export interface ContentRoleToUserCompany extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userCompanyId: number;
        contentRoleId: number;
        companyId?: number;
        userCompany?: UserCompany;
        contentRole?: ContentRole;
        company?: Company;
    }

    export interface ContentRoleToFloor extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        contentRoleId: number;
        floorId: number;
        companyId?: number;
        contentRole?: ContentRole;
        floor?: Floor;
        company?: Company;
    }

    export interface PartnerApiCredential extends IEntity {
        id: number;
        label?: string;
        code: string;
        host: string;
        clientId: string;
        clientSecret: string;
        enable?: boolean;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        companyId?: number;
        company?: Company;
    }

    export interface ApiUser extends IEntity {
        id: number;
        clientSecret: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        companyId?: number;
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
        companyId?: number;
        apiUser?: ApiUser;
        jupRole?: JupRole;
        company?: Company;
    }

    export interface ApiUserToContentRole extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        apiUserId: number;
        contentRoleId: number;
        companyId?: number;
        apiUser?: ApiUser;
        contentRole?: ContentRole;
        company?: Company;
    }

    export interface JupUiTenantOperation extends IEntity {
        id: number;
        name: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        companyId?: number;
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
        companyId?: number;
        jupUiTenantOperation?: JupUiTenantOperation;
        contentRole?: ContentRole;
        company?: Company;
    }

    export interface Company extends IEntity {
        id: number;
        name: string;
        logoPath?: IJupImage;
        iconPath?: IJupImage;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        buildingTypes?: IPaginationList<BuildingType>;
        buildings?: IPaginationList<Building>;
        userCompanies?: IPaginationList<UserCompany>;
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
        company?: Company;
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
        organizationId?: number;
        companyId?: number;
        organization?: Organization;
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
        companyId?: number;
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
        companyId?: number;
        company?: Company;
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
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        itemTypeFamilyId: number;
        manufacturerId?: number;
        companyId?: number;
        itemTypeFamily?: ItemTypeFamily;
        manufacturer?: Manufacturer;
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
        roomsArea?: number;
        roomsCount?: number;
        workplacesCount?: number;
        workplacesRatio?: number;
        peopleCount?: number;
        peopleRatio?: number;
        occupancyRate?: number;
        expansionRatio?: number;
        freeWorkplacesCount?: number;
        flexWorkplacesCount?: number;
        sharedWorkplacesCount?: number;
        sharedWorkplacesRatio?: number;
        transitWorkplacesCount?: number;
        address?: IJupAddress;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        companyId: number;
        buildingTypeId?: number;
        buildingId?: number;
        company?: Company;
        buildingType?: BuildingType;
        building?: Building;
        contentRoleToBuildings?: IPaginationList<ContentRoleToBuilding>;
        buildings?: IPaginationList<Building>;
        floors?: IPaginationList<Floor>;
        costCenterBuildings?: IPaginationList<CostCenterBuilding>;
        dimensionBuildings?: IPaginationList<DimensionBuilding>;
        facts?: IPaginationList<Fact>;
        organizationBuildings?: IPaginationList<OrganizationBuilding>;
        roomTypeBuildings?: IPaginationList<RoomTypeBuilding>;
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
        companyId?: number;
        company?: Company;
        floors?: IPaginationList<Floor>;
    }

    export interface Floor extends IEntity {
        id: number;
        name: string;
        level: number;
        regulatoryCapacity?: number;
        roomsArea?: number;
        roomsCount?: number;
        workplacesCount?: number;
        workplacesRatio?: number;
        peopleCount?: number;
        peopleRatio?: number;
        occupancyRate?: number;
        expansionRatio?: number;
        freeWorkplacesCount?: number;
        flexWorkplacesCount?: number;
        sharedWorkplacesCount?: number;
        sharedWorkplacesRatio?: number;
        transitWorkplacesCount?: number;
        backgroundLayout?: IJupImage;
        backgroundLayoutOpacity?: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        buildingId: number;
        mapScaleId?: number;
        companyId?: number;
        building?: Building;
        mapScale?: MapScale;
        company?: Company;
        contentRoleToFloors?: IPaginationList<ContentRoleToFloor>;
        costCenterFloors?: IPaginationList<CostCenterFloor>;
        rooms?: IPaginationList<Room>;
        roomPoints?: IPaginationList<RoomPoint>;
        dimensionFloors?: IPaginationList<DimensionFloor>;
        organizationFloors?: IPaginationList<OrganizationFloor>;
        roomTypeFloors?: IPaginationList<RoomTypeFloor>;
    }

    export interface DistributionCostType extends IEntity {
        id: number;
        name: string;
        code: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        companyId?: number;
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
        distributionCostTypeId?: number;
        companyId?: number;
        distributionCostType?: DistributionCostType;
        company?: Company;
        rooms?: IPaginationList<Room>;
        roomTypeFloors?: IPaginationList<RoomTypeFloor>;
        roomTypeBuildings?: IPaginationList<RoomTypeBuilding>;
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
        companyId?: number;
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
        peopleRatio: number;
        occupancyRate: number;
        expansionRatio: number;
        freeWorkplacesCount: number;
        flexWorkplacesCount: number;
        sharedWorkplacesCount: number;
        sharedWorkplacesRatio: number;
        transitWorkplacesCount: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        costCenterId: number;
        buildingId: number;
        companyId?: number;
        costCenter?: CostCenter;
        building?: Building;
        company?: Company;
    }

    export interface CostCenterFloor extends IEntity {
        id: number;
        roomsArea: number;
        roomsCount: number;
        workplacesCount: number;
        workplacesRatio: number;
        peopleCount: number;
        peopleRatio: number;
        occupancyRate: number;
        expansionRatio: number;
        freeWorkplacesCount: number;
        flexWorkplacesCount: number;
        sharedWorkplacesCount: number;
        sharedWorkplacesRatio: number;
        transitWorkplacesCount: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        costCenterId: number;
        floorId: number;
        companyId?: number;
        costCenter?: CostCenter;
        floor?: Floor;
        company?: Company;
    }

    export interface Room extends IEntity {
        id: number;
        name?: string;
        position?: IPoint2d;
        area?: number;
        perimeter?: number;
        textAnchor?: ITextAnchor;
        capacity?: number;
        workplacesCount?: number;
        workplacesRatio?: number;
        peopleCount?: number;
        peopleRatio?: number;
        occupancyRate?: number;
        expansionRatio?: number;
        freeWorkplacesCount?: number;
        flexWorkplacesCount?: number;
        sharedWorkplacesCount?: number;
        sharedWorkplacesRatio?: number;
        transitWorkplacesCount?: number;
        info?: string;
        bookingEmail?: string;
        externalId2?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        floorId: number;
        roomTypeId?: number;
        organizationId?: number;
        costCenterId?: number;
        distributionCostTypeId?: number;
        companyId?: number;
        floor?: Floor;
        roomType?: RoomType;
        organization?: Organization;
        costCenter?: CostCenter;
        distributionCostType?: DistributionCostType;
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
        companyId?: number;
        floor?: Floor;
        company?: Company;
        roomPointRooms?: IPaginationList<RoomPointRoom>;
    }

    export interface RoomPointRoom extends IEntity {
        id: number;
        sortIndex: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        roomId: number;
        roomPointId: number;
        companyId?: number;
        room?: Room;
        roomPoint?: RoomPoint;
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
        companyId?: number;
        itemType?: ItemType;
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
        companyId?: number;
        company?: Company;
        dimensions?: IPaginationList<Dimension>;
        dimensionRooms?: IPaginationList<DimensionRoom>;
        dimensionFloors?: IPaginationList<DimensionFloor>;
        dimensionBuildings?: IPaginationList<DimensionBuilding>;
    }

    export interface Dimension extends IEntity {
        id: number;
        name: string;
        color?: string;
        value?: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        dimensionTypeId: number;
        companyId?: number;
        dimensionType?: DimensionType;
        company?: Company;
        dimensionRooms?: IPaginationList<DimensionRoom>;
        dimensionFloors?: IPaginationList<DimensionFloor>;
        dimensionBuildings?: IPaginationList<DimensionBuilding>;
    }

    export interface DimensionRoom extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        dimensionId: number;
        roomId: number;
        dimensionTypeId: number;
        companyId?: number;
        dimension?: Dimension;
        room?: Room;
        dimensionType?: DimensionType;
        company?: Company;
    }

    export interface DimensionFloor extends IEntity {
        id: number;
        roomsArea: number;
        roomsCount: number;
        workplacesCount: number;
        workplacesRatio: number;
        peopleCount: number;
        peopleRatio: number;
        occupancyRate: number;
        expansionRatio: number;
        freeWorkplacesCount: number;
        flexWorkplacesCount: number;
        sharedWorkplacesCount: number;
        sharedWorkplacesRatio: number;
        transitWorkplacesCount: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        dimensionId?: number;
        dimensionTypeId: number;
        floorId: number;
        companyId?: number;
        dimension?: Dimension;
        dimensionType?: DimensionType;
        floor?: Floor;
        company?: Company;
    }

    export interface DimensionBuilding extends IEntity {
        id: number;
        roomsArea: number;
        roomsCount: number;
        workplacesCount: number;
        workplacesRatio: number;
        peopleCount: number;
        peopleRatio: number;
        occupancyRate: number;
        expansionRatio: number;
        freeWorkplacesCount: number;
        flexWorkplacesCount: number;
        sharedWorkplacesCount: number;
        sharedWorkplacesRatio: number;
        transitWorkplacesCount: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        dimensionId?: number;
        dimensionTypeId: number;
        buildingId: number;
        companyId?: number;
        dimension?: Dimension;
        dimensionType?: DimensionType;
        building?: Building;
        company?: Company;
    }

    export interface FactType extends IEntity {
        id: number;
        name: string;
        code: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        companyId?: number;
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
        companyId?: number;
        factType?: FactType;
        building?: Building;
        company?: Company;
    }

    export interface PersonState extends IEntity {
        id: number;
        name: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        companyId?: number;
        company?: Company;
        people?: IPaginationList<Person>;
    }

    export interface PersonSecurityProfile extends IEntity {
        id: number;
        name: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        companyId?: number;
        company?: Company;
        people?: IPaginationList<Person>;
    }

    export interface Person extends IEntity {
        id: number;
        firstname: string;
        lastname: string;
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
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        organizationId?: number;
        personStateId?: number;
        personSecurityProfileId?: number;
        costCenterId?: number;
        companyId?: number;
        organization?: Organization;
        personState?: PersonState;
        personSecurityProfile?: PersonSecurityProfile;
        costCenter?: CostCenter;
        company?: Company;
        personToPersonSources?: IPaginationList<PersonToPerson>;
        personToPersonTargets?: IPaginationList<PersonToPerson>;
        roomAffectations?: IPaginationList<RoomAffectation>;
        workplaceAffectations?: IPaginationList<WorkplaceAffectation>;
        itemToPeople?: IPaginationList<ItemToPerson>;
    }

    export interface PersonToPersonType extends IEntity {
        id: number;
        labelForward: string;
        labelBackward: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        companyId?: number;
        company?: Company;
        personToPeople?: IPaginationList<PersonToPerson>;
    }

    export interface PersonToPerson extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        personToPersonTypeId?: number;
        personSourceId: number;
        personTargetId: number;
        companyId?: number;
        personToPersonType?: PersonToPersonType;
        personSource?: Person;
        personTarget?: Person;
        company?: Company;
    }

    export interface RoomAffectation extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        personId: number;
        roomId: number;
        companyId?: number;
        person?: Person;
        room?: Room;
        company?: Company;
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

    export interface UserCompany extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        userId: number;
        companyId: number;
        user?: User;
        company?: Company;
        jupUserCompanyToJupRoles?: IPaginationList<JupUserCompanyToJupRole>;
        contentRoleToUserCompanies?: IPaginationList<ContentRoleToUserCompany>;
    }

    export interface WorkplaceType extends IEntity {
        id: number;
        name: string;
        zIndex: number;
        color?: string;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        companyId?: number;
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
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        workplaceTypeId: number;
        itemTypeId: number;
        companyId?: number;
        workplaceType?: WorkplaceType;
        itemType?: ItemType;
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
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        workplaceTypeId: number;
        roomId: number;
        organizationId?: number;
        costCenterId?: number;
        companyId?: number;
        workplaceType?: WorkplaceType;
        room?: Room;
        organization?: Organization;
        costCenter?: CostCenter;
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
        workplaceId?: number;
        companyId?: number;
        itemType?: ItemType;
        room?: Room;
        workplace?: Workplace;
        company?: Company;
        itemToPeople?: IPaginationList<ItemToPerson>;
        itemFacts?: IPaginationList<ItemFact>;
    }

    export interface WorkplaceAffectation extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        personId: number;
        workplaceId: number;
        companyId?: number;
        person?: Person;
        workplace?: Workplace;
        company?: Company;
    }

    export interface OrganizationFloor extends IEntity {
        id: number;
        roomsArea: number;
        roomsCount: number;
        workplacesCount: number;
        workplacesRatio: number;
        peopleCount: number;
        peopleRatio: number;
        occupancyRate: number;
        expansionRatio: number;
        freeWorkplacesCount: number;
        flexWorkplacesCount: number;
        sharedWorkplacesCount: number;
        sharedWorkplacesRatio: number;
        transitWorkplacesCount: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        organizationId: number;
        floorId: number;
        companyId?: number;
        organization?: Organization;
        floor?: Floor;
        company?: Company;
    }

    export interface OrganizationBuilding extends IEntity {
        id: number;
        roomsArea: number;
        roomsCount: number;
        workplacesCount: number;
        workplacesRatio: number;
        peopleCount: number;
        peopleRatio: number;
        occupancyRate: number;
        expansionRatio: number;
        freeWorkplacesCount: number;
        flexWorkplacesCount: number;
        sharedWorkplacesCount: number;
        sharedWorkplacesRatio: number;
        transitWorkplacesCount: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        organizationId: number;
        buildingId: number;
        companyId?: number;
        organization?: Organization;
        building?: Building;
        company?: Company;
    }

    export interface RoomTypeFloor extends IEntity {
        id: number;
        roomsArea: number;
        roomsCount: number;
        workplacesCount: number;
        workplacesRatio: number;
        peopleCount: number;
        peopleRatio: number;
        occupancyRate: number;
        expansionRatio: number;
        freeWorkplacesCount: number;
        flexWorkplacesCount: number;
        sharedWorkplacesCount: number;
        sharedWorkplacesRatio: number;
        transitWorkplacesCount: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        roomTypeId: number;
        floorId: number;
        companyId?: number;
        roomType?: RoomType;
        floor?: Floor;
        company?: Company;
    }

    export interface RoomTypeBuilding extends IEntity {
        id: number;
        roomsArea: number;
        roomsCount: number;
        workplacesCount: number;
        workplacesRatio: number;
        peopleCount: number;
        peopleRatio: number;
        occupancyRate: number;
        expansionRatio: number;
        freeWorkplacesCount: number;
        flexWorkplacesCount: number;
        sharedWorkplacesCount: number;
        sharedWorkplacesRatio: number;
        transitWorkplacesCount: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        roomTypeId: number;
        buildingId: number;
        companyId?: number;
        roomType?: RoomType;
        building?: Building;
        company?: Company;
    }

    export interface ItemToPerson extends IEntity {
        id: number;
        createdAt?: string;
        updatedAt?: string;
        externalId?: string;
        personId: number;
        itemId: number;
        companyId?: number;
        person?: Person;
        item?: Item;
        company?: Company;
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
        companyId?: number;
        item?: Item;
        company?: Company;
    }
    export type ObjectTypes = "JupObjectType" | "JupUiView" | "JupRole" | "JupUiOption" | "JupUiOperation" | "ContentRole" | "JupUserCompanyToJupRole" | "JupRoleToJupUiView" | "JupRoleToJupObjectType" | "JupRoleToJupUiOption" | "JupRoleToJupUiOperation" | "ContentRoleToBuilding" | "ContentRoleToUserCompany" | "ContentRoleToFloor" | "PartnerApiCredential" | "ApiUser" | "ApiUserToJupRole" | "ApiUserToContentRole" | "JupUiTenantOperation" | "ContentRoleToJupUiTenantOperation" | "Company" | "BuildingType" | "Organization" | "ItemTypeFamily" | "Manufacturer" | "ItemType" | "Building" | "MapScale" | "Floor" | "DistributionCostType" | "RoomType" | "CostCenter" | "CostCenterBuilding" | "CostCenterFloor" | "Room" | "RoomPoint" | "RoomPointRoom" | "ItemTypePoint" | "DimensionType" | "Dimension" | "DimensionRoom" | "DimensionFloor" | "DimensionBuilding" | "FactType" | "Fact" | "PersonState" | "PersonSecurityProfile" | "Person" | "PersonToPersonType" | "PersonToPerson" | "RoomAffectation" | "User" | "UserCompany" | "WorkplaceType" | "WorkplaceTypeItemType" | "Workplace" | "Item" | "WorkplaceAffectation" | "OrganizationFloor" | "OrganizationBuilding" | "RoomTypeFloor" | "RoomTypeBuilding" | "ItemToPerson" | "ItemFact";
    export type CamelizedObjectTypes = "jupObjectType" | "jupUiView" | "jupRole" | "jupUiOption" | "jupUiOperation" | "contentRole" | "jupUserCompanyToJupRole" | "jupRoleToJupUiView" | "jupRoleToJupObjectType" | "jupRoleToJupUiOption" | "jupRoleToJupUiOperation" | "contentRoleToBuilding" | "contentRoleToUserCompany" | "contentRoleToFloor" | "partnerApiCredential" | "apiUser" | "apiUserToJupRole" | "apiUserToContentRole" | "jupUiTenantOperation" | "contentRoleToJupUiTenantOperation" | "company" | "buildingType" | "organization" | "itemTypeFamily" | "manufacturer" | "itemType" | "building" | "mapScale" | "floor" | "distributionCostType" | "roomType" | "costCenter" | "costCenterBuilding" | "costCenterFloor" | "room" | "roomPoint" | "roomPointRoom" | "itemTypePoint" | "dimensionType" | "dimension" | "dimensionRoom" | "dimensionFloor" | "dimensionBuilding" | "factType" | "fact" | "personState" | "personSecurityProfile" | "person" | "personToPersonType" | "personToPerson" | "roomAffectation" | "user" | "userCompany" | "workplaceType" | "workplaceTypeItemType" | "workplace" | "item" | "workplaceAffectation" | "organizationFloor" | "organizationBuilding" | "roomTypeFloor" | "roomTypeBuilding" | "itemToPerson" | "itemFact";
    export type Types = Surfy.JupObjectType | Surfy.JupUiView | Surfy.JupRole | Surfy.JupUiOption | Surfy.JupUiOperation | Surfy.ContentRole | Surfy.JupUserCompanyToJupRole | Surfy.JupRoleToJupUiView | Surfy.JupRoleToJupObjectType | Surfy.JupRoleToJupUiOption | Surfy.JupRoleToJupUiOperation | Surfy.ContentRoleToBuilding | Surfy.ContentRoleToUserCompany | Surfy.ContentRoleToFloor | Surfy.PartnerApiCredential | Surfy.ApiUser | Surfy.ApiUserToJupRole | Surfy.ApiUserToContentRole | Surfy.JupUiTenantOperation | Surfy.ContentRoleToJupUiTenantOperation | Surfy.Company | Surfy.BuildingType | Surfy.Organization | Surfy.ItemTypeFamily | Surfy.Manufacturer | Surfy.ItemType | Surfy.Building | Surfy.MapScale | Surfy.Floor | Surfy.DistributionCostType | Surfy.RoomType | Surfy.CostCenter | Surfy.CostCenterBuilding | Surfy.CostCenterFloor | Surfy.Room | Surfy.RoomPoint | Surfy.RoomPointRoom | Surfy.ItemTypePoint | Surfy.DimensionType | Surfy.Dimension | Surfy.DimensionRoom | Surfy.DimensionFloor | Surfy.DimensionBuilding | Surfy.FactType | Surfy.Fact | Surfy.PersonState | Surfy.PersonSecurityProfile | Surfy.Person | Surfy.PersonToPersonType | Surfy.PersonToPerson | Surfy.RoomAffectation | Surfy.User | Surfy.UserCompany | Surfy.WorkplaceType | Surfy.WorkplaceTypeItemType | Surfy.Workplace | Surfy.Item | Surfy.WorkplaceAffectation | Surfy.OrganizationFloor | Surfy.OrganizationBuilding | Surfy.RoomTypeFloor | Surfy.RoomTypeBuilding | Surfy.ItemToPerson | Surfy.ItemFact;

}
