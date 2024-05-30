import { Product } from "@/types/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
    const response = await fetch(`${URL}/${id}`, {
        headers: {
            'Cache-Control': 'no-store, max-age=0, must-revalidate',
        },
        cache: 'no-store'
    });

    if (!response.ok) {
        throw new Error('Failed to fetch product information');
    }

    return response.json();
};

export default getProduct;
