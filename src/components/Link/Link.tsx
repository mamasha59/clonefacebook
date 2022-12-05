import * as React from "react";

interface LinkProps {
    linkName:string;
    Icon?:any;
    img?:string;
}
 
const Link:React.FC<LinkProps> = ({linkName,Icon, img}) => {
    return ( 
    <li className="flex items-center py-3 px-1 mr-1 common-hover rounded-md cursor-pointer">
        <a href="/#" className="flex items-center">
            <div className="text-3xl w-8 h-8">
                {img &&  <img className="links-rightcolor" src={img} alt="profile img"/>}
                {Icon && <Icon/>}
            </div>
            <h3 className="text-base font-medium ml-3 opacity-75">{linkName}</h3>
        </a>
    </li> 
    );
}
 
export default Link;