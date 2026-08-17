import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice' // Ensure correct path
import adminReducer from './adminSlice' // Ensure correct path
import chatReducer from './chatSlice' // Ensure correct path


export const store = configureStore({
  reducer: {
    user: userReducer, // Assigning the user slice reducer
    admin: adminReducer, // Assigning the seller slice reducer
    chat:chatReducer, // Assigning the chat slice reducer
  },
})
 
export default store; // Optional: Export store for easy imports
