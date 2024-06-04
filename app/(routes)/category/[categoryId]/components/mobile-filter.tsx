"use client";

import { useState } from 'react';
import { cn } from "@/lib/utils";
import Button from "@/components/button";

const MobileFilters = () => {

    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const onClick = (id: string) => {
        setSelectedValue(id);
    }

    const filter = {}
    return (
        <div>
            <h3 className="text-lg font-semibold">
                Filters
            </h3>
            <hr className="my-4"/>
             
        </div>
    )
}

export default MobileFilters;