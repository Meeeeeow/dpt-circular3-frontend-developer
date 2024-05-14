import { navLinks } from "../constants"
import { bell } from "../assets/icons";
import { person } from "../assets/images";
import { useState } from "react";
const Nav = () => {
  const [selectedLink, setSelectedLink] = useState("Dashboard");
  console.log(selectedLink);
  return (
    <>
        <header className="padding-x py-5 w-full bg-slate-700">
            <nav className="flex justify-between items-center max-container ">
                <ul className="flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.id} onClick={()=> setSelectedLink(item.label)}>
                            <a href={item.href} className="font-montserrat leading-normal text-lg  text-primary">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
                <img alt="notification-icon" src={bell}/>
                <img alt="person-image" src={person} width={24} height={24} className="border rounded-full"/>
                </div>
            </nav>
        </header>
        <div className="px-32 sm:px-16 py-2 w-full text-2xl font-bold font-montserrat border border-r-green-50">
            {selectedLink}
        </div>
    </>
  )
}

export default Nav