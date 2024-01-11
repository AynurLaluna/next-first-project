import React from 'react';
import Link from 'next/link';
import { IButton } from '@/Interface';

function Button({title, to}: IButton) {
  return (
    <Link className='btn' href={to}>{title}</Link>
  )
}

export default Button;