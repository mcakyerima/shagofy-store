import qs from 'query-string';
import { Product } from "@/types/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            colorId: query.colorId,
            categoryId: query.categoryId,
            sizeId: query.sizeId,
            isFeatured: query.isFeatured
        }
    })
    const response = await fetch(url, {
        headers: {
            'Cache-Control': 'no-store, max-age=0, must-revalidate',
        },
        cache: 'no-store'
    });

    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }

    return response.json();
};

export default getProducts;
