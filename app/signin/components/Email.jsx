import {useState} from 'react'
import { useSigninEmailStore, useSigninButtonEmailStore } from '../../state-management/State'
import { Input, Typography  } from 'antd';
import getMagicCode from '../utils/getMagicCode';
import Link from "next/link";
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

function Demo() {
  return <PinInput type="number" />
}

function Email() {
    const { Title } = Typography;
    const {signinEmail, setSigninEmail} = useSigninEmailStore()
    const {signinButtonEmail, setSigninButtonEmail} = useSigninButtonEmailStore()
    const [showError, setShowError] = useState(null)
    const [isError, setIsError] = useState(false)

    const sendEmailToMagicCode = () =>{
        if(signinEmail == ''){
            setIsError(true)
            setShowError({error: "Please enter an email"})
        }else{
            getMagicCode(signinEmail)
            setIsError(false)
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
