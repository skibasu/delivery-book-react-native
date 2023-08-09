import { Image } from "expo-image"
const LogoDark = () => {
    return (
        <Image
            source={require("./logo-2.png")}
            contentFit="cover"
            className="mb-28"
            style={{ width: 158, height: 94 }}
        />
    )
}

export default LogoDark
