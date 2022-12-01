import * as React from "react";

import {CiSearch} from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { TbArrowNarrowLeft } from "react-icons/tb";
import { TbHome2,TbUsers,TbMovie,TbBuildingStore,
    TbDeviceGamepad2,TbGridDots, TbBrandMessenger, 
    TbBellRinging, TbUser } from "react-icons/tb";

const Header:React.FC = () => {
    const [active, setActive] = React.useState(true); //state of search block

    const makeActive = () =>{
      setActive(false)
    }
    const makeDisActive = () =>{
        setActive(true)
      }

    return (
    <header className="flex px-5 justify-between items-center shadow-xl bg-[#fff] sticky top-0 z-10">
        {/* logo-input block */}
        <div className="flex items-center flex-[1_1_20%] relative xl:flex-row">
            <div className="flex items-center">
                <div className="w-9 h-9 mr-3 flex items-center">
                {active ? (<FaFacebook className="w-9 h-9 text-[blue] transition"/>)
                        : (<span onClick={makeDisActive} className="arrow-back"><TbArrowNarrowLeft className="text-3xl text-gray-500 w-[100%] p-0"/></span>) /*arrow-back*/
                }
                </div>
                {/* input searching */}
                <label className="flex border-solid border bg-[#f0f2f5] rounded-3xl w-[100%] xl:p-[9px]">
                    <span className={active ? "pl-2 flex items-center rounded-3xl xl:p-0" : 'hidden'}><CiSearch className="text-xl"/></span>
                    <input onClick={makeActive} className="input-style" type="text" placeholder="Поиск на Facebook" />
                </label>
                {!active 
        ? (<div className="w-[100%] text-center pt-3 "><p>No results</p></div>)
        : ('')}
            </div>
        </div>
         {/* nav main-middle links */}
        <nav className="flex-[1_1_60%] flex items-center justify-center">

            <ul className="flex py-1">
                <li className="common-links common-hover links-middle group">
                    <TbHome2 className="img-style common-links-hover"/>
                    <span className="caption-style">Home</span>
                </li>
                <li className="common-links common-hover links-middle group">
                    <TbUsers className="img-style common-links-hover"/>
                    <span className="caption-style">Friends</span>
                </li>
                <li className="common-links common-hover links-middle group">
                    <TbMovie className="img-style common-links-hover"/>
                    <span className="caption-style">Watch</span>
                </li>
                <li className="common-links common-hover links-middle group">
                    <TbBuildingStore className="img-style common-links-hover"/>
                    <span className="caption-style">Markeplace</span>
                </li> 
                <li className="common-links common-hover links-middle group">
                    <TbDeviceGamepad2 className="img-style common-links-hover"/>
                    <span className="caption-style">Games</span>
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
                <li className="links-style-right group"><TbUser className="links-rightcolor"/>
                    <span className="caption-style">Account</span></li> 
            </ul>
        </nav>
    </header>
    );
    
}
 
export default Header;