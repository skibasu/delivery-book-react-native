import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { Text } from "react-native"

const NoAccessScreen = () => {
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-white p-2 w-full">
            <Text>NO ACCESS</Text>
        </SafeAreaView>
    )
}

export default NoAccessScreen
