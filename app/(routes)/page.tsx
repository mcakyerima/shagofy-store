import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("1185acfe-b66c-48ff-b923-d981d23cfd89");
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-2 px-4 sm:px-6 lg:px-8">
          <ProductList title="FeaturedProducts" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
