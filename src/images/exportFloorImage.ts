import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { writeFileSync } from "fs";


// quality 0-100
export async function saveFloorImage(instance: AxiosInstance, config: AxiosRequestConfig, host: string, floorId: number, path: string, quality: number) {
    const imageRoute = `https://${host}/api/v1/layout/floor/image-2d`;

    const image = await instance.post<unknown, AxiosResponse<unknown>>(imageRoute, {
        content: {
            floorId,
            quality,
            view
        }
    }, { ...config, responseType: 'arraybuffer' });
    console.log('path', path);
    // const data = (image.data as string)?.replace(/^data:image\/\w+;base64,/, "");
    // const buf = Buffer.from(data, 'base64');
    // writeFileSync(path, buf);
    writeFileSync(path, image.data as any, 'binary');
}


const view = {

    "loadRoomAffectations": true,
    "colorizeWorkplaces": { "free": false, "flex": false, "shared": false, "transit": false },
    "organizationTab": "level1",
    "backgroundLayout":
    {
        "opacity": 1,
        "image": { "url": "https://res.cloudinary.com/app-surfy-pro/image/upload/v1666179743/uploads/front/sn6jvzlw3zy1ypo5pkv8.png", "phash": null, "size": { "width": 3200, "height": 2300 } }
    },
    "roomActiveTab": "roomTypes",
    "colorizeItems": { "removeColors": false },
    "dimensionTypes": { "all": false, "dimensionTypes": [], "dimensionIds": [] },
    "organizationsTopLevel": { "ids": [], "all": false },
    "organizationsLevel1": { "ids": [], "all": false },
    "itemTypeFamilies": { "all": true, "itemTypeFamilies": [], "itemTypeIds": [] },
    "roomTypes": { "all": true, "ids": [] },
    "personSecurityProfiles": { "workplaces": { "ids": [], "all": false } },
    "costCenters": {
        "rooms": { "all": false, "ids": [] },
        "workplaces": { "all": false, "ids": [] }
    }, "workplacesTypes": { "all": true, "ids": [] },
    "displayRoomTextIds": ["roomName"],
    "displayWorkplaceTextIds": ["workplaceName"],
    "displayPersonTextIds": ["personName"],
    "iconizedRoomTypes": false,
    "output": { "showLegend": false, "margin": 0 },
    "mapScale": {
        "roomTextSize": 18,
        "workplaceTextSize": 12,
        "roomIconSize": 64,
        "itemTypeIconSize": 12,
        "strokeWidth": 1,
        "segmentDistanceTextSize": 6
    }
}