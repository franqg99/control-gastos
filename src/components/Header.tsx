import NuevoPresupuesto from "./NuevoPresupuesto"

const Header: React.FC = () => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      <NuevoPresupuesto />
    </header>
  )
}

export default Header