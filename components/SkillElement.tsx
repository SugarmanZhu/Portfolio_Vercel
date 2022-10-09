import { once } from 'events';
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    directionLeft?: boolean;
};

function SkillElement({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
            initial={{
                x: directionLeft ? -100 : 100,
                opacity: 0,
            }}
            transition={{ duration: 0.5 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            src='/images/avatar.png'
            className='rounded-full border boarder-gray-500 object-cover h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 trnasition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>Skill</p>
            </div>
        </div>
    </div>
  )
}

export default SkillElement