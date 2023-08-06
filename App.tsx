import { Provider } from "react-redux"
import { store } from "./src/app/store"
import Main from "./src"

export default function App() {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    )
}
