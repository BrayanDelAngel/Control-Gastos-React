import { useEffect, useState } from 'react';
import CerrarBtn from '../img/cerrar.svg'
import Mensaje from './Mensaje';
const Modal = ({ setModal, animarmodal, setAnimarModal,guardarGasto,gastoEditar,setGastoEditar }) => {
    const [mensaje, setMensaje] = useState('')
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [fecha, setFecha] = useState('')
    const [id, setId] = useState('')
    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre);
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        }
    }, [])
    
    const handleOcultarModal = () => {
        setAnimarModal(false);
        setGastoEditar({})
        setTimeout(() => {
            setModal(false);
        }, 3000);
    }
    const handleSubmit = e => {
        e.preventDefault();
        if ([nombre, cantidad, categoria].includes('')) {
            setMensaje('Todos lo campos son obligatorios')
            setTimeout(() => {
                setMensaje('')
            }, 5000);
            return
        }
        guardarGasto({nombre,cantidad,categoria,id,fecha})
    }
    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={CerrarBtn}
                    alt="Cerrar modal"
                    onClick={handleOcultarModal} />
            </div>
            <form
                onSubmit={handleSubmit}
                className={`formulario ${animarmodal ? "animar" : 'cerrar'}`}>
                <legend>{gastoEditar.nombre ?'Editar Gasto': 'Nuevo Gasto'}</legend>
                {mensaje && <Mensaje tipo='error'> {mensaje}</Mensaje>}
                <div className='campo'>
                    <label htmlFor='nombre'>Nombre Gasto </label>
                    <input
                        id='nombre'
                        type="text"
                        placeholder='Añade el nombre del gasto'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor='cantidad'>Cantidad </label>
                    <input
                        id='cantidad'
                        type="number"
                        value={cantidad}
                        placeholder='Añade la cantidad de gasto'
                        onChange={e => setCantidad(Number(e.target.value))}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor='categoria'>Categoria </label>
                    <select
                        id='categoria'
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}>
                        <option value=''>Selecciones</option>
                        <option value='ahorro'>Ahorro</option>
                        <option value='comida'>Comida</option>
                        <option value='casa'>Casa</option>
                        <option value='gastos'>Gastos Varios</option>
                        <option value='ocio'>Ocio</option>
                        <option value='salud'>Salud</option>
                        <option value='suscripciones'>Suscripciones</option>
                    </select>
                </div>
                <button
                    type='submit'
                >{gastoEditar.nombre ?'Guardar cambios': 'Añadir Gasto'}</button>
            </form>
        </div>
    )
}

export default Modal