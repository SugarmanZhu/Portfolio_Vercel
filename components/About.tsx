import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function About({}: Props) {
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
            src='/images/avatar.png'
            className='-mb-20 hidden md:block md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a <span className='underline decoration-[#F7AB0A]/50'>little bit</span> about me
            </h4>
            <p className='text-base md:text-lg'>
                Hi, I'm Xiaotan Zhu from Beijing, China. 
                I am currently a master student studying MSc Advanced Computing at Imperial College London. 
                Prior to this, I was a computer science student at University of Manchester for three years. 
                Before then, I studied at Dulwich International High School Suzhou, a British high school located in Suzhou, China.
                
                {/* TODO update about text
                <br></br>
                <br></br>
                TODO: I am going to update this section soon.
                <br></br>
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a blandit est. Cras aliquam eget tellus nec porta. Duis ante libero, rhoncus sed suscipit nec, luctus vitae urna. Aliquam eget sodales mi, et pulvinar tellus. Integer feugiat quis turpis non feugiat. Fusce tristique dapibus accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                <br></br>
                <br></br>
                TODO: I am going to update this section soon. */}
            </p>
        </div>
    </motion.div>
  )
}

export default About