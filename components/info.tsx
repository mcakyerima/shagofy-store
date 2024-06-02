import Currency  from "@/components/ui/currency";

import { Product } from "@/types/types";
interface InfoProps {
    data: Product;
}

const Info: React.FC<InfoProps> = ({
    data,
}) => {
    return ( 
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                <p>
                    <Currency value={data?.price}/>
                </p>
            </div>
            <hr className="my-4"/>
            <div className="flex items-center gap-x-4">
                <h3 className="font-semibold text-black">
                    Size:
                </h3>
                <div>{data?.size.value}</div>
            </div>
            <div className="flex items-center gap-x-4">
                <h3 className="font-semibold text-black">
                    Coclor:
                </h3>
                <div className="h-6 w-6 rounded-full border borer-gray-600 
                bg-gray-200" style={{backgroundColor: data?.color?.value}}
                />
            </div>
        </div>
     );
}
 
export default Info;