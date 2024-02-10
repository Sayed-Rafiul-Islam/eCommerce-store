"use client"

import { ShoppingCart } from "lucide-react";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/button";
import useCart from "@/hooks/use-cart";
import { MouseEventHandler } from "react";

interface InfoProps {
    data : Product
}

const Info : React.FC<InfoProps> = ({
    data
}) => {
    const cart = useCart()

    const addToCart : MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()

        const cartItem = {
            id : data._id,
            name : data.name,
            image : data.images[0].url,
            price : parseFloat(data.price),
            quantity : 1,
            color : data.colorId.name,
            size : data.sizeId.name,
            inStockCount : data.quantity,
            totalPrice : parseFloat(data.price)
        }


        cart.addItem(cartItem)
    }
    return ( 
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                <p className="text-2xl text-gray-900">
                    <Currency value={data?.price} />
                </p>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-bold text-black">Size : </h3>
                    <div>
                        {data?.sizeId?.value}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-bold text-black">Color : </h3>
                    <div 
                        className="h-6 w-6 rounded-full border border-gray-600"
                        style={{ backgroundColor : data?.colorId?.value}}
                    />
                </div>
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <Button onClick={addToCart} className="flex items-center gap-x-2">
                    Add To Cart
                    <ShoppingCart />
                </Button>
            </div>
        </div>
     );
}
 
export default Info;