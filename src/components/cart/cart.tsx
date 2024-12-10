import { CartProduct } from './cart-product'
import type { Product } from '@/api/users/types'
import { useGetProductsQuery } from '@/api/users/users'
import { useStore } from '@/store/zustand'
import { useTranslation } from 'react-i18next'

export const Cart = () => {
    const { ids } = useStore()
    const { t } = useTranslation();

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
                {t("Cart")}
            </h1>
            <ul className='flex flex-col gap-4'>
                {cartedProducts && cartedProducts.length > 0 ? (
                    cartedProducts.map((product) => (
                        <li key={product.id}>
                            <CartProduct product={product} />
                        </li>
                    ))
                ) : (
                    <p className='text-2xl font-bold tracking-tight'>
                        {t("Cart empty")}
                    </p>
                )}
            </ul>
        </div>
    )
}
