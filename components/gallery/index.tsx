"use client";
import Image from "next/image"

import { Image as ImageType } from "@/types/types";
import { Tab, TabGroup, TabList, TabPanels, TabPanel } from "@headlessui/react"
import GalleryTab from "@/components/gallery/gallery-tab";
interface GalleryProps {
    images: ImageType[]
}
const Gallery: React.FC<GalleryProps> = ({
    images,
}) => {
    return ( 
       <TabGroup as="div" className="flex flex-col-reverse">
            <div className="mx-auto hidden mt-6 w-full max-w-2xl sm:block lg:max-w-none">
                <TabList className="grid grid-cols-4 gap-5">
                    {images.map((image) => (
                        <GalleryTab key={image.id} image={image}/>
                    ))}
                </TabList>
            </div>
            <TabPanels>
                {images.map((image) => (
                    <TabPanel key={image.id}>
                        <div className="aspect-square border rounded-xl p-4 relative h-full w-full sm:rounded-lg overflow-hidden">
                            <Image
                                src={image.url}
                                fill
                                alt="product image"
                                className="object-cover object-center p-4 rounded-xl"
                            />
                        </div>
                    </TabPanel>
                ))}
            </TabPanels>
       </TabGroup>
     );
}
 
export default Gallery;





































