import { FontAwesomeIconsStyle } from "./jup.models";

export type IconShapeType = 'circle' | 'rectangle' | 'triangle';

export interface ICustomIconProperties {
    defaultBorderColor?: string;
    defaultBackgroundColor?: string;
    defaultColor?: string;
    defaultShape?: IconShapeType;

}
export interface ICustomIcon extends ICustomIconProperties {
    name: string;
    unicode: string;
}

export type JupIconSet = 'fontawesome' | 'material-ui' | 'surfy' | 'icomoon';
export type JupIconSyle = FontAwesomeIconsStyle | 'surfyicon' | 'icomoon';

export interface IJupIcon extends ICustomIcon {
    style: JupIconSyle;
    // unicode: string;
    // name: string;
    set: JupIconSet;
    // defaultBorderColor?: string;
    // defaultBackgroundColor?: string;
    // defautltColor?: string;
}

export interface ITextAnchor {
    textPosition: IPoint3d;
    anchorPosition: IPoint3d;
    displayLine: boolean;
}

export interface IJupTransform {
    translate: IPoint2d;
    rotate: number;
    scale: number;
}

export interface IPoint2d {
    x: number;
    y: number;
}

export interface IPoint3d extends IPoint2d {
    z: number;
}

export interface ISize {
    width: number;
    height: number;
}

export interface IJupImage {
    url: string;
    phash: string | null;
    size: ISize;
}

export interface IModel3d {
    url: string;
}

export interface IJupAddress {
    address: string;
    lat: number;
    lng: number;
}


