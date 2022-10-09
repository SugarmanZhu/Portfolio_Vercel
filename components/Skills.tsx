import React from 'react'
import SkillElement from './SkillElement'

type Props = {}

function Skills({}: Props) {
  return (
    <div
      className='flex flex-col relative min-h-screen text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[10px] mr-[-10px] md:tracking-[20px] md:mr-[-20px] text-gray-500 text-2xl'>Skills</h3>
  
      <div className='grid grid-cols-4 gap-5'>
        <SkillElement />
        <SkillElement />
        <SkillElement />
        <SkillElement />
        <SkillElement />
        <SkillElement />
        <SkillElement />
        <SkillElement />
        <SkillElement />
        <SkillElement />
        <SkillElement />
        <SkillElement />
        <SkillElement />
        <SkillElement />
      </div>
    </div>
  )
}

export default Skills