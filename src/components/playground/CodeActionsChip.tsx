import React, { useContext } from 'react';
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaBug, FaPlay } from "react-icons/fa6";
import useCodeSubmission from '../../hooks/useCodeSubmission';
import { PlaygroundContext } from './PlaygroundScreenProvider';

type CodeActionsChipProps = {
}

const CodeActionsChip: React.FC<CodeActionsChipProps> = ({ }) => {

    const { state } = useContext(PlaygroundContext)

    // const onRun = () => {
    //     console.log(code)
    //     fetch("http://localhost:8080/code/submit", {
    //         method: "POST",
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ code })
    //     })
    // }

    const { runCodeX } = useCodeSubmission()

    const onRun = () => {
        console.log(state.code)
        runCodeX({
            code: state.code,
            problemId: state.problemId
        })
    }

    return (
        <div className='flex items-center gap-1'>
            <FaBug className='text-green-500 mr-2 cursor-pointer'/>
            <div className="px-2 py-1 flex gap-1 items-center content-between font-semibold rounded-md bg-dark-layer-3 cursor-pointer" onClick={() => onRun()}>
                <FaPlay />
                <p>Run</p>
            </div>
            <div className="px-2 py-1 flex gap-1 items-center content-between font-semibold text-green-500 rounded-md bg-dark-layer-3 cursor-pointer">
                <IoCloudUploadOutline size={18}/>
                <p>Submit</p>
            </div>
        </div>
    )
};

export default CodeActionsChip