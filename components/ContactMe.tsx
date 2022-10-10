import React from 'react'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};

type Props = {}

function ContactMe({}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:web_message@zhuxiaotan.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    };

  return (
    <div className='flex flex-col relative h-screen text-left overflow-hidden md:flex-row max-w-full justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[10px] mr-[-10px] md:tracking-[20px] md:mr-[-20px] text-gray-500 text-2xl'>Contact</h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                Want to know more? <span className='decoration-[#F7AB0A]/50 underline'>Drop me a message!</span>
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center justify-center space-x-5'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-2xl'>+44 07410078526</p>
                </div>

                <div className='flex items-center justify-center space-x-5'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-2xl'>xiaotan@zhuxiaotan.com</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                    <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                </div>
                <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                <textarea {...register('message')} placeholder='Message' className='contactInput' />
                <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe