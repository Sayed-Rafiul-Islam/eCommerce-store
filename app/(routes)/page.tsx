import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export default async function HomePage() {

  const products = await getProducts({ isFeatured : true})
  const billboard = await getBillboard('65c26eaf1bb882b1dc1801d3')
  return (
    <Container>
      <div className="pb-10 space-y-10">
          <Billboard data={billboard} />
          <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8 px-4">
              <ProductList title='Featured Products' items={products} />
          </div>
      </div>
    </Container>
  )
}
