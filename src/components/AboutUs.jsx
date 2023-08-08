import React from 'react'
import Triangle1 from '../data/Triangle1.png'
import Mask from '../data/Mask_group.png'
import CallOfDuty from '../data/Call_of_duty.png'
import csgo from '../data/csgo.png'
import valorant from '../data/valorant.png'
import ProgressBar from '../data/progressBar.png'
import Triangle2 from '../data/Triangle2.png'
import Triangle3 from '../data/Triangle3.png'


const AboutUs = () => {
    return (<>
    <div className='bg-abous-us-background h-1038px relative' style={{'height': '1038px'}}>
        <div className='text-cyan-300 mb-20'>
            <h1 className='text-center pt-10 font-rubik font-bold text-6xl leading-tighter'>About Us</h1>
        </div>
        <div className='flex mt-10 mx-10'>
            <div className='flex w-7/12'>
                <div className='w-1/4'>
                    <img className='w-60 absolute left-0' src={Triangle1} alt="" />  
                </div>
                <div className='w-3/4'>
                    <img className='absolute left-60 z-10' src={Mask} alt="" />
                    <img style={{"top": "420px" , "left":"260px"}} className='absolute z-20 left-96' src={CallOfDuty} alt="" />
                    <img style={{"left": "560px", "top": "480px"}} className='absolute z-40' src={csgo} alt="" />
                    <img style={{"left":"420px", "top":"260px"}} className='absolute z-30 ' src={valorant} alt="" />
                </div>
            </div>
            <div className='w-5/12 '>
                <div className='text-white'>
                    <h1 className='ont-bebas-neue font-bold text-xl leading-xl'>WHY SO SPECIAL?</h1>
                    <h1 className='font-bebas-neue font-bold text-6xl leading-none'>FEATURES</h1>
                </div>
                <div className='flex mt-10'>
                    <img className='mt-2'   src={ProgressBar} alt="" />
                    <div className='ml-10'>
                        <h2 className='text-cyan-300 font-bebas-neue font-bold text-3xl leading-3xl'>SURVIVE AT ALL COSTS</h2>
                        <span className='text-white font-open-sans font-normal text-base leading-6'>You have 30 minutes to find a relic, signal<br/> for extraction, and grab one of three spots<br/> on the rescue chopper.</span>
                        <h2 className='text-cyan-300 font-bebas-neue font-bold text-4xl leading-none mt-28'>CREATE ALLIES AND ENEMIES</h2>
                        <h2 className='text-cyan-300  font-bebas-neue font-bold text-4xl leading-none mt-28'>IMPRESS THE AUDIENCE</h2>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div className='flex justify-between relative'>
        <img className='h-80' src={Triangle3} alt="" />
        <img className='absolute right-0 ' style={{"top" : "-120px"}} src={Triangle2} alt="" />
    </div>

    </>)
}

export default AboutUs
