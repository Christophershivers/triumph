import React from 'react'
import { UserCardImage } from './TopProfile.jsx'
import MantinTab from './MantinTab.jsx'

function Profile() {
  return (
    <div className='flex flex-col gap-y-4'>
      <UserCardImage/>
      <MantinTab/>
    </div>
  )
}

export default Profile
