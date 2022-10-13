import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from '../typings';

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};

type Props = {
    pageInfo: PageInfo;
}

function ContactMe({ pageInfo }: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:${pageInfo.email}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    };

  return (
    <div className='flex flex-col relative h-screen pt-10 md:pt-0 text-left overflow-hidden md:flex-row max-w-full justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[10px] mr-[-10px] md:tracking-[20px] md:mr-[-20px] text-gray-500 text-2xl'>Contact</h3>

        <div className='flex flex-col mx-8 space-y-5 md:space-y-10'>
            <h4 className='hidden md:block text-xl md:text-4xl font-semibold text-center'>
                Want to know more? <span className='decoration-[#3A88FC]/50 underline'>Drop me a message!</span>
            </h4>

            <div className='space-y-5 md:space-y-10'>
                <div className='flex items-center justify-center space-x-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-[#3A88FC] h-7 w-7 animate-pulse">
                        <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                        <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
                    </svg>
                    <a href={`tel:${pageInfo.phoneNumber}`} className='text-sm md:text-2xl'>{pageInfo.phoneNumber} (Due of the poor signal, I prefer WhatsApp)</a>
                </div>

                <div className='flex items-center justify-center space-x-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-[#3A88FC] h-7 w-7 animate-pulse">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                    <a href={`mailto:${pageInfo.email}`} className='text-sm md:text-2xl'>{pageInfo.email}</a>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto text-sm'>
                <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                    <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                </div>
                <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                <textarea {...register('message')} placeholder='Message' className='contactInput' />
                <button type='submit' className='bg-[#3A88FC] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe