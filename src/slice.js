import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name: 'form',
    initialState: {},
    reducers: {
        update: (state, action) => {
            let { name, label, value } = action.payload

            console.log(`name: ${name}, value: ${value}`);

            return ({
                ...state,
                [name]: value
            })
        }
    }
})

export const { update } = formSlice.actions

export default formSlice.reducer
