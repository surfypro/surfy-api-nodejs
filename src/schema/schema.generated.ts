
/* eslint-disable */
/* surfy version 3.3.205 */

import { occupancyStatusObjectTypeDefintion } from "./objectTypeDefinitions/occupancyStatus";
import { userObjectTypeDefintion } from "./objectTypeDefinitions/user";
import { companyTypeObjectTypeDefintion } from "./objectTypeDefinitions/companyType";
import { companyObjectTypeDefintion } from "./objectTypeDefinitions/company";
import { roomConnectorTypeObjectTypeDefintion } from "./objectTypeDefinitions/roomConnectorType";
import { roomConnectorObjectTypeDefintion } from "./objectTypeDefinitions/roomConnector";
import { userCompanyObjectTypeDefintion } from "./objectTypeDefinitions/userCompany";
import { personGenderObjectTypeDefintion } from "./objectTypeDefinitions/personGender";
import { personCompanyObjectTypeDefintion } from "./objectTypeDefinitions/personCompany";
import { jupUiLayoutObjectTypeDefintion } from "./objectTypeDefinitions/jupUiLayout";
import { buildingTypeObjectTypeDefintion } from "./objectTypeDefinitions/buildingType";
import { organizationObjectTypeDefintion } from "./objectTypeDefinitions/organization";
import { itemTypeFamilyObjectTypeDefintion } from "./objectTypeDefinitions/itemTypeFamily";
import { manufacturerObjectTypeDefintion } from "./objectTypeDefinitions/manufacturer";
import { object3dModelObjectTypeDefintion } from "./objectTypeDefinitions/object3dModel";
import { itemTypeObjectTypeDefintion } from "./objectTypeDefinitions/itemType";
import { buildingObjectTypeDefintion } from "./objectTypeDefinitions/building";
import { mapScaleObjectTypeDefintion } from "./objectTypeDefinitions/mapScale";
import { structureObjectTypeDefintion } from "./objectTypeDefinitions/structure";
import { structurePointObjectTypeDefintion } from "./objectTypeDefinitions/structurePoint";
import { floorObjectTypeDefintion } from "./objectTypeDefinitions/floor";
import { distributionCostTypeObjectTypeDefintion } from "./objectTypeDefinitions/distributionCostType";
import { roomTypeObjectTypeDefintion } from "./objectTypeDefinitions/roomType";
import { costCenterObjectTypeDefintion } from "./objectTypeDefinitions/costCenter";
import { costCenterBuildingObjectTypeDefintion } from "./objectTypeDefinitions/costCenterBuilding";
import { costCenterFloorObjectTypeDefintion } from "./objectTypeDefinitions/costCenterFloor";
import { roomObjectTypeDefintion } from "./objectTypeDefinitions/room";
import { roomPointObjectTypeDefintion } from "./objectTypeDefinitions/roomPoint";
import { roomPointRoomObjectTypeDefintion } from "./objectTypeDefinitions/roomPointRoom";
import { roomPointSegmentTypeObjectTypeDefintion } from "./objectTypeDefinitions/roomPointSegmentType";
import { roomPointSegmentObjectTypeDefintion } from "./objectTypeDefinitions/roomPointSegment";
import { itemTypePointObjectTypeDefintion } from "./objectTypeDefinitions/itemTypePoint";
import { dimensionTypeObjectTypeDefintion } from "./objectTypeDefinitions/dimensionType";
import { dimensionObjectTypeDefintion } from "./objectTypeDefinitions/dimension";
import { dimensionRoomObjectTypeDefintion } from "./objectTypeDefinitions/dimensionRoom";
import { dimensionFloorObjectTypeDefintion } from "./objectTypeDefinitions/dimensionFloor";
import { dimensionBuildingObjectTypeDefintion } from "./objectTypeDefinitions/dimensionBuilding";
import { factTypeObjectTypeDefintion } from "./objectTypeDefinitions/factType";
import { factObjectTypeDefintion } from "./objectTypeDefinitions/fact";
import { personStateObjectTypeDefintion } from "./objectTypeDefinitions/personState";
import { personSecurityProfileObjectTypeDefintion } from "./objectTypeDefinitions/personSecurityProfile";
import { personObjectTypeDefintion } from "./objectTypeDefinitions/person";
import { personToPersonTypeObjectTypeDefintion } from "./objectTypeDefinitions/personToPersonType";
import { personToPersonObjectTypeDefintion } from "./objectTypeDefinitions/personToPerson";
import { roomAffectationObjectTypeDefintion } from "./objectTypeDefinitions/roomAffectation";
import { workplaceTypeObjectTypeDefintion } from "./objectTypeDefinitions/workplaceType";
import { workplaceTypeItemTypeObjectTypeDefintion } from "./objectTypeDefinitions/workplaceTypeItemType";
import { workplaceObjectTypeDefintion } from "./objectTypeDefinitions/workplace";
import { itemObjectTypeDefintion } from "./objectTypeDefinitions/item";
import { workplaceAffectationObjectTypeDefintion } from "./objectTypeDefinitions/workplaceAffectation";
import { organizationFloorObjectTypeDefintion } from "./objectTypeDefinitions/organizationFloor";
import { organizationBuildingObjectTypeDefintion } from "./objectTypeDefinitions/organizationBuilding";
import { roomTypeFloorObjectTypeDefintion } from "./objectTypeDefinitions/roomTypeFloor";
import { roomTypeBuildingObjectTypeDefintion } from "./objectTypeDefinitions/roomTypeBuilding";
import { itemToPersonObjectTypeDefintion } from "./objectTypeDefinitions/itemToPerson";
import { personToBuildingObjectTypeDefintion } from "./objectTypeDefinitions/personToBuilding";
import { dimensionToPersonObjectTypeDefintion } from "./objectTypeDefinitions/dimensionToPerson";
import { dimensionTypeToBuildingObjectTypeDefintion } from "./objectTypeDefinitions/dimensionTypeToBuilding";
import { jupObjectTypeObjectTypeDefintion } from "./objectTypeDefinitions/jupObjectType";
import { jupUiViewObjectTypeDefintion } from "./objectTypeDefinitions/jupUiView";
import { jupRoleObjectTypeDefintion } from "./objectTypeDefinitions/jupRole";
import { jupUiOptionObjectTypeDefintion } from "./objectTypeDefinitions/jupUiOption";
import { jupUiOperationObjectTypeDefintion } from "./objectTypeDefinitions/jupUiOperation";
import { contentRoleObjectTypeDefintion } from "./objectTypeDefinitions/contentRole";
import { jupUserCompanyToJupRoleObjectTypeDefintion } from "./objectTypeDefinitions/jupUserCompanyToJupRole";
import { jupRoleToJupUiViewObjectTypeDefintion } from "./objectTypeDefinitions/jupRoleToJupUiView";
import { jupRoleToJupObjectTypeObjectTypeDefintion } from "./objectTypeDefinitions/jupRoleToJupObjectType";
import { jupRoleToJupUiOptionObjectTypeDefintion } from "./objectTypeDefinitions/jupRoleToJupUiOption";
import { jupRoleToJupUiOperationObjectTypeDefintion } from "./objectTypeDefinitions/jupRoleToJupUiOperation";
import { contentRoleToBuildingObjectTypeDefintion } from "./objectTypeDefinitions/contentRoleToBuilding";
import { contentRoleToUserCompanyObjectTypeDefintion } from "./objectTypeDefinitions/contentRoleToUserCompany";
import { contentRoleToFloorObjectTypeDefintion } from "./objectTypeDefinitions/contentRoleToFloor";
import { partnerApiCredentialObjectTypeDefintion } from "./objectTypeDefinitions/partnerApiCredential";
import { apiUserObjectTypeDefintion } from "./objectTypeDefinitions/apiUser";
import { apiUserToJupRoleObjectTypeDefintion } from "./objectTypeDefinitions/apiUserToJupRole";
import { apiUserToContentRoleObjectTypeDefintion } from "./objectTypeDefinitions/apiUserToContentRole";
import { jupUiTenantOperationObjectTypeDefintion } from "./objectTypeDefinitions/jupUiTenantOperation";
import { contentRoleToJupUiTenantOperationObjectTypeDefintion } from "./objectTypeDefinitions/contentRoleToJupUiTenantOperation";
import { authentificationConnectionObjectTypeDefintion } from "./objectTypeDefinitions/authentificationConnection";
import { userRegistrationTenantRuleObjectTypeDefintion } from "./objectTypeDefinitions/userRegistrationTenantRule";
import { userRegistrationTenantRuleToJupRoleObjectTypeDefintion } from "./objectTypeDefinitions/userRegistrationTenantRuleToJupRole";
import { userRegistrationTenantRuleToContentRoleObjectTypeDefintion } from "./objectTypeDefinitions/userRegistrationTenantRuleToContentRole";
import { partnerExportMappingConfigurationObjectTypeDefintion } from "./objectTypeDefinitions/partnerExportMappingConfiguration";
import { partnerExportMappingObjectTypeDefintion } from "./objectTypeDefinitions/partnerExportMapping";
import { partnerExportMappingToRoomTypeObjectTypeDefintion } from "./objectTypeDefinitions/partnerExportMappingToRoomType";
import { partnerExportMappingConfigurationToFloorObjectTypeDefintion } from "./objectTypeDefinitions/partnerExportMappingConfigurationToFloor";
import { jupRoleToJupUiLayoutObjectTypeDefintion } from "./objectTypeDefinitions/jupRoleToJupUiLayout";
import { itemFactObjectTypeDefintion } from "./objectTypeDefinitions/itemFact";

export namespace JupSchema {

    export const occupancyStatus = occupancyStatusObjectTypeDefintion;
    export const user = userObjectTypeDefintion;
    export const companyType = companyTypeObjectTypeDefintion;
    export const company = companyObjectTypeDefintion;
    export const roomConnectorType = roomConnectorTypeObjectTypeDefintion;
    export const roomConnector = roomConnectorObjectTypeDefintion;
    export const userCompany = userCompanyObjectTypeDefintion;
    export const personGender = personGenderObjectTypeDefintion;
    export const personCompany = personCompanyObjectTypeDefintion;
    export const jupUiLayout = jupUiLayoutObjectTypeDefintion;
    export const buildingType = buildingTypeObjectTypeDefintion;
    export const organization = organizationObjectTypeDefintion;
    export const itemTypeFamily = itemTypeFamilyObjectTypeDefintion;
    export const manufacturer = manufacturerObjectTypeDefintion;
    export const object3dModel = object3dModelObjectTypeDefintion;
    export const itemType = itemTypeObjectTypeDefintion;
    export const building = buildingObjectTypeDefintion;
    export const mapScale = mapScaleObjectTypeDefintion;
    export const structure = structureObjectTypeDefintion;
    export const structurePoint = structurePointObjectTypeDefintion;
    export const floor = floorObjectTypeDefintion;
    export const distributionCostType = distributionCostTypeObjectTypeDefintion;
    export const roomType = roomTypeObjectTypeDefintion;
    export const costCenter = costCenterObjectTypeDefintion;
    export const costCenterBuilding = costCenterBuildingObjectTypeDefintion;
    export const costCenterFloor = costCenterFloorObjectTypeDefintion;
    export const room = roomObjectTypeDefintion;
    export const roomPoint = roomPointObjectTypeDefintion;
    export const roomPointRoom = roomPointRoomObjectTypeDefintion;
    export const roomPointSegmentType = roomPointSegmentTypeObjectTypeDefintion;
    export const roomPointSegment = roomPointSegmentObjectTypeDefintion;
    export const itemTypePoint = itemTypePointObjectTypeDefintion;
    export const dimensionType = dimensionTypeObjectTypeDefintion;
    export const dimension = dimensionObjectTypeDefintion;
    export const dimensionRoom = dimensionRoomObjectTypeDefintion;
    export const dimensionFloor = dimensionFloorObjectTypeDefintion;
    export const dimensionBuilding = dimensionBuildingObjectTypeDefintion;
    export const factType = factTypeObjectTypeDefintion;
    export const fact = factObjectTypeDefintion;
    export const personState = personStateObjectTypeDefintion;
    export const personSecurityProfile = personSecurityProfileObjectTypeDefintion;
    export const person = personObjectTypeDefintion;
    export const personToPersonType = personToPersonTypeObjectTypeDefintion;
    export const personToPerson = personToPersonObjectTypeDefintion;
    export const roomAffectation = roomAffectationObjectTypeDefintion;
    export const workplaceType = workplaceTypeObjectTypeDefintion;
    export const workplaceTypeItemType = workplaceTypeItemTypeObjectTypeDefintion;
    export const workplace = workplaceObjectTypeDefintion;
    export const item = itemObjectTypeDefintion;
    export const workplaceAffectation = workplaceAffectationObjectTypeDefintion;
    export const organizationFloor = organizationFloorObjectTypeDefintion;
    export const organizationBuilding = organizationBuildingObjectTypeDefintion;
    export const roomTypeFloor = roomTypeFloorObjectTypeDefintion;
    export const roomTypeBuilding = roomTypeBuildingObjectTypeDefintion;
    export const itemToPerson = itemToPersonObjectTypeDefintion;
    export const personToBuilding = personToBuildingObjectTypeDefintion;
    export const dimensionToPerson = dimensionToPersonObjectTypeDefintion;
    export const dimensionTypeToBuilding = dimensionTypeToBuildingObjectTypeDefintion;
    export const jupObjectType = jupObjectTypeObjectTypeDefintion;
    export const jupUiView = jupUiViewObjectTypeDefintion;
    export const jupRole = jupRoleObjectTypeDefintion;
    export const jupUiOption = jupUiOptionObjectTypeDefintion;
    export const jupUiOperation = jupUiOperationObjectTypeDefintion;
    export const contentRole = contentRoleObjectTypeDefintion;
    export const jupUserCompanyToJupRole = jupUserCompanyToJupRoleObjectTypeDefintion;
    export const jupRoleToJupUiView = jupRoleToJupUiViewObjectTypeDefintion;
    export const jupRoleToJupObjectType = jupRoleToJupObjectTypeObjectTypeDefintion;
    export const jupRoleToJupUiOption = jupRoleToJupUiOptionObjectTypeDefintion;
    export const jupRoleToJupUiOperation = jupRoleToJupUiOperationObjectTypeDefintion;
    export const contentRoleToBuilding = contentRoleToBuildingObjectTypeDefintion;
    export const contentRoleToUserCompany = contentRoleToUserCompanyObjectTypeDefintion;
    export const contentRoleToFloor = contentRoleToFloorObjectTypeDefintion;
    export const partnerApiCredential = partnerApiCredentialObjectTypeDefintion;
    export const apiUser = apiUserObjectTypeDefintion;
    export const apiUserToJupRole = apiUserToJupRoleObjectTypeDefintion;
    export const apiUserToContentRole = apiUserToContentRoleObjectTypeDefintion;
    export const jupUiTenantOperation = jupUiTenantOperationObjectTypeDefintion;
    export const contentRoleToJupUiTenantOperation = contentRoleToJupUiTenantOperationObjectTypeDefintion;
    export const authentificationConnection = authentificationConnectionObjectTypeDefintion;
    export const userRegistrationTenantRule = userRegistrationTenantRuleObjectTypeDefintion;
    export const userRegistrationTenantRuleToJupRole = userRegistrationTenantRuleToJupRoleObjectTypeDefintion;
    export const userRegistrationTenantRuleToContentRole = userRegistrationTenantRuleToContentRoleObjectTypeDefintion;
    export const partnerExportMappingConfiguration = partnerExportMappingConfigurationObjectTypeDefintion;
    export const partnerExportMapping = partnerExportMappingObjectTypeDefintion;
    export const partnerExportMappingToRoomType = partnerExportMappingToRoomTypeObjectTypeDefintion;
    export const partnerExportMappingConfigurationToFloor = partnerExportMappingConfigurationToFloorObjectTypeDefintion;
    export const jupRoleToJupUiLayout = jupRoleToJupUiLayoutObjectTypeDefintion;
    export const itemFact = itemFactObjectTypeDefintion;
    export const objectTypes = [occupancyStatus, user, companyType, company, roomConnectorType, roomConnector, userCompany, personGender, personCompany, jupUiLayout, buildingType, organization, itemTypeFamily, manufacturer, object3dModel, itemType, building, mapScale, structure, structurePoint, floor, distributionCostType, roomType, costCenter, costCenterBuilding, costCenterFloor, room, roomPoint, roomPointRoom, roomPointSegmentType, roomPointSegment, itemTypePoint, dimensionType, dimension, dimensionRoom, dimensionFloor, dimensionBuilding, factType, fact, personState, personSecurityProfile, person, personToPersonType, personToPerson, roomAffectation, workplaceType, workplaceTypeItemType, workplace, item, workplaceAffectation, organizationFloor, organizationBuilding, roomTypeFloor, roomTypeBuilding, itemToPerson, personToBuilding, dimensionToPerson, dimensionTypeToBuilding, jupObjectType, jupUiView, jupRole, jupUiOption, jupUiOperation, contentRole, jupUserCompanyToJupRole, jupRoleToJupUiView, jupRoleToJupObjectType, jupRoleToJupUiOption, jupRoleToJupUiOperation, contentRoleToBuilding, contentRoleToUserCompany, contentRoleToFloor, partnerApiCredential, apiUser, apiUserToJupRole, apiUserToContentRole, jupUiTenantOperation, contentRoleToJupUiTenantOperation, authentificationConnection, userRegistrationTenantRule, userRegistrationTenantRuleToJupRole, userRegistrationTenantRuleToContentRole, partnerExportMappingConfiguration, partnerExportMapping, partnerExportMappingToRoomType, partnerExportMappingConfigurationToFloor, jupRoleToJupUiLayout, itemFact];
    export const objectTypesBySingular = {
        occupancyStatus,
        user,
        companyType,
        company,
        roomConnectorType,
        roomConnector,
        userCompany,
        personGender,
        personCompany,
        jupUiLayout,
        buildingType,
        organization,
        itemTypeFamily,
        manufacturer,
        object3dModel,
        itemType,
        building,
        mapScale,
        structure,
        structurePoint,
        floor,
        distributionCostType,
        roomType,
        costCenter,
        costCenterBuilding,
        costCenterFloor,
        room,
        roomPoint,
        roomPointRoom,
        roomPointSegmentType,
        roomPointSegment,
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
        personToBuilding,
        dimensionToPerson,
        dimensionTypeToBuilding,
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
        authentificationConnection,
        userRegistrationTenantRule,
        userRegistrationTenantRuleToJupRole,
        userRegistrationTenantRuleToContentRole,
        partnerExportMappingConfiguration,
        partnerExportMapping,
        partnerExportMappingToRoomType,
        partnerExportMappingConfigurationToFloor,
        jupRoleToJupUiLayout,
        itemFact
    };
}
