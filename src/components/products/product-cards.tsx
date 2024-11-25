
import { useGetProductsQuery } from '@/api/users/users'
import { ProductCard } from './product-card'

export const ProductCards = () => {
    const { data: products, isLoading } = useGetProductsQuery({
        limit: 100
    })


    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <ul className='mt-10 flex w-full flex-wrap items-center justify-center gap-x-7 gap-y-5 rounded-md text-xl font-normal'>
            {products?.map((product) => (
                <li key={product.id}>
                    <ProductCard product={product}/>
                </li>
            ))}
        </ul>
    )
}
