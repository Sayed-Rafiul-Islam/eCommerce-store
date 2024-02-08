"use client"

import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";

import { Product } from "@/types";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";

interface ProductCard {
    data : Product
}

const ProductCard : React.FC<ProductCard> = ({
     data 
    }) => {
    return ( 
        <div className="bg-white group cursor-pointer p-3 rounded-xl border space-y-4">
           {/* Images and Actions */}
           <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image 
                    src={data?.images?.[0]?.url} 
                    fill
                    alt="Image"
                    className="object-cover rounded-md aspect-square"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-6 justify-center">
                        <IconButton 
                            onClick={()=>{}}
                            icon={<Expand size={20} className="text-gray-600"/>}
                             
                        />
                        <IconButton 
                            onClick={()=>{}}
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
                <p className="text-gray-500 text-sm">
                    {data.categoryId?.name}
                </p>
           </div>
           {/* Price */}
           <div className="flex items-center justify-between">
                <Currency value={data?.price} />
           </div>
        </div>
     );
}
 
export default ProductCard;