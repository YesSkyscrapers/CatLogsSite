import { createSlice } from '@reduxjs/toolkit'

export const app = createSlice({
    name: 'app',
    initialState: {
        sideBarShow: false,
    },
    reducers: {
        toggleSideBar: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.sideBarShow = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { toggleSideBar } = app.actions

export default app.reducer