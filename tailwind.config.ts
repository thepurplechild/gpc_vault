import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: "#D4AF37",
                obsidian: "#0B0E11",
            },
            fontFamily: {
                serif: ["var(--font-cinzel)", "serif"],
                sans: ["var(--font-inter)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
