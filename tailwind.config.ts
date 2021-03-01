import colors from 'windicss/colors'
import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: colors.blue[500],
      },
    },
  },
})
