import React, { useState } from 'react'
import { useContext } from 'react'
import { contexto } from '../componentes/CartContext'
import Order from '../componentes/Order'
import { Link } from 'react-router-dom'

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
                <h2>Checkout</h2>     
                <hr/>
                {!cart.length
                ?   <div class="div-check"><p class="text-check">¡Muchas gracias por elegirnos!</p> <p class="text-check">Recibira un email con los pasos a seguir para finalizar la compra</p></div>
                : 
                    <div>
                        <form onSubmit={ enviarSubmit }>
                            <label className="p-2">Nombre</label>
                            <input type='text' value={ value.nombre } onChange= {tomarDatosDelInput} name='nombre' required/>
                            <label className="p-2">Email</label>
                            <input type='email' value={ value.email } onChange= {tomarDatosDelInput} name='email' required/>
                            <label className="p-2">Telefono</label>
                            <input type='tel'value={ value.telefono } onChange= {tomarDatosDelInput} name='telefono' required/>
                            <button className='m-2 btn button-product'>Enviar informacion de contacto</button>
                        </form>
                    </div>
                }    
                <Link className="btn button-product" to={ '/' }> Volver a home </Link>
            </div>
            
        </>
    )
}
