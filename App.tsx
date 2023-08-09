import { useEffect } from "react"
import { Provider } from "react-redux"
import { store } from "./src/app/store"
import Main from "./src"
import * as SplashScreen from "expo-splash-screen"
import { useFonts } from "expo-font"

SplashScreen.preventAutoHideAsync()

export default function App() {
    const [fontsLoaded, fontError] = useFonts({
        PtSansRegular: require("./assets/fonts/PTSans-Regular.ttf"),
        PtSansBold: require("./assets/fonts/PTSans-Bold.ttf"),
    })
    const prepare = async () => {
        if (fontsLoaded || fontError) setTimeout(SplashScreen.hideAsync, 2000)
    }

    useEffect(() => {
        if (fontsLoaded || fontError) prepare()
    }, [fontsLoaded, fontError])

    return fontsLoaded || fontError ? (
        <Provider store={store}>
            <Main />
        </Provider>
    ) : null
}
