import React from 'react'
// import Logo from '/tents.svg'
import { Link } from "react-router-dom"

// icons
import HomeIcon from '@iconscout/react-unicons/icons/uil-home'
import BuildingOfficeIcon from '@iconscout/react-unicons/icons/uil-house-user'
import BuildingIcon from '@iconscout/react-unicons/icons/uil-building'
import SunIcon from '@iconscout/react-unicons/icons/uil-sun'
import SwimmerIcon from '@iconscout/react-unicons/icons/uil-swimmer'
import TreeIcon from '@iconscout/react-unicons/icons/uil-trees'
import StarIcon from '@iconscout/react-unicons/icons/uil-star'
import ClockIcon from '@iconscout/react-unicons/icons/uil-clock'



function ExtraLinks() {
    return (
        <nav className='flex m-20 px-4 py-8 shadow-md shadow-gray-300 rounded-lg justify-between'>
            <a href="#">
                <HomeIcon className="h-8 w-8 font-bold" />
                <span className='mt-6 text-bold'>کلبه</span>
            </a>
            <a href="#">
                <BuildingOfficeIcon className="h-8 w-8" />
                <span className='mt-6 text-bold'>ویلا</span>
            </a>
            <a href="#">
                <BuildingIcon className="h-8 w-8" />
                <span className='mt-6 text-bold'>آپارتمان</span>
            </a>
            <a href="#">
                <SunIcon className="h-8 w-8" />
                <span className='mt-6 text-bold'>ساحلی</span>
            </a>
            <a href="#">
                <SwimmerIcon className="h-8 w-8" />
                <span className='mt-6 text-bold'>استخردار</span>
            </a>
            <a href="#">
                <TreeIcon className="h-8 w-8" />
                <span className='mt-6 text-bold'>بوم گردی</span>
            </a>
        
            <a href="#">
                <StarIcon className="h-8 w-8" />
                <span className='mt-6 text-bold'>پیشنهاد ویژه</span>
            </a>
            <a href="#">
                <ClockIcon className="h-8 w-8" />
                <span className='mt-6 text-bold'>تجربه</span>
            </a>
        </nav>
    )
}

export default ExtraLinks