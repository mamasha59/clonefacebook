import * as React from "react";

interface SideBarProps {
    children:any;
}
 
const SideBar:React.FC<SideBarProps> = ({children}) => {
    return (
    <ul className="max-w-[360px] my-1 overflow-y-auto grow">
    
    </ul> 
    );
}
 
export default SideBar;