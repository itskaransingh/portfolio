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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0) 100%);',   
      },
     
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
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