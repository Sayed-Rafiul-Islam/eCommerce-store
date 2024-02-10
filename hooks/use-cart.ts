import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { CartItem } from "@/types";
import toast from "react-hot-toast";



interface CartStore {
    items : CartItem[],
    addItem : ( data : CartItem) => void,
    removeItem : ( id : string) => void,
    removeAll : () => void,
    quantityUp: ( id : string) => void,
    quantityDown: ( id : string) => void,
    quantity: number,
}

const useCart  = create(
    persist<CartStore>((set,get) => ({
        items : [],
        addItem : (data : CartItem) => {
            const currentItems = get().items
            const existingItems = currentItems.find((item) => item.id === data.id)

            if (existingItems) {
                return toast("Item already in cart.")
            }

            set({ items : [...get().items, data ]})
            toast.success("Item added to cart")
        },
        removeItem: (id : string) => {
            set({ items : [...get().items.filter((item) => item.id !== id)] })
            toast.success("Item removed from cart")
        },
        removeAll : () => set({ items : [] }),
        quantityUp : (id : string) => {
            const currentItem = get().items.find((item) => item.id === id)
            if (currentItem) {
                currentItem.quantity = currentItem.quantity + 1
                currentItem.totalPrice = currentItem.price * currentItem.quantity

                set({ items : [...get().items.filter((item) => item.id !== id)] })
                set({ items : [...get().items, currentItem ]})
            }
            
        },
        quantityDown : ( id : string) => {
            const currentItem = get().items.find((item) => item.id === id)
            if (currentItem) {
                currentItem.quantity = currentItem.quantity - 1
                currentItem.totalPrice = currentItem.price * currentItem.quantity
                set({ items : [...get().items.filter((item) => item.id !== id)] })
                set({ items : [...get().items, currentItem ]})

            }
        },
        quantity : 0
    }),{
        name : "cart-storage",
        storage : createJSONStorage(() => localStorage)
    })
)


export default useCart