import React from "react"
import { Text } from "react-native"
interface IProps {
    text: string
}

const TextError: React.FC<IProps> = ({ text }) => {
    return (
        <Text className="text-left w-full text-error text-sm leading-none">
            {text}
        </Text>
    )
}

export default TextError
