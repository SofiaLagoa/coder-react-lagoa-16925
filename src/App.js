import NavbarComponent from "./Navbar"
import ItemListContainer from "./componentes/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer"
import { BrowserRouter, Route, Switch } from "react-router-dom"


const App = ()=>{
   
    return ( 

    <BrowserRouter>
    <NavbarComponent/>

  <Switch>
    <Route path="/" component={ItemListContainer} exact/>
    <Route path="/category/:id" component={ItemListContainer} />
    <Route path="/item/:id" component={ItemDetailContainer} />  
  </Switch>

    </BrowserRouter>  

    )
}

export default App; 