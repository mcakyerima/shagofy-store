"use client";
import Image from "next/image";

import { Product } from "@/types/types";
import { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
import PreviewModal from "../preview-modal";
import usePreviewModal from "@/hooks/use-preview-modal";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/currency";

interface ProductCardProps {
    data: Product
}
const ProductCard: React.FC<ProductCardProps> = ({
    data
}) => {
    const router = useRouter();
    const previewModal = usePreviewModal()

    const handleClick = () => {
        router.push(`/product/${data?.id}`)
    }

    // function to trigger to product mini preview modal
    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        previewModal.onOpen(data)
    }
 
    return ( 
        <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 shadow-sm">
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    src={data?.images?.[0]?.url}
                    fill
                    alt={data.name}
                    className="rounded-md aspect-square object-cover border"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-6">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                            onClick={onPreview}
                            icon={<Expand size={20} className="text-gray-600"/>}
                        />
                        <IconButton
                            onClick={() => {}}
                            icon={<ShoppingCart size={20} className="text-gray-600"/>}
                        />
                    </div>
                </div>
            </div>
            {/* Description */}
            <div>
                <p className="font-semibold text-lg">
                    {data.name}
                </p>
                <p className="text-sm text-gray-600">
                    {data.category.name}
                </p>
            </div>
            {/* price */}
            <div className="flex items-center justify-between">
                <Currency value={data?.price}/>
            </div>
        </div>
     );
}
 
export default ProductCard;