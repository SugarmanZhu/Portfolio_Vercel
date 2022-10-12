import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity';
import { Experience } from '../typings';

type Props = {
    experience: Experience;
}

function ExperienceCard({ experience }: Props) {
    const formatDate = (date: string) => {
        const months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        const d = new Date(date);
        const month = d.getMonth();
        const year = d.getFullYear();
        return `${months[month]} ${year}`;
      };
  return (
    <article className='flex flex-col rounded-lg items-center mt-[100px] md:mt-0 space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
            initial={{ y: -50, opacity: 0}}
            transition={{ duration: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className='hidden md:block w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src={urlFor(experience?.companyImage).url()}
            alt="" 
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-2xl md:text-4xl font-light'>{experience.company}</h4>
            <p className='font-bold text-xl md:text-2xl mt-1'>{experience.jobTitle}</p>
            <div className='flex space-x-2 my-2 pb-5 overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#3A88FC]/60'>
                {experience?.technologies.map((technology) => (
                    <img
                        key={technology._id}
                        className='h-10 w-10 rounded-full'
                        src={urlFor(technology.image).url()}    
                    />
                ))}
            </div>
            <p className='py-5 text-gray-300'>
                {formatDate(experience.dateStarted)} - {experience.isCurrentlyWorkingHere ? "Present" : formatDate(experience.dateEnded)}
            </p>
            <ul className='list-disc space-y-4 ml-5 pr-5 text-lg h-96 overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#3A88FC]/60'>
                {experience.points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard