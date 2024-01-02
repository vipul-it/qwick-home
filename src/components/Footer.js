import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className='bg-theme1 text-white py-5 buttom-0'>
        <div className='grid md:grid-cols-3 md:place-items-center m-5'>
            <div>
                <h1 className=' text-[16px] py-2 font-system'> CATEGORIES</h1>
                <ul className='text-[13px]  font-raleway'>
                <li className=''>Health & Home</li>
                <li className=''>Health Care</li>
                <li className='py-[2px]'>Health & Home</li>                   
                </ul>
            </div>
            <div>
                <h1 className=' text-[16px] py-2 font-system'> USEFULL LINK</h1>
                <ul className='text-[12px]  font-poppins'>
                <li className='py-[2px]'>Privacy Policy</li>
                <li className='py-[2px]'>Health Care</li>
                <li className='py-[2px]'>Health & Home</li>                   
                </ul>
            </div>
            <div>
                <h1 className=' text-[16px] py-2 font-system' >CONTACT US</h1>
                <ul className='text-[12px]  font-raleway'>
                <li className='py-[2px]'>Have any question & Suggestion</li>
                <li className='py-[2px]'>support@gamil.com</li>
                <li className='py-[2px]'>9847658476</li>                   
                </ul>
            </div>
        </div>
        <hr />
        <div className='flex justify-center text-sm'>&copy; {currentYear} All Right reserved.</div>
    </div>
  )
}

export default Footer