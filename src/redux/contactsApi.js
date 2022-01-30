import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    tagTypes: ['Contacts'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    endpoints: (build) => ({
        getContacts: build.query({
            query: (name = '') => `contacts?${name && `name_like=${name}`}`,
            providesTags: (result) =>
            result
            ? [
                ...result.map(({ id }) => ({ type: 'Contacts', id })),
                { type: 'Contacts', id: 'LIST' },
                ]
            : [{ type: 'Contacts', id: 'LIST' }],
        }),
        addContact: build.mutation({
            query: (body) => ({
                url: 'contacts',
                method: 'POST',
                body
            }),
            invalidatesTags: ({type: 'Contacts', id: 'LIST'})
        }),
        deleteContact: build.mutation({
            query: (id) => ({
                url: `contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{type: 'Contacts', id: 'LIST'}]
        }),
        toggleContact: build.mutation({
            query: (contact) => ({
                url: `contacts/${contact.id}`,
                method: 'PUT',
                body: contact
            }),
            invalidatesTags: [{type: 'Contacts', id: 'LIST'}]
        })
    })

});

export const {useGetContactsQuery, useAddContactMutation, useDeleteContactMutation, useToggleContactMutation} = contactsApi;