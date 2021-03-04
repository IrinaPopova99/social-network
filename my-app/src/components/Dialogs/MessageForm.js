import { useForm } from "react-hook-form";
import ErrorMessages from '../Common/ErrorMessages/ErrorMessages';
import SendButton from '../Common/SendButton/SendButton';
import { validations } from "./../../utilities/validations/validations";

const MessageForm = (props) => {
    const { register, handleSubmit, setValue, errors } = useForm({ criteriaMode: "all" });
    const onSubmit = (formData) => {
        props.sendMessage(formData.message);
        setValue('message', '')
    }
    const maxLengthValue = 10;
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div className="send-message">
                    <input placeholder={"Message"} name={'message'}
                        ref={register(validations(true, 10))} />
                </div>
                <div className="error-message">
                    <ErrorMessages errors={errors} name="message" />
                </div>
            </div>
            <SendButton />
        </form>
    );
}

export default MessageForm;