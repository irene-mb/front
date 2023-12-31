import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// create the api

export const appApi = createApi({
    reducerPath: "appApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://geo-58gl.onrender.com/" }),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (user) => ({
                url: "/users/signup",
                method: "POST",
                body: user,
            }),
        }),
        search: builder.mutation({
            query: (user) => ({
                url: "/users/search",
                method: "POST",
                body: user,
            }),
        }),
        update: builder.mutation({
            query: (user) => ({
                url: "/users/update",
                method: "PATCH",
                body: user,
            }),
        }),

        login: builder.mutation({
            query: (user) => ({
                url: "/users/login",
                method: "POST",
                body: user,
            }),
        }),
       
    }),
});

export const {
    useSignupMutation,
    useLoginMutation,
    useSearchMutation,
    useUpdateMutation
} = appApi;

export default appApi;
