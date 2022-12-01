import * as React from "react";
import FeedBock from "../FeedBlock/FeedBlock";
import StoryBlock from "../StoryBlock/StoryBlock";


interface MainContentProps {
    
}

const MainContent:React.FC<MainContentProps> = () => {
    return (
        <section className="flex flex-col">
        <StoryBlock/>
        <FeedBock user="aleksei" userImg="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"/>
        </section>
    );
}
 
export default MainContent;