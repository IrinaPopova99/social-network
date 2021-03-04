import { useForm } from "react-hook-form";

export const ProfileForm = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (formData) => {
        props.sendMessage();
    }
    return 
}
