import { useState, createContext,useEffect } from "react";
import { FetchProduct } from "../api/FetchProduct";

export const InventContext = createContext(null);

export const InventContextProvider = (props)=>{
    const [product,setProduct] = useState([]);

    useEffect(()=>{
        FetchProduct().then((prod)=>setProduct(prod))
      },[])    

    return(
        <InventContext.Provider value={{product,setProduct}}>
            {props.children} 
        </InventContext.Provider>
    )
}