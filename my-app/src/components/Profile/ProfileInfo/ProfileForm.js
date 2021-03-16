import { useForm } from "react-hook-form";
import { validations } from '../../../utilities/validations/validations';
import ErrorMessages from '../../Common/ErrorMessages/ErrorMessages';

export const ProfileForm = (props) => {
    
    const { register, handleSubmit, errors, setValue, getValues, watch } = useForm({
        defaultValues: { status: props.status },
        mode: 'onBlur'
    });
    const onBlur = (formData) => {
        props.onChangeStatus(formData.status);
    }
    console.log(getValues('status'))
    return <>
        <form onBlur={handleSubmit(onBlur)}>
            <input name={'status'} ref={register(validations(false, 5))} autoFocus='true' />
        </form>
        <ErrorMessages errors={errors} name="status" />
    </>
}
