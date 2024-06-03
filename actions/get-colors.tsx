import { Color } from "@/types/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
    const response = await fetch(URL, {
        headers: {
            'Cache-Control': 'no-store, max-age=0, must-revalidate',
        },
        cache: 'no-store'
    });

    if (!response.ok) {
        throw new Error('Failed to fetch Colors');
    }

    return response.json();
};

export default getColors;
