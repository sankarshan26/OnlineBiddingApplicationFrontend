import { useState } from 'react';
import { signupFields } from "./formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import Axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const fields=signupFields;

let fieldsState={
  wallet : 100 ,
};

fields.forEach(field => fieldsState[field.id]='');

export default function Signup(){
  const PasswordMisnatch_notification = () => {
    toast.warn('Password Mismatch', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  };

  const SigupSuccessfulNotification = () =>{
    toast.success('Registration Successful', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  const SigupFailedNotification = ()=>{
    toast.error('Registration Failed', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  const [signupState,setSignupState]=useState(fieldsState);

  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(signupState)
    if(signupState.password === signupState.confirmpassword) {
    createAccount();
    }
    else{
      //password mismatch .
      PasswordMisnatch_notification() ;
    }
  }

  
  const navigate = useNavigate();
  const navigateTologinPage = () => {
    navigate("/login");
  };

  //handle Signup API Integration here
  const createAccount=()=>{
    // console.log(typeof signupState)
    Axios.post("https://oblinebidappbackend.onrender.com/createuser",
    {signupState}).then((result)=>{
      console.log(result);
      if(result.status === 200){
        if (result.data === "success"){
          SigupSuccessfulNotification();
          setTimeout(navigateTologinPage, 3500);
        }
        else{
          SigupFailedNotification();
        }
      }
    })
    .catch(err => console.log(err))
  }

    return(
      <>
        <form className="mt-3 space-y-6 min-w-[270px] w-[50vw] max-w-[500px]" onSubmit={handleSubmit}>
        <div className="">
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
            
          <FormAction handleSubmit={handleSubmit} text="Signup" />
        </div>

         

      </form>
      <ToastContainer />
      </>
    )
}