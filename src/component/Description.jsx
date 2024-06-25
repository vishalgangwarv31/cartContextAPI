import { useParams } from 'react-router-dom';
import { CartContext } from '../context/Cart';
import { useContext } from 'react';
import { InventContext } from '../context/Invent';


const Description = ()=>{
    const { id } = useParams();
    const cartDetail = useContext(CartContext);
    const productDetail = useContext(InventContext);

    const numericId = Number(id);
    const detail = productDetail.product.filter(item => item.id === numericId);
    const product = detail.length > 0 ? detail[0] : null;

    return(
        <>
            <h1>{id}</h1>
            {product ? (
                <div>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <button onClick={() => cartDetail.setCart([...cartDetail.cart, numericId])}>
                        Add to Cart
                    </button>
                </div>
            ) : (
                <p>Product not found</p>
            )}         
        </>
    )
}


export default Description;