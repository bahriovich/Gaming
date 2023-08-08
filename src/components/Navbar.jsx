import React from 'react'
import ArtBoard from '../data/Artboard.png'
import search_icon from '../data/search-icon.png'

const Navbar = () => {
  return (
    <div className='flex flex-row items-center justify-between h-28 mx-10 '>
        <div className=''>
            <img src={ArtBoard} alt="" />
        </div>
        <div className='flex flex-row'>
            <ul className='flex flex-row gap-14'>
                <li className='mx-4'><button>  Home</button></li>
                <li className='mx-4'><button> About Us</button></li>
                <li className='mx-4'><button> News</button> </li>
                <li className='mx-4'><button> Contacts Us</button></li>
                <div className='bg-pink-200 rounded-full h-8 flex items-center w-60 justify-center '>
                    <input className='bg-pink-200 rounded-full' placeholder='      search.....'  type="search" />
                    <img className='h-6' src={search_icon} alt="" />
                </div>    
            </ul>
        </div>
    </div>
  )
}

export default Navbar
