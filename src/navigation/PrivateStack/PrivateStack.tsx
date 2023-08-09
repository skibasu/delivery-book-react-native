import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../../screens/public/HomeScreen/HomeScreen"
import { RootStackParamList } from "../../screens/types"

const Stack = createNativeStackNavigator<RootStackParamList>()

const ProtectedStack: React.FC = () => (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
)

export default ProtectedStack
