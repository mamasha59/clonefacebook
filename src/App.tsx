import Header from "./components/Header/Header";
import RightSideBar from "./components/RightSideBar/RightSideBar";
import MainContent from "./components/MainContent/MainContent";
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";

function App() {
  return (
     <body className="w-auto mx-auto my-0 bg-[#f0f2f5]">
      {/* header */}
      <Header/>
      <main className="flex justify-between mt-7 px-4">
      {/* right-section */}
      <LeftSideBar/>
      {/* center-main section */}
      <MainContent/>
      {/* contacts-section */}
      <RightSideBar/>
      </main>
     </body>
  );
}

export default App;
