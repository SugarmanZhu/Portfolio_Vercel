import { motion } from 'framer-motion';
import React from 'react'
import { urlFor } from '../sanity';
import { Project } from '../typings';

type Props = {
  projects: Project[];
}

function Projects({ projects }: Props) {
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

      <div className='relative w-full flex overflow-x-scroll overflow-y-scroll 
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
              src={urlFor(project?.image).url()} alt="" />
            <div className='space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-xl md:text-4xl font-semibold text-center'>
                <span className='underline decoration-[#3A88FC]/50'>
                  Project {index + 1} of {projects.length}:
                </span> {project.title}
              </h4>

              <div className='flex items-center justify-center space-x-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
                <a href={`${project.linkToBuild}`}> Project Build Link </a>
              </div>

              <div className='flex items-center justify-center space-x-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
                <a href={`${project.linkToRepo}`}> Project Repo Link </a>
              </div>

              <div className='flex items-center space-x-2 justify-center'>
                {project.technologies.map((technology) => (
                  <div key={technology._id} className='mx-0 md:mx-5 flex flex-ro items-center'>
                    <img 
                      className="h-5 w-5 md:h-10 md:w-10 rounded-full" 
                      src={urlFor(technology.image).url()} alt="" 
                    />
                    <span className="hidden md:block p-2 text-gray-400">{technology.title}</span>
                  </div>
                ))}
              </div>

              <p className='text-lg text-center md:text-left'>
                {project.summary}
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