import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export default async function HomePage() {

  const products = await getProducts()
  const featuredProducts = products.filter((item) => item.isFeatured === true)
  const billboard = await getBillboard()
  return (
    <Container>
      <div className="pb-10 space-y-10">
          <Billboard data={billboard} />
          <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8 px-4">
              <ProductList title='Featured Products' items={featuredProducts} />
          </div>
      </div>
    </Container>
  )
}
