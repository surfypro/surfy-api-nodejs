import { IEntity } from "./jup.models";
import { IPoint3d, IPoint2d, IJupImage, IModel3d, IJupIcon, IJupAddress, IJupTransform } from "./propertyType.json.models";

export type PropertyTypeJupType = "string"
    | "float"
    | "square-image"
    | "timestamp"
    | "image"
    | "address"
    | "integer"
    | "primary-key"
    | "icon"
    | "color"
    | "date"
    | "foreign-key"
    | "belongs-to"
    | "has-many"
    | "has-many-paginated"
    | "boolean"
    | "surface"
    | "distance"
    | "point2d"
    | "text"
    | "currency"
    | "percentage"
    | "point3d"
    | 'surface-by-people'
    | 'surface-by-workplace'
    | 'boolean'
    | "textAnchor"
    | 'integer-count'
    | 'percentage0-1'
    | 'url'
    | 'password'
    | 'year'
    | 'model3d'
    | 'size'
    | 'transform'
    | 'weight'
    | 'icon-shape';

export type PropertyTypeJupValues = string
    | string[]
    | number
    | number[]
    | boolean
    | null
    | IPoint3d
    | IPoint2d
    | IEntity
    | IEntity[]
    | IJupImage
    | IModel3d
    | IJupIcon
    | IJupAddress
    | IJupTransform;

