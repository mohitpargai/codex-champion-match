/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Orbitron", "Rajdhani", "system-ui", "sans-serif"],
        body: ["Rajdhani", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        neon: "0 0 24px rgba(56, 189, 248, .35), 0 0 70px rgba(236, 72, 153, .22)",
        win: "0 0 36px rgba(250, 204, 21, .38), 0 0 96px rgba(34, 211, 238, .28)"
      },
      backgroundImage: {
        arena:
          "radial-gradient(circle at 50% 0%, rgba(34,211,238,.2), transparent 28%), radial-gradient(circle at 82% 18%, rgba(244,63,94,.14), transparent 22%), radial-gradient(circle at 18% 24%, rgba(132,204,22,.12), transparent 18%), linear-gradient(135deg, #050816 0%, #090b1f 50%, #130817 100%)"
      }
    }
  },
  plugins: []
};
