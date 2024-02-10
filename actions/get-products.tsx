import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

const getProducts = async () : Promise<Product[]> => {

    const res = await fetch(URL, { cache : "no-store"})
    const results = await res.json()
    const nonArchievedProducts = results.filter((result : Product) => result.isArchieved === false)

    return nonArchievedProducts
}

export default getProducts