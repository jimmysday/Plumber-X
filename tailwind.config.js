/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  daisyui: {
    themes: [
      {
        light: {
          primary: "#0D3AB5", // Primary color
          secondary: "#22252C", // Dark grey
          accent: "#FFC107", // Amber
          neutral: "#FFFFFF", // White
          "base-100": "#F9FAFB", // Light grey
          info: "#3B82F6", // Blue
          success: "#10B981", // Green
          warning: "#F59E0B", // Orange
          error: "#EF4444", // Red
          gray: "#00000099", // Default text color for light mode
          GunmetalGray: "#22252C",
        },
      },
      {
        dark: {
          primary: "#1E3A8A", // New primary color
          secondary: "#9CA3AF", // Light grey
          accent: "#FFD700", // Gold
          neutral: "#1F2937", // Dark grey for neutral background
          "base-100": "#121826", // Very dark grey (almost black)
          info: "#3B82F6", // Blue
          success: "#10B981", // Green
          warning: "#FBBF24", // Bright yellow
          error: "#F87171", // Softer red
          text: "#F3F4F6", // Default text color for dark mode
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
