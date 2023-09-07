import { Preahvihear,Plus_Jakarta_Sans,Poppins } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
export const preahvihear = Preahvihear({
weight:'400',
style:'normal',
subsets:['latin'],
display:'swap'
})

export const poppins = Poppins({
  weight:['400','600','500'],
  style:'normal',
  subsets:['latin'],
  display:'swap'
  })

export const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
});