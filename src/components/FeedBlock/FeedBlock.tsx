import * as React from "react";

import { RiLiveLine } from "react-icons/ri";
import { FcStackOfPhotos } from "react-icons/fc";
import { VscSmiley } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { IoEarthOutline } from "react-icons/io5";
import { GoArrowSmallDown } from "react-icons/go";


interface FeedBockProps {
    user:string;
    userImg:string;
}
 
const FeedBock:React.FC<FeedBockProps> = ({user,userImg}) => {

    const [open, setopen] = React.useState(false);
console.log(open)

    return ( 
    <div className="bg-[#fff] my-7 rounded-md px-4 py-3">
        <div className="flex border-style mb-3 pb-4">
            <img className="links-style-right mr-2 w-11 h-11 text-xs" src={userImg} alt="user's"/>
            <div onClick={()=>setopen(true)} className="make-tweet">What's new, {user}?</div>
        </div>
        <div>
            <ul className="flex justify-between w-[100%]">
                <li className="max-w-[172px] flex items-center common-hover text-base grow justify-center rounded-lg py-2 text-[#65676b]"><RiLiveLine className="text-[#EA2027] text-2xl mr-2"/>Live</li>
                <li className="max-w-[172px] flex items-center common-hover text-base grow justify-center rounded-lg py-2 text-[#65676b]"><FcStackOfPhotos className="text-2xl mr-2"/>Photo/video</li>
                <li className="max-w-[172px] flex items-center common-hover text-base grow justify-center rounded-lg py-2 text-[#65676b]"><VscSmiley className="text-[#FFC312] text-2xl mr-2"/>Feeling/activity</li>
            </ul>
        </div>
        {/* popup make tweet */}
    <div onClick={()=>setopen(false)} className={`${open ? "opacity-[1] pointer-events-auto" : "opacity-0 pointer-events-none"} fixed top-0 left-0 flex items-center justify-center w-[100vw] h-[100vh] bg-black-rgba transition-all z-30`}>
        
        <div onClick={(e)=>{e.stopPropagation()}} className="w-[36%] bg-[#fff] shadow-xl rounded-md max-w-[480px]">
            <div className="flex items-center justify-center border-style py-3 relative">
                <h5 className="text-3xl font-medium">Create a post</h5>
                <button onClick={()=>setopen(false)} className="absolute right-2 top-2 bg-[#e4e6eb] rounded-full p-1"><IoMdClose className="text-3xl text-[#606770]"/></button>
            </div>
            <div className="p-3">
                <div className="flex items-center">
                    <img className="links-style-right mr-2 w-11 h-11 text-xs" src={userImg} alt="user's"/>
                    <div>
                        <p className="capitalize font-medium">{user}</p>
                        <button className="bg-[#e4e6eb] rounded-md px-1 text-sm font-thin flex items-center"><IoEarthOutline className="mr-1"/>Who can see <GoArrowSmallDown className="text-lg"/></button>
                    </div>
                </div>
                <textarea className="py-10 outline-0 h-auto w-[100%]" name="" id="" placeholder={`What's new, ${user}?`}/>
                <div className="mt-4">
                    <button onClick={()=>setopen(false)} className="flex items-center justify-center w-[100%] bg-[#1b74e4] rounded-md py-2 text-center text-[#fff]">tweet</button>
                </div>
            </div>
        </div>
    </div>
    </div> 
    );
}
 
export default FeedBock;