export interface Billboard {
    id : string,
    label : string,
    imageUrl : string
}

export interface Category {
    _id : string,
    name : string,
    billboardId : Billboard
}

export interface Product {
    _id : string,
    categoryId : Category,
    name : string,
    price : string,
    isFeatured : boolean,
    sizeId : Size,
    colorId : Color,
    images : Image[],
}
export interface Image {
    url : string,
}
export interface Color {
    _id : string,
    name : string,
    value : string,
}
export interface Size {
    _id : string,
    name : string,
    value : string,
}