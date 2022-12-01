import * as React from "react";
import Link from '../Link/Link';

import { ImUsers } from "react-icons/im";
import { FcFilm,FcFolder,FcShop } from "react-icons/fc";
import { HiUserGroup } from "react-icons/hi";
import { GiBackwardTime } from "react-icons/gi";
import {  TbUser } from "react-icons/tb";
import {  MdWeb } from "react-icons/md";

interface LeftSideBarSideBarProps {
    
}
 
const LeftSideBar:React.FC<LeftSideBarSideBarProps> = () => {
    return (
    <section className="max-w-[360px] my-1 overflow-y-auto grow">
        <ul>
        <Link linkName="User" Icon={TbUser}/>
        <Link linkName="Поиск друзей" Icon={ImUsers}/>
        <Link linkName="Группы" Icon={HiUserGroup}/>
        <Link linkName="Marketplace" Icon={FcShop}/>
        <Link linkName="Watch" Icon={FcFilm}/>
        <Link linkName="Воспоминания" Icon={GiBackwardTime}/>
        <Link linkName="Сохраненное" Icon={FcFolder}/>
        <Link linkName="Страницы" Icon={MdWeb}/>
        {/* for future - make button "SHOW MORE" and section "YOUR FAST LINKS" */}
        </ul>
    </section>    
    );
}
 
export default LeftSideBar;