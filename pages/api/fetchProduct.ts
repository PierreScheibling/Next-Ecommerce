import Stripe from 'stripe'
const getProducts = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2022-11-15',
  })
  const products = await stripe.products.list({
    limit: 8,
    active: true,
  })

  const productWithPrices = await Promise.all(
    products.data.map(async (product) => {
      const prices = await stripe.prices.list({ product: product.id })
      const features = product.metadata.features || ''
      const retrievedProduct = await stripe.products.retrieve(product.id)
      const sizes = retrievedProduct.metadata.size
        ? retrievedProduct.metadata.size.split(',')
        : []
      return {
        id: product.id,
        name: product.name,
        unit_amount: prices.data[0].unit_amount,
        image: product.images[0],
        description: product.description,
        currency: prices.data[0].currency,
        metadata: { features },
        category: product.metadata.category,
        size: sizes,
      }
    })
  )
  return productWithPrices
}

export default getProducts