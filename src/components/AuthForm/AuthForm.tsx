import React from "react"
import { useForm } from "react-hook-form"
import { Credentials } from "../../app/features/auth/types"
import FormInput from "../FormInput/FormInput"
import { useAppDispatch, useAppSelector } from "../../app/hooks/useStore"
import { logInUser } from "../../app/api/authApi"
import LogoLight from "../LogoLight/LogoLight"
import { useColorScheme } from "nativewind"
import LogoDark from "../LogoDark/LogoDark"
import StyledContainer from "../StyledContainer/StyledContainer"
import Button from "../Button/Button"
import { yupResolver } from "@hookform/resolvers/yup"
import { authSchema } from "./validation"
import FormInputError from "../FormInput/FormInputError/FormInputError"
import { filterError } from "../../app/helpers/filterError"

const AuthForm: React.FC = () => {
    const defaultValues = {
        email: "",
        password: "",
    }
    const { colorScheme } = useColorScheme()
    const dispatch = useAppDispatch()
    const { error, loading } = useAppSelector((state) => state.auth)
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(authSchema),
        mode: "onTouched",
        defaultValues,
    })
    const onSubmit = async (data: Credentials) => {
        dispatch(logInUser(data))
    }

    return (
        <StyledContainer alignItems="center">
            {colorScheme === "dark" ? <LogoDark /> : <LogoLight />}
            <FormInput
                control={control}
                name="email"
                placeholder="Email"
                error={errors.email?.message}
            />
            <FormInput
                control={control}
                name="password"
                placeholder="Password"
                secureTextEntry={true}
                error={errors.password?.message}
            />
            <Button
                title="Log In"
                loading={loading}
                classes="mt-16 mb-4"
                textClasses="text-white dark:text-black"
                onClick={handleSubmit(onSubmit)}
            />

            <FormInputError
                error={filterError({
                    statusCode: error?.statusCode,
                    message: error?.message,
                })}
            />
        </StyledContainer>
    )
}

export default AuthForm
