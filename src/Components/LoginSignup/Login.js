import { useState } from "react";
import { loginFields } from "./formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { changeUser } from "../../store/LoginDetailsSlice";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const dispatch = useDispatch();
  // const activeUser = useSelector(
  //   (state) => state.loggedin_userDetails,
  //   shallowEqual
  // );
  const navigate = useNavigate();

  const loginSuccesNotification = () => {
    toast.success("Login Successful!", {
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

  const loginFailedNotification = () => {
    toast.error("Invalid Username or Password !", {
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
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(loginState.email ==="admin@admin.com" && loginState.password==="admin"){
      navigate("/adminhomepage")
    }
    else {authenticateUser(e);}
    
  };

  const navigateTohomePage = () => {
    navigate("/home");
  };
  //Handle Login API Integration here
  async function authenticateUser(e) {
    e.preventDefault();
    // console.log(loginState);
    Axios.post(
      "https://oblinebidappbackend.onrender.com/userloginauthentication",
      loginState
    )
      .then((res) => {
        if (res.status === 200) {
          // console.log(res.data);
          if (res.data[0] === "exist") {
            loginSuccesNotification();
            // console.log(res.data[1].password," : Password")
            dispatch(
              changeUser(res.data[1])
            );
            setTimeout(navigateTohomePage, 3500); // changing the route using navigation after 3.5 seconds
          } else {
            loginFailedNotification();
          }
        } else Promise.reject();
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <form
      className="mt-3 space-y-6 min-w-[270px] w-[50vw] max-w-[500px]"
      onSubmit={handleSubmit}
    >
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>

      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
      <ToastContainer />
    </form>
  );
}
