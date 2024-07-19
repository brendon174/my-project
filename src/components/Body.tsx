import React from 'react'
import { Button } from "@material-tailwind/react";

function Body() {
  return (
        <>
         <div className=' h-screen w-full bg-slate-700 flex justify-center items-center '>
            <div className='container text-center text-white'>
              <h4 className='m-0 tracking-[0.75rem]'>SOBRE</h4>
              <h1 className='font-light text-3xl mb-5 '>QUEM SOU EU ? </h1>
              <div className='flex justify-center items-center gap-7'>
                <div className='h-96 w-96  bg-black'> </div>
                <div className='h-96 w-96 bg-slate-900'> </div>
                <div className='h-96 w-96 bg-slate-900'> </div>
              </div>
            </div>
            
         </div>

         <section className='h-screen w-full bg-slate-600'>
       
         </section>

      </>
  )
}

export default Body