import {db} from '../../../(entire_site)/utils/db'


async function signinUser(email, pin) {
    let isUserSignedin = true
    const pinToString = pin.toString()
    
    await db.auth.signInWithMagicCode({email: email, code: pinToString}).catch((err)=>{
        isUserSignedin = false
    })

    return isUserSignedin
}

export default signinUser
