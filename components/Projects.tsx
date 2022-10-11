import { motion } from 'framer-motion';
import React from 'react'

type Props = {}

function Projects({}: Props) {
  const projects = [1,2,3,4,5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className='flex flex-col relative h-screen text-left overflow-hidden 
      md:flex-row max-w-full justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[10px] mr-[-10px] 
      md:tracking-[20px] md:mr-[-20px] text-gray-500 text-2xl'>Projects</h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden 
      snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 
      scrollbar-thumb-[#3A88FC]/60'>
        {projects.map((project, index) => (
          <div key={index} className='w-screen flex-shrink-0 snap-center flex flex-col 
          space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img 
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className='hidden md:block w-96 h-96 rounded-2xl object-cover'
              src="images/avatar.png" alt="" />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#3A88FC]/50'>
                  Project {index + 1} of {projects.length}:
                </span> Project Name {project}
              </h4>
              <p className='text-lg text-center md:text-left'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur reprehenderit eaque, tempora quia porro placeat, fugit voluptatem quisquam assumenda non voluptates excepturi eligendi. Alias maiores nobis eveniet debitis. Inventore, aut.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full absolute top-[30%] bg-[#3A88FC]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects