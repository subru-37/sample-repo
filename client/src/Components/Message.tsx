import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formData } from '../Pages/Checkout';

const Message = (value: string | null, formData: formData) => {
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
  console.log(items);
  const whatsappUrl = `https://wa.me/917356029354?text=cartitems%20${JSON.stringify(
    items
  )}%20${value}%20email:  %20${formData.email}%20FirstName:   %20${
    formData.firstName
  }%20LastName:  %20${formData.lastName}%20address:  %20${
    formData.address
  }%20landmark:  %20${formData.landmark}%20phoneNumber:  %20${formData.phoneNumber}`;
  return whatsappUrl
};

export default Message;
