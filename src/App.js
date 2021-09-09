import NavbarComponent from "./Navbar"
import ItemCount from "./componentes/ItemCount"
import ItemListContainer from "./componentes/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer"


const App = ()=>{
    return (
    <>
        <NavbarComponent/>
        <ItemListContainer tienda="E-commers"/>
        <ItemDetailContainer/>
        <ItemCount stock={5} initial={1} onAdd={(cantidad)=>{console.log(cantidad)}} />
    </>  
    )
}

export default App; 