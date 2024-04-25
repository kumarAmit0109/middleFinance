import { Routes, Route, Link } from "react-router-dom"
import Header from "./components/Header"
import Customers from "./components/Customers"
import Lenders from "./components/Lenders"
import Brokers from "./components/Brokers"
import Footers from "./components/Footers"
import Contact from "./components/Contact"
import Logincusto from "./components/Logincusto"
import Loginbro from "./components/Loginbro"



function App() {

  return (
    <div>
    <Routes>
      <Route path="/" element={<Customers/>}/>
      <Route path="/brokers" element={<Brokers/>}/>
      <Route path="/lenders" element={<Lenders/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/logincusto" element={<Logincusto/>}/>
      <Route path="/loginbro" element={<Loginbro/>}/>



      {/* <Route path="*" element={<Customers/>}/> */}

    </Routes>
    </div>
    
    
  )
  
}

export default App
