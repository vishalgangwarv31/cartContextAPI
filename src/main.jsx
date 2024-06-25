import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Description from './component/Description.jsx'
import { CartContextProvider } from './context/Cart.jsx'
import { InventContextProvider } from './context/Invent.jsx'
import Cart from './component/Cart.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'description/:id',
    element:<Description/>
  },
  {
    path:'/cart',
    element:<Cart/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InventContextProvider>
      <CartContextProvider>
      <RouterProvider router={router}/>
      </CartContextProvider>
      </InventContextProvider>
  </React.StrictMode>,
)
