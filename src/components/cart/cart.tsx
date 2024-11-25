import { CartProduct } from './cart-product'
import type { Product } from '@/api/users/types'
import { useGetProductsQuery } from '@/api/users/users'
import { useStore } from '@/store/zustand'

export const Cart = () => {
    const { ids } = useStore()

    const { data: products, isLoading } = useGetProductsQuery({
        limit: 100
    })

    if (isLoading) {
        return (
            <div className='h-screen scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
                Loading...
            </div>
        )
    }

    let cartedProducts: Product[] | undefined = []

    if (products) {
        cartedProducts = products.filter((product) => ids.includes(product.id.toString()))
        console.log(cartedProducts)
    }

    return (
        <div className='h-screen'>
            <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-7'>
                Cart Page
            </h1>
            <ul className='flex flex-col gap-4'>
                {cartedProducts && cartedProducts.length > 0 ? (
                    cartedProducts.map((product) => (
                        <li key={product.id}>
                            <CartProduct product={product} />
                        </li>
                    ))
                ) : (
                    <p className='h-screen scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
                        No products in the cart
                    </p>
                )}
            </ul>
        </div>
    )
}
