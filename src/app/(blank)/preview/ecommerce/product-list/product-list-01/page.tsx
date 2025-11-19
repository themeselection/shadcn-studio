import ProductList from '@/components/shadcn-studio/blocks/product-list-01/product-list-01'

const productList = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-6.png',
    imgAlt: 'Samsung Galaxy Watch 6',
    name: 'Samsung Galaxy Watch 6 Classic',
    price: 129,
    badges: ['Watch', 'Samsung']
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-5.png',
    imgAlt: 'Samsung Galaxy Watch 7',
    name: 'Samsung Galaxy Watch 7',
    price: 229,
    salePrice: 139,
    badges: ['Watch', 'Samsung']
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-4.png',
    imgAlt: 'Samsung Galaxy Watch Ultra',
    name: 'Samsung Galaxy Watch Ultra',
    price: 119,
    badges: ['Watch', 'Samsung']
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-3.png',
    imgAlt: 'Samsung Galaxy Watch 7',
    name: 'Samsung Galaxy Watch 7',
    price: 129,
    badges: ['Watch', 'Samsung']
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-2.png',
    imgAlt: 'Spigen Rugged Armor Pro',
    name: 'Spigen Rugged Armor Pro',
    price: 239,
    badges: ['Watch', 'Spigen']
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/ecommerce/product-list/image-1.png',
    imgAlt: 'Mosmoc Rugged No Gap',
    name: 'Mosmoc Rugged No Gap',
    price: 149,
    badges: ['Watch', 'Samsung']
  }
]

const ProductListPage = () => {
  return <ProductList products={productList} />
}

export default ProductListPage
