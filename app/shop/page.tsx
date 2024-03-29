import getProducts from '../../pages/api/fetchProduct'
import { HomePage } from '../components/HomePage'

export default async function Shop() {
  const products: any = await getProducts()

  return (
    <div>
      <HomePage products={products} />
    </div>
  );
}
