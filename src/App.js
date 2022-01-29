import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Home from './Components/Home';
import CartMenu from './Components/Cart/CartMenu';
import Item from './Components/SingleItem/item';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/cart" element={<CartMenu/>}/>
        <Route exact path="/product/:id" element={<Item/>}/>
      </Routes>
    </Router>
  );
}

export default App;
