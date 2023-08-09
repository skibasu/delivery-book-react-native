import React from "react"
import { Text } from "react-native"
import globalStyles from "../../app/helpers/globalStyles"

interface IProps {
    title: string
    classes?: string
}
const TextRegular: React.FC<IProps> = ({ title, classes }) => {
    return (
        <Text
            style={globalStyles().appFontRegular}
            className={`text-black dark:text-white${
                classes ? " " + classes : ""
            }`}
        >
            {title}
        </Text>
    )
}

export default TextRegular
