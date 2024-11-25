import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { routes } from './config/routes'
import { Layout } from './layout'
import { CartPage } from './pages/cart-page'
import { ErrorPage } from './pages/error'
import { HomePage } from './pages/home'
import { LoginPage } from './pages/login-page'
import { ProductPage } from './pages/productpage'
import { ProductsPage } from './pages/products'
import { UsersPage } from './pages/users'
import { RequireAuthProvider } from './provider/require-auth-provider'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: routes.cart,
                element: <RequireAuthProvider><CartPage /></RequireAuthProvider>
            },
            {
                path: routes.products,
                element: <ProductsPage />
            },
            {
                path: routes.users,
                element: <RequireAuthProvider><UsersPage /></RequireAuthProvider>
            },
            {
                path: routes.product,
                element: <ProductPage />
            }
        ]
    },
    {
        path: routes.login,
        element: <LoginPage />
    },
    {
        path: '*',
        element: <ErrorPage />
    }
])

export const App = () => <RouterProvider router={router} />
