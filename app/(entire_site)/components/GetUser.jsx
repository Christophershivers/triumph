'use client'
import { useEffect } from 'react'
import { useAuthUser } from '../../state-management/State'
function GetUser() {
    const user = useAuthUser()

    useEffect(()=>{
        user()
    }, [user])
  return (
    <div>
      
    </div>
  )
}

export default GetUser
