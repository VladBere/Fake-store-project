import { ChevronRight, List, ShoppingCart, Trash } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '../ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '../ui/card'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

import type { Product } from '@/api/users/types'
import { useDeleteProductMutation } from '@/api/users/users'
import { trunc } from '@/config/app'
import { routes } from '@/config/routes'
import { useStore } from '@/store/zustand'
import { toast } from 'sonner'

interface CardProps {
    product: Product
}

export const ProductCard: React.FC<CardProps> = ({ product }) => {
    const [deleteProduct] = useDeleteProductMutation()
    const isAuth = !!localStorage.getItem("AccessToken")
    const { ids, addId } = useStore()

    const addIdHandler = (id: string) => {
        addId(id)
        console.log(ids)
        toast.success("Product added to cart")
    }

    const handleProductDelete = (id: string) => {
        deleteProduct(id)
        toast.success("Product deleted")
    }

    return (
        <Card className='flex h-[280px] w-[350px] flex-col justify-between overflow-hidden border border-yellow-800/30 bg-[#e7dbcf]'>
            <div>
                <CardHeader>
                    <CardTitle>{trunc(product.title, 45)}</CardTitle>
                    <CardDescription>{trunc(product.description, 130)}</CardDescription>
                </CardHeader>
            </div>
            <CardContent>
                <p className='text-green-700/70'>{product.price} $</p>
            </CardContent>
            <CardFooter className='flex justify-between'>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant='outline'
                            className='text-white'>
                            Open actions <List />{' '}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className='flex w-[365px] gap-2 bg-[#e7dbcf]'>
                        <Button
                            variant='destructive'
                            className='w-[100px] bg-sidebar-accent-foreground text-sidebar-primary-foreground hover:bg-sidebar-accent-foreground/70'>
                            <Link
                                to={routes.products + '/' + product.id}
                                className='flex items-center justify-center gap-1'>
                                More <ChevronRight />
                            </Link>
                        </Button>
                        <Button
                            onClick={() => handleProductDelete(product.id.toString())}
                            variant='destructive'
                            className='w-[100px] bg-sidebar-accent-foreground text-sidebar-primary-foreground hover:bg-sidebar-accent-foreground/70'>
                            Delete <Trash />
                        </Button>
                        <Button
                            onClick={() => {
                                if(isAuth) {
                                    addIdHandler(product.id.toString())
                                } else {
                                    toast.error("Error: user is not authorized")
                                }
                            }}
                            variant='destructive'
                            className='w-[120px] bg-sidebar-accent-foreground text-sidebar-primary-foreground hover:bg-sidebar-accent-foreground/70'>
                            Add to cart <ShoppingCart className='mr-2 size-4' />
                        </Button>
                    </PopoverContent>
                </Popover>
            </CardFooter>
        </Card>
    )
}
