import axios from 'axios';
import dayjs from 'dayjs';
import { useState } from 'react';
import { formatMoney } from '../../utils/money';
import { DeliveryOptions } from './DeliveryOptions';

export function OrderSummary({ cart, deliveryOptions, loadCart }) {
  return (
    <div className="order-summary">
      {cart.map((cartItem) => {
        const selectedDeliveryOption = deliveryOptions.find(
          (option) => option.id === cartItem.deliveryOptionId
        );
        return (
          <CartItem
            key={cartItem.productId}
            cartItem={cartItem}
            deliveryOptions={deliveryOptions}
            selectedDeliveryOption={selectedDeliveryOption}
            loadCart={loadCart}
          />
        );
      })}
    </div>
  );
}

function CartItem({ cartItem, deliveryOptions, selectedDeliveryOption, loadCart }) {
  const [quantity, setQuantity] = useState(String(cartItem.quantity));
  const [isUpdating, setIsUpdating] = useState(false);

  const updateQuantity = async () => {
    const parsedQuantity = Number(quantity);
    if (!Number.isInteger(parsedQuantity) || parsedQuantity < 1 || parsedQuantity > 10) {
      window.alert('Quantity must be between 1 and 10.');
      return;
    }
    setIsUpdating(true);
    try {
      await axios.put(`/api/cart-items/${cartItem.productId}`, { quantity: parsedQuantity });
      await loadCart();
    } finally {
      setIsUpdating(false);
    }
  };

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  };

  return (
    <div className="cart-item-container">
      {selectedDeliveryOption && (
        <div className="delivery-date">
          Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
        </div>
      )}
      <div className="cart-item-details-grid">
        <img className="product-image" src={cartItem.product.image} alt={cartItem.product.name} />
        <div className="cart-item-details">
          <div className="product-name">{cartItem.product.name}</div>
          <div className="product-price">{formatMoney(cartItem.product.priceCents)}</div>
          <div className="product-quantity">
            <label>
              Quantity:{' '}
              <select
                aria-label={`Quantity for ${cartItem.product.name}`}
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
              >
                {Array.from({ length: 10 }, (_, index) => (
                  <option key={index + 1} value={index + 1}>{index + 1}</option>
                ))}
              </select>
            </label>
            <button className="update-quantity-link link-primary" onClick={updateQuantity} disabled={isUpdating}>
              {isUpdating ? 'Updating...' : 'Update'}
            </button>
            <button className="delete-quantity-link link-primary" onClick={deleteCartItem}>
              Delete
            </button>
          </div>
        </div>
        <DeliveryOptions cartItem={cartItem} deliveryOptions={deliveryOptions} loadCart={loadCart} />
      </div>
    </div>
  );
}
