import React from 'react'
import { Title, Text } from '@mantine/core';
import { useSigninButtonEmailStore, useSigninEmailStore } from '../../../state-management/State';
import classes from './css/AuthenticationImage.module.css';


export function FirstTitle(){
    return(
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
        Welcome back to <Text inherit span variant="gradient" >Triumph!</Text> 
            <div className='flex justify-center'>
                <div className='w-[350px]'>
                    <Text c="dimmed" size="sm" ta='center'>Enter the email that is associated with your account, and we'll send a code to your inbox.</Text>
                </div>    
            </div>
        </Title>
    )
}

export function SecondTitle(){
    const { signinEmail } = useSigninEmailStore()
    return(
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
        Please check your email
            <div className='flex justify-center'>
                <div className='w-[350px]'>
                    <Text c="dimmed" size="sm" ta='center'>We sent an email to <Text span fw={700}>{signinEmail}</Text> it contains the code to verify your account</Text>
                </div>
            </div>
        </Title>
    )
}

function Titles() {
    const { signinButtonEmail } = useSigninButtonEmailStore()
  return (
    <>
        {signinButtonEmail ?  <SecondTitle/>: <FirstTitle/>}
    </>
  )
}

export default Titles
