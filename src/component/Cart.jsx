import { CartContext } from '../context/Cart';
import { useContext } from 'react';
import { InventContext } from '../context/Invent';

const Cart = () => {
    const cartDetail = useContext(CartContext);
    const productDetail = useContext(InventContext);

    const cartInfo = getCountArray(cartDetail.cart);
    const productDetails = getProductDetails(productDetail, cartInfo);

    const totalValue = productDetails.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0);

    console.log(productDetails);

    return (
        <div>
            <h1>Shopping Cart</h1>
            {productDetails.length > 0 ? (
                <>
                    <ul>
                        {productDetails.map(product => (
                            <li key={product.id}>
                                <h2>{product.title}</h2>
                                <p>Price: ${product.price}</p>
                                <p>Quantity: {product.quantity}</p>
                            </li>
                        ))}
                    </ul>
                    <h2>Total Value: ${totalValue.toFixed(2)}</h2>
                </>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

function getCountArray(arr) {
    const countMap = {};

    arr.forEach(num => {
        if (countMap[num]) {
            countMap[num]++;
        } else {
            countMap[num] = 1;
        }
    });

    const result = Object.entries(countMap).map(([key, value]) => {
        return { id: Number(key), quantity: value };
    });

    return result;
}

function getProductDetails(productDetail, cartInfo) {
    return cartInfo.map(({ id, quantity }) => {
        const product = productDetail.product.find(item => item.id === id);
        return product ? { ...product, quantity } : null;
    }).filter(product => product !== null);
}

export default Cart;
