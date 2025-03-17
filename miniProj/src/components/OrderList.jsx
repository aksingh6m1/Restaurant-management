import React,{useContext} from 'react'
import { CartContext } from "./CartContext";
function OrderList() {
  // Hardcoded object for order details
  const cartItems  = useContext(CartContext);
  const orderDetails = {
    name: cartItems.userName,
    tableNumber: cartItems.tableNo,
   
  }

  return (
    <div className='w-full h-screen bg-slate-800 p-8 flex flex-col items-center'>
      <h1 className='text-white text-4xl mb-6'>Order Details</h1>

      <div className='bg-white rounded-lg shadow-lg p-6 max-w-lg w-full'>
        {/* Customer Name */}
        <p className='text-lg font-semibold mb-2'>Name: <span className='font-normal'>{orderDetails.name}</span></p>

        {/* Table Number */}
        <p className='text-lg font-semibold mb-4'>Table Number: <span className='font-normal'>{orderDetails.tableNumber}</span></p>

        {/* Order Items */}
        <h2 className='text-xl font-semibold mb-2'>Order Items</h2>
        <ul className='space-y-2'>
          {cartItems.cartItems.map((item, index) => (
            <li key={index} className='flex justify-between text-gray-800'>
              <span>{item.name}</span>
              <span>x{item.qty}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default OrderList
