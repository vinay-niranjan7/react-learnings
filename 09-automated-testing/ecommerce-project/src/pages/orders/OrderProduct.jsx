import axios from 'axios';
import { useState } from 'react';
import dayjs from 'dayjs';

export function OrderProduct({ orderProduct, loadCart }) {
  const product = orderProduct.product;
  const [isAdded, setIsAdded] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const addToCart = async () => {
    if (isAdding) return;

    try {
      setIsAdding(true);
      // The backend increments the existing cart item's quantity when the
      // product is already in the cart. Sending quantity: 1 adds exactly one.
      await axios.post('/api/cart-items', {
        productId: product.id,
        quantity: 1
      });
      await loadCart();
      setIsAdded(true);
      window.setTimeout(() => setIsAdded(false), 2000);
    } catch (error) {
      console.error('Unable to add product to cart:', error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <>
      <div className="product-image-container">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <div className="product-name">{product.name}</div>
        <div className="product-delivery-date">
          Arriving on: {dayjs(orderProduct.estimatedDeliveryTimeMs).format('MMMM D')}
        </div>
        <div className="product-quantity">Quantity: {orderProduct.quantity}</div>
        <div className="added-to-cart" style={{ opacity: isAdded ? 1 : 0 }}>
          <img src="images/icons/checkmark.png" alt="" />
          Added
        </div>
        <button
          className="buy-again-button button-primary"
          type="button"
          onClick={addToCart}
          disabled={isAdding}
        >
          <img className="buy-again-icon" src="images/icons/buy-again.png" alt="" />
          <span className="buy-again-message">{isAdding ? 'Adding...' : 'Add to Cart'}</span>
        </button>
      </div>
      <div className="product-actions">
        <a href="/tracking">
          <button className="track-package-button button-secondary" type="button">
            Track package
          </button>
        </a>
      </div>
    </>
  );
}
