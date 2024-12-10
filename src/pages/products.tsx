import { TabsList } from '@radix-ui/react-tabs'

import { AddProduct } from '@/components/products/addProduct'
import { ProductCards } from '@/components/products/product-cards'
import { ProductsTable } from '@/components/products/products-table'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsTrigger } from '@/components/ui/tabs'
import { useTranslation } from 'react-i18next'

export const ProductsPage = () => {

    const { t } = useTranslation();

    return (
        <div>
            <h1 className='hidden scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
                {t("Products")}
            </h1>
            <div className='mt-4 flex justify-between'>
                <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
                {t("Products")}
                </h1>
                <AddProduct />
            </div>
            <Tabs
                defaultValue='table'
                className=''>
                <Label htmlFor='tabslist'>Choose view mode</Label>
                <TabsList
                    id='tabslist'
                    className='grid grid-cols-2 w-[400px] border border-yellow-800/20 rounded-lg overflow-hidden'>
                    <TabsTrigger value='table'>Table</TabsTrigger>
                    <TabsTrigger value='cards'>Cards</TabsTrigger>
                </TabsList>
                <TabsContent value='table' className=''>
                    <ProductsTable />
                </TabsContent>
                <TabsContent value='cards' className=''>
                    <ProductCards />
                </TabsContent>
            </Tabs>
        </div>
    )
}
