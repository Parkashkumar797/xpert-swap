import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  admin: null,
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdminDetails: (state, action) => {
      // console.log(action.payload)
      state.admin = action.payload; //  Use this if dispatching plain AdminData
    },
  },
});

export const { setAdminDetails } = adminSlice.actions;
export default adminSlice.reducer;
