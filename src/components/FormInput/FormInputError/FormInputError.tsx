import React from "react"
import { View } from "react-native"
import IconError from "../../SVG/icon-error"
import TextError from "../../TextError/TextError"
interface IProps {
    error: string
}

const FormInputError: React.FC<IProps> = ({ error }) => {
    return error ? (
        <View className="flex-row justify-between items-center h-34 w-full">
            <View className="mr-12">
                <IconError />
            </View>
            <TextError text={error} />
        </View>
    ) : (
        <View className="h-34"></View>
    )
}

export default FormInputError
