import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({ gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados }) => {
  return (
    <div className='Listado-gastos contenedor'>
      {filtro ? (
        <>
          <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay gastos'}</h2>
          {gastosFiltrados.map(gasto => (
            <Gasto key={gasto.id} setGastoEditar={setGastoEditar} gasto={gasto} eliminarGasto={eliminarGasto} />
          ))}
        </>
      ) : (
        <>
          <h2>{gastos.length ? 'Gastos' : 'No hay gastos'}</h2>
          {gastos.map(gasto => (
          <Gasto key={gasto.id} setGastoEditar={setGastoEditar} gasto={gasto} eliminarGasto={eliminarGasto} />
          ))}
        </>
      )
      }
    </div>
  )
}

export default ListadoGastos