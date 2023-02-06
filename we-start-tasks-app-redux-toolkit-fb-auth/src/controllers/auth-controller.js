import axios from "axios";

class AuthController {
    async login(email, password){
        try {
            let response = await axios.post
            (`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAIyIXztwS_lbD8uWMzxjlZ-tw784JTEWQ`,
            {
                email:email,
                password:password,
                returnSecureToken:true,

            })
            console.log(response.data);
            return {status:true, message:'successfully', token:response.data.idToken}
        } catch (error) {
            console.log(error.response)
            return {status: false, message: error.response.data.error.message}
        }
    }
    async register(email,password){
        try {
            let response = await axios.post
            (`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAIyIXztwS_lbD8uWMzxjlZ-tw784JTEWQ`,
            {
                email:email,
                password:password,
                returnSecureToken:true,

            })
            console.log(response.data)
            return {status :true, message: "Regisered successfuly", token: response.data.idToken}
        } catch (error) {
            return { status : false, message: "Resgistered faild, try agin"}
        }
    }
}
export default AuthController;