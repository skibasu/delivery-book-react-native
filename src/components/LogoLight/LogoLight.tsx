import { Image } from "expo-image"
const LogoLight = () => {
    return (
        <Image
            source={require("./logo-1.png")}
            contentFit="cover"
            className="mb-28"
            style={{ width: 158, height: 94 }}
        />
    )
}

export default LogoLight
