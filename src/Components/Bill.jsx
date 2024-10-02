import React, { useContext, useRef } from "react";
import { BillContext } from "./Store";

const Bill = () => {
  const{addItem,deleteItem}=useContext(BillContext)
  const itemInputElement=useRef();
  const quantityInputElement=useRef();
  const priceInputElement=useRef();

  const handlesubmit=(event)=>{
    event.preventDefault();
    const itemInput=itemInputElement.current.value;
    const quantityInput= quantityInputElement.current.value;
    const priceInput=Number (priceInputElement.current.value);

    addItem (itemInput,quantityInput,priceInput);
    itemInputElement.current.value="";
    quantityInputElement.current.value="";
    priceInputElement.current.value="";


  }

  return (
    <>
     <form onSubmit={handlesubmit}>
      <div className="flex flex-col mt-3 w-[100%] sm:w-[350px]">
        <h1 className=" font-bold text-3xl text-white text-center py-7">
          Bill / Invoice Generator
        </h1>
        <div className="my-3  flex justify-between items-center w-[100%]">
          <label htmlFor="item" className="font-semibold text-lg text-white ">
            Item :
          </label>
          <input
            type="text"
            placeholder="Enter a item "
            id="item"
            className="p-2 px-5 rounded-lg "
            ref={itemInputElement}
            required
          />
        </div>
        <div className="my-4 flex justify-between items-center w-[100%]">
          <label htmlFor="item" className="font-semibold text-lg text-white">
            
            Quantity :
          </label>
          <input
            type="number"
            placeholder="Enter a Quantity "
            id="item"
            className="p-2 px-5 rounded-lg "
            ref={quantityInputElement}
            required
          />
        </div >
        <div className="my-4 mb-7 flex justify-between items-center w-[100%]">
          <label htmlFor="item" className="font-semibold text-lg text-white">
            Price :
          </label>
          <input
            type="number"
            placeholder="Enter a price "
            id="item"
            className="p-2 px-5 rounded-lg"
            ref={priceInputElement}
            required
          />
        </div>
        <div className="text-center">
          <button className="bg-yellow-400 text-blue-950 p-2 rounded-lg font-bold hover:bg-yellow-600 px-4 mt-4">
            Add Item
          </button>
        </div>
      </div>
      </form>
    </>
  );
};

export default Bill;
