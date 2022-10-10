import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden scroll-smooth z-0 scrollbar 
    scrollbar-track-gray-400/20 scrollbar-thumb-[#3A88FC]/80'>
      <Head>
        <title>Xiaotan's Portfolio</title>
      </Head>
      
      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experience' className='snap-center'>
        <Experience />
      </section>

      <section id='skills' className='snap-center'>
        <Skills />
      </section>

      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='w-10 h-10 rounded-full animate-bounce fixed z-[100] cursor-pointer shadow-md bottom-5 right-[10%] md:right-[5%] lg:right-[10%]'>
          <div className='flex items-center justify-center'>
            <img 
              className='h-10 w-10 rounded-full filter cursor-pointer animate-bounce'
              src="images/avatar.png" alt="" />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home
