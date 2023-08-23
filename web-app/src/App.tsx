import './main.css'
import { useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { getAllConcerts } from ''



function App() {

  

  return (
    <>
      <NavBar />
      <main>
        <div className='flex justify-center p-5'>
          <img className='md:w-1/2 w-full ' src='https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt='banner' />
        </div>

        <h1 className='text-center'>
          Other Concerts
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-5'>
          <div className='bg-primary-black p-5 text-primary-white'>
            <h2>Box 1</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptas.</p>
          </div>
          <div className='bg-primary-black p-5 text-primary-white'>
            <h2>Box 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptas.</p>
          </div>
          <div className='bg-primary-black p-5 text-primary-white'>
            <h2>Box 3</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptas.</p>
          </div>
        </div>

        <h1 className='text-center'> 
          Featured Artists
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-5'>
          <div className='bg-primary-black p-5 text-primary-white'>
            <h2>Box 1</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptas.</p>
          </div>
          <div className='bg-primary-black p-5 text-primary-white'>
            <h2>Box 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptas.</p>
          </div>
          <div className='bg-primary-black p-5 text-primary-white'>
            <h2>Box 3</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptas.</p>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}

export default App
