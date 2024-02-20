import React from 'react'
import Netflixlogo from '../../Image/icons/Netflix_Logo_PMS.png'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SearchIcon from '@mui/icons-material/Search'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
  return (
    <div>
        <div className='flex header w-full item-center justify-between absolute-z[100]'>
            <div className='font-bold text-white-600 px-4 py-2 cursor-pointer text-5xl'>
                <img src={Netflixlogo} className='w-40 ' alt='Netflixlogo'/></div>
                <div className='text-white font-sm py-6'>Home</div>
                <div className='text-white font-sm py-6'>Tv show</div>
                <div className='text-white font-sm py-6'>Movies</div>
                <div className='text-white font-sm py-6'>Latest</div>
                <div className='text-white font-sm py-6'>Mylist</div>
                <div className='text-white font-sm py-6'>Browser by Languages</div>
            <div className='flex text-white'>
                <div className='text-sm mr-2 py-6'><NotificationsIcon/></div>
                <div className='text-sm mr-2 py-6'><SearchIcon/></div>
                <div className='text-sm mr-2 py-6'><AccountBoxIcon/></div>
                <div className='text-sm mr-2 py-6'><ArrowDropDownIcon/></div>
            </div>
        </div>
    </div>
  )
}

export default Header