import React, {Fragment} from 'react';
import { useForm } from 'react-hook-form';


const AddUserForm = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        props.addUser(data);
    }

    return (
        <Fragment>
            
            <form onSubmit={handleSubmit(onSubmit)}>

                <label>Name</label>
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


               
                
                <button className="btn btn-danger">Add new product</button>
                
            </form>
    
        </Fragment> 
     );
     
}
 
export default AddUserForm;