import { useParams } from 'react-router-dom'

import { useGetSingleProductQuery } from '@/api/users/users'

export const Product = () => {

    const { id } = useParams()

    const { data: product, isLoading } = useGetSingleProductQuery({ id })

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!product) {
        return <div>Product not found.</div>
    }

    const stars = (num: number) => {
        return (
            <p
                className='overflow-hidden rounded-lg bg-yellow-100/40 pb-1'
                style={{ width: `${Math.ceil(num * 27)}px` }}>
                ⭐⭐⭐⭐⭐
            </p>
        )
    }

    return (
        <div className='h-screen'>
            <h2 className='text-4xl font-bold'>{product.title}</h2>
            <div className='flex'>
                <div className='mt-4 h-[800px] w-[600px] overflow-hidden rounded-xl border-[1.5px] bg-white border-yellow-900 flex items-center justify-center'>
                    <img 
                        src={product.image}
                        alt={product.title}
                    />
                </div>
                <div className='ml-5 mt-10 w-[950px]'>
                    <div>
                        <h3 className='text-2xl font-bold'>Description:</h3>
                        <p className='text-xl'>{product.description}</p>
                        <h3 className='mt-7 text-2xl font-bold'>Category: </h3>
                        <p className='text-xl'>{product.category}</p>
                        <h3 className='mt-7 text-2xl font-bold'>Price: </h3>
                        <p className='text-xl text-green-800/60'>{product.price} $</p>
                    </div>
                    <div className='flex gap-10'>
                        <h3 className='mt-7 flex text-xl'>
                            Rating: {product.rating.rate} {stars(product.rating.rate)}
                        </h3>
                        <p className='mt-7 text-xl'>
                            From {product.rating.count} our users
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}