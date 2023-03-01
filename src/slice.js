import { createSlice } from "@reduxjs/toolkit";

import { sampleData } from './assets/sample-form-data.json'

export const formSlice = createSlice({
    name: 'form',
    initialState: {
        // ...sampleData
    },
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
