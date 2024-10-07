import React from 'react'

const Withdraw = () => {
  return (
    <div className='container mx-auto px-10 py-4'>
        <div className='py-10'>
            <p className='text-lg font-bold text-[#CB0881] underline'>All Withdraw</p>

            <div className='flex mt-8'>
                <button className='px-4 py-1 border-2 border-[#CB0881]  rounded-md font-semibold'>Pending</button>
                <button className='px-4 py-1 border-2 border-[#CB0881]  rounded-md font-semibold ml-2'>Accepted</button>
                <button className='px-4 py-1 border-2 border-[#CB0881]  rounded-md font-semibold ml-2'>Rejected</button>
            </div>
            <div className='flex justify-end mt-10'>
                <input type='text' className='px-2 py-1 border-2 border-[#CB0881] rounded-lg w-4/12 mr-4' placeholder='Search by name'/>
                <input type='date' className='px-2 py-1 border-2 border-[#CB0881] rounded-lg w-3/12'/>
            </div>
            <div className='w-full mt-4'>
                    <div>
                        <div className='flex text-white font-bold'>
                            <div className='border-2 bg-[#CB0881] px-3 py-1 text-center w-3/12'>Serial</div>
                            <div className='border-2 bg-[#CB0881] px-3 py-1 text-center w-3/12'>Name</div>
                            <div className='border-2 bg-[#CB0881] px-3 py-1 text-center w-3/12'>Amount</div>
                            <div className='border-2 bg-[#CB0881] px-3 py-1 text-center w-3/12'>Created Date</div>
                            <div className='border-2 bg-[#CB0881] px-3 py-1 text-center w-3/12'>Action</div>
                        </div>
                        <div className='flex'>
                            <div className='border-2  px-3 py-1 text-center w-3/12 flex items-center justify-center'><p>1</p></div>
                            <div className='border-2  px-3 py-1 text-center w-3/12 flex items-center justify-center'><p>Pantha Acharjee</p></div>
                            <div className='border-2  px-3 py-1 text-center w-3/12 flex items-center justify-center'><p>1200 USDT</p></div>
                            <div className='border-2  px-3 py-1 text-center w-3/12 flex items-center justify-center'><p>12-01-2023</p></div>
                            <div className='border-2  px-3 py-1 text-center w-3/12 flex items-center justify-center'><button className='px-4 py-2 bg-green-700 text-white font-bold rounded-full'>Accept</button><button className='px-6 py-2 bg-red-700 text-white font-bold rounded-full ml-2'>Reject</button></div>
                        </div>
                        
                        
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Withdraw