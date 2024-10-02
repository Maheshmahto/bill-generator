import { createContext, useEffect, useReducer } from "react";

export const BillContext = createContext(
    {
        itemList:[],
        addItem : ()=>{},
        deleteItem :()=>{},
    }
)
 const itemListReducer =(state,action)=>{
    switch (action.type){
        case "add" :
       return [
        ...state,
        {
            id :Date.now(),
            itemInput:action.payload.itemInput,
            quantityInput :action.payload.quantityInput,
            priceInput :action.payload.priceInput,
        },
       ];
       case "delete":
        return state.filter( (item)=>item.id !=action.payload.id);
        default :
        return state;
    }
 }
export  const BillProvider =({children})=>{

    const [itemList,dispatchItem]=useReducer(itemListReducer,JSON.parse(localStorage.getItem("itemList"))||[]);

    useEffect( ()=>{
        localStorage.setItem("itemList",JSON.stringify(itemList));

    },[itemList])

    const addItem =(itemInput,quantityInput,priceInput)=>{
        dispatchItem ({
            type :"add",
            payload :{
                itemInput,
                quantityInput,
                priceInput,
            }
        });
    }
    const deleteItem =(id)=>{
        dispatchItem({
            type :"delete",
            payload :{ id }
        })
    }

    return (
        <BillContext.Provider
         value ={
            {
                itemList,
                addItem ,
                deleteItem ,
            }
         }
        >
            {children}
        </BillContext.Provider>
    )
}