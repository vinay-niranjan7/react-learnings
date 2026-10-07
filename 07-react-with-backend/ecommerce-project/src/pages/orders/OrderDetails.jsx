import { OrderProduct } from "./OrderProduct";

export function OrderDetails({ order }) {
  return (
    <div className="order-details-grid">
      {order.products.map((orderProduct) => (
        <OrderProduct
          key={orderProduct.product.id}
          orderProduct={orderProduct}
        />
      ))}
    </div>
  );
}
