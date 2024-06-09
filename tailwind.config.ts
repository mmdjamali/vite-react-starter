import type { Config } from 'tailwindcss'

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
  plugins: [
    require("tailwindcss-animate"),
    require("daisyui"),
  ],
} satisfies Config

