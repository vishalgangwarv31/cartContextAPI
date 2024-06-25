import { Link } from "react-router-dom";

const Card = ({item}) =>{
    return(
    <>
        <Link
            to={{
                pathname: `/description/${item.id}`,
            }}
            state={{item}}
            className="card-link"
        >
            <div className="card">
                <img src={item.image} alt="Product" className="card-image" />
                <div className="card-content">
                    <p className="card-title">{item.title}</p>
                    <p className="card-price">₹{item.price}</p>
                    <button className="add-to-cart-btn" onClick={(e) => { e.preventDefault(); }}>Add to Cart</button>
                </div>
            </div>
        </Link>
    </>
    )
}

export default Card;