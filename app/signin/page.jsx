'use client'
import React from 'react'
import SignIn from './components/SignIn'
import { Divider } from 'antd';
import friend from '../img/friends.jpg'
import Image from 'next/image';
import classes from './components/css/AuthenticationImage.module.css';

function page() {
  return (
    <div className={classes.wrapper}>
      <SignIn />
    </div>
  )
}

export default page
