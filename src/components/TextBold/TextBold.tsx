import React from "react"
import { Text } from "react-native"
import globalStyles from "../../app/helpers/globalStyles"

interface IProps {
    title: string
    classes?: string
}
const TextBold: React.FC<IProps> = ({ title, classes }) => {
    return (
        <Text
            style={globalStyles().appFontBold}
            className={`text-black dark:text-white${
                classes ? " " + classes : ""
            }`}
        >
            {title}
        </Text>
    )
}

export default TextBold
