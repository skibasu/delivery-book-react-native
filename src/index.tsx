import { NavigationContainer } from "@react-navigation/native"
import { useAppSelector } from "./app/hooks/useStore"
import PublickStack from "./navigation/PublicStack/PublickStack"
import NoAccessScreen from "./screens/public/NoAccessScreen/NoAccessScreen"

export default function () {
    const token = useAppSelector((state) => state.auth.token)
    return (
        <NavigationContainer>
            {token ? <NoAccessScreen /> : <PublickStack />}
        </NavigationContainer>
    )
}
