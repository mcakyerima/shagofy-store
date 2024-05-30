import { Billboard as BillboardTyps } from "@/types/types";

interface BillboardProps {
    data: BillboardTyps;
}
const Billboard: React.FC<BillboardProps> = ({
    data
}) => {
    return ( 
        <div className="p-6 lg:p-8 rounded-xl overflow-hidden">
            <div 
                className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow- bg-cover"
                style={{backgroundImage: `url(${data?.imageUrl})`}}
            >
                <div className="h-full w-full flex flex-column justify-center items-center text-center gap-y-8">
                    <div className="font-bold font-3xl sm:text-5xl lg:text-6xl max-w-xs">
                        {data?.label}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Billboard;