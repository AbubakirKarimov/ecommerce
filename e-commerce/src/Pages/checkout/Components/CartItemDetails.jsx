import { formatMoney } from "../../../utils/money";
import { useState } from "react";
import axios from "axios";

export function CartItemDetails({ cartItem,loadCart }) {
    const [isUpdated, setIsUpdated] = useState(false);
    const [quantity, setQuantity] = useState(cartItem.quantity);

     const deleteCartItem = async () => {
       await axios.delete(`/api/cart-items/${cartItem.productId}`); 
       await loadCart();
    };
    const updateQuantity= async () => {
        if(isUpdated){
            await axios.put(`/api/cart-items/${cartItem.productId}`, {
                quantity: Number(quantity),
            });
            await loadCart();
            setIsUpdated(false);
        }
        else{
            setIsUpdated(true);

        }
    }
    const getQuantity = (event) => {
        setQuantity(event.target.value);
    }
    const handleQuantityKeyDown = (event) => {
        const keyPressed = event.key;

        if(keyPressed === 'Enter'){
            updateQuantity();
        }
        else if (keyPressed === 'Escape'){
            setQuantity(cartItem.quantity);
            setIsUpdated(false);
        }
    };
    return (
        <>
            <img className="product-image"
                src={cartItem.product.image} />

            <div className="cart-item-details">
                <div className="product-name">
                    {cartItem.product.name}
                </div>
                <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                </div>
                <div className="product-quantity">
                    <span>
                        Quantity: {isUpdated ? <input type='text' style={{width: 50}} value={quantity} onChange={getQuantity}  onKeyDown={handleQuantityKeyDown}/> : <span className="quantity-label">{cartItem.updateQuantity}</span>}
                    </span>
                    <span className="update-quantity-link link-primary" onClick={updateQuantity}>
                        Update
                    </span>
                    <span className="delete-quantity-link link-primary" onClick={deleteCartItem}>
                        Delete
                    </span>
                </div>
            </div>
        </>
    );
}