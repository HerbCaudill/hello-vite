import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'

import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  darkMode: 'class',
  plugins: [typography],
  theme: {
    extend: {
      colors: {
        primary: colors.violet['600'],
      },
    },
  },
})
