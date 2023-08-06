import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "../../screens/public/LoginScreen"
import { RootStackParamList } from "../../screens/types"

const Stack = createNativeStackNavigator<RootStackParamList>()

const PublickStack: React.FC = () => (
    <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen
            name="Auth"
            component={LoginScreen}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
)

export default PublickStack
