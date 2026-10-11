import { OrderProduct } from './OrderProduct';

export function OrderDetails({ order, loadCart }) {
  return (
    <div className="order-details-grid">
      {order.products.map((orderProduct) => (
        <div
          className="order-product-grid"
          key={`${order.id}-${orderProduct.product.id}`}
        >
          <OrderProduct orderProduct={orderProduct} loadCart={loadCart} />
        </div>
      ))}
    </div>
  );
}
