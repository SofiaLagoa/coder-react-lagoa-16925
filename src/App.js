import ItemCount from "./componentes/ItemCount"
import ItemListContainer from "./componentes/ItemDetailContainer"
import NavbarComponent from "./Navbar"



const App = ()=>{
    return (
    <>
        <NavbarComponent/>
        <ItemListContainer tienda="E-commers"/>
        <ItemCount stock={5} initial={1} onAdd={(cantidad)=>{console.log(cantidad)}} />
    </>
        
    )
}

export default App 