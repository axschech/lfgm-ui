import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_HOST
    }),
    tagTypes: ['User'],
    endpoints: builder => ({
        getUser: builder.query({
            query: (id: string) => `/users/${id}`,
            providesTags: ['User']
        }),
        newUser: builder.mutation({
            query: body => ({ 
                url: '/users',
                method: 'POST',
                body
            }),
            invalidatesTags: ['User']
        })
    })
})