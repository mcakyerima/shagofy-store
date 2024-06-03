"use client";
import qs from "query-string";

import { Color, Size } from "@/types/types";
import { useSearchParams, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Button from "@/components/button";

interface FilterProps {
    data: (Size | Color)[];
    name: string;
    valueKey: string;
}

const Filter: React.FC<FilterProps> = ({
    data,
    name,
    valueKey,
}) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const selectedValue = searchParams.get(valueKey);

    const onClick = (id: string) => {
        // get the current query params
        const current = qs.parse(searchParams.toString());

        // set the valueKey to the id
        const query = {
            ...current,
            [valueKey]: id
        }

        // if the current[valueKey] === id, then user clicked in the current to remove it
        if (current[valueKey] === id) {
            query[valueKey] = null;
        }
        // stringify the query
        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true });

        // push the new url to the router
        router.push(url)

    }
    return ( 
        <div className="mb-8">
            <h3 className="text-lg font-semibold">
                {name}
            </h3>
            <hr className="my-4"/>
            <div className="flex flex-wrap gap-2">
                {data.map((filter) => (
                    <div key={filter.id} className="flex items-center">
                        <Button
                            className={cn(
                                "rounded-md text-sm text-gray-500 p-2 bg-white border border-gray-300",
                                selectedValue === filter.id && "bg-black text-white"
                            )}
                            onClick={() => onClick(filter.id)}
                        >
                            {filter.name}
                        </Button>
                    </div>
                ))}
            </div>

        </div>
     );
}
 
export default Filter;