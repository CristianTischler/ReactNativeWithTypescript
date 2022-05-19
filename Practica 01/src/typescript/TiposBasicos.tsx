
export const TiposBasicos = () => {

    const nombre: string = 'fernando';
    const edad: number = 35;
    const estaActivo: boolean = true;
    
    const poderes: string[] = ['Velocidad','Volar','Invisibilidad'];
    return (
     <>
        <h3>Tipos Basicos</h3>
        {nombre},{edad},{(estaActivo)? 'Activo':'Inactivo'}
        <br />
        {poderes.join(', ')}
    </>
    )
}
