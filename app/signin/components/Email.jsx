import {useState} from 'react'
import { useSigninEmailStore, useSigninButtonEmailStore } from '../../state-management/State'
import { Input, Button, Typography  } from 'antd';

function Email() {
    const { Title } = Typography;
    const {signinEmail, setSigninEmail} = useSigninEmailStore()
    const {signinButtonEmail, setSigninButtonEmail} = useSigninButtonEmailStore()
    const [showError, setShowError] = useState(null)
    const [isError, setIsError] = useState(false)

    const sendEmailToMagicCode = () =>{
        if(signinEmail == ''){
            setIsError(true)
            setShowError({status:"error", placeholder:"enter an email"})
        }else{
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
            <div className='flex justify-center pb-[32px] text-xl'>Login or Register</div>
            <Input {...showError} placeholder='enter email' value={signinEmail} onChange={e => {setSigninEmail(e.target.value)}} onKeyDown={onEnterPress}/>
            {isError ? <div className='pt-2'><label>Please enter a email</label></div> : null}
            <div className='pt-[21px]'><Button onClick={onButtonClick} className='w-full' color="default" variant="solid">Sign In</Button></div>
        </div>
    )
}

export default Email
