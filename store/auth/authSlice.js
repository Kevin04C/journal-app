import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated', //'checking','not-authenticated','authenticated' 
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
  },
  reducers: {
    loading: (state, action) => {

    },
    logout: (state, payload) => {

    },
    chekingCredentials: (state) => {
      state.status = "checking"
    }

  },
});

export const { loading, logout, chekingCredentials } = authSlice.actions;