/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      'intro-background': "url('/src/data/cosmic-background.png')",
      'abous-us-background': "url('/src/data/about_us.png')",
      'featured-background': "url('/src/data/Back2.png')",
      'contact-us-background': "url('/src/data/contactUs_bg.png') "
    }
  },
  plugins: [],
}

