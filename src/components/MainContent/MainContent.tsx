import * as React from "react";
import Feed from "../Feed/Feed";
import FeedBock from "../FeedBlock/FeedBlock";
import StoryBlock from "../StoryBlock/StoryBlock";


interface MainContentProps {
    
}

const MainContent:React.FC<MainContentProps> = () => {
    return (
        <section className="flex flex-col max-w-[560px] shrink-0 mx-auto my-0 lg:max-w-[500px] lg:mx-auto lg:my-0 sm:max-w-[380px]">
        <StoryBlock/>
        <FeedBock user="aleksei" userImg="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"/>
        <Feed userImg="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" user="aleskei"/>
        </section>
    );
}
 
export default MainContent;