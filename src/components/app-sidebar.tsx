import {
    ChevronUp,
    Home,
    LogIn,
    LogOut,
    Package,
    ShoppingBag,
    ShoppingBasket,
    User2,
    Users
} from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { Button } from './ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar
} from '@/components/ui/sidebar'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip'
import { routes } from '@/config/routes'
import { cn } from '@/lib/utils'

// Menu items.
const items = [
    {
        title: 'Home',
        url: routes.home,
        icon: Home,
        tooltip: 'Home Page'
    },
    {
        title: 'Cart',
        url: routes.cart,
        icon: ShoppingBasket,
        tooltip: 'Cart Page'
    },
    {
        title: 'Products',
        url: routes.products,
        icon: Package,
        tooltip: 'Products Page'
    },
    {
        title: 'Users',
        url: routes.users,
        icon: Users,
        tooltip: 'Users Page'
    }
]

export function AppSidebar() {
    const { state } = useSidebar()
    const { pathname } = useLocation()
    const navigate = useNavigate()

    let isAuth = !!localStorage.getItem("AccessToken")

    return (
        <Sidebar
            collapsible='icon'
            variant='inset'>
            <SidebarHeader className='border-b'>
                <SidebarMenu>
                    <SidebarMenuItem
                        className={cn(
                            'flex items-center gap-x-2',
                            state === 'collapsed' ? 'mx-auto' : ''
                        )}>
                        <ShoppingBag className='size-6 text-primary' />
                        <h1
                            className={cn(
                                'text-nowrap text-lg font-bold text-background',
                                state === 'collapsed' ? 'hidden' : ''
                            )}>
                            Fake Store
                        </h1>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) =>
                                state === 'collapsed' ? (
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <SidebarMenuItem key={item.title}>
                                                    <SidebarMenuButton
                                                        isActive={item.url === pathname}
                                                        asChild>
                                                        <Link to={item.url}>
                                                            <item.icon />
                                                            <span>{item.title}</span>
                                                        </Link>
                                                    </SidebarMenuButton>
                                                </SidebarMenuItem>
                                            </TooltipTrigger>
                                            <TooltipContent className='ml-2'>
                                                <p>{item.tooltip}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                ) : (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            isActive={item.url === pathname}
                                            asChild>
                                            <Link to={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            )}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2 /> Username
                                    <ChevronUp className='ml-auto' />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side='top'
                                className='w-[--radix-popper-anchor-width]'>
                                <DropdownMenuItem className='flex items-center gap-x-2 h-10 '>
                                    {isAuth ? (<Button
                                        variant='ghost'
                                        className='w-full '
                                        onClick={() => {
                                            localStorage.removeItem('AccessToken')
                                            navigate(routes.home)
                                        }}>
                                        <LogOut className='size-4' />
                                        Sign out
                                    </Button>) : (
                                        <Button
                                        variant='ghost'
                                        className='w-full '
                                        onClick={() => {
                                            navigate(routes.login)
                                            isAuth = true
                                        }}>
                                        <LogIn className='size-4' />
                                        Log in
                                    </Button>
                                    )}
                                    
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}