import React, { useEffect, useRef } from 'react';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { BsCheck2Circle } from 'react-icons/bs';
import { TiStarOutline } from 'react-icons/ti';
import { ProblemDetail } from '../../utils/types/Problem';

type ProblemDescriptionProps = {
	detail: ProblemDetail
}

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({ detail }) => {

	const descriptionRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if(descriptionRef.current) {
			descriptionRef.current.innerHTML = detail.description
		}
	}, [descriptionRef.current])


    return (
        <div className='w-full h-full rounded-xl bg-dark-layer-1'>
			{/* TAB */}
			<div className='flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-white overflow-x-hidden'>
				<div className={"bg-dark-layer-1 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer"}>
					Description
				</div>
			</div>

			<div className='flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto'>
				<div className='px-5'>
					{/* Problem heading */}
					<div className='w-full'>
						<div className='flex space-x-4'>
							<div className='flex-1 mr-2 text-lg text-white font-medium'>
								{`${detail.problemNo}. ${detail.title}`}
							</div>
						</div>
						<div className='flex items-center mt-3'>
							<div
								className='easy-chip text-xs'
							>
								{detail.difficulty}
							</div>
							<div className='rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-green-s'>
								<BsCheck2Circle color='green'/>
							</div>
							<div className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-dark-gray-6'>
								<AiFillLike color='green'/>
								<span className='text-xs text-white'>{detail.likes}</span>
							</div>
							<div className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-dark-gray-6'>
								<AiFillDislike color='red'/>
								<span className='text-xs text-white'>{detail.dislikes}</span>
							</div>
							<div className='cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6 '>
								<TiStarOutline color='white'/>
							</div>
						</div>

						{/* Problem Statement(paragraphs) */}
						<div className='text-white text-sm' ref={descriptionRef}>
							{detail.description}
						</div>

						{/* Examples */}
						<div className='mt-4'>
							{
								detail.examples.map((ex, ind) => (
									<div key={ind}>
										<p className='font-medium text-white '>Example {ind+1}: </p>
										<div className='example-card'>
											<pre>
												<strong className='text-white'>Input: </strong> {ex.input}
												<br />
												<strong>Output:</strong>{ex.output}<br />
												{ex.explanation && <p><strong>Explanation:</strong>{ex.explanation}</p>}
											</pre>
										</div>
									</div>
								))
							}
						</div>

						{/* Constraints */}
						<div className='my-5'>
							<div className='text-white text-sm font-medium'>Constraints:</div>
							<ul className='text-white ml-5 list-disc'>
								{detail.constraints.map(it => (
									<li key={it} className='mt-2'>
										<code>{it}</code>
									</li>
								))}
								<li className='mt-2 text-sm'>
									<strong>Only one valid answer exists.</strong>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
};

export default ProblemDescription