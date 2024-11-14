import {useState, useRef} from 'react'
import { useSigninEmailStore, useSigninButtonEmailStore } from '../../state-management/State'
import signinUser from '../utils/signinUser';
import { useRouter } from 'next/navigation';
import { PinInput } from '@mantine/core';

function MagicCode() {
    const {signinEmail, setSigninEmail} = useSigninEmailStore()
    const {setSigninButtonEmail} = useSigninButtonEmailStore()
    const [showError, setShowError] = useState(null)
    const inputRef = useRef(null)
    const router = useRouter()

    const onChange = async (text) =>{
        
        console.log(text)
        if(text.length == 6){
            const isUserSignedin = await signinUser(signinEmail, text)
            console.log(isUserSignedin)
            if(isUserSignedin){
                setShowError(null)
                setSigninButtonEmail(false)
                setSigninEmail('')
                router.push('/')
            }else{
                setShowError({error: 'you entered the wrong code'})
            }
            
        }
        
    }

    const sharedProp = {
        onChange
    }

  return (
    <div >
        <div className='flex justify-center'>
            <PinInput variant="filled" length={6} {...showError} {...sharedProp} ref={inputRef} type="number" inputMode="decimal" pattern="[0-9]*" oneTimeCode/>
        </div>
    </div>
  )
}

export default MagicCode
