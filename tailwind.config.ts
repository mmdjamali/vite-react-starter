import type { Config } from 'tailwindcss'
import themes from "daisyui/src/theming/themes"

export default {
  content: [],
  theme: {
    extend: {
      keyframes: {
        "accordion-slide-up": {
          "from": {
            height: "var(--radix-accordion-content-height)"
          },
          "to": {
            height: "0"
          }
        },
        "accordion-slide-down": {
          "from": {
            height: "0"
          },
          "to": {
            height: "var(--radix-accordion-content-height)"
          }
        }
      },
      animation: {
        "accordion-slide-up": "accordion-slide-up 0.2s ease-out",
        "accordion-slide-down": "accordion-slide-down 0.2s ease-out",
      }
    }
  },
  daisyui: {
    themes: [{
      light: {
        ...themes["light"],
        primary: "#FF3E15",
        "primary-content": "#fff",
        "success-content": "#fff",
        "error-content": "#fff",

        "--rounded-btn": "0.5rem",
      }
    }, "dark"],
    logs: false,
  },
  plugins: [
    require("tailwindcss-animate"),
    require("daisyui"),
  ],
} satisfies Config

