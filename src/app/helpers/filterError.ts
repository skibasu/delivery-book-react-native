interface IError {
    statusCode: number | undefined
    message: string | string[] | undefined
}

export const filterError = ({ statusCode, message }: IError): string => {
    if (statusCode && message) {
        switch (statusCode) {
            case 401:
                return "Email or password are incorrect."
            default:
                return typeof message === "object" ? message[0] : message
        }
    }
}
