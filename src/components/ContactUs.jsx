import React from 'react'
import t_icon from '../data/t-icon.png'
import e_icon from '../data/e-icon.png'
import p_icon from '../data/p-icon.png'
import SML from '../data/socialMediaLinks.png'
import triangle5 from '../data/Triangle5.png'
import triangle6 from '../data/Triangle6.png'
import triangle7 from '../data/Triangle7.png'

const ContactUs = () => {
    return (
        <div className='relative'>
            <div className='text-[#470063] h-40'>
                <h1 className='font-outfit font-semibold text-4xl leading-tight text-center pt-20'>Contact Us</h1>
            </div>
            <div className='text-white bg-contact-us-background'>
                <img className='absolute right-8' src={triangle5} alt="" />
                <div className='m-auto flex flex-col items-center w-4/6 gap-10 p-16 mb-20'>
                    <h1 className='font-outfit font-bold text-3xl leading-15 capitalize'>see news in your company</h1>
                    <p className='font-outfit font-normal text-base leading-5 text-center capitalize'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                </div>
                <div className='flex mb-6'>
                    <div className=' w-1/2 text-white m-auto'>
                        <div className='flex w-1/2 gap-2 m-auto mb-4'>
                            <img src={p_icon} alt="" className='' />
                            <p>500 Terry Francois St.<br /> San Francisco, CA 94158</p>
                        </div>
                        <div className='flex w-1/2 gap-2 m-auto mb-4'>
                            <img src={t_icon} alt="" />
                            <p>123-335-9985</p>
                        </div>
                        <div className='flex  w-1/2 gap-2 m-auto mb-4'>
                            <img src={e_icon} alt="" />
                            <p>contact@mysite.com </p>
                        </div>
                    </div>
                    <div className='w-1/2 '>
                        <div className='flex justify-between w-3/4'>
                            <div className='flex flex-col'>
                                <span>First Name</span>
                                <input className='bg-transparent border-2 border-white ' type="text" />
                            </div>
                            <div className='flex flex-col'>
                                <span>Last Name</span>
                                <input className='bg-transparent border-2 border-white ' type="text" />
                            </div>
                        </div>
                        <div className='flex flex-col w-3/4'>
                            <span>Email*</span>
                            <input className='w3/4 bg-transparent border-2 border-white ' type="text" />
                        </div>
                        <div className='flex flex-col w-3/4'>
                            <span>Message</span>
                            <textarea className='bg-transparent border-2 border-white ' />
                        </div>
                        <div className='flex w-3/4 flex-row-reverse mt-4'> 
                            <button className='bg-white w-1/5 bg-transparent border-white text-[#470063] '>send</button>
                        </div>
                    </div>
                    <img className='absolute w-60 bottom-10' src={triangle6} alt="" />
                </div>
                <div className='flex flex-col p-10'>
                        <img className='w-1/6 flex m-auto items-center' src={SML} alt="" />
                        <p className='w-3/4 m-auto font-outfit font-bold text-xs leading-4 text-center uppercase text-white opacity-50'>
                            © 2022 nK Group Inc. Developed in association with LoremInc. IpsumCompany, SitAmmetGroup, CumSit and related
                            logos are registered trademarks. and related logos are registered trademarks or trademarks of id Software LLC in
                            the U.S. and/or other countries. All other trademarks or trade names are the property of their respective owners. All Rights Reserved.
                        </p>
                        <img className='flex m-auto h-30 w-24' src={triangle7} alt="" />
                </div>
            </div>

        </div>
    )
}

export default ContactUs
