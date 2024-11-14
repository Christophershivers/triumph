import { useState } from 'react'
import { useSigninEmailStore, useSigninButtonEmailStore } from '../../state-management/State'
import getMagicCode from '../utils/getMagicCode';
import { TextInput, Button } from '@mantine/core';


function Email() {
    const { signinEmail, setSigninEmail } = useSigninEmailStore()
    const { setSigninButtonEmail } = useSigninButtonEmailStore()
    const [showError, setShowError] = useState(null)

    const sendEmailToMagicCode = () =>{
        if(signinEmail == ''){
            setShowError({error: "Please enter an email"})
        }else{
            getMagicCode(signinEmail)
            setShowError(null)
            setSigninButtonEmail(true)
        }
    }

    const onButtonClick = () =>{
        sendEmailToMagicCode()
    }

    const onEnterPress = (e) =>{
        if(e.key === 'Enter'){
            sendEmailToMagicCode()
        }
    }

    return (
        <div>
            <TextInput {...showError} placeholder='enter email' value={signinEmail} onChange={e => {setSigninEmail(e.target.value)}} onKeyDown={onEnterPress}/>
            <div className='pt-[21px]'><Button onClick={onButtonClick} fullWidth color='rgb(24, 24, 27)'>Sign In</Button></div>
        </div>
    )
}

export default Email
