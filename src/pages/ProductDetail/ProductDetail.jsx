import React from 'react'
import './ProductDetail.css'
import { useParams, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import { useEffect } from 'react'

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { food_list, cartItems, addToCart, removeFromCart } = React.useContext(StoreContext);

    const [product, setProduct] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    //Tim san pham theo id
    useEffect(() => {
        const product = food_list.find(item => item._id === id);
        if(product) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setProduct(product);
        } 
        setLoading(false);
    }, [food_list, id, navigate]);

    if(loading) {
        return <div className="loading">Loading...</div>
    }
    if(!product) {
        return (
            <div className="product-not-found">
                Product not found
                <button onClick={() => navigate('/')}>Quay lại trang chủ</button>
            </div>
        );
    } 
  return (
    <div className="product-detail">
        {/* Nút quay lại */}
        <button className="back-btn" onClick={() => navigate(-1)}>
            ← Quay lại
        </button>

        <div className="product-detail-container product-info-section">
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} className="product-image-section" />
            <p className="product-description">{product.description}</p>
            <p className="product-price">Giá: {product.price.toLocaleString()} VND</p>
            <div className="cart-actions">  
                    <div className="quantity-controls">
                        <button onClick={() => removeFromCart(product._id)}>-</button>
                        <span>{cartItems[product._id]}</span>
                        <button onClick={() => addToCart(product._id)}>+</button>
                    </div>  
            </div>
        </div>
    </div>
  )
}

export default ProductDetail
