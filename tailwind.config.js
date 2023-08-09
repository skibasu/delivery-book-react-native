//Before
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],

    theme: {
        fontFamily: {
            PtSansRegular: "PtSansRegular",
            PtSansBold: "PtSansBold",
        },
        fontSize: {
            sm: 12,
            default16: 16,
            default18: 18,
            md: 20,
            lg: 22,
            xl: 78,
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            light: "#E6E6E6",
            dark: "#0F221C",
            white: "#F5F0F0",
            black: "#000000",
            active: "#178859",
            error: "#D9412D",
            placeholderLight: "#808080",
            placeholderDark: "#898989",
        },
        extend: {
            height: {
                54: 54,
            },
            spacing: {
                8: 8,
                12: 12,
                16: 16,
                18: 18,
                24: 24,
                28: 28,
                34: 34,
                40: 40,
                54: 54,
                120: 120,
            },
        },
    },
    plugins: [],
}
