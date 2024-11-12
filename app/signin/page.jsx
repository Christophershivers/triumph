'use client'
import React from 'react'
import SignIn from './components/SignIn'
import { Divider } from 'antd';
import friend from '../img/friends.jpg'
import Image from 'next/image';

function page() {
  return (
    <div className='h-[100vh] flex'>
      <div className='border-r-[1px] w-[1000px] flex justify-center items-center'>
        <div className='w-full px-16'><SignIn /></div>
      </div>
      <div className='w-full hidden md:block'>
        <Image src={friend} alt='friends' className='object-cover h-full w-full'/>
      </div>
    </div>
  )
}

export default page
