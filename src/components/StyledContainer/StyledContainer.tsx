import React from "react"
import { FlexAlignType, View } from "react-native"
import { StyledComponent } from "nativewind"

interface IProps {
    justifyContent?:
        | "flex-start"
        | "flex-end"
        | "center"
        | "space-between"
        | "space-around"
        | "space-evenly"
        | undefined
    alignItems?: FlexAlignType | undefined
    classes?: string
    children: React.ReactNode | React.ReactNode[]
}
const StyledContainer: React.FC<IProps> = ({
    children,
    justifyContent,
    alignItems,
    classes,
}) => {
    return (
        <View
            style={{ flex: 1, justifyContent, alignItems }}
            className={classes}
        >
            {children}
        </View>
    )
}

export default StyledContainer
