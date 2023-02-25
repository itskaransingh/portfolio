'use client'

import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import { wallDrop } from '../utils/motion'

type Props = {}

const animationTest = (props: Props) => {
        return (
          <motion.div
            // animate={controls}
            initial="initial"
            variants={wallDrop}
          >
            {/* Card */}
            <motion.div
              className="relative w-72 h-96 rounded-lg overflow-hidden"
              drag
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/pic_scetch_2x.webp"
                  alt="Card"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </motion.div>
          </motion.div>
        )

      
}

export default animationTest