import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice(
    {
        name :"user",
        initialState : {admin :  false},
        reducers : {
            changeRole : (state , action) => {
                state.admin = action.payload;
            }
        }
    }
)

export const {changeRole} = userSlice.actions;
export default userSlice.reducer;