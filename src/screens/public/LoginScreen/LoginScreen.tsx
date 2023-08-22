import { useEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { useAppSelector } from "../../../app/hooks/useStore"
import AuthForm from "../../../components/AuthForm/AuthForm"
import { useAppNavigation } from "../../../app/hooks/useNavigation"
import { FontAwesome5 } from "@expo/vector-icons"

const LoginScreen = () => {
    const navigation = useAppNavigation()
    const { token } = useAppSelector((state) => state.auth)
    useEffect(() => {
        token && navigation.replace("Home")
    }, [token])
    return (
        <SafeAreaView className="flex-1 px-54 pt-120 w-full bg-light dark:bg-dark">
            <AuthForm />
        </SafeAreaView>
    )
}

export default LoginScreen
