import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name: 'form',
    initialState: {},
    reducers: {
        update: (state, action) => {
            let { name, value } = action.payload

            return ({
                ...state,
                [name]: value
            })
        }
    }
})

export const { update } = formSlice.actions

export default formSlice.reducer
