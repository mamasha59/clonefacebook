import * as React from "react";
import Link from "../Link/Link";

import {MdVideoCall,MdMoreHoriz} from 'react-icons/md';
import {AiOutlineSearch} from 'react-icons/ai';

interface RightSideBarProps {
    
}
 
const RightSideBar:React.FC<RightSideBarProps> = () => {

    return (
        <section className="max-w-[360px] max-h-[560px] top-[82px] sticky grow overflow-y-auto my-1 w-[100%] overflow-x-hidden md:hidden">
            <div className="flex justify-between">
                <h2 className="text-[#65676B] pl-[6px] font-bold">Contacts</h2>
                <ul className="flex">
                    <li>
                        <MdVideoCall className="text-xl text-[#65676b] mr-5"/>
                        <span className="caption-style">New room</span>
                    </li>
                    <li>
                        <AiOutlineSearch className="text-xl text-[#65676b] mr-5"/>
                        <span className="caption-style">Search by name or group</span>
                    </li>
                    <li>
                        <MdMoreHoriz className="text-xl text-[#65676b]"/>
                        <span className="caption-style">Parametrs</span>
                    </li>
                </ul>
            </div>

            <Link linkName="Sasha Tikhonov" img={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'} />
        </section>
     );
}
 
export default RightSideBar;