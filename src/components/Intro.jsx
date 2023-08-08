import React from 'react'
import {Carousel} from '3d-react-carousal';
import CBG1 from '../data/Rectangle1.png'
import CBG2 from '../data/Rectangle2.png'
import CBG3 from '../data/Rectangle3.png'
import unity from '../data/unity.png'

const Intro = () => {


    let slides = [
        <img  src={CBG1} alt="1" />,
        <img  src={CBG2} alt="2" />  ,
        <img  src={CBG3} alt="3" />  ,
        // <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
        // <img src="https://picsum.photos/800/304/?random" alt="5" />   
    ];

    return (
        <div className='bg-intro-background' style={{"height" : "800px"}} >
            <div className='flex mx-28'>
                <div className='text-white w-2/4 h-full flex flex-col mt-32'>
                    <span className='text-[#E87D0E] font-poppins font-semibold text-lg leading-normal'>Proved By prodesigner</span>
                    <h2 className='mt-4 font-poppins font-bold text-5xl leading-normal'>Work that we produce for our clients</h2>
                    <p className='mt-32 font-poppins font-medium text-base leading-double'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                    <div style={{"background" : "linear-gradient(92.48deg, #E5446D 2.08%, #60AFFF 117.25%)"}} className='mt-20 h-10 flex items-center justify-center w-44 text-center rounded-[40px]'>
                        <button>Get more details</button>
                    </div>
                </div>
                <div className='w-2/4 m-auto'>
                    <Carousel slides={slides} autoplay={true} interval={3500}/>
                </div>

            </div>
            <div className='mx-14 mt-20'>
                <img src={unity} alt="" />
            </div>
        </div>
    )
}

export default Intro
