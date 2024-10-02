import React, { useContext } from "react";
import { BillContext, BillProvider } from "./Components/Store";

const List = () => {
  const{itemList,deleteItem}=useContext(BillContext);
  return (
    <>
   

    {itemList.map((item)=>(
          <div className="mt-6" key={item.id}>
          <div className=" bg-white p-3 rounded-md w-[347px]  ">
            <div className=" grid  grid-cols-1">
              <span> {item.itemInput}  </span>
            </div>
            <div className="flex justify-between ">
              <span>quantity :{item. quantityInput} </span>
              <span> Price : &#8377; {item.priceInput}</span>
              <button className="bg-red-600 p-1 px-3 rounded-lg font-semibold text-white hover:bg-red-800" onClick={()=>deleteItem(item.id)}> Delete</button>
            </div>
          </div>
        </div>
    ))}
      
    </>
  );
};

export default List;
