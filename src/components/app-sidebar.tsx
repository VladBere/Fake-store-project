import {
    AlignJustify,
    ChevronUp,
    Home,
    LoaderPinwheel,
    LogIn,
    LogOut,
    Package,
    ShoppingBag,
    ShoppingBasket,
    User2,
    Users
} from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
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
import { useTranslation } from 'react-i18next'

// Menu items.


export function AppSidebar() {
    const { state } = useSidebar()
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const { t } = useTranslation();

    const items = [
        {
            title: t("Sidebar Home"),
            url: routes.home,
            icon: Home,
            tooltip: 'Home Page'
        },
        {
            title: t("Sidebar Cart"),
            url: routes.cart,
            icon: ShoppingBasket,
            tooltip: 'Cart Page'
        },
        {
            title: t("Sidebar Products"),
            url: routes.products,
            icon: Package,
            tooltip: 'Products Page'
        },
        {
            title: t("Sidebar Users"),
            url: routes.users,
            icon: Users,
            tooltip: 'Users Page'
        },
        {
            title: t("Sidebar Spin"),
            url: routes.wheel,
            icon: LoaderPinwheel,
            tooltip: 'Let`s spin!'
        },
        {
            title: t("Sidebar About"),
            url: routes.about,
            icon: AlignJustify,
            tooltip: 'Let`s spin!'
        }
    ]

    let isAuth = !!localStorage.getItem('AccessToken')

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
                    <SidebarGroupLabel>{t("Sidebar Nav")}</SidebarGroupLabel>
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
                                    {isAuth ? (
                                        <Avatar className='size-7'>
                                            <AvatarImage
                                                src='https://github.com/shadcn.png'
                                                alt='@shadcn'
                                            />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    ) : (
                                        <User2 className='size-7'/>
                                    )}{' '}
                                    Username
                                    <ChevronUp className='ml-auto' />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side='top'
                                className='w-[--radix-popper-anchor-width]'>
                                <DropdownMenuItem className='flex h-10 items-center gap-x-2'>
                                    {isAuth ? (
                                        <Button
                                            variant='ghost'
                                            className='w-full'
                                            onClick={() => {
                                                localStorage.removeItem('AccessToken')
                                                navigate(routes.home)
                                            }}>
                                            <LogOut className='size-4' />
                                            {t("Sidebar sign out")}
                                        </Button>
                                    ) : (
                                        <Button
                                            variant='ghost'
                                            className='w-full'
                                            onClick={() => {
                                                navigate(routes.login)
                                                isAuth = true
                                            }}>
                                            <LogIn className='size-4' />
                                            {t("Sidebar log in")}
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
