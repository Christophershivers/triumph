'use client'
import React from 'react'
import SignIn from './components/SignIn'
import classes from './components/css/AuthenticationImage.module.css';


function page() {
  return (
    <div className={classes.wrapper}>
      <SignIn />
    </div>
  )
}

export default page
