//Question 2


import React,{useState} from "react";

const OrderProcessingSystem=()=>{
    const [products,setProducts]=useState([]);
    const [orders,setOrders]=useState([]);

 const addProduct = (product) => {
    setProducts([...products, product]);
  };

const removeProduct = (productId) => {
    setProducts(products.filter((product) => product.productId !== productId));
  };

   const placeOrder = (orderId, productIds) => {
    const selectedProducts = products.filter((product) => productIds.includes(product.productId));
    if (selectedProducts.length === 0) {
      throw new Error('No valid products selected for the order.');
    }
    const order = { orderId, products: selectedProducts };
    setOrders([...orders, order]);
  };

  const cancelOrder = (orderId) => {
    setOrders(orders.filter((order) => order.orderId !== orderId));
  };

return(
    <div>

    <h2>Order OrderProcessingSystem:</h2>
    <button onClick={()=>
    addProduct({productId:product.productId, name: `Product ${products.length + 1}`,price: Math.floor(Math.random() * 100) + 1})}>Add the product</button>

   <h3>List all products:</h3>
      {products.map((product,productId) => (
        <div key={productId}>
          <div>{product.name}</div>
        </div>
      ))}
   
    <h3>Remove Products:</h3>
      {products.map((product,productId) => (
        <div key={productId}>
          <p>{product.name} - ${product.price}</p>
          <button onClick={() => removeProduct(productId)}>Remove</button>
        </div>
      ))}

     <h2>Place Order</h2>
      <button onClick={() => placeOrder(orders.length + 1, [1, 2])}>Place Order</button>

       <h3>List of all Orders:</h3>
      {orders.map((order) => (
        <div key={order.orderId}>
          <ul>
            {order.products.map((product,productId) => (
              <li key={productId}>
                {product.name} - ${product.price}
              </li>
            ))}
          </ul>

          <h3>Cancel Order:</h3>
          <button onClick={() => cancelOrder(order.orderId)}>Cancel Order</button>
        </div>
      ))}
    </div>
  );
    </div>

}

