"use client"

import Button from "@/components/button";
import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import useCart from "@/hooks/use-cart";
import { CartItem } from "@/types";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import Image from "next/image";



interface CartItemProps {
    data : CartItem
}
const CartItem : React.FC<CartItemProps> = ({
    data
}) => {
    const cart = useCart()

    const plus = () =>{
        cart.quantityUp(data.id)
    }
    const minus = () =>{
        cart.quantityDown(data.id)
    }

    const onRemove = () => {
        cart.removeItem(data.id)
    }

    return ( 
        <li className="flex py-6 border-b">
            <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
                <Image 
                    fill
                    src={data.image}
                    alt=""
                    className="object-cover object-center"
                />
            </div>
            <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="absolute z-10 top-0 right-0">
                    <IconButton onClick={onRemove} icon={<X size={15} />} />
                </div>
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div className="flex justify-between">
                        <p className="text-lg font-bold text-black">
                            {data.name}
                        </p>
                    </div>

                    <div className="mt-1 flex text-sm">
                        <p className="text-gray-500">{data.color}</p>
                        <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">{data.size}</p>
                    </div>
                    <div className="flex lg:flex-col md:flex-col sm:flex-col lg:items-start md:items-start sm:items-start items-center gap-5 lg:gap-0">
                        <Currency value={data.totalPrice} />
                        <div className="flex items-center">
                            <h2 className="font-semibold text-gray-700">Qty&nbsp;&nbsp; {data.quantity}</h2>
                            <div className="flex lg:flex-col md:flex-col sm:flex-col">
                                <Button className="bg-transparent" disabled={data.quantity <= data.inStockCount ? false : true} onClick={plus}>
                                    <ChevronUp className="text-black rounded-sm hover:bg-black hover:text-white transition-all" size={15} />
                                </Button>
                                <Button className="bg-transparent " disabled={data.quantity < 2 ? true : false} onClick={minus}>
                                    <ChevronDown className="text-black rounded-sm hover:bg-black hover:text-white transition-all" size={15} />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </li>
     );
}
 
export default CartItem;