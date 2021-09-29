import React, { useState } from 'react'
import { useContext } from 'react'
import { contexto } from '../componentes/CartContext'
import Order from '../componentes/Order'


export const Checkout = () => {

    const { cart, emptyCart } = useContext(contexto)

    const [value, setComprador] = useState({
        nombre: '',
        email: '',
        telefono: 0,
    })
    const tomarDatosDelInput = (e) => {
        setComprador({
            ...value,
            [e.target.name]: e.target.value
        })
    }
    const enviarSubmit = (e) => {
        e.preventDefault()

        if (value.nombre.length > 3 && value.email.length > 3 && value.telefono.length >8){
            Order(value, cart, emptyCart)
            .then (res => {
                alert(res)
                emptyCart()
            })
            .catch (error => alert(error))
        } else {
            alert ('Informacion incompleta, por favor, complemente correctamente los campos')
        }
    }

    return (
        <>
            <div className="container">
                <h2>Vista del checkout</h2>     
                <hr/>
                {!cart.length
                ?   <h2>No hay elementos en el carrito para generar la compra</h2>
                : 
                    <div>
                        <form onSubmit={ enviarSubmit }>
                        <label>Nombre</label>
                            <input
                            type='text'
                            value={ value.nombre }
                            onChange= {tomarDatosDelInput}
                            name='nombre'
                            required
                            />
                            <label>Email</label>
                            <input
                            type='email'
                            value={ value.email }
                            onChange= {tomarDatosDelInput}
                            name='email'
                            required
                            />
                            <label>Telefono</label>
                            <input
                            type='tel'
                            value={ value.telefono }
                            onChange= {tomarDatosDelInput}
                            name='telefono'
                            required
                            />
                            <button className='btn'>Enviar informacion de contacto</button>
                        </form>
                    </div>
                }    
            </div>
        </>
    )
}
