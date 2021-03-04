import { Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = (props) => {
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <LoginForm {...props}/>
    </div>
}

export default Login;