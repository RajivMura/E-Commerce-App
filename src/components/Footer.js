import React from 'react'
import { assets } from '../assets/assets'

export default function Footer() {
  return (
      <div>
          <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
              
              <div>
                  
                  <img src={assets.logo} className='mb-5 w-32 ' />

                  <p className='w-full md:w-2/3 text-gray-600'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, aperiam?
                  </p>
              </div>
              

              <div>
                  
                  <p className='text-xl font-medium mb-5'>COMPANY</p>
                  <ul className='flex flex-col gap-1 text-gray-600'>
                      <li>Home</li>
                      <li>About</li>
                      <li>Delivery</li>
                      <li>Privacy Policy</li>
                  </ul>
              
              </div>


              <div>
                  <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                  <ul className='flex flex-col gap-1 text-gray-600' >
                      <li>+1-123456789</li>
                      <li>rajiv9@gmail.com</li>
                  
                  </ul>
              </div>
          </div>

          <div>
          
              <hr />
              <p className='py-5 text-sm text-center'> Copyright 2024@ forever.com - All Right Reserved.</p>
          </div>
      
    </div>
  )
}
