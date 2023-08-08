import React from 'react'
import FG1 from '../data/FG1.png'
import FG2 from '../data/FG2.png'
import FG3 from '../data/FG3.png'
import FG4 from '../data/FG4.png'
import triangle4 from '../data/Triangle4.png'
import polygon4 from '../data/Polygon4.png'


const FeaturedGames = () => {
    return (
        <div className='bg-featured-background text-purple-200 relative' style={{"height" : "900px"}}>
            <div className='mx-20 '>
                <h1 className='text-center font-outfit font-bold text-4xl leading-tight pt-16 mb-20'>Featured Games</h1>
                <h1 className='font-radio-canada font-semibold text-3xl leading-tight mb-24'>THE LATEST NEWS</h1>
                <img className='absolute right-0 top-20' src={polygon4} alt="" />
                <img className='absolute left-[-150px] top-40 w-80' src={triangle4} alt="" />

                <div className='flex mx-40'>
                    <div className='w-1/2 '>
                        <div className='flex w-3/4 mb-6' >
                            <img src={FG1} alt="" className='w-4/12 ' />
                            <div className='bg-indigo-500 w-8/12' style={{"borderRadius" : "0 14px 14px 0"}}>
                                <p>Nov 1, 2022</p>
                                <h3>Competitive gaming is full in2022!</h3>
                            </div>
                        </div>
                        <div className='flex w-3/4 mb-6'>
                            <img src={FG2} alt="" className='w-4/12 ' />
                            <div className='bg-indigo-500 w-8/12' style={{"borderRadius" : "0 14px 14px 0"}}>
                                <p>Nov 1, 2022</p>
                                <h3>Competitive gaming is full in2022!</h3>
                            </div>
                        </div>
                        <div className='flex w-3/4 mb-6'>
                            <img src={FG3} alt="" className='w-4/12 '/>
                            <div className='bg-indigo-500 w-8/12' style={{"borderRadius" : "0 14px 14px 0"}}>
                                <p>Nov 1, 2022</p>
                                <h3>Competitive gaming is full in2022!</h3>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 flex flex-row justify-center m-auto'>
                        <div className='w-3/4 flex flex-col'>
                            <img src={FG4} alt="" />
                            <div className='bg-indigo-500 flex flex-col' style={{"borderRadius" : "0 0 14px 14px "}}>
                                <p>Nov 1, 2022</p>
                                <h2>Best studio for eSport Gaming!</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedGames
