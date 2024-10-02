import { configureStore } from "@reduxjs/toolkit"
import userReducer from './slices/user'
import dataReducer from './slices/data'
import toastReducer from './slices/toast'

const store = configureStore({
    reducer: {
        user: userReducer,
        data: dataReducer,
        toast: toastReducer
    }
})

export default store