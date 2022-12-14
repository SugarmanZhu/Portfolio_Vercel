import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';

type Props = {
    pageInfo: PageInfo;
}

function About({ pageInfo }: Props) {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[10px] mr-[-10px] md:tracking-[20px] md:mr-[-20px] text-gray-500 text-2xl'>About</h3>
        <motion.img 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            src={urlFor(pageInfo?.profilePic).url()}
            className='-mb-20 hidden md:block md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a <span className='underline decoration-[#3A88FC]/50'>little</span> about me
            </h4>
            <p className='text-base md:text-lg'>
                {pageInfo?.backgroundInformation}
            </p>
        </div>
    </motion.div>
  )
}

export default About