import React from 'react';
import NavigationChip from './NavigationChip';
import CodeActionsChip from './CodeActionsChip';
import UserDetailsChip from './UserDetailsChip';
import { SiLeetcode } from 'react-icons/si';

type PlaygroundTopBarProps = {
}

const PlaygroundTopBar: React.FC<PlaygroundTopBarProps> = ({ }) => {
    return (
        <div className='h-[50px] flex items-center justify-between bg-black text-white p-2 text-sm'>
            <div className="flex gap-2 items-center ml-3">
                <SiLeetcode className='text-red-300 cursor-pointer' size={30}/>
                <NavigationChip />
            </div>
            <CodeActionsChip/>
            <UserDetailsChip/>
        </div>
    )
};

export default PlaygroundTopBar