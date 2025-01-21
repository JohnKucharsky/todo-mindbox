import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// `buildCreateSlice` allows us to create a slice with async thunks.
export const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  reducerPath: 'usersApi',
  endpoints: () => ({}),
  refetchOnMountOrArgChange: true,
})
