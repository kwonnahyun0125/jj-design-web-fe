import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/component/**/*.{js,ts,jsx,tsx}",
    "./src/page/**/*.{js,ts,jsx,tsx}",
    "./src/style/global.css",
  ],
  theme: {
    extend: {
      colors: {
      },

      fontSize: {
      },

      // 다크 모드용 색상 추가
      backgroundColor: {
      },
      textColor: {
      },

      // 폰트 패밀리 추가
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
    },
  },
}

export default config