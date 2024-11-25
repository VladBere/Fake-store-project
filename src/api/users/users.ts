import { api } from '..'

import type { AccessToken, Product, ProductAddData, ProductQueryParams, User, UserAddData, UserAuth, UserQueryParams } from './types'
import { getQueryParamString } from '@/utils/get-query-param-string'

const usersApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query<User[], Partial<UserQueryParams>>({
            query: (queryParams) => {
                const queryParamsString = getQueryParamString(queryParams)
                return `/users?${queryParamsString}`
            },
            providesTags: ['Users']
        }),
        addUser: builder.mutation<User, UserAddData>({
            query: (data) => {
                return {
                    url: '/users',
                    method: 'POST',
                    body: data
                }
            },
            invalidatesTags: ['Users']
        }),
        // patchUser: builder.mutation<User, UserPatchData>({
        //     query: ({ id, data }) => {
        //         return {
        //             url: `/users/${id}`,
        //             method: 'PUT',
        //             body: data
        //         }
        //     },
        //     invalidatesTags: ['Users']
        // }),
        deleteUser: builder.mutation<User, number>({
            query: (id) => {
                return {
                    url: `/users/${id}`,
                    method: 'DELETE'
                }
            },
            invalidatesTags: ['Users']
        }),
        getProducts: builder.query<Product[], Partial<ProductQueryParams>>({
            query: (queryParams) => {
                const queryParamsString = getQueryParamString(queryParams)
                return `/products?${queryParamsString}`
            },
        }),
        getSingleProduct: builder.query<Product, Partial<ProductQueryParams>>({
            query: (queryParams) => {
                return `/products/${queryParams.id}`
            },
        }),
        deleteProduct: builder.mutation<Product, string>({
            query: (id) => {
                return {
                    url: `/products/${id}`,
                    method: 'DELETE'
                }
            },
        }),
        addProduct: builder.mutation<Product, ProductAddData>({
            query: (data) => {
                return {
                    url: '/products',
                    method: 'POST',
                    body: data
                }
            },
        }),
        getCarts: builder.query<string[], string>({
            query: () => {
                return `/carts`
            },
        }),
        authUser: builder.mutation<AccessToken, UserAuth>({
            query: (data) => {
                return {
                    url: '/auth/login',
                    method: 'POST',
                    body: data
                }
            },
        }),
    })
})

export const {
    useGetUsersQuery,
    useGetProductsQuery,
    useGetSingleProductQuery,
    useAddUserMutation,
    useDeleteProductMutation,
    useAddProductMutation,
    useAuthUserMutation,
    useGetCartsQuery,
    // usePatchUserMutation,
    useDeleteUserMutation
} = usersApi
