import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    showToast: false,
    message: '',
    type: 'success', // 'success', 'error', 'info'
}

const toastSlice = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        showToast: (state, action) => {
            state.showToast = true
            state.message = action.payload.message
            state.type = action.payload.type || 'success'
        },
        hideToast: (state) => {
            state.showToast = false
            state.message = ''
        }
    }
})

export const { showToast, hideToast } = toastSlice.actions

export const selectShowToast = state => state.toast.showToast
export const selectMessage = state => state.toast.message
export const selectType = state => state.toast.type

export default toastSlice.reducer
