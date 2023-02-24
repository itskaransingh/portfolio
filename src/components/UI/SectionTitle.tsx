'use client'

import React, { ReactNode } from 'react'
import { RoughNotation } from 'react-rough-notation'

type Props = {children:ReactNode}

const SectionTitle = ({children}:Props) => {
  return (
    <div className="my-6 max-md:my-10  text-center">
    <RoughNotation
        type="underline"
        color={`#7127BA`}
        strokeWidth={2}
        order={1}
        show={true}

      >
        <h2 className="section-heading text-center ">{children}</h2>
      </RoughNotation>
        </div>
  )
}

export default SectionTitle