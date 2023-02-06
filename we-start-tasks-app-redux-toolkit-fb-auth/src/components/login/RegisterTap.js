import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthController from "../../controllers/auth-controller";
import { authActions } from "../../redux/auth-slice";
import SocilIcon from "./SocialIcon";

let RegisterTap = () => {
  let dispatch = useDispatch();
  let navigator = useNavigate();
  let emailRef = useRef();
  let passwordRef = useRef();
  let repeatPasswordRef = useRef()

  let authController = new AuthController();

  let [agree,setAgree] = useState(false);

  let onAgreeChangeHandler = (event) => {
    setAgree(event.target.checked)
  }

  let onSubmitHandler = (event) => {
    event.preventDefault();
    if(checkData()){
      register();
    }
    
  }

  let checkData = () => {
    if(emailRef.current.value !=''&&passwordRef.current.value!=''
    &&repeatPasswordRef.current.value!=''){
      if(passwordRef.current.value ==repeatPasswordRef.current.value){
        return true
      }
      alert("password confirmation error!")
      return false;
    }
    alert("enter required data");
    return false;
  }

  let register = async () => {
    let response = await authController.register(emailRef.current.value, passwordRef.current.value);
    console.log(response)
    if(response.status){
      localStorage.setItem('token', response.token)
      localStorage.setItem('logged-In', true)
      dispatch(authActions.register(response.token));
    navigator('/dashbord', {replace: true})
    }
  }
    return (
        <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
    <form onSubmit={onSubmitHandler}>
      <SocilIcon/>

         <h4 className="mb-4 mt-5 text-center">or:</h4>

       
 

       
      <div className="form-outline mb-4">
        <input type="email" id="registerEmail" className="form-control" placeholder="Email" ref={emailRef} />
        
      </div>

       
      <div className="form-outline mb-4">
      	       

        <input type="password" id="registerPassword" className="form-control" placeholder="password" ref={passwordRef} />
      </div>

       
      <div className="form-outline mb-4">
      	  
        <input type="password" id="registerRepeatPassword" className="form-control"  placeholder="repeat password" ref={repeatPasswordRef} />
     
      </div>

       
      <div className="form-check d-flex justify-content-center mb-4">
        <input className="form-check-input me-2" type="checkbox"  id="registerCheck" 
          aria-describedby="registerCheckHelpText"  onChange={onAgreeChangeHandler} />
        <label className="form-check-label" for="registerCheck">
          I have read and agree to the terms
        </label>
      </div>

       
      <button type="submit" disabled={!agree} className="btn btn-main btn-block mb-3">Register</button>
    </form>
  </div>
    )
}
export default RegisterTap;