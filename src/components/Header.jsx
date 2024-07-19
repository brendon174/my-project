import React from 'react'
import { Button } from "@material-tailwind/react";

function Header() {
  return (
    <>
       <header className='bg-slate-900 p-5 '>
          <div className='hidden md:flex container mx-auto justify-between items-center '>
            <h1 className='text-3xl font-bold text-white'>logo</h1>

            <nav>
              <ul className='flex space-x-4 text-white'>
                <li><a href="#"></a>Home</li>
                <li><a href="#"></a>About</li>
                <li><a href="#"></a>Contato</li>
                <li><a href="#"></a>Project</li>
              </ul>
            </nav>
            <svg class="h-6 w-6 text-slate-600" 
             viewBox="0 0 24 24" 
              fill="none"  
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round"  
              stroke-linejoin="round"> 
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
          </div>
       </header>

       <section className=' text-center h-screen bg-gradient-to-b from-slate-950  to-gray-800 flex  flex-row items-center text-white'>
        <div className='container mx-auto '>
          <h4 className='font-sans text-[16px]'>CHATGPT</h4>
          <h1 className='font-serif font-bold text-3xl'>TRANSFOME SEU NEGOCIO EM UM NEGOCIO INTELIGENTE E TECNOLOGICO</h1>
          <p className='font-light text-xl font-mono'>A mudança que você tanto procura está aqui!</p>

          <button className='p-5 bg-slate-800 rounded-full  m-5'>CLIQUE AQUI</button>

        </div>
        
       </section>

        

       </>
  )
}

export default Header