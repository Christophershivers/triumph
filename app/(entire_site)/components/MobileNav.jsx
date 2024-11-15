'use client'
import {useState} from 'react'
import { Paper } from '@mantine/core';
import classes from './css/NavbarSimple.module.scss';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import logout from '../utils/logout.js'


const data = [
    { link: '/', label: 'Home', labelLink: '', icon: <i className={`fa-duotone fa-solid fa-house fa-lg ${classes.linkIcon}`}></i> },
    { link: '/profile', label: 'Profile', labelLink: 'profile', icon: <i className={`fa-duotone fa-solid fa-user fa-lg ${classes.linkIcon}`}></i> },
    { link: '/notification', label: 'Notifications', labelLink: 'notification', icon: <i className={`fa-duotone fa-solid fa-bell fa-lg ${classes.linkIcon}`}></i> },
    { link: 'messages', label: 'Messages', labelLink: 'messages', icon: <i className={`fa-duotone fa-solid fa-envelope fa-lg ${classes.linkIcon}`}></i> },
    { link: '#', label: 'logout', labelLink: 'logout', icon: <i className={`fa-duotone fa-solid fa-right-from-bracket fa-lg ${classes.linkIcon}`}></i> },
];

function MobileNav() {
    const pathname = usePathname()
    const pathnameRemoveSlash = pathname.startsWith('/') ? pathname.slice(1) : pathname
    const [active, setActive] = useState(pathnameRemoveSlash);
    const router = useRouter()

    const logoutUser = (event) =>{
        event.preventDefault()
        logout()
        router.push('/signin')
    }

    const links = data.map((item) => {
        const IconComponent = item.icon
        return(
          <Link
            className={classes.linkMobile}
            data-active={item.labelLink === active || undefined}
            href={item.link}
            key={item.label}
            onClick={(event) => {
              setActive(item.labelLink);
              {item.label == 'logout' ? logoutUser(event) : null}
            }}
          >
            {IconComponent}
          </Link>
        )
    });
  return (
    <div>
        <Paper withBorder className='w-[100vw] h-[90px] flex justify-end'>
            <div className='h-full flex justify-around items-center'>{links}</div>
        </Paper>
    </div>
  )
}

export default MobileNav

