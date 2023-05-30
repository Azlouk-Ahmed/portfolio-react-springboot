import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice(
    {
        name :"modify",
        initialState : {opened :  false, reloaded : false},
        reducers : {
            toggle : (state , action) => {
                state.opened = action.payload;
            },
            setReloaded : (state , action) => {
                state.reloaded = action.payload;
            }
        }
    }
)

export const {toggle, setReloaded} = toggleSlice.actions;
export default toggleSlice.reducer;