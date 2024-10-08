import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    allData: [],
    showData: [],
    query: '',
    sortedOn: null
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setAllData: (state, action) => {
            state.allData = action.payload
        },
        setShowData: (state, action) => {
            state.showData = action.payload
        },
        setQuery: (state, action) => {
            state.query = action.payload
            sessionStorage.setItem('query', action.payload)
        },
        setSortedOn: (state, action) => {
            if (typeof action.payload === 'object') {
                state.sortedOn = action.payload
            }
            else {
                // payload has column name
                state.sortedOn = { column: action.payload, type: 'asc' }
                sessionStorage.setItem('sortColumn', action.payload)
                sessionStorage.setItem('sortType', 'asc')
            }
        },
        toggleSortedOn: (state) => {
            if (state.sortedOn.type === 'asc') {
                state.sortedOn.type = 'desc'
                sessionStorage.setItem('sortType', 'desc')
            }
            else {
                state.sortedOn = null
                sessionStorage.removeItem('sortColumn')
                sessionStorage.removeItem('sortType')
            }
        }
    }
})

export const { setAllData, setShowData, setQuery, setSortedOn, toggleSortedOn } = dataSlice.actions

export const selectAllData = state => state.data.allData
export const selectShowData = state => state.data.showData
export const selectQuery = state => state.data.query
export const selectSortedOn = state => state.data.sortedOn

export default dataSlice.reducer