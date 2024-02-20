import React from 'react'
// import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
return (
    <div className=' p-7 '>
        <div className=''>
        <div className=' flex text-white '>
            <div className='text-sm mr-2 py-6'><FacebookIcon /></div>
            <div className='text-sm mr-2 py-6'><InstagramIcon/></div>
            <div className='text-sm mr-2 py-6'><YouTubeIcon/></div>
        </div>
        <div className=' flex  justify-between m-8 text-gray-200 '>
        <div>
            <ul>
                <li>Audio Description</li>
                <li>Inestor Relationa</li>
                <li>Legal Notice</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookies Preferences</li>
            </ul>
        </div>
            <div>
                <ul>
                    <li>Gift Cards</li>
                    <li>Terms of Uses</li>
                    <li>Corporator Information</li>
            </ul>
            </div>
            <div>
                <ul>
                    <li>Media Center</li>
                    <li>Prevancy</li>
                    <li>Contact Us</li>
            </ul>
        </div>
        </div>
        <div className='s text-gray-200'>
            <p>Service code</p>
        </div>
        <div className=' text-gray-200'>
            &copy;1997-2024 Netflix,Inc
        </div>
        </div>
    </div>
)
}

export default Footer