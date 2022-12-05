import * as React from "react";

import {CiSearch} from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { TbArrowNarrowLeft } from "react-icons/tb";
import { TbHome2,TbUsers,TbMovie,TbBuildingStore,
    TbDeviceGamepad2,TbGridDots, TbBrandMessenger, 
    TbBellRinging, TbUser } from "react-icons/tb";
import { CgDetailsMore } from "react-icons/cg";
import { useStateValue } from "../../Context/StateProvider";

const Header:React.FC = () => {

    const [{user},dispatch] = useStateValue();

    const [active, setActive] = React.useState(false); //state of search block
    // console.log(user.photoURL)
    const makeActive = () =>{
      setActive(true)
    }
    const makeDisActive = () =>{
        setActive(false)
      }

    return (
    <header className="flex px-5 justify-between items-center shadow-xl bg-[#fff] sticky top-0 z-10 lit:py-1">
        {/* logo-input block */}
        <div className={`flex items-center flex-[1_1_20%] relative xl:flex-row sm:flex-1 ${active ? 'z-30 xl:block': ''}`}>
            <div className="flex items-center grow">
                <div className="w-9 h-9 mr-3 flex items-center">
                {active ? (<span onClick={makeDisActive} className="arrow-back"><TbArrowNarrowLeft className="text-3xl text-gray-500 w-[100%] p-0"/></span>)
                        : (<FaFacebook className="cursor-pointer w-9 h-9 text-[blue] transition"/>) /*arrow-back*/
                }
                </div>
                {/* input searching */}
                <label className="flex border-solid border bg-[#f0f2f5] rounded-3xl w-[100%] xl:w-[auto] xl:p-[9px]">
                    <span className={active ? "hidden" : 'pl-2 flex items-center rounded-3xl xl:p-0'}><CiSearch className="text-xl"/></span>
                    <input onClick={makeActive} className={`input-style transition-all xl:absolute xl:top-0 ${active ? 'block':''}`} type="text" placeholder="Поиск на Facebook" />
                </label>
              
            </div>
        </div>
         {/* nav main-middle links */}
        <nav className="flex-[1_1_60%] flex items-center justify-center sm:justify-start">

            <ul className="flex py-1">
                <li className="common-links common-hover links-middle small-screen group">
                    <TbHome2 className="img-style common-links-hover"/>
                    <span className="caption-style">Home</span>
                </li>
                <li className="common-links common-hover links-middle small-screen group">
                    <TbUsers className="img-style common-links-hover"/>
                    <span className="caption-style">Friends</span>
                </li>
                <li className="common-links common-hover links-middle small-screen group">
                    <TbMovie className="img-style common-links-hover"/>
                    <span className="caption-style">Watch</span>
                </li>
                <li className="common-links common-hover links-middle small-screen group">
                    <TbBuildingStore className="img-style common-links-hover"/>
                    <span className="caption-style">Markeplace</span>
                </li> 
                <li className="common-links common-hover links-middle small-screen group lg:hidden">
                    <TbDeviceGamepad2 className="img-style common-links-hover"/>
                    <span className="caption-style">Games</span>
                </li>

                <li className="common-links common-hover links-middle group hidden lg:block lit:hidden">
                    <CgDetailsMore className="img-style common-links-hover"/>
                    <span className="caption-style">More</span>
                </li> 
            </ul>

        </nav>
         {/* nav - menu messenger - notices - account */}
         <nav className="flex-[1_1_20%] flex justify-end">
            <ul className="flex">
                <li className="links-style-right group"><TbGridDots className="links-rightcolor"/>
                    <span className="caption-style">Menu</span></li>
                <li className="links-style-right group"><TbBrandMessenger className="links-rightcolor"/>
                    <span className="caption-style">Messenger</span></li>
                <li className="links-style-right group"><TbBellRinging className="links-rightcolor"/>
                    <span className="caption-style">Notices</span></li>
                <li className="links-style-right group">{user ? <img className="links-rightcolor" src={user.photoURL} alt="user" /> :<TbUser className="links-rightcolor"/>}
                    <span className="caption-style">Account</span></li> 
            </ul>
        </nav>
        <div className={`transition-transform translate-x-[-100%] text-center bg-[#fff] shadow-lg pt-[5%] px-2 pb-2 w-[349px]  absolute top-0 left-0 rounded-md  xl:pt-[6%] ${active?'translate-x-0':''}`}><p>No results</p></div>
    </header>
    );
    
}
 
export default Header;