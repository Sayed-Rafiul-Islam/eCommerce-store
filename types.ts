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
    quantity : number,
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

export interface CartItem {
    id : string,
    name : string,
    image : string,
    price : number,
    quantity : number,
    color : string,
    size : string,
    inStockCount : number,
    totalPrice : number
}