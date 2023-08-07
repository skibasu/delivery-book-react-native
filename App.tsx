import { Provider } from "react-redux"
import { store } from "./src/app/store"
import Main from "./src"
import * as SplashScreen from "expo-splash-screen"

SplashScreen.preventAutoHideAsync()
setTimeout(SplashScreen.hideAsync, 2000)

export default function App() {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    )
}
