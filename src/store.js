import { configureStore } from '@reduxjs/toolkit'

import formSlice from './slice'

export default configureStore({
    reducer: {
        form: formSlice
    }
})