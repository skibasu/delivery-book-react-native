import { NavigationContainer } from "@react-navigation/native"
import { useAppSelector } from "./app/hooks/useStore"
import ProtectedStack from "./navigation/PrivateStack/PrivateStack"
import PublickStack from "./navigation/PublicStack/PublickStack"

const Main = () => {
    const token = useAppSelector((state) => state.auth.token)
    return (
        <NavigationContainer>
            {token ? <ProtectedStack /> : <PublickStack />}
        </NavigationContainer>
    )
}
export default Main
