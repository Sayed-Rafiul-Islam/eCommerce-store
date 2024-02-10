"use client"

import getCategory from "@/actions/get-category"
import getColors from "@/actions/get-colors"
import getProducts from "@/actions/get-products"
import getSizes from "@/actions/get-sizes"
import Billboard from "@/components/billboard"
import Container from "@/components/ui/container"
import Filter from "./components/filter"
import NoResults from "@/components/ui/no-results"
import ProductCard from "@/components/ui/product-card"
import MobileFilters from "./components/mobile-filters"
import { useEffect, useState } from "react"
import { Category, Color, Product, Size } from "@/types"


interface CategoryPageProps {
    params : {
        categoryId : string
    },
    searchParams : {
        colorId : string,
        sizeId : string
    }
}

const CategoryPage : React.FC<CategoryPageProps> = ({
    params,
    searchParams
}) => {

    const [products, setProducts] = useState<Product[] | []>([])
    const [sizes, setSizes] = useState<Size[] | []>([])
    const [colors, setColors] = useState<Color[] | []>([])
    const [category, setCategory] = useState<Category>()



    useEffect(()=>{
        const getStuff = async () => {
            const products = await getProducts()
            const sizes = await getSizes()
            const colors = await getColors()
            const category = await getCategory(params.categoryId)
            setSizes(sizes)
            setColors(colors)
            setCategory(category)
            const categorisedProducts = products.filter(({categoryId})=> categoryId._id === params.categoryId )
            setProducts(categorisedProducts)



            if (searchParams.sizeId && searchParams.colorId) {
                const categorisedProducts = products.filter(({categoryId,sizeId,colorId})=> 
                categoryId._id === params.categoryId &&
                sizeId._id === searchParams.sizeId &&
                colorId._id === searchParams.colorId
                )
                setProducts(categorisedProducts)
    
            } else if (searchParams.sizeId) {
                const categorisedProducts = products.filter(({categoryId,sizeId})=> 
                categoryId._id === params.categoryId &&
                sizeId._id === searchParams.sizeId
                )
                setProducts(categorisedProducts)
            } else if (searchParams.colorId) {
                const categorisedProducts = products.filter(({categoryId,colorId})=> 
                categoryId._id === params.categoryId &&
                colorId._id === searchParams.colorId
                )

                setProducts(categorisedProducts)
            } else {
                const categorisedProducts = products.filter(({categoryId})=> categoryId._id === params.categoryId )
                setProducts(categorisedProducts)
            }
        }
        getStuff()


    },[searchParams.colorId, searchParams.sizeId, params.categoryId])
    
    return ( 
        <div className="bg-white">
            <Container>
                <Billboard data={category?.billboardId} />
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        <MobileFilters sizes={sizes} colors={colors} />
                        <div className="hidden lg:block">
                            <Filter
                                valueKey="sizeId"
                                name='Sizes'
                                data={sizes}
                            />
                            <Filter
                                valueKey="colorId"
                                name='Colors'
                                data={colors}
                            />
                        </div>
                        <div className="mt-6 lg:mt-0 lg:col-span-4">
                            {products.length === 0 && <NoResults/>}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {products.map((item)=>(
                                    <ProductCard key={item._id} data={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
     );
}
 
export default CategoryPage;