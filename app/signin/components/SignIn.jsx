import React from 'react'
import { Button } from "antd";
import Email from './Email';
import MagicCode from './MagicCode';
import { useSigninEmailStore, useSigninButtonEmailStore } from '../../state-management/State'

function SignIn() {
    const {signinButtonEmail, setSigninButtonEmail} = useSigninButtonEmailStore()

  return (
    <div>
      {signinButtonEmail ? <MagicCode />:<Email />}
    </div>
  )
}

export default SignIn
