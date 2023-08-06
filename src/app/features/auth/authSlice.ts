import { createSlice } from "@reduxjs/toolkit"

import {
    logInUser,
    loginUserPending,
    logInUserRejected,
    loginUserSuccess,
} from "../../api/authApi"
import { initialState } from "./initialState"

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(logInUser.pending, loginUserPending)
            .addCase(logInUser.fulfilled, loginUserSuccess)
            .addCase(logInUser.rejected, logInUserRejected)
    },
})

export default authSlice.reducer
