import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity';
import { Skill } from '../typings';

type Props = {
    skill: Skill;
};

function SkillElement({ skill }: Props) {
  return (
    <motion.div
        initial={{
            y: -50,
            opacity: 0,
        }}
        transition={{ duration: 0.5 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className='group relative flex cursor-pointer'
    >
        <img 
            src={urlFor(skill?.image).url()}
            className='rounded-lg border boarder-gray-500 object-cover h-16 w-16 md:h-28 md:w-28 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 trnasition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-lg z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-sm md:text-2xl font-bold text-black opacity-100 p-5'>{skill.title}</p>
            </div>
        </div>
    </motion.div>
  )
}

export default SkillElement