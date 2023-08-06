import React from "react"
import { View, Text, Pressable } from "react-native"
import { useForm } from "react-hook-form"
import { Credentials } from "../../app/features/auth/types"
import FormInput from "../FormInput/FormInput"
import { useAppDispatch, useAppSelector } from "../../app/hooks/useStore"
import { logInUser } from "../../app/api/authApi"
import { styled } from "nativewind"

const StyledError = styled(Text, "text-left mb-2 w-full text-rose-700")
const StyledSucces = styled(
    Text,
    "text-center mb-4 w-full text-green-700 uppercase"
)

const AuthForm: React.FC = () => {
    const generateError = (message: string[] | string) => {
        if (typeof message === "object" && message.length > 0) {
            return message.map((m) => <StyledError key={m}>{m}</StyledError>)
        } else {
            return <StyledError>{message}</StyledError>
        }
    }
    const dispatch = useAppDispatch()
    const { error, loading, _id } = useAppSelector((state) => state.auth)
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    })
    const onSubmit = async (data: Credentials) => dispatch(logInUser(data))

    return (
        <View className="flex-1 items-center justify-center bg-white p-2 w-full">
            {_id && !error ? (
                <View className="w-full">
                    <StyledSucces>You are log in </StyledSucces>
                    <StyledSucces>ID: {_id}</StyledSucces>
                </View>
            ) : null}

            <FormInput control={control} name="email" placeholder="Email" />
            <FormInput
                control={control}
                name="password"
                placeholder="Password"
                secureTextEntry={true}
            />
            <Pressable
                className="w-full bg-blue-500 py-1 px-2 mt-4"
                onPress={handleSubmit(onSubmit)}
                disabled={loading === "pending"}
            >
                <Text className="text-white font-bold uppercase text-center text-lg">
                    Log In
                </Text>
            </Pressable>
            <View className="mt-6 w-full">
                {error?.error ? (
                    <StyledError>ERROR : {error.error}</StyledError>
                ) : null}
                {error?.statusCode ? (
                    <StyledError>CODE : {error.statusCode}</StyledError>
                ) : null}
                {error?.message ? generateError(error.message) : null}
            </View>
        </View>
    )
}

export default AuthForm
