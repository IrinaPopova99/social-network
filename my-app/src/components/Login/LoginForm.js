import { useForm } from "react-hook-form";


//нет валидации
const LoginForm = (props) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (formData) => {
        props.onGetLoginUser(formData.email, formData.password, formData.rememberMe);
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <div>
                <input placeholder={"Email"} name={'email'} ref={register} />
            </div>
            <div>
                <input placeholder={"Password"} name={'password'} ref={register} type="password" />
            </div>
            <div>
                <input type="checkbox" name={'rememberMe'} ref={register} />Remember me
                </div>
        </div>
        <button>Login</button>
    </form>
}
export default LoginForm;