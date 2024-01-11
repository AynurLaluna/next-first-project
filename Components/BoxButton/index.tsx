import React from 'react';
import Link from 'next/link';
import { IButton } from '@/Interface';

function BoxButton({title, to}: IButton) {
    return (
      <Link className='button' href={to}>{title}</Link>
    )
  }


export default BoxButton;