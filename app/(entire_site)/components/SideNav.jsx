'use client'
import { useState } from 'react';
import { Group, Code } from '@mantine/core';
import {
    IconHomeFilled,
    IconUserFilled,
    IconBellFilled,
    IconMessageFilled,
    IconLogout
  } from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './css/NavbarSimple.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logout from '../utils/logout.js'


const data = [
    { link: '/', label: 'Home', labelLink: '', icon: <i className={`fa-duotone fa-solid fa-house fa-lg ${classes.linkIcon}`}></i> },
    { link: '/profile', label: 'Profile', labelLink: 'profile', icon: <i className={`fa-duotone fa-solid fa-user fa-lg ${classes.linkIcon}`}></i> },
    { link: '/notification', label: 'Notifications', labelLink: 'notification', icon: <i className={`fa-duotone fa-solid fa-bell fa-lg ${classes.linkIcon}`}></i> },
    { link: 'messages', label: 'Messages', labelLink: 'messages', icon: <i className={`fa-duotone fa-solid fa-envelope fa-lg ${classes.linkIcon}`}></i> },
];


function SideNav(){
    const pathname = usePathname()
    const pathnameRemoveSlash = pathname.startsWith('/') ? pathname.slice(1) : pathname
    const [active, setActive] = useState(pathnameRemoveSlash);

    const logUserOut = () =>{
      logout()
    }
    const links = data.map((item) => {
        const IconComponent = item.icon
        return(
          <Link
            className={classes.link}
            data-active={item.labelLink === active || undefined}
            href={item.link}
            key={item.label}
            onClick={(event) => {
              setActive(item.labelLink);
            }}
          >
            {IconComponent}
            <span>{item.label}</span>
          </Link>
        )
    });

    return (
        <nav className={classes.navbar}>
          <div className={classes.navbarMain}>
            <Group className={classes.header} justify="space-between">
              <MantineLogo size={28} />
              <Code fw={700}>v3.1.2</Code>
            </Group>
            {links}
          </div>
    
          <div className={classes.footer}>
            <Link href="/signin" className={classes.link} onClick={logUserOut}>
              <IconLogout className={classes.linkIcon} stroke={1.5} />
              <span>Logout</span>
            </Link>
          </div>
        </nav>
      );
    
}

export default SideNav