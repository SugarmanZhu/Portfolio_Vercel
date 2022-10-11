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
    scrollbar-track-gray-400/20 scrollbar-thumb-[#3A88FC]/60'>
      <Head>
        <title>Xiaotan Zhu</title>
        <link rel="shortcut icon" href="images/avatar.png" />
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
        <footer className='h-10 w-10 rounded-full animate-bounce fixed z-[100] cursor-pointer shadow-md bottom-5 right-[10%] md:right-[5%] lg:right-[10%]'>
          <div className='flex items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-[#3A88FC] h-10 w-10 animate-pulse">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z" clipRule="evenodd" />
            </svg>
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home
