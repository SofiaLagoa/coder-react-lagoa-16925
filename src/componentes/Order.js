import { getFirestore } from '../componentes/firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'



 const Order = (comprador, cart) => {

    return new Promise ((resolve, reject) => {

    const db = getFirestore()
    const ordenes = db.collection('ordenes2')
    const newOrder = {
        comprador: comprador,
        items: cart,
        fecha: "fecha"
    }

    console.log(newOrder);
    let newOr =JSON.parse(JSON.stringify(newOrder))
    newOr.fecha = firebase.firestore.Timestamp.fromDate(new Date())
    try {
        ordenes.add(newOr)
    .then((res) => resolve(res.id))
    } catch (error) {
        reject(error)
    }

    })

}

export default Order;

