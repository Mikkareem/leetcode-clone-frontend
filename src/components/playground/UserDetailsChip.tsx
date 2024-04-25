import React from 'react';
import { FaFire } from "react-icons/fa6";

type UserDetailsChipProps = {}

const UserDetailsChip: React.FC<UserDetailsChipProps> = ({}) => {
    return (
        <div className='flex items-center gap-3'>
            <div className="px-2 py-1 flex gap-1 items-center content-between font-bold text-red-400 rounded-md border-[1.5px] border-red-400">
                <FaFire />
                <p>Premium</p>
            </div>
            <div className='w-[35px] h-[35px] rounded-full bg-slate-500'></div>
        </div>
    )
};

export default UserDetailsChip