import React from 'react'
import ExtraLinks from './ExtraLinks'

const Navbar = () => {
    return (
        <>
            <div className="flex gap-2 text-center justify-between m-auto border border-gray-300 rounded-lg p-4 shadow-md shadow-gray-300" style={{ width: '800px' }}>
                <div className="mt-3 w-100">شهر(استان)</div>
                <div className="border-l border-gray-300"></div>
                <div className="mt-3 w-100">
                    <input type="date" name="" id="" />
                </div>

                <div className="border-l border-gray-300"></div>
                <div className="mt-3 w-100">
                    <input type="date" name="" id="" />
                </div>
                <div className="border-l border-gray-300"></div>
                <div style={{ width: '75px' }}>
                    <input type="number" placeholder="تعداد" min={1} className="placeholder-gray-500 w-20 rounded-full px-3 pl-8 py-1 outline-none transition duration-700 ease-in-out focus:shadow-outline" />
                </div>
                <div className="border-l border-gray-300 w-100"></div>
                <button className="bg-primary text-white py-1 px-4 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>
            <ExtraLinks />
        </>
    )
}

export default Navbar