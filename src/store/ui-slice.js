import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {notification: null},
    reducers: {
        showNotification(state, action) {
            state.notification = {
                massage: action.payload.massage,
                type: action.payload.type,
                open: action.payload.open
            }
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;