import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user";
import toggleReducer from "./features/toggleModify"
export const store = configureStore(
    {
        reducer : {
            admin : userReducer,
            opened : toggleReducer,
            reloaded: toggleReducer,
        }
    }
)