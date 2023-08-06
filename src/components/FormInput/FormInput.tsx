import React from "react"
import { Control, Controller } from "react-hook-form"
import { TextInput } from "react-native"

export enum InputMode {
    DECIMAL = "decimal",
    EMAIL = "email",
    NONE = "none",
    NUMERIC = "numeric",
    SEARCH = "search",
    TEL = "tel",
    TEXT = "text",
    URL = "url",
}
interface IFormInput {
    control: Control<
        {
            email: string
            password: string
        },
        any
    >
    name: any
    placeholder?: string
    inputMode?: InputMode
    secureTextEntry?: boolean
}
const FormInput: React.FC<IFormInput> = ({ control, name, ...rest }) => {
    return (
        <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    className="w-full border-black border-solid border-2 mb-1.5 py-1.5 px-2.5 outline-none"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    {...rest}
                />
            )}
            name={name}
        />
    )
}

export default FormInput
