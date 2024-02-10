"use client"

import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";


import Button from "@/components/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";

const Summery = () => {

    const searchParams = useSearchParams()
    const items = useCart((state) => state.items)
    const removeAll = useCart((state) => state.removeAll)

    useEffect(()=> {
        if (searchParams.get("success")) {
            toast.success("Payement completed.")
            removeAll()
            
        }

        if (searchParams.get("canceled")) {
            toast.error("Something went wrong.")
        }
    },[searchParams, removeAll])

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.totalPrice)
    },0)

    const onCheckout = async () => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`,{
            items : items.map((item) => item)

        })

        window.location = response.data.url
    }

    return ( 
        <div
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-6 lg:mt-0 lg:p-8"
        >
            <h2 className="text-lg font-medium text-gray-900">
                Order Summery
            </h2>
            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="text-base font-medium to-gray-900">
                        Order Total
                    </div>
                    <Currency value={totalPrice} />
                </div>
            </div>
            <Button disabled={items.length===0 ? true : false} onClick={onCheckout} className="w-full mt-6">
                Checkout
            </Button>
            <Button disabled={items.length===0 ? true : false} onClick={removeAll} className="w-full mt-6 bg-red-600">
                Empty Cart
            </Button>
        </div>
     );
}
 
export default Summery;