import './App.css'
import { Link } from 'react-router-dom'
import { useContext} from 'react'
import Card from './component/Card'
import { InventContext } from './context/Invent'
import Cart from './component/Cart'


function App() {
  const inventory = useContext(InventContext);
  const data = inventory.product;

  return (
    <>
      <div className="app">
      <Link to='/cart'> Go to cart</Link>
      <div className="card-container">
        {data ? (
          <ul className="card-list">
            {data.map((item) => (
              <li key={item.id} className="card-list-item">
                <Card item = {item} />
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
    </>
  )
}

export default App
