import React from 'react'
import Email from './Email';
import MagicCode from './MagicCode';
import { useSigninEmailStore, useSigninButtonEmailStore } from '../../state-management/State'
import {
    Paper,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    Text,
    Anchor,
} from '@mantine/core';
import classes from './css/AuthenticationImage.module.css';
import Titles from './Title';


function SignIn() {
    const {signinButtonEmail, setSigninButtonEmail} = useSigninButtonEmailStore()

  return (
    <Paper className={classes.form} radius={0} p={30}>
        <Titles/>
        
        {signinButtonEmail ? <MagicCode />:<Email />}
    </Paper>
  )
}

export default SignIn
