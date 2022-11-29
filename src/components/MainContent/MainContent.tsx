import * as React from "react";
import {BsBook} from 'react-icons/bs';
import {TfiVideoClapper} from 'react-icons/tfi';
import {BiVideoPlus} from 'react-icons/bi';
import Story from "../Story/Story";

interface MainContentProps {
    
}

const MainContent:React.FC<MainContentProps> = () => {
    return ( 
    <section className="bg-[#fff] rounded-md">
        <div>
            <div className="flex border-solid border-b-[1px] border-[#e5dfdf] p-1">
                <button className="common-links px-16 group ml-0"><BsBook className="text-2xl common-links-hover img-style"/> History</button>
                <button className="common-links px-16 group"><TfiVideoClapper className="text-2xl common-links-hover img-style"/>Reels</button>
                <button className="common-links px-16 group"><BiVideoPlus className="text-2xl common-links-hover img-style"/>Rooms</button>
            </div>
            <div className="flex justify-between px-2 py-3">
                <Story img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/1707px-NewTux.svg.png" name="alesha okl" profile="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"/>
                <Story img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/1707px-NewTux.svg.png" name="sasha pop" profile="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"/>
                <Story img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/1707px-NewTux.svg.png" name="sergey dae" profile="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"/>
                <Story img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/1707px-NewTux.svg.png" name="katya fet" profile="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"/>
            </div>
        </div>
    </section> 
    );
}
 
export default MainContent;