import React, { useEffect, useState } from "react";
import {auth,provider} from "./FirebaseAuth/config";
import {signInWithPopup} from "firebase/auth";
import Home from "./Home/Home";
import { useNavigate } from "react-router-dom"


const SignInPage = () => {

  const history = useNavigate()

    const [value,setValue] = useState('')
    const handleClick =()=>{
      // history.replace('/');
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            console.log(data.user.email);
            console.log("Rohit");
            localStorage.setItem("email",data.user.email)
        })
    }
    

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
        console.log("Successfulley stored to local storage");
    })
  return (
    <div>
            {
            value ?  window.location.href=`/home` :
              <button onClick={handleClick} style={{marginLeft:'80vw',marginTop:'15px',padding:'3px'}}>Signin With Google</button>
           
            }
              </div>
  )
}

export default SignInPage
