import { useForm } from "react-hook-form";
import { validations } from "../../utilities/validations/validations";
import ErrorMessages from "../Common/ErrorMessages/ErrorMessages";

const LoginForm = (props) => {
    const onRequiredValue = (e) => {
        if (e.currentTarget.value === '') {
            setError('email', {type: 'required', message: "This is required"})
        }
    }
    const { register, handleSubmit, errors, setError } = useForm();
    const onSubmit = (formData) => {
        props.onGetLoginUser(formData.email, formData.password, formData.rememberMe);
    }

    console.log(props)
    return <form onSubmit={handleSubmit(onSubmit)} name='formLogin'>
        <div>
            <div>
                <input placeholder={"Email"} name={'email'} ref={register(validations(true))} onChange={onRequiredValue}/>
            </div>
            <div>
                <input placeholder={"Password"} name={'password'} ref={register(validations(true))} type="password" onChange={onRequiredValue} />
            </div>
            <div>
                <input type="checkbox" name={'rememberMe'} ref={register} />Remember me
            </div>
        </div>
        <div className="error-message">
            <ErrorMessages errors={errors} name="email" />
            <ErrorMessages errors={errors} name="password" />
            <span>{props.error}</span>
        </div>
        <button type="submit">Login</button>
    </form>
}
export default LoginForm;