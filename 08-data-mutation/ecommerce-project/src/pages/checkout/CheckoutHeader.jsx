import { Link } from 'react-router';
import './checkout-header.css';

export function CheckoutHeader({ cart }) {
  // Always treat quantity as a number; APIs may serialize it as a string.
  const totalQuantity = cart.reduce((total, item) => {
    return total + (Number(item.quantity) || 0);
  }, 0);

  return (
    <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <Link to="/">
            <img className="logo" src="images/logo.png" alt="Amazon" />
            <img className="mobile-logo" src="images/mobile-logo.png" alt="Amazon" />
          </Link>
        </div>
        <div className="checkout-header-middle-section">
          Checkout (<Link className="return-to-home-link" to="/">
            {totalQuantity} {totalQuantity === 1 ? 'item' : 'items'}
          </Link>)
        </div>
        <div className="checkout-header-right-section">
          <img src="images/icons/checkout-lock-icon.png" alt="Secure checkout" />
        </div>
      </div>
    </div>
  );
}
