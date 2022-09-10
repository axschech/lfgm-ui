import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User, CreateUserRequest } from '../login/types';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_HOST
    }),
    tagTypes: ['User'],
    endpoints: builder => ({
        getUser: builder.query<User, string>({
            query: (id) => `/users/${id}`,
            providesTags: ['User']
        }),
        newUser: builder.mutation({
            query: (body: CreateUserRequest) => ({ 
                url: '/users',
                method: 'POST',
                body
            }),
            invalidatesTags: ['User']
        })
    })
});

export const { useGetUserQuery, useNewUserMutation } = apiSlice