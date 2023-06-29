
import Stripe from "stripe"
import Product from "./components/Product"

const getProducts = async() => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15"
  })
  const products = await stripe.products.list({
    limit: 3,
  });
  console.log(products.data)

  const productWithPrices = await Promise.all(
    products.data.map(async (product) => {
      const prices = await stripe.prices.list({product: product.id}) 
      const features = product.metadata.features || ""
      const retrievedProduct = await stripe.products.retrieve(product.id);
      const sizes = retrievedProduct.metadata.size ? retrievedProduct.metadata.size.split(',') : [];
      return {
        id: product.id,
        name: product.name,
        unit_amount: prices.data[0].unit_amount,
        image: product.images[0],
        description: product.description,
        currency: prices.data[0].currency,
        metadata: {features},
        category: product.metadata.category,
        size: sizes,
      }
    })
  )
  return productWithPrices
}

export default async function Home() {
  const products = await getProducts();
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <div>
      <nav className="grid grid-cols-3 md:grid-cols-7 justify-center gap-4 mb-4">
          <button className="mx-2 px-4 py-2 bg-gray-100 rounded-md text-xs"
          >All</button>
        {categories.map((category) => (
          <button
            key={category}
            className="mx-2 px-4 py-2 bg-gray-100 rounded-md text-xs"
          >
            {category}
          </button>
        ))}
      </nav>
      <main className="grid items-center lg:grid-cols-5 grid-cols-fluid gap-10">
        {products.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </main>
    </div>
  );
}
// .filter((product) => product.category === "Accessories")
