import React, { useEffect, useState } from 'react'
import Triangle from '../data/Triangle.png'
// import Carousel from "react-simply-carousel";
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';


const TrendingGames = () => {

    const [children, setChildren] = useState([]);
    const [activeItemIndex, setActiveItemIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setChildren(createChildren(20));
        }, 100);
    }, []);

    const createChildren = (n) =>
        range(n).map((i) => (
            <div key={i} style={{ height: 200, background: '#EFCEFA' }}>
                {i}
            </div>
        ));

    const changeActiveItem = (activeItemIndex) => {
        setActiveItemIndex(activeItemIndex);
    };

    return (
        <div className='flex flex-col'>
            <div className='h-40 flex flex-row justify-end '>
                <img className='w-25 h-32 ' src={Triangle} alt="" />
            </div>
            <div className='h-24 text-center'>
                <h1 className='text-pink-500 font-rubik font-bold text-6xl leading-tighter'>Currently Trending Games</h1>
            </div>
            <div className='h-screen'>
                <ItemsCarousel
                    // Placeholder configurations
                    enablePlaceholder
                    numberOfPlaceholderItems={5}
                    minimumPlaceholderTime={1000}
                    placeholderItem={<div style={{ height: 200, background: '#EFCEFA' }}>Placeholder</div>}

                    // Carousel configurations
                    numberOfCards={3}
                    gutter={12}
                    showSlither={true}
                    firstAndLastGutter={true}
                    freeScrolling={false}

                    // Active item configurations
                    requestToChangeActive={changeActiveItem}
                    activeItemIndex={activeItemIndex}
                    activePosition={'center'}

                    chevronWidth={24}
                    rightChevron={'>'}
                    leftChevron={'<'}
                    outsideChevron={false}
                >
                    {children}
                </ItemsCarousel>
            </div>
        </div>
    )
}

export default TrendingGames
