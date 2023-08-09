import * as Font from "expo-font"

export const useFonts = async () =>
    await Font.loadAsync({
        PtSansRegular: require("../../../assets/fonts/PTSans-Regular.ttf"),
        PtSansBold: require("../../../assets/fonts/PTSans-Bold.ttf"),
    })
