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
        <Card className='h-[260px]flex-col flex w-full justify-between overflow-hidden border border-yellow-800/30 bg-[#e7dbcf]'>
            <div>
                <CardHeader>
                    <CardTitle>{product.title}</CardTitle>
                    <CardDescription>{trunc(product.description, 130)}</CardDescription>
                </CardHeader>
            </div>
            <CardContent>
                <p className='text-green-700/70 mt-8'>{product.price} $</p>
            </CardContent>
            <CardFooter className='flex justify-between'></CardFooter>
        </Card>
    )
}
