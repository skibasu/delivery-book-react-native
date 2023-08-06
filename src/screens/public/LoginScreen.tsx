import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import AuthForm from "../../components/AuthForm/AuthForm"

const LoginScreen = () => {
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-white p-2 w-full">
            <AuthForm />
        </SafeAreaView>
    )
}

export default LoginScreen
