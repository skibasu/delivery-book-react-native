import { useColorScheme } from "nativewind"
import { Control, Controller, FieldError } from "react-hook-form"
import { TextInput, View } from "react-native"
import FormInputError from "./FormInputError/FormInputError"

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
    className?: string
    error?: FieldError["message"]
}
const FormInput: React.FC<IFormInput> = ({
    control,
    name,
    className,
    error,
    ...rest
}) => {
    const { colorScheme } = useColorScheme()

    return (
        <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
                <View className="w-full">
                    <TextInput
                        className={`w-full bg-white dark:bg-transparent text-black dark:text-white  border-solid border h-54 py-1.5 px-2.5 text-default16 outline-none rounded-md ${
                            !error
                                ? "border-black dark:border-light focus:border-active"
                                : "border-error"
                        }${className ? " " + className : ""}`}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholderTextColor={
                            colorScheme === "dark" ? "#898989" : "#808080"
                        }
                        {...rest}
                    />
                    <FormInputError error={error || ""} />
                </View>
            )}
            name={name}
        />
    )
}

export default FormInput
