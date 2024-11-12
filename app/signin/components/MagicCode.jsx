import {useState, useRef} from 'react'
import { useSigninEmailStore, useSigninButtonEmailStore } from '../../state-management/State'
import { Input, Button, Typography  } from 'antd';

function MagicCode() {
    const { Title } = Typography;
    const {signinEmail, setSigninEmail} = useSigninEmailStore()
    const {signinButtonEmail, setSigninButtonEmail} = useSigninButtonEmailStore()
    const [showError, setShowError] = useState(null)
    const [isError, setIsError] = useState(false)
    const inputRef = useRef(null)

    const onChange = (text) =>{
        
        console.log(text)
        setSigninButtonEmail(false)
        setSigninEmail('')
    }

    const sharedProp = {
        onChange
    }

  return (
    <div >
        <div className='flex justify-center pb-[32px] text-xl'>Please Enter the Code</div>
        <div className='flex justify-center'><Input.OTP variant="filled" {...showError} {...sharedProp} ref={inputRef} type="number" inputMode="decimal" pattern="[0-9]*" /></div>
        {isError ? <div className='pt-2'><label>*Wrong Code</label></div> : null}
    </div>
  )
}

export default MagicCode
