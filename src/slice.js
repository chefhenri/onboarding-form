import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name: 'form',
    initialState: {},
    reducers: {
        update: (state, action) => {
            return ({
                ...state,
                [action.payload.name]: action.payload.value
            })
        }
    }
})

export const { update } = formSlice.actions

export default formSlice.reducer
