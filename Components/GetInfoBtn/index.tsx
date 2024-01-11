import React from 'react'
import { IButton } from '@/Interface';
import Link from 'next/link';

function GetInfoBtn({to, title}: IButton) {
    return (
        <Link className='infoBtn' href={to}>{title}</Link>
      )
}

export default GetInfoBtn;