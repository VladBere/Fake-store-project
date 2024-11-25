export interface User {
    address: Address
    id: number
    email: string
    username: string
    password: string
    name: Name
    phone: string
    __v: number
}

export interface Product {
    id: number,
    title: string,
    price:string,
    category:string,
    description:string,
    image:string,
    rating: {
        rate: number,
        count: number,
    },
}

export interface Address {
    geolocation: Geolocation
    city: string
    street: string
    number: number
    zipcode: string
}

export interface Geolocation {
    lat: string
    long: string
}

export interface Name {
    firstname: string
    lastname: string
}

export interface ProductAddData extends Omit<Product, "id" | "rating"> {}

export interface UserAddData extends Omit<User, '__v' | 'id'> {}

// export interface UserPatchData {
//     id: number
//     data: {
//         email: string
//         name: string
//     }
// }

export interface UserQueryParams {
    offset: number
    limit: number
    search: string
    sorting: 'desc' | 'asc'
}

export interface ProductQueryParams {
    id: string,
    offset: number
    limit: number
    search: string
    sorting: 'desc' | 'asc'
}               

export interface UserAuth {
    username: string,
    password: string,
}

export interface AccessToken {
    token: any
}