import * as React from "react";

interface StoryProps {
    img:string;
    name:string;
    profile:string;
}
 
const Story:React.FC<StoryProps> = ({img,name,profile}) => {
    console.log(img)
    return (
        <div className='rounded-md w-[8rem] h-[14rem] bg-[#e2dddd] bg-im cursor-pointer relative'>
           <img className="absolute top-1 left-2 bg-[red] w-10 h-10 rounded-full" src={profile} alt="" />
           <img src={img} alt="story background" />
           <h4 className="absolute bottom-1 left-2 text-[#fff] text-sm capitalize">{name}</h4>
        </div> 
    );
}
 
export default Story;