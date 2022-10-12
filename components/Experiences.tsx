import { motion } from 'framer-motion'
import React from 'react'
import { Experience } from '../typings';
import ExperienceCard from './ExperienceCard'

type Props = {
  experiences: Experience[];
}

function Experiences({ experiences }: Props) {
  return (
    <motion.div
        className='flex flex-col relative h-screen text-lift overflow-row  max-w-full 
        px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[10px] mr-[-10px] 
        md:tracking-[20px] md:mr-[-20px] text-gray-500 text-2xl'>Experience</h3>
        
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x 
        snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#3A88FC]/60'>
            {experiences.map((experience) => (
                <ExperienceCard key={experience._id} experience={experience} /> 
            ))}
        </div>
    
    </motion.div>
  )
}

export default Experiences