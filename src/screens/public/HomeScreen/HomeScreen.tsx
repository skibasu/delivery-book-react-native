import React, { useEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { useAppNavigation } from "../../../app/hooks/useNavigation"
import { useAppDispatch, useAppSelector } from "../../../app/hooks/useStore"
import Button from "../../../components/Button/Button"
import StyledContainer from "../../../components/StyledContainer/StyledContainer"
import { logOutUser } from "../../../app/features/auth/authSlice"
import TextBold from "../../../components/TextBold/TextBold"
import LogoLight from "../../../components/SVG/logo-light"

const HomeScreen = () => {
    const navigation = useAppNavigation()
    const dispatch = useAppDispatch()
    const { token } = useAppSelector((state) => state.auth)

    useEffect(() => {
        !token && navigation.replace("Auth")
    }, [token])
    return (
        <SafeAreaView className="flex-1  w-full bg-light dark:bg-dark">
            <StyledContainer
                alignItems="center"
                justifyContent="center"
                classes="px-54"
            >
                <LogoLight />
            </StyledContainer>
        </SafeAreaView>
    )
}

export default HomeScreen
