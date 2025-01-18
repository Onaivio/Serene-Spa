/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",      
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    //Aca declaramos el screens para el tipo de pantalla 
    fontFamily: {
      primary: "var(--font-marcellus)",
      secondary: "var(--font-montserrat)",
    },
    //Aca declaramos la familia de fuente de letra
    extend: {
      colors: {
        //Configuramos el valor de los colores a usar
        primary: {
          DEFAULT: "#473936",
        },
        secondary: {
          DEFAULT: "#f2dfce",
          100: "#cea39c",
        },
        accent: {
          DEFAULT: "#f19687",
          100: "#f2d5c5",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}