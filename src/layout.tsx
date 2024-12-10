import { ErrorBoundary } from 'react-error-boundary'
import { Outlet } from 'react-router-dom'

import { AppSidebar } from './components/app-sidebar'
import { LanguageBtn } from './components/language-btn'
import { SidebarInset, SidebarProvider, SidebarTrigger } from './components/ui/sidebar'
import { ErrorPage } from './pages/error'
import { MetaHead } from '@/components/meta-head'
import { Toaster } from '@/components/ui/sonner'

export const Layout = () => {

    return (
        <SidebarProvider>
            <AppSidebar />

            <MetaHead />
            <SidebarInset>
                <main className='bg-yellow-800/20 px-6 pt-2'>
                    <div className='flex justify-between'>
                        <SidebarTrigger />
                        <LanguageBtn />
                    </div>
                    <ErrorBoundary fallback={<ErrorPage />}>
                        <Outlet />
                    </ErrorBoundary>
                </main>
            </SidebarInset>

            <Toaster
                richColors
                duration={5000}
            />
        </SidebarProvider>
    )
}
