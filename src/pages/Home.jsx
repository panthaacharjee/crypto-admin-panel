import React from 'react'

/* ======== ICONS ============= */
import { GiMoneyStack } from "react-icons/gi";
import { FaUserGroup } from "react-icons/fa6";
import { FaUserShield } from "react-icons/fa6";


const Home = () => {
  return (
    <div className='container mx-auto px-10 py-4'>
        <div className='flex flex-wrap'>
            <div className='w-3/12'>
               <div className="border-2 h-36 shadow-lg border-[#CB0881] w-11/12 px-5 py-3 mt-6 rounded-lg">
                    <p className='text-6xl'><GiMoneyStack/></p>
                    <p className='text-lg font-bold'>0 </p>
                    <p className='font-medium'>Total Pending Deposit</p>
               </div>
            </div>
            <div className='w-3/12'>
                <div className="border-2 h-36 shadow-lg border-[#CB0881] w-11/12 px-5 py-3 mt-6 rounded-lg">
                    <p className='text-6xl'><GiMoneyStack/></p>
                    <p className='text-lg font-bold'>$ 0 USDT</p>
                    <p className='font-medium'>Pending Deposit Balance</p>
                </div>
            </div>
            <div className='w-3/12'>
                <div className="border-2 h-36 shadow-lg border-[#CB0881] w-11/12 px-5 py-3 mt-6 rounded-lg">
                    <p className='text-6xl'><GiMoneyStack/></p>
                    <p className='text-lg font-bold'>0</p>
                    <p className='font-medium'>Total Pending Withdraw</p>
                </div>
            </div>
            <div className='w-3/12'>
                <div className="border-2  h-36 shadow-lg border-[#CB0881] w-11/12 px-5 py-3 mt-6 rounded-lg">
                    <p className='text-6xl'><GiMoneyStack/></p>
                    <p className='text-lg font-bold'>$ 0 USDT</p>
                    <p className='font-medium'>Pending Deposit Balance</p>
                </div>
            </div>
            <div className='w-3/12'>
                <div className="border-2 h-36 shadow-lg border-[#CB0881] w-11/12 px-5 py-3 mt-6 rounded-lg">
                    <p className='text-5xl mb-4'><FaUserShield/></p>
                    <p className='text-lg font-bold'>10</p>
                    <p className='font-medium'>Total Pending KYC</p>
                </div>
            </div>
            <div className='w-3/12'>
                <div className="border-2 h-36 shadow-lg border-[#CB0881] w-11/12 px-5 py-3 mt-6 rounded-lg">
                    <p className='text-5xl mb-4'><FaUserGroup/></p>
                    <p className='text-lg font-bold'>0</p>
                    <p className='font-medium'>Total Active Users</p>
                </div>
            </div>
        </div>
        <div className='mt-28 flex flex-wrap'>
            <div className='w-6/12'>
                <div className='w-[99%]'>
                    <div className='border-2 border-[#CB0881] px-4 py-3 rounded-md '>
                        <p className='text-lg font-bold'>Pending Deposit</p>
                    </div>
                    <div>
                        <div className='flex text-white font-bold'>
                            <div className='border-2 bg-[#CB0881] px-3 py-1 text-center w-3/12'>Serial</div>
                            <div className='border-2 bg-[#CB0881] px-3 py-1 text-center w-3/12'>Name</div>
                            <div className='border-2 bg-[#CB0881] px-3 py-1 text-center w-3/12'>Amount</div>
                            <div className='border-2 bg-[#CB0881] px-3 py-1 text-center w-3/12'>Trasection</div>
                        </div>
                        <div className='flex'>
                            <div className='border-2  px-3 py-1 text-center w-3/12 flex items-center justify-center'><p>1</p></div>
                            <div className='border-2  px-3 py-1 text-center w-3/12 flex items-center justify-center'><p>Pantha Acharjee</p></div>
                            <div className='border-2  px-3 py-1 text-center w-3/12 flex items-center justify-center'><p>1200 USDT</p></div>
                            <div className='border-2  px-3 py-1 text-center w-3/12 flex items-center justify-center'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti </p></div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='w-6/12'>
                <div className='w-[99%]'>
                    <div className='border-2 border-[#CB0881] px-4 py-3 rounded-md '>
                        <p className='text-lg font-bold'>Pending Withdraw</p>
                    </div>
                    <div>
                        <div className='flex text-white font-bold'>
                            <div className='border-2 bg-[#CB0881] px-3 py-1 text-center w-3/12'>Serial</div>
                            <div className='border-2 bg-[#CB0881] px-3 py-1 text-center w-3/12'>Name</div>
                            <div className='border-2 bg-[#CB0881] px-3 py-1 text-center w-3/12'>Amount</div>
                            <div className='border-2 bg-[#CB0881] px-3 py-1 text-center w-3/12'>Trasection</div>
                        </div>
                        <div className='flex'>
                            <div className='border-2  px-3 py-1 text-center w-3/12 flex items-center justify-center'><p>1</p></div>
                            <div className='border-2  px-3 py-1 text-center w-3/12 flex items-center justify-center'><p>Pantha Acharjee</p></div>
                            <div className='border-2  px-3 py-1 text-center w-3/12 flex items-center justify-center'><p>1200 USDT</p></div>
                            <div className='border-2  px-3 py-1 text-center w-3/12 flex items-center justify-center'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti </p></div>
                        </div>
                        <div className='flex'>
                            <div className='border-2  px-3 py-1 text-center w-3/12 flex items-center justify-center'><p>1</p></div>
                            <div className='border-2  px-3 py-1 text-center w-3/12 flex items-center justify-center'><p>Pantha Acharjee</p></div>
                            <div className='border-2  px-3 py-1 text-center w-3/12 flex items-center justify-center'><p>1200 USDT</p></div>
                            <div className='border-2  px-3 py-1 text-center w-3/12 flex items-center justify-center'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti </p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-6/12 mt-10'>
                <div className='w-[99%]'>
                    <div className='border-2 border-[#CB0881] px-4 py-3 rounded-md '>
                        <p className='text-lg font-bold'>Pending KYC</p>
                    </div>
                    <div>
                        <div className='flex text-white font-bold'>
                            <div className='border-2 bg-[#CB0881] px-3 py-1 text-center w-3/12'>Serial</div>
                            <div className='border-2 bg-[#CB0881] px-3 py-1 text-center w-3/12'>Name</div>
                            <div className='border-2 bg-[#CB0881] px-3 py-1 text-center w-3/12'>Amount</div>
                            <div className='border-2 bg-[#CB0881] px-3 py-1 text-center w-3/12'>Trasection</div>
                        </div>
                        <div className='flex'>
                            <div className='border-2  px-3 py-1 text-center w-3/12 flex items-center justify-center'><p>1</p></div>
                            <div className='border-2  px-3 py-1 text-center w-3/12 flex items-center justify-center'><p>Pantha Acharjee</p></div>
                            <div className='border-2  px-3 py-1 text-center w-3/12 flex items-center justify-center'><p>1200</p></div>
                            <div className='border-2  px-3 py-1 text-center w-3/12 flex items-center justify-center'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti </p></div>
                        </div>
                        <div className='flex'>
                            <div className='border-2  px-3 py-1 text-center w-3/12 flex items-center justify-center'><p>1</p></div>
                            <div className='border-2  px-3 py-1 text-center w-3/12 flex items-center justify-center'><p>Pantha Acharjee</p></div>
                            <div className='border-2  px-3 py-1 text-center w-3/12 flex items-center justify-center'><p>1200</p></div>
                            <div className='border-2  px-3 py-1 text-center w-3/12 flex items-center justify-center'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti </p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home