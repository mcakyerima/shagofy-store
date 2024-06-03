import { Category } from "@/types/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
    const response = await fetch(`${URL}/${id}`, {
        headers: {
            'Cache-Control': 'no-store, max-age=0, must-revalidate',
        },
        cache: 'no-store'
    });

    // if (!response.ok) {
    //     throw new Error('Failed to fetch Category');
    // }

    return response.json();
};

export default getCategory;
