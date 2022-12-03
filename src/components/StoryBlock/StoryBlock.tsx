import * as React from "react";

import {BsBook} from 'react-icons/bs';
import {TfiVideoClapper} from 'react-icons/tfi';
import {BiVideoPlus} from 'react-icons/bi';
import Story from "./Story/Story";

interface StoryBlockProps {
    
}
 
const StoryBlock:React.FC<StoryBlockProps> = () => {
    return ( 
        <div className="rounded-md ">
        <div>
            <div className="bg-[#fff] flex border-style p-1 justify-center">
                <button className="common-links px-16 group ml-0 common-hover md:px-8 sm:px-5"><BsBook className="text-2xl common-links-hover img-style sm:text-xl"/> History</button>
                <button className="common-links px-16 group common-hover md:px-8 sm:px-5"><TfiVideoClapper className="text-2xl common-links-hover img-style sm:text-xl"/>Reels</button>
                <button className="common-links px-16 group common-hover md:px-8 sm:px-5"><BiVideoPlus className="text-2xl common-links-hover img-style sm:text-xl"/>Rooms</button>
            </div>
            <div className="bg-[#fff] flex justify-between p-4 rounded-b-md">
                <Story img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/1707px-NewTux.svg.png" name="alesha okl" profile="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"/>
                <Story img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/1707px-NewTux.svg.png" name="sasha pop" profile="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"/>
                <Story img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/1707px-NewTux.svg.png" name="sergey dae" profile="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"/>
                <Story img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/1707px-NewTux.svg.png" name="katya fet" profile="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"/>
            </div>
        </div>
    </div>  
    );
}
 
export default StoryBlock;