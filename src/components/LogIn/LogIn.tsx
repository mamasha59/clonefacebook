import * as React from "react";
import { actionTypes } from "../../Context/reducer";
import { useStateValue } from "../../Context/StateProvider";
import {auth, provider} from '../../firebase';

interface LogInProps {
    
}
 
const LogIn:React.FC<LogInProps> = () => {
    
    const [{user},dispatch] = useStateValue();
 
    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then(result =>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            // console.log(result.user)
        })
        .catch(error=>{alert(error.message)})
    }
     
    return (
        <section className="flex justify-center items-center flex-col h-[100vh]">
           <div className="max-w-xs mb-10"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="logo" /></div>
           <button type="submit" onClick={signIn} className="max-w-xs w-[100%] bg-blue-600 py-2 rounded-md text-[#fff]">Log-In</button>
        </section>
    );
}
 
export default LogIn;