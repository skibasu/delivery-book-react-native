import React from "react"
import { Text } from "react-native"
interface IProps {
    text: string
}

const TextSuccess: React.FC<IProps> = ({ text }) => {
    return (
        <Text className="text-center mb-4 w-full text-green-700 uppercase">
            {text}
        </Text>
    )
}

export default TextSuccess
