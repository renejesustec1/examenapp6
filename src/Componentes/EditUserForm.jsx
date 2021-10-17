import React, {Fragment} from 'react';
import { useForm } from 'react-hook-form';


const EditUserForm = (props) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({defaultValues : props.currentUser});
    
    setValue('name', props.currentUser.name);
    setValue('precio', props.currentUser.precio);

    const onSubmit = data => {
        console.log(data);
        props.upDateUser(props.currentUser.id, data)

    }



    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <label>Name:</label>
                <input type="text" name="name"
                {...register("name", { required: true, maxLength: 100})}/>
                {errors.nombre?.type === 'required' && "Este es un Campo Requerido"}
                {errors.nombre?.type === 'maxLength' && "El Maximo de Caracteres es de 100"}

                <label>precio:</label>
                <input type="text" precio="precio"
                {...register("precio", { required: true, maxLength: 100})}/>
                {errors.nombre?.type === 'required' && "Este es un Campo Requerido"}
                {errors.nombre?.type === 'maxLength' && "El Maximo de Caracteres es de 100"}

                <label>descripcion:</label>
                <input type="text" descripcion="descripcion"
                {...register("descripcion", { required: true, maxLength: 100})}/>
                {errors.nombre?.type === 'required' && "Este es un Campo Requerido"}
                {errors.nombre?.type === 'maxLength' && "El Maximo de Caracteres es de 100"}
                

                <label>stock:</label>
                <input type="text" stock="stock"
                {...register("stock", { required: true, maxLength: 100})}/>
                {errors.nombre?.type === 'required' && "Este es un Campo Requerido"}
                {errors.nombre?.type === 'maxLength' && "El Maximo de Caracteres es de 100"}
                

                <button className="btn btn-warning">Confirmar</button>
            
            </form>
        </Fragment> 
     );
}
 
export default EditUserForm;