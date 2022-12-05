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
    img:string;
    message:string;
    time:any;
}
 
const Feed:React.FC<FeedProps> = ({userImg,user,img,message,time}) => {
    return (
    <div className="bg-[#fff] rounded-md px-4 py-3 flex flex-col my-7">
      <div className="flex relative mb-3">
           <div className="mr-2 w-11 h-11"><img className="links-style-right text-xs m-0" src={userImg} alt="user's"/></div>
            <div className="flex flex-col">
                <h5 className="capitalize font-medium">{user}</h5>
                <p className="flex rounded-md text-sm font-thin items-center">{new Date(time?.toDate()).toUTCString()}<IoEarthOutline className="ml-1"/></p>
                <div className="p-2 absolute right-2 top-0 common-hover rounded-full"><MdMoreHoriz className="text-[#65676b] text-2xl"/></div>
            </div>
      </div>
      <div className="mb-3">
        <h6 className="min-w-full mb-3">{message}</h6>
        <img src={img} alt="capture" />
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