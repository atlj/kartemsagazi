module.exports = {
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    400: "#A893D6",
                },
                dark: {
                    400: "#1E1E1E",
                    500: "#181818",
                },
            },
            fontFamily: {
                sans: ["Work Sans"],
                mono: ["IBM Plex Mono"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
