import colors from 'windicss/colors'

import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.violet[500],
      },
    },
  },
})
