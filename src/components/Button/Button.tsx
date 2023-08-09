import { useColorScheme } from "nativewind"
import React from "react"
import { Pressable, Text, ActivityIndicator } from "react-native"
import { AuthState } from "../../app/features/auth/types"
import TextBold from "../TextBold/TextBold"

interface IProps {
    onClick: () => void
    title: string
    classes?: string
    loading?: AuthState["loading"]
    textClasses?: string
}
const Button: React.FC<IProps> = ({
    loading,
    onClick,
    title,
    classes: className,
    textClasses,
}) => {
    const { colorScheme } = useColorScheme()
    return (
        <Pressable
            className={`w-full bg-black py-1 px-2 h-54 flex items-center justify-center rounded-md dark:bg-light${
                className ? " " + className : ""
            }`}
            onPress={onClick}
            disabled={loading === "pending"}
        >
            <TextBold
                classes={`uppercase text-center text-md text-white dark:text-black${
                    textClasses ? " " + textClasses : ""
                }`}
                title={title}
            />
            {loading && loading === "pending" ? (
                <ActivityIndicator
                    className="absolute right-16"
                    size="small"
                    color={colorScheme === "dark" ? "#000" : "#E6E6E6"}
                />
            ) : null}
        </Pressable>
    )
}

export default Button
