import qs from "query-string"

import { Product } from "@/types";

interface Query {
    categoryId?: string,
    colorId?: string,
    sizeId?: string,
    isFeatured?: boolean
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

const getProducts = async () : Promise<Product[]> => {

    // const url = qs.stringifyUrl({
    //     url: URL,
    //     query : {
    //         colodId : query.colorId,
    //         sizeId : query.sizeId,
    //         categoryId : query.categoryId,
    //         isFeatured : true
    //     }
    // })

    const res = await fetch(URL, { cache : "no-store"})

    return res.json()
}

export default getProducts