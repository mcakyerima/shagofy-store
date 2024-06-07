"use client";

import { useState } from 'react';
import { cn } from "@/lib/utils";
import Button from "@/components/button";
import { Color, Size } from "@/types/types";
import { PlusCircle, X } from 'lucide-react';
import { Dialog, DialogPanel } from "@headlessui/react";
import IconButton from "@/components/ui/icon-button";

interface MobileFiltersProps {
    sizes: Size[];
    colors: Color[]
}

const MobileFilters: React.FC<MobileFiltersProps> = ({
    sizes,
    colors,
}) => {
    const [ open , setOpen ] = useState(false);

   const onOpen = () => setOpen(true);
   const onClose = () => setOpen(false);
    return (
        <>
            <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden py-3 mb-3">
                Fitlers
                <PlusCircle/>
            </Button>

            <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
                {/* background */}
                <div className="fixed inset-0 bg-black bg-opacity-25"/>

                {/* dialog position */}
                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-5 shadow-xl">
                        <div className="flex items-center justify-end px-4">
                            <IconButton icon={<X size={15}/>} onClick={onClose}/>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}

export default MobileFilters;
