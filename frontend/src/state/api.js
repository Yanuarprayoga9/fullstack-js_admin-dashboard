import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
// import { build } from 'vite'

export const api = createApi({
    baseQuery:fetchBaseQuery({baseUrl: "http://localhost:5001/"}),
    reducerPath:"adminApi",
    endpoints:(build) => ({
        getUser:build.query({
            query:(id) => `general/user/${id}`,
            providesTags:["User"]
        }),
        getProducts:build.query({
            query:() => `client/products`,
            providesTags:["Products"]
        }),
        getCustomers: build.query({
            query: () => "client/customers",
            providesTags: ["Customers"],
          }),
    })
})


export const { useGetUserQuery,useGetProductsQuery,useGetCustomersQuery } = api

