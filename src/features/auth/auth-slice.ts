import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AuthState {
    _id: string | null
    token: string | null
}

const initialState: AuthState = {
    _id: null,
    token: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login() {
            console.log("login")
        },
        logout(state) {
            ;(state._id = null), (state.token = null)
        },
    },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
