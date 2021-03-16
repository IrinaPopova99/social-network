import { useForm } from "react-hook-form";
import { validations } from '../../../utilities/validations/validations';
import ErrorMessages from '../../Common/ErrorMessages/ErrorMessages';
import SendButton from '../../Common/SendButton/SendButton';

const PostForm = (props) => {
    const { register, handleSubmit, setValue, errors } = useForm();
    const onSubmit = (formData) => {
        props.addPost(formData.post);
        setValue('post', '')
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="post-input">
                <textarea name={'post'} ref={register(validations(false, 5))} placeholder="Your news..." />
            </div>
            <ErrorMessages errors={errors} name="post" />
            <SendButton />
        </form>
    )
}

export default PostForm;