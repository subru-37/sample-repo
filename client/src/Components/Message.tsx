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
  const itemMessage = items.map(
    (value: any) =>
      `Product id: ${value.id} Product Price: ${value.price} Discounted Price: ${value.discprice} Product Name: ${value.name} Quantity of Product: ${value.quantity}\n`
  );
  console.log(
    itemMessage.reduce((total, initial) => total + '' + initial, 'cartitems \n')
  );
  const text = `${itemMessage.reduce(
    (total, initial) => total + '' + initial,
    'cartitems  \n'
  )} ${value} email:  ${formData.email} FirstName:  ${
    formData.firstName
  }LastName:  ${formData.lastName} address:  ${
    formData.address
  }landmark:  ${formData.landmark} phoneNumber:  ${
    formData.phoneNumber
  }`;
  console.log(encodeURIComponent(text))
  const whatsappUrl = `https://wa.me/917356029354?text=${text}`
  return whatsappUrl;
};

export default Message;
