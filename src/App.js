import NavbarComponent from "./Navbar"
import ItemListContainer from "./componentes/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import CartContext from "./componentes/CartContext"
import Cart from "./componentes/Cart"

const App = ()=>{

    return ( 
    <BrowserRouter>

    <CartContext>
    <NavbarComponent/>
  <Switch>
    <Route path="/" component={ItemListContainer} exact/>
    <Route path="/category/:id" component={ItemListContainer} />
    <Route path="/item/:id" component={ItemDetailContainer} />  
    <Route path="/cart" component={Cart} />  
  </Switch>
  </CartContext>
  
    </BrowserRouter>  
    )
}

export default App; 