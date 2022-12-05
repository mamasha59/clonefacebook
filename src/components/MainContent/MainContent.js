import * as React from "react";
import Feed from "../Feed/Feed";
import FeedBock from "../FeedBlock/FeedBlock";
import StoryBlock from "../StoryBlock/StoryBlock";
import db from '../../firebase';


const MainContent = () => {

    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
         db.collection("posts").orderBy('timeStamp', 'desc').onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
            );
    },[])
           
    return (
        <section className="flex flex-col max-w-[560px] shrink-0 mx-auto my-0 lg:max-w-[500px] lg:mx-auto lg:my-0 sm:max-w-[380px]">
        <StoryBlock/>
        <FeedBock/>
        {posts.map((post)=>(
            <Feed 
                key={post.id}
                message={post.data.message}
                time={post.data.timeStamp}
                userImg={post.data.profilePic} 
                user={post.data.userName}
                img={post.data.img}
            />
        ))}
        
        </section>
    );
}
 
export default MainContent;