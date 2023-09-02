import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormData } from '../Pages/Checkout';

const Message = (value: string | null, formData: FormData,grandtotal: number) => {
  const products = useSelector((state: any) => state.cart);

  const items = products.cart.map((value: any, index: number) => {
    const keys = Object.keys(value);
    const values = Object.values(value);
    // console.log(keys, values);
    return {
      [keys[1]]: values[1],
      [keys[2]]: values[2],
      [keys[3]]: values[3],
      [keys[4]]: values[4],
      [keys[7]]: values[7],
    };
  });
  // console.log(items);
  const itemMessage = items
    .map(
      (value: any) =>
        `   Product id: ${value.id}\n   Product Price: ${value.price}\n   Discounted Price: ${value.discprice}\n   Product Name: ${value.name}\n   Quantity of Product: ${value.quantity}\n\n`
    )
    .reduce((total: any, initial: any) => total + '' + initial);
  // console.log(
  //   itemMessage.reduce((total: any, initial: any) => total + '' + initial, 'cartitems \n')
  // );
  const total = items
    .map((value: any) => Number(value.price.substring(2)))
    .reduce((total: number, initial: number) => total + initial) + grandtotal;
  // console.log(total)
  const data = `\n${value}\n\nShipping Address:  ${formData.address}\nLandmark:  ${formData.landmark}\n\nTotal Amount: ${total}\n\nEmail: ${formData.email}\nPhone Number: ${formData.phoneNumber}`;
  const message =
    `Customer: ${formData.firstName} ${formData.lastName}, \n\nI would like to order: \n\nItems in Cart:\n\n` +
    itemMessage +
    data;
  console.log(encodeURIComponent(message));
  const whatsappUrl = `https://wa.me/917356029354?text=${encodeURIComponent(
    message
  )}`;
  return whatsappUrl;
};

export default Message;
