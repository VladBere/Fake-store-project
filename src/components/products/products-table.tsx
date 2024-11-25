import { ChevronRight, List, ShoppingCart, Trash } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

import type { Product } from '@/api/users/types'
import { useDeleteProductMutation, useGetProductsQuery } from '@/api/users/users'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table'
import { trunc } from '@/config/app'
import { routes } from '@/config/routes'
import { useStore } from '@/store/zustand'
import { toast } from 'sonner'

export const ProductsTable = () => {
    const { data: products, isLoading } = useGetProductsQuery({
        limit: 100
    })

    const { addId } = useStore()

    const [deleteProduct] = useDeleteProductMutation()

    const addIdHandler = (id: string) => {
        addId(id)
        toast.success("Product added to cart")
    }

    const handleProductDelete = (id: string) => {
        deleteProduct(id)
        toast.success("Product deleted")
    }

    const isAuth = !!localStorage.getItem("Accesstoken")

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className='mt-10 w-full overflow-hidden rounded-md border border-yellow-800/30 text-xl font-normal'>
            <Table>
                <TableCaption>Product List</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className='w-[100px]'>Title</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead className='text-right'>Price</TableHead>
                        <TableHead className='text-right'>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products?.map((product: Product) => (
                        <TableRow
                            key={product.id}
                            id={product.id.toString()}>
                            <TableCell className='w-36 text-lg font-medium'>
                                {trunc(product.title, 30)}
                            </TableCell>
                            <TableCell className='text-lg'>
                                {trunc(product.description, 200)}
                            </TableCell>
                            <TableCell className='text-base'>
                                {product.category}
                            </TableCell>
                            <TableCell className='w-24 text-right text-green-700/70'>
                                {product.price} $
                            </TableCell>
                            <TableCell className='flex flex-col gap-y-2 text-base min-h-[130px]'>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant='outline' className='text-white mt-[27px]'>Open actions <List /> </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className='w-[365px] bg-[#e7dbcf] flex gap-2'>
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
                                            onClick={() =>
                                                handleProductDelete(product.id.toString())
                                            }
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
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
