import Navbar from '@/Components/Navbar';
import {ReactNode} from 'react';

interface IProps {
    children:ReactNode;
}

function layout({children}: IProps) {
  return (
    <div>
        <Navbar />
{children}
    </div>
  )
}

export default layout