'use client'

import React, { ReactNode, useState } from 'react'
import { RoughNotation } from 'react-rough-notation'
import {motion} from 'framer-motion'

type Props = {children:ReactNode}

const SectionTitle = ({children}:Props) => {
  const [show, setshow] = useState<boolean>(false)
  return (
    <motion.div
    onViewportEnter={(x)=>setshow(x?.isIntersecting || false)}
    viewport={{ once: true, amount: 0.25 }}
    className="md:my-6 my-4  text-center">
    <RoughNotation
        type="underline"
        color={`#7127BA`}
        strokeWidth={2}
        order={1}
        show={show}
      >
        <h2 className="section-heading text-center ">{children}</h2>
      </RoughNotation>
        </motion.div>
  )
}

export default SectionTitle