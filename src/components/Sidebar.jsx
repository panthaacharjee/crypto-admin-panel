import React from 'react'

/* ============= IMAGE ============== */
import Logo from "../assets/Logo.png"

/* ============ ICON ================ */
import { RxDashboard } from "react-icons/rx";
import { FaRegUser} from "react-icons/fa6";
import { GrLineChart } from "react-icons/gr";
import { RiExchangeDollarFill } from "react-icons/ri";
import { TbUsersPlus } from "react-icons/tb";
import { FaUserGear } from "react-icons/fa6";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { AiOutlineFileProtect } from "react-icons/ai";
import { BsQuestionSquare } from "react-icons/bs";
import { LuLogOut } from "react-icons/lu";
import { Link } from 'react-router-dom';



const Sidebar = () => {
  return (
    <div className='bg-white h-screen fixed w-2/12 shadow-xl'>
        <div className="py-5 flex justify-center">
            <img src={Logo}/>
        </div>
        <div className='px-3 flex flex-col w-full'>
            <Link to="/">
                <div className='flex items-center mt-6 text-[#CB0881] '>
                    <p className='text-2xl'><RxDashboard/></p>
                    <p className='ml-4 text-lg font-bold'>Dashboard</p>
                </div>
            </Link>
            <Link to='/user'>
                <div className='flex items-center mt-6 text-[#CB0881] '>
                    <p className='text-2xl'><FaRegUser/></p>
                    <p className='ml-4 text-lg font-bold'>User</p>
                </div>
            </Link>
            <Link to='/deposit'>
                <div className='flex items-center mt-6 text-[#CB0881] '>
                    <p className='text-2xl'><RiExchangeDollarFill/></p>
                    <p className='ml-4 text-lg font-bold'>Deposit</p>
                </div>
            </Link>
            <Link to='/withdraw'>
                <div className='flex items-center mt-6 text-[#CB0881] '>
                    <p className='text-2xl'><TbUsersPlus/></p>
                    <p className='ml-4 text-lg font-bold'>Withdraw</p>
                </div>
            </Link>
            <Link to='/trade'>
                <div className='flex items-center mt-6 text-[#CB0881] '>
                    <p className='text-2xl'><GrLineChart/></p>
                    <p className='ml-4 text-lg font-bold'>Trade</p>
                </div>
            </Link>
            <Link to='/kyc'>
                <div className='flex items-center mt-6 text-[#CB0881] '>
                    <p className='text-2xl'><FaUserGear/></p>
                    <p className='ml-4 text-lg font-bold'>KYC</p>
                </div>
            </Link>
            <Link to="/staff">
                <div className='flex items-center mt-6 text-[#CB0881] '>
                    <p className='text-2xl'><BsFileEarmarkPerson/></p>
                    <p className='ml-4 text-lg font-bold'>Role & Staffs</p>
                </div>
            </Link>
            <Link to='security'>
                <div className='flex items-center mt-6 text-[#CB0881] '>
                    <p className='text-2xl'><AiOutlineFileProtect/></p>
                    <p className='ml-4 text-lg font-bold'>Security</p>
                </div>
            </Link>
            <Link to='/faq'>
                <div className='flex items-center mt-6 text-[#CB0881] '>
                    <p className='text-2xl'><BsQuestionSquare/></p>
                    <p className='ml-4 text-lg font-bold'>FAQ</p>
                </div>
            </Link>
            <Link>
                <div className='flex items-center mt-6 text-[#CB0881] '>
                    <p className='text-2xl'><LuLogOut/></p>
                    <p className='ml-4 text-lg font-bold'>Logout</p>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Sidebar