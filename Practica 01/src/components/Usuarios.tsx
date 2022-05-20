import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const paginaRef = useRef(0);

  useEffect(() => {
    cargarUsuarios()
  }, []);

  const cargarUsuarios =async () => {
    const resp = await reqResApi.get<ReqResListado>("/users",{
      params: {
        page: paginaRef.current
      }
    })
    console.log(resp.data);
    if(resp.data.data.length > 0) {
      setUsuarios(resp.data.data);
      paginaRef.current ++;
    }else{
      alert('No hay mas usuarios')
    }
  }

  const renderItems = ({last_name, id, first_name,email,avatar}: Usuario) => {
    return (
      <tr key={id.toString()}>
        <th>
          <img 
            src={avatar} 
            alt={first_name} 
            style={{
              width: 35, 
              borderRadius: 100,
            }}  
          />
        </th>
        <th>{first_name}{last_name}</th>
        <th>{email}</th>  
      </tr>
    )
  }
  return (
    <>
      <h3>Usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            usuarios.map(renderItems)
          }
        </tbody>
      </table>
      <button
        className="btn btn-primary"
        onClick={cargarUsuarios}
      >
          Siguientes
      </button>
    </>
  );
};
