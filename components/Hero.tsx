import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';

type Props = {
    pageInfo: PageInfo;
}

function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi there, I'm Xiaotan",     // English
            '哈喽，我是朱笑谈',           // Chinese
            'नमस्ते, मैं Xiaotan हूँ',        // Hindi
            'Hola, soy Xiaotan',        // Spanish
            'Salut, je suis Xiaotan',   // French
            'مرحبًا ، أنا Xiaotan',     // Arabic
            'سلام، من شیائوتان هستم',  // Persian
            'Hallo, ich bin Xiaotan',   // German
            'Привет, я Сяотань',        // Russian
            'Hello, saya Xiaotan',      // Malay
            'Olá, eu sou Xiaotan',      // Portuguese
            'Ciao, sono Xiaotan',       // Italian
            'Merhaba ben Xiaotan',      // Turkish
            '안녕하세요 샤오탄입니다',    // Korean
            'こんにちは、シャオタンです', // Japanese
            'ਹੈਲੋ, ਮੈਂ ਸ਼ਾਓਤਨ ਹਾਂ',          // Punjabi
            'హలో, నేను షాటన్',         // Telugu
            'हॅलो, मी शाओतन आहे',        // Marathi
        ],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <img
            className='relative w-32 h-32 rounded-full mx-auto object-cover'
            src={urlFor(pageInfo?.heroImage).url()}
        />
        <div>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[8px] mr-[-8px] md:tracking-[15px] md:mr-[-15px]'>
                {pageInfo.role}
            </h2>
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold scroll-px-10'>
                <span className='mr-2'>{text}</span>
                <Cursor cursorColor="#3A88FC" />
            </h1>
            
            <div className='pt-5'>
                <Link href='#about'><button className='heroButton'>About</button></Link>
                <Link href='#experience'><button className='heroButton'>Experience</button></Link>
                <Link href='#skills'><button className='heroButton'>Skills</button></Link>
                <Link href='#projects'><button className='heroButton'>Projects</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Hero