import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface modalState{
    open: boolean
    closed: boolean
   
}
const initialState: modalState = {
    open: false,
    closed: true
}
export const modalSlice = createSlice({
    name: 'modal',
    initialState: initialState,
    reducers: {
        opening(state, action: PayloadAction) {
            state.open = true
            state.closed = false
        },
        closing(state, action: PayloadAction) {
            state.open = false
            state.closed = true
        },
       
    }
})

export default modalSlice.reducer;