import React, { useContext } from 'react'
// import { BillContext } from "./Components/Store";
import { BillContext } from './Store';

const Total = () => {
    const{itemList}=useContext(BillContext);
    let total=0;
    itemList.forEach(element => {
        total=total +element.priceInput*element.quantityInput;
        // console.log(total);
    });
  return (
    <>
      <h1 className='text-xl font-semibold text-white mt-8 px-4'> Total Amout :  &#8377;{total}</h1>
    </>
  )
}

export default Total;
