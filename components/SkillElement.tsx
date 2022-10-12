import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity';
import { Skill } from '../typings';

type Props = {
    skill: Skill;
    directionLeft?: boolean;
};

function SkillElement({ skill, directionLeft }: Props) {
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
            src={urlFor(skill?.image).url()}
            className='rounded-full border boarder-gray-500 object-cover h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 trnasition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-2xl font-bold text-black opacity-100 p-5'>{skill.title}</p>
            </div>
        </div>
    </div>
  )
}

export default SkillElement