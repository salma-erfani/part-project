import { configureStore } from "@reduxjs/toolkit"
import userReducer from './slices/user'
import dataReducer from './slices/data'

const store = configureStore({
    reducer: {
        user: userReducer,
        data: dataReducer
    }
})

export default store