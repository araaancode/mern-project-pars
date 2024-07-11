import React from 'react'

import TwitterIcon from '@iconscout/react-unicons/icons/uil-twitter'
import InstagramIcon from '@iconscout/react-unicons/icons/uil-instagram'
import LinkedinIcon from '@iconscout/react-unicons/icons/uil-linkedin'

const Footer = () => {
    return (
        <footer dir='ltr' className="bg-white dark:bg-gray-900 mt-full text-right mb-0">
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between ">
                    <div className="mb-6 md:mb-0 ">
                        <a href="/" className="flex items-center">
                            <img src="logo.svg" className="h-20 w-15 me-3" alt="اقامتگاه" />
                        </a>
                        <p className='text-gray-800 mt-6'>ما را در شبکه های اجتماعی دنبال کنید</p>
                        <div className='flex flex-row mt-2'>
                            <div className='bg-gray-200 p-2 rounded-lg mr-2'>
                                <TwitterIcon />
                            </div>
                            <div className='bg-gray-200 p-2 rounded-lg mr-2'>
                                <InstagramIcon />
                            </div>
                            <div className='bg-gray-200 p-2 rounded-lg mr-2'>
                                <LinkedinIcon />
                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">نحوه رزرو اقامتگاه</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">راهنمای رزرو اقامتگاه</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">شیوه‌های پرداخت</a>
                                </li>
                                <li className='mt-2'>
                                    <a href="#" className="hover:underline">لغو رزرو</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">خدمات مشتریان</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline ">پرسش های متداول مهمان</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline ">پرسش های متداول میزبان</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline ">چطور اقامتگاه ثبت کنم؟</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline ">حریم شخصی کاربران </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">راه های ارتباطی</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">درباره ما</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">تماس با ما</a>
                                </li>
                                <li className='mt-2'>
                                    <a href="#" className="hover:underline">قوانین و مقررات</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </footer>

    )
}

export default Footer