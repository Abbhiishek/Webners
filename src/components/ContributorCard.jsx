import React from 'react'

function ContributorCard({ contributor }) {
    return (
        <div className='rounded flex justify-center  p-5 bg-slate-600 relative' key={contributor?.id}>
            <div className='flex flex-col p-2 items-center justify-center'>
                <div className='flex flex-row items-center justify-center'>
                    <img
                        src={`${contributor.github}.png`}
                        alt={contributor.username}
                        className="rounded-full w-28 h-28"
                    />
                </div>
                <div className='flex flex-row items-center justify-center pt-3 gap-1'>
                    <h1 className='text-center  font-mono text-2xl'>{contributor.username}</h1>
                    <a href={contributor.github} target='_blank' rel="noreferrer">
                        <img

                            src="https://img.icons8.com/ios-filled/50/000000/github.png"
                            alt="github"
                            className="w-5 h-5 text-white"
                        />
                    </a>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    {/* <span className='text-center text-xl font-medium '>Bio</span> */}
                    <p className='text-center text-xl font-thin'>{contributor.bio}</p>
                </div>
                <div className='flex flex-col items-center justify-center mt-3'>
                    <div className='flex  flex-col text-start'>
                        {
                            contributor.interests.map((interest, index) => (
                                <p className=' text-xl' key={index}>➡️{interest}</p>
                            ))
                        }
                    </div>
                </div>
                <div className='mb-10 h-16 relative'>
                    <div className='bottom-2'>
                        <div className='flex flex-row items-center justify-center mt-3'>
                            <div>
                                <a href={contributor.Projects[0]?.link}>
                                    <button className='bg-green-400 px-2 py-1 rounded-md cursor-pointer '>
                                        <span className='text-center font-mono font-extrabold'>View Contribution</span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center mb-2 px-2 absolute bottom-0'>
                    <div className='grid   grid-flow-col justify-center gap-3'>
                        {
                            contributor.Skills.map((Skill, index) => (
                                <span className='text-white bg-gray-800 p-1 overflow-hidden rounded' key={index}>
                                    <p className='text-xs'>{Skill}</p>
                                </span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContributorCard
