import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '../ui/card'

import type { Product } from '@/api/users/types'
import { trunc } from '@/config/app'

interface CardProps {
    product: Product
}

export const CartProduct: React.FC<CardProps> = ({ product }) => {
    return (
        <Card className='flex h-[260px] w-full justify-between overflow-hidden border border-yellow-800/30 bg-[#e7dbcf]'>
                <CardHeader className='flex'>
                    <img
                        className='size-32'
                        src={product.image}
                        alt={product.title}
                    />
                </CardHeader>
                <div>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription>{trunc(product.description, 130)}</CardDescription>
                </div>
            <CardContent className=' flex flex-col justify-center'>
                
            </CardContent>
            <CardFooter className='flex justify-between'>
                {' '}
                <p className=' text-green-700/70'>{product.price} $</p>
            </CardFooter>
        </Card>
    )
}
