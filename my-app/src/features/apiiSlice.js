import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const apiiSlice=createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({baseUrl:' https://63a5d671f8f3f6d4ab011f37.mockapi.io/api/v1'}),
    tagTypes:['posts'],
    endpoints:(builder)=>({
        getPosts:builder.query({
            query:()=>'/users',
            transformResponse:res=>res.sort((a,b)=>b.id-a.id),
            providesTags:['posts']
        }),
        post:builder.query({
            query:(id)=>`/users/${id}`,
            providesTags:['posts']
        }),
        addPost:builder.mutation({
            query:(post)=>({
                url:'/users',
                method:'POST',
                body:post
            }),
            invalidatesTags:['posts']
        }),
        updataPost:builder.mutation({
            query:(post)=>({
                url:`/users/${post.id}`,
                method:'PATCH',
                body:post
            }),
            invalidatesTags:['posts']
        }),
        deletePost:builder.mutation({
            query:(id)=>({
                url:`/users/${id}`,
                method:'DELETE',
            }),
            invalidatesTags:['posts']
        })
    }),
    
});

export const{useGetPostsQuery,usePostQuery,useAddPostMutation,useUpdataPostMutation,useDeletePostMutation}=apiiSlice