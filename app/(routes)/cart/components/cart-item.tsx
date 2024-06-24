"use client";

import Image from "next/image";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
 import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";

import { Product } from "@/types/types";

interface CartItemProps {
    data: Product;
}

const CartItem: React.FC<CartItemProps> = ({
    data
}) => {
    return (
        <li className="flex items-center py-5 border-b">
            <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
                <Image
                    fill
                    src={data.images[0].url}
                    alt=""
                    className="object-conver object-center"
                />
            </div>
            <div className="relative ml-4 flex flex-1 justify-between sm:ml-6">
                <div className="absolute z-10 right-0 top-0">
                    <IconButton onClick={() => {}} icon={<X/>}/>
                </div>
            </div>
        </li>
    );
}

export default CartItem;