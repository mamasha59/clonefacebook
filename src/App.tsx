import Header from "./components/Header/Header";
import RightSideBar from "./components/RightSideBar/RightSideBar";
import MainContent from "./components/MainContent/MainContent";
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";

function App() {
  return (
     <div className="w-auto mx-auto my-0 bg-[#f0f2f5] tw-h-full">
      {/* header */}
      <Header/>
      <main className="flex justify-between mt-6 px-4 md:justify-center">
      {/* right-section */}
      <LeftSideBar/>
      {/* center-main section */}
      <MainContent/>
      {/* contacts-section */}
      <RightSideBar/>
      </main>
     </div>
  );
}

export default App;
