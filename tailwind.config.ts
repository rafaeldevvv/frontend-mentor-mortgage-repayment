import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                lime: "hsl(61, 70%, 52%)",
                red: "hsl(4, 69%, 50%)",
                slate: {
                    "100": "hsl(202, 86%, 94%)",
                    "300": "hsl(203, 41%, 72%)",
                    "500": "hsl(200, 26%, 54%)",
                    "700": "hsl(200, 24%, 40%)",
                    "900": "hsl(202, 55%, 16%)",
                },
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
