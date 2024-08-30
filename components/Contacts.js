import Link from "next/link"
import Heading from "./Heading"
import data from "@/data/contacts"

// Icons
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";
import { FaSoundcloud } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";



const Contacts = () => {
    return (

        <SectionWrapper>

        <Heading>Contacts</Heading>

        <div className="flex flex-wrap items-center gap-5">

        {data.map(contact => (
            <Link href={contact.link} key={contact.id} target="_blank" className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-2 " >
                
            {contact.name === 'github' && <FaGithub size={18} className="text-black dark:text-white"/>}


            {contact.name === 'linkedin' && <FaLinkedin size={18} className="text-[#0a66c2] dark:text-white"/>}

            {contact.name === 'youtube' && <FaYoutube size={18} className="text-[#ff0000] dark:text-white"/>}

            {contact.name === 'instagram' && <FaInstagram size={18} className="text-[#c32aa3] dark:text-white"/>}

            {contact.name === 'facebook' && <FaFacebookSquare size={18} className="text-[#1877f2] dark:text-white"/>}

            {contact.name === 'soundcloud' && <FaSoundcloud size={18} className="text-[#003ECB] dark:text-white"/>}

            {contact.name === 'email' && <MdEmail size={18} className="text-[#003ECB] dark:text-white"/>}

            {contact.name === 'cv' && <FaRegUserCircle size={18} className="text-[#003ECB] dark:text-white"/>}

            {contact.name === 'spotify' && <FaSpotify size={18} className="text-[#003ECB] dark:text-white"/>}

            {contact.name === 'X' && <FaSquareXTwitter size={18} className="text-black dark:text-white"/>}
            
            <span className=" text-sm md:text-base capitalize text-zinc-700 dark:text-white font-bold">{contact.label}</span>

            </Link>
        ))}

        </div>

        
    </SectionWrapper>

    )
}

export default Contacts;