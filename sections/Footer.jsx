import React from 'react'


const Footer = () => {
  return (
    <footer className='mt-48 border-gray-500/50 border-t p-4 px-12 flex flex-col justify-between pt-24 md:flex-row flex-wrap'>
        <ul className='my-4 flex flex-col gap-2'>
            <li><a href="http://">Github</a></li>
            <li><a href="http://">LinkedIn</a></li>
            <li><a href="http://">Twitter</a></li>
            <li><a href="http://">Instagram</a></li>
            <li><a href="http://">Email</a></li>
        </ul>
       
        <ul className='my-4 flex flex-col gap-2'>
            <li><a href="http://">About us</a></li>
            <li><a href="http://">Features</a></li>
            <li><a href="http://">Information</a></li>
            <li><a href="http://">Contact Us</a></li>
            <li><a href="http://">Request</a></li>
        </ul>
        <ul className='my-4 flex flex-col gap-2'>
            <li><a href="http://">Our Team</a></li>
            <li><a href="http://">Vision</a></li>
            <li><a href="http://">Plans</a></li>
            <li><a href="http://">Pricing</a></li>
            <li><a href="http://">Technology</a></li>
        </ul>
        <div className='my-4 flex flex-col gap-2'>
            Adress: 123 Walkway Street, SGSITS Indore <br /> Email:dummyemail@vizola.com <br />
            Phone: 778-777-8888
        </div>
    </footer>
  )
}

export default Footer