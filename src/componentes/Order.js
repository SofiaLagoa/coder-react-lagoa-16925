import { getFirestore } from '../componentes/firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'



 const Order = (comprador, cart) => {

    return new Promise ((resolve, reject) => {

    const db = getFirestore()
    const ordenes = db.collection('ordenes')
    const ordenCliente = {
        'comprador': {
            'nombre': comprador.nombre,
            'email': comprador.email,
            'telefono': comprador.telefono
        },
        'items':[{'producto1': 'televisor'}, {'producto2':'discos'}],
        'fecha': firebase.firestore.Timestamp.fromDate(new Date())         
    }
    try {
        ordenes.add(ordenCliente)
    .then((res) => resolve(res.id))
    } catch (error) {
        reject(error)
    }

    })

}

export default Order;