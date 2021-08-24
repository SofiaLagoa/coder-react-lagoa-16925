import { useState } from "react";

const ItemCount = ({stock, onAdd, initial}) => {

    let [contador, setContador] = useState(initial)

    const sumar = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if(contador > 1){
            setContador(contador - 1)
        }
    }

    const agregar = () => {
        if(stock > 0){
           onAdd(contador)
        }
    }
        return ( 
            <div className="div-accountant">
                <p className="div-button">Productos agregados: {contador}</p>
                <div className="div-button">
                <button className="btn" onClick={sumar}>+</button>
                <button className="btn" onClick={restar}>-</button>
                <button className="btn" disabled={stock>0 ? false:true} onClick={agregar}>Agregar al carrito</button>
                </div>
            </div>
      );
    }
    
   

 
export default ItemCount;