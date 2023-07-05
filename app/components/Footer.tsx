'use client'

import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

export default function Footer() {
    
    return(
        <div className="flex-col justify-center text-gray-400 mt-6">        
            <div className="flex w-[100%] justify-center">
                <div className="w-[60%] border-t"></div>
            </div>
            <div className="flex mb-4 justify-between">
                <div className="my-4 flex-col">
                    <h1 className="text-sm font-bold my-2">Need Help</h1>
                    <p className="text-xs cursor-pointer italic">Want to make a return ?</p>
                    <p className="text-xs cursor-pointer italic">Track my order</p>
                    <p className="text-xs cursor-pointer italic">Privacy Policy</p>
                    <p className="text-xs cursor-pointer italic">Terms & Conditions</p>
                </div>
                <div className="my-4 flex-col">
                    <h1 className="text-sm font-bold my-2">Contact</h1>
                    <div className="flex-col">
                        <div>
                            <a href="mailto:pierre@scheibling.fr" target="_blank" className="text-xs italic">pierre@scheibling.fr</a>
                        </div>
                        <div>
                            <a href="https://scheibling.netlify.app/" target="_blank" className="text-xs italic">Portfolio</a>
                        </div>
                    </div>
                </div>
                <div className="my-4 flex-col">
                    <h1 className="text-sm font-bold my-2">Subscribe to my newsletter</h1>
                    <input type="text" id="first_name" placeholder="Your email" className="bg-gray-50 border text-xs py-2 pl-3 italic"/>
                </div>
                <div className="my-4 flex-col">
                    <h1 className="text-xs font-bold my-2">Follow Me</h1>
                    <div className="flex justify-between">
                        <a href="https://www.linkedin.com/in/pierrescheibling/" target="_blank" className="text-sm italic"><FaLinkedin size='1.4rem'/></a>
                        <a href="https://github.com/PierreScheibling" target="_blank"className="text-sm italic"><FaGithub size='1.4rem'/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}