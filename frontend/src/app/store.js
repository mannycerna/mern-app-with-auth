import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import goalReducer from '../features/goals/goalSlice'
import blogReducer from '../features/blogs/blogSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    blogs: blogReducer,
  },
})
