/** @type {import('tailwindcss').Config} */
const shadcnConfig = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

module.exports = {
  darkMode: shadcnConfig.darkMode,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "*.{js,ts,jsx,tsx,mdx}", ...shadcnConfig.content],
  theme: {
    ...shadcnConfig.theme,
    extend: {
      ...shadcnConfig.theme.extend,
      colors: {
        ...shadcnConfig.theme.extend.colors,
        primary: {
          50: "#e6f0f4",
          100: "#cce1e9",
          200: "#99c2d3",
          300: "#66a4bd",
          400: "#3385a7",
          500: "#006791",
          600: "#005274",
          700: "#033D54", // Brand color
          800: "#022e40",
          900: "#011f2b",
        },
        secondary: {
          50: "#f5f5f5",
          100: "#ebebeb",
          200: "#d6d6d6",
          300: "#c2c2c2",
          400: "#adadad",
          500: "#999999",
          600: "#7a7a7a",
          700: "#5c5c5c",
          800: "#3d3d3d",
          900: "#1f1f1f",
        },
        accent: {
          50: "#fff8e6",
          100: "#fef1cc",
          200: "#fde499",
          300: "#fcd666",
          400: "#fbc933",
          500: "#fabc00",
          600: "#c89600",
          700: "#967100",
          800: "#644b00",
          900: "#322600",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      fontSize: {
        "10xl": "10rem",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      gridTemplateColumns: {
        "auto-fill-200": "repeat(auto-fill, minmax(200px, 1fr))",
        "auto-fill-300": "repeat(auto-fill, minmax(300px, 1fr))",
      },
    },
  },
  plugins: [...shadcnConfig.plugins],
}
