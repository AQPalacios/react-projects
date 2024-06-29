/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors:{
            primary: "#1a1519",
            "custom-white": "#ecebe4",
            "custom-red": "#cd355d",
            "custom-orange": "#f9a11c",
            "custom-blue": "#528fae",
            "custom-blue-dark": "#325a6e",
            "custom-red-dark": "#942643",
        },
        extend: {},
    },
    plugins: [],
}

