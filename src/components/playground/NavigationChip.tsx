import React from 'react';
import { FaListUl, FaShuffle, FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

type NavigationChipProps = {}

const NavigationChip: React.FC<NavigationChipProps> = ({}) => {
    return (
        <div className="hover:bg-slate-600 rounded-md">
            <div className='flex items-center'>
                <div className='flex items-center hover:bg-slate-800 rounded-md cursor-pointer'>
                    <div className='p-2'>
                        <FaListUl />
                    </div>
                    <p className='font-bold pr-2'>Problem List</p>
                </div>
                <div className='p-2 hover:bg-slate-800 rounded-md cursor-pointer'>
                    <FaChevronLeft />
                </div>
                <div className="p-2 hover:bg-slate-800 rounded-md cursor-pointer">
                    <FaChevronRight />
                </div>
                <div className="p-2 hover:bg-slate-800 rounded-md cursor-pointer">
                    <FaShuffle />
                </div>
            </div>
        </div>
    )
};

export default NavigationChip