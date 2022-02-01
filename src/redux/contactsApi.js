import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    tagTypes: ['Contacts'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    endpoints: (build) => ({
        getContacts: build.query({
            query: (name = '') => `contacts?${name && `name_like=${name}`}`,
            providesTags: (result) => ['Contacts'],
        }),
        addContact: build.mutation({
            query: (body) => ({
                url: 'contacts',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Contacts']
        }),
        deleteContact: build.mutation({
            query: (id) => ({
                url: `contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contacts']
        }),
        toggleContact: build.mutation({
            query: (contact) => ({
                url: `contacts/${contact.id}`,
                method: 'PUT',
                body: contact
            }),
            invalidatesTags: ['Contacts']
        })
    })

});

export const {useGetContactsQuery, useAddContactMutation, useDeleteContactMutation, useToggleContactMutation} = contactsApi;