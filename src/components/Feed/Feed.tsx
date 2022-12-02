import * as React from "react";
import { IoEarthOutline } from "react-icons/io5";
import {MdMoreHoriz} from 'react-icons/md';
import {SlLike} from 'react-icons/sl';
import {RiShareForwardLine} from 'react-icons/ri';
import {AiOutlineLike} from 'react-icons/ai';
import {BiCommentDetail} from 'react-icons/bi';

interface FeedProps {
    userImg:string;
    user:string;
}
 
const Feed:React.FC<FeedProps> = ({userImg,user}) => {
    return (
    <div className="bg-[#fff] rounded-md px-4 py-3 flex flex-col">
      <div className="flex relative mb-3">
           <div className="mr-2 w-11 h-11"><img className="links-style-right text-xs m-0" src={userImg} alt="user's"/></div>
            <div className="flex flex-col">
                <h5 className="capitalize font-medium">{user}</h5>
                <time className="flex rounded-md text-sm font-thin items-center">1d <IoEarthOutline className="ml-1"/></time>
                <div className="p-2 absolute right-2 top-0 common-hover rounded-full"><MdMoreHoriz className="text-[#65676b] text-2xl"/></div>
            </div>
      </div>
      <div className="mb-3">
        <h6 className="min-w-full mb-3"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde vitae repudiandae distinctio, sapiente rem laudantium, commodi necessitatibus provident magnam iure expedita neque dolorum totam ipsam. Delectus neque culpa omnis voluptates.</h6>
        <img src="https://t4.ftcdn.net/jpg/01/25/40/65/360_F_125406503_CyVp5BMz4IUHcYqiTk4o01HKVNN1bVHd.jpg" alt="capture" />
      </div>
      <div className="flex justify-between border-style py-[10px]">
        <div className="flex items-center">
            <div className="bg-[#097eea] p-1 rounded-full cursor-pointer"><SlLike className="text-[#fff] text-lg"/></div> 
            <span className="ml-2">4</span>
        </div>
        <div className="flex items-center">
           <div className="p-1 rounded-full cursor-pointer order-2"><RiShareForwardLine className="text-lg"/></div> 
            <p className="order-1">4</p>
        </div>
      </div>
      <div className="flex justify-between p-1">
            <button className="common-button-style"><AiOutlineLike className="mr-2 text-xl"/> Like it</button>
            <button className="common-button-style"><BiCommentDetail className="mr-2 text-xl"/> Coment</button>
            <button className="common-button-style"><RiShareForwardLine className="mr-2 text-xl"/> Share</button>
      </div>
    </div>
    );
}
 
export default Feed;