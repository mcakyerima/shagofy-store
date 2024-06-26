export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
}

export interface Category {
    id: string;
    name: string;
    billboard: Billboard;
}

export interface Product {
    id: string;
    name: string;
    price: string;
    imageUrl: string;
    category: Category;
    isFeatured: boolean;
    size: Size;
    color: Color;
    images: Image[];
}

export interface Size {
    id: string;
    name: string;
    value: string;
}

export interface Color {
    id: string;
    value: string;
    name: string;
}

export interface Image {
    id: string;
    url: string
}