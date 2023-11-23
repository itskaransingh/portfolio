import { fontFamily } from "tailwindcss/defaultTheme";


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        // bg
        "primary":'#11071F',
        // text
        "secondary":'#7127BA',
        // nav
        "nav":'#1A0B2E',
        // card-text
        "info":'#9857D3',
        //project-card
        "card":'#CCD6F6'
      },
      fontFamily:{
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0) 100%);',  
        'logo-bg-radial':'linear-gradient(180deg, rgba(48, 16, 128, 0.6) 0%, rgba(120, 64, 173, 0.36) 100%);' 
      },
     dropShadow:{
      'logo':'drop-shadow(0px 1px 14px rgba(255, 255, 255, 0.55))'
     }
    },
  },
  plugins: [
  ],
}
//  animation:{
//         'drop':'flip-horizontal-bottom 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) 1s forwards'
//       },
//       keyframes:{
//         "flip-horizontal-bottom":{
//           '0%': {transform: 'rotateX(0)'},
//           '100%': {transform: 'rotateX(-180deg)'}
//         }
//       }