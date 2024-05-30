import { Billboard } from "@/types/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
    const response = await fetch(`${URL}/${id}`, {
        headers: {
            'Cache-Control': 'no-store, max-age=0, must-revalidate',
        },
        cache: 'no-store'
    });

    if (!response.ok) {
        throw new Error('Failed to fetch categories');
    }

    return response.json();
};

export default getBillboard;
