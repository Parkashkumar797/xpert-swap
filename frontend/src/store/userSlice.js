import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.user = action.payload; // Correct and clean
    }
  }
})

// Exporting actions and reducer
export const { setUserDetails } = userSlice.actions
export default userSlice.reducer
