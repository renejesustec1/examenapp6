import React, {Fragment} from 'react';

const UserTable = (props) => {
    console.log(props.users);

    return ( 
        <Fragment>
            <table className="table table-bordered">  
            <thead>
                <tr bgcolor="orange">
                     <th>id</th>
                    <th>Name</th>
                    <th>precio</th>
                    <th>descripcion</th>
                    <th>stock</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.length > 0 ?
                    props.users.map(user =>(

                        <tr>

                             <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.precio}</td>
                            <td>{user.descripcion}</td>
                            <td>{user.stock}</td>


                            <td>
                                <button className="btn btn-success"
                                onClick={() => {props.editRow(user)}}>Editar</button> 

                                <button className="btn btn-danger"
                                onClick={() => {props.deleteUser(user.id)}}>Eliminar</button>
                            </td>


                        </tr>

                        
                        )
                    ) : (
                        <tr>
                            <td colSpan={3}>No Registros</td>
                        </tr>
                    )
                }
            </tbody>
        </table>

        </Fragment>
             );
}
 
export default UserTable;

