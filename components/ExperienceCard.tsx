import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w=[900px] snap-center md:bg-[#292929] p-10 hover:opacity-100 md:opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
            initial={{ y: -50, opacity: 0}}
            transition={{ duration: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className='hidden md:block w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src="images/avatar.png" 
            alt="" 
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Software Engineer</h4>
            <p className='font-bold text-2xl mt-1'>Zhuxiaotan.com</p>
            <div className='flex space-x-2 my-2'>
                <img 
                    className="h-10 w-10 rounded-full" 
                    src="images/avatar.png" 
                    alt="" 
                />
                <img 
                    className="h-10 w-10 rounded-full" 
                    src="images/avatar.png" 
                    alt="" 
                />
                <img 
                    className="h-10 w-10 rounded-full" 
                    src="images/avatar.png" 
                    alt="" 
                />
            </div>
            <p className='uppercase py-5 text-gray-300'>Dec. 2021 - Present</p>
            <ul className='list-disc space-y ml-5 text-lg'>
                <li>Design ui</li>
                <li>Setup mail system</li>
                <li>Implement login system</li>
                <li>Maintain content</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard