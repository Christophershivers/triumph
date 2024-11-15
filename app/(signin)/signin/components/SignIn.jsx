import React from 'react'
import Email from './Email';
import MagicCode from './MagicCode';
import { useSigninButtonEmailStore, useEnteredCodeYetStore } from '../../../state-management/State'
import { Paper, Loader } from '@mantine/core';
import classes from './css/AuthenticationImage.module.css';
import Titles from './Title';


function SignIn() {
    const { signinButtonEmail } = useSigninButtonEmailStore()
    const { enteredCode } = useEnteredCodeYetStore()

  return (
    <Paper className={classes.form} radius={0} p={30}>
        <Titles/>
        {(signinButtonEmail ? <MagicCode />:<Email />)}
    </Paper>
  )
}

export default SignIn
