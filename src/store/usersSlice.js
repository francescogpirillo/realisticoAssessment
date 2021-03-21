import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from '../api/client'

const initialState = {
  users: [],
  status: 'idle',
  error: null
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await API.get('https://jsonplaceholder.typicode.com/users')
    return response.data
  })

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.pending]: (state, action) => {
          state.status = 'loading'
        },
        [fetchUsers.fulfilled]: (state, action) => {
          state.status = 'succeeded'
          state.users = state.users.concat(action.payload)
        },
        [fetchUsers.rejected]: (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        }
      }
  })  
  
  export default usersSlice.reducer  