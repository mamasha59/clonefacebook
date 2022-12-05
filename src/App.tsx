import Header from "./components/Header/Header";
import RightSideBar from "./components/RightSideBar/RightSideBar";

import LeftSideBar from "./components/LeftSideBar/LeftSideBar";
import LogIn from "./components/LogIn/LogIn";
import { useStateValue } from "./Context/StateProvider";
import MainContent from "./components/MainContent/MainContent";

function App() {
 const [{user}, dispatch] = useStateValue();

  return (
     <div className="w-auto mx-auto my-0 bg-[#f0f2f5] tw-h-full">
      {/* header */}
     {!user ? (<LogIn/>)  :  
     (<>
        <Header/>
        <main className="flex justify-between mt-6 px-4 md:justify-center">
        {/* right-section */}
        <LeftSideBar/>
        {/* center-main section */}
        <MainContent/>
        {/* contacts-section */}
        <RightSideBar/> 
        </main>
      </>)
      }
     </div>
  );
}

export default App;
