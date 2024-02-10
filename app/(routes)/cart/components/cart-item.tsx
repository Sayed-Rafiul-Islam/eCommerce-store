"use client"

import Button from "@/components/button";
import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import useCart from "@/hooks/use-cart";
import { CartItem } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";



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
                    <Currency value={data.totalPrice} /><br />
                    <div className="flex">
                        <h2 className="text-green-600 font-bold">{data.quantity}</h2>
                        <div>
                            <Button disabled={data.quantity <= data.inStockCount ? false : true} onClick={plus}>+</Button>
                            <Button disabled={data.quantity < 2 ? true : false} onClick={minus}>-</Button>
                        </div>
                    </div>
                </div>

            </div>
            
        </li>
     );
}
 
export default CartItem;