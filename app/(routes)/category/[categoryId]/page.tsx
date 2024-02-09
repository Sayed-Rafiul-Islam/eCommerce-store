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

interface CategoryPageProps {
    params : {
        categoryId : string
    },
    searchParams : {
        colorId : string,
        sizeId : string
    }
}

const CategoryPage : React.FC<CategoryPageProps> = async ({
    params,
    searchParams
}) => {

    const products = await getProducts()
    const sizes = await getSizes()
    const colors = await getColors()
    const category = await getCategory(params.categoryId)

    const categorisedProducts = products.filter(({categoryId,sizeId,colorId})=> 
    categoryId._id === params.categoryId &&
    sizeId._id === searchParams.sizeId &&
    colorId._id === searchParams.colorId
    )
    return ( 
        <div className="bg-white">
            <Container>
                <Billboard data={category.billboardId} />
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
                            {categorisedProducts.length === 0 && <NoResults/>}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {categorisedProducts.map((item)=>(
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