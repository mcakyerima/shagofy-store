"use client";
import Button  from "@/components/button";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

 

const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true)
    },[]);

    if(!isMounted) return null;

    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Button className="relative flex items-center rounded-full bg-gray-900 px-4 py-2">
                <ShoppingBag size={20} color="white"/>
                <span className="absolute -top-[2px] -right-[5px] bg-red-600 border border-gray-900 rounded-full h-4 w-auto text-xs p-1 flex items-center justify-center">0</span>
            </Button>
        </div> 
    )
}

export default NavbarActions