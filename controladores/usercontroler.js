// AÑADE UN ID UNIQUE A NUESTRA BD
import { v1 as uuid } from 'uuid';


let users = [];

// HE SACADO TODAS LAS FUNCIONES DEL ROUTER
export const getUsers = (req,res)=>{
    res.send(users);
};

export const getUser = (req,res)=>{
    
    // PARAMS SE ENCUENTRA EL ID DEL USUARIO ... DESESTRUCTURAMOS
    const { id } = req.params;
    const userFound = users.find((user) => user.id === id );
    res.send(userFound);
};

export const postUser = (req,res)=>{
    const newUser = req.body;
    users.push({...newUser,id:uuid()});
    res.send(`User created with: ${newUser.name}`)
};

export const deleteUser = ( req,res)=>{
    const { id } = req.params;
    users = users.filter((user)=>{user.id !== id})
    res.send(`Usuario eliminado${id}`);
};

export const patchUser = ( req,res)=>{
    const { id } = req.params;

    const { name, apellido, edad } = req.body;

    const userModificado = users.find((user)=>user.id === id );

    // SI EL BODY (NAME) (DESDE LA PETICION)
    if (name) userModificado.name = name;
    if (apellido) userModificado.apellido = apellido;
    if (edad) userModificado.edad = edad;

    res.send(`User modified ${id}`);

}