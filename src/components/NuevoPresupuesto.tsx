const NuevoPresupuesto: React.FC = () => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input 
            className="nuevo-presupuesto" 
            type="text" 
            name="" 
            placeholder="Añade tu Presupuesto"
            id="" 
          />
        </div>

        <input type="submit" value="Añadir" />
      </form>
    </div>
  )
}

export default NuevoPresupuesto