import React, {useState} from 'react';
import UserTable from "./Componentes/UserTable";
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './Componentes/AddUserForm';
import EditUserForm from './Componentes/EditUserForm';
import 'bootstrap/dist/css/bootstrap.min.css';
 
function App() {

  const userData = [
    {id: uuidv4(), name: 'javon', precio: '$55', descripcion: 'Detergente En Polvo', stock: 'si'},
    
  ]

  const [users, setUsers] = useState(userData);

  //Agregar usuario
  const AddUser = (user) =>{
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  //Eliminar usuarios
  const deleteUser = (id) => {
    console.log(id)
    setUsers(users.filter(user => user.id != id))
  }

  //Bandera para Actualizar usuarios cambia entre add y edit
  const [bandera, setBandera] = useState(false);
  
  //Objeto datos para editar
  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', username: ''
  });

  //Editar usuarios obtener datos para mostrar en formulario
  const editRow = (user) =>{
    setBandera(true);
    setCurrentUser({
      id: user.id, name: user.name, precio: user.precio, descripcion: user.descripcion, stock: user.stock
    })
  }

  //Funcion para Editar
  const updateUser = (id, updateUser) => {
    setBandera(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }


  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          {
            bandera ? (
              <div>
                <h2>Editar producto</h2>
                <EditUserForm currentUser={currentUser} upDateUser={updateUser}/>
              </div>
            ) : (
              <div>
                <h2>Agregar productos</h2>
                <AddUserForm addUser={AddUser}/>
              </div>
            )
          }
        </div>
        <div className="flex-large">
          <h2>Ver los productos</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
        </div>
      </div>
    </div>
  );
}

export default App;
