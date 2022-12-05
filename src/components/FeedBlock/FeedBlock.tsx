import * as React from "react";

import { RiLiveLine } from "react-icons/ri";
import { FcStackOfPhotos } from "react-icons/fc";
import { VscSmiley } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { IoEarthOutline } from "react-icons/io5";
import { GoArrowSmallDown } from "react-icons/go";
import { useStateValue } from "../../Context/StateProvider";

import db from '../../firebase';
import firebase from 'firebase/compat/app';

interface FeedBockProps {

}
 
const FeedBock:React.FC<FeedBockProps> = () => {

    const [{user},dispatch] = useStateValue();
    
    const [open, setopen] = React.useState(false);
    const [tweet, setTweet] = React.useState(''); //data of tweet
    const [img, setImg] = React.useState(''); //data of tweet

   function submitTweet(e:any) {
    e.preventDefault();

    db.collection('posts').add({
        message:tweet,
        timeStamp:firebase.firestore.FieldValue.serverTimestamp(),
        profilePic:user.photoURL,
        userName:user.displayName,
        img:img,
    })
    setTweet('')
    setImg('')
   }

   React.useEffect(() => { //close popup by Escape
    const close = (e:any) => {
      if(e.keyCode === 27){
        setopen(false)
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
    },[])

    return ( 
    <div className="bg-[#fff] mt-7 rounded-md px-4 py-3">
        <div className="flex border-style pb-4">
            <img className="links-style-right mr-2 w-11 h-11 text-xs" src={user.photoURL} alt="user's"/>
            <div onClick={()=>setopen(true)} className="make-tweet sm:text-[15px]">What's new, {user.displayName}?</div>
        </div>
        <div className="mt-3">
            <ul className="flex justify-between w-[100%]">
                <li className="common-button-style"><RiLiveLine className="text-[#EA2027] text-2xl mr-2  sm:text-xl"/>Live</li>
                <li className="common-button-style"><FcStackOfPhotos className="text-2xl mr-2 sm:text-xl"/>Photo/video</li>
                <li className="common-button-style"><VscSmiley className="text-[#FFC312] text-2xl mr-2 sm:text-xl"/>Feeling/activity</li>
            </ul>
        </div>
        {/* popup make tweet */}
    <div onClick={()=>setopen(false)} className={`${open ? "opacity-[1] pointer-events-auto" : "opacity-0 pointer-events-none"} fixed top-0 left-0 flex items-center justify-center w-[100vw] h-[100vh] bg-black-rgba transition-all z-30`}>
        <div onClick={(e)=>{e.stopPropagation()}} className="w-[36%] lg:w-auto bg-[#fff] shadow-xl rounded-md max-w-[480px]">
            <div className="flex items-center justify-center border-style py-3 relative">
                <h5 className="text-3xl font-medium">Create a post</h5>
                <button onClick={()=>setopen(false)} className="common-hover absolute right-2 top-2 bg-[#e4e6eb] rounded-full p-1"><IoMdClose className="text-3xl text-[#606770]"/></button> {/* close button */}
            </div>
            <form onSubmit={submitTweet} className="p-3">
                <div className="flex items-center">
                    <img className="links-style-right mr-2 w-11 h-11 text-xs" src={user.photoURL} alt="user's"/>
                    <div>
                        <p className="capitalize font-medium">{user.displayName}</p>
                        <button className="bg-[#e4e6eb] rounded-md px-1 text-sm font-thin flex items-center"><IoEarthOutline className="mr-1"/>Who can see <GoArrowSmallDown className="text-lg"/></button>
                    </div>
                </div>
                <textarea value={tweet} onChange={(e)=>{setTweet(e.target.value)}} className="py-10 outline-0 h-auto w-[100%]" name="" id="" placeholder={`What's new, ${user.displayName}?`}/>
                <input value={img} onChange={(e)=>{setImg(e.target.value)}} type="text" placeholder="URL img"/>
                <div className="mt-4">
                    <button disabled={tweet.length === 0 && true} onClick={()=>setopen(false)} className={`${tweet.length === 0 && 'cursor-not-allowed bg-[grey]'} flex items-center justify-center w-[100%] bg-[#1b74e4] rounded-md py-2 text-center text-[#fff]`}>tweet</button>
                </div>
            </form>
        </div>
    </div>
    </div> 
    );
}
 
export default FeedBock;