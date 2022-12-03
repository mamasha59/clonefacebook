import * as React from "react";

interface StoryProps {
    img:string;
    name:string;
    profile:string;
}
 
const Story:React.FC<StoryProps> = ({img,name,profile}) => {

    return (
        <div className="rounded-2xl w-[7rem] h-[13rem] bg-[#e2dddd] cursor-pointer relative 
         bg-no-repeat bg-cover bg-center transition-all hover:scale-[1.05] md:w-[5rem] md:h-[8rem]" style={{backgroundImage: `url(${img})`}}>
           <img className="absolute top-1 left-2 bg-[red] w-10 h-10 rounded-full sm:w-5 sm:h-5" src={profile} alt="profile img" />
           <h4 className="absolute bottom-1 left-2 text-[#fff] text-sm capitalize">{name}</h4>
        </div>
    );
}
 
export default Story;