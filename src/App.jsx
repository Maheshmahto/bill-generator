
import './App.css'
import Bill from './Components/Bill'
import { BillProvider } from './Components/Store'
import List from './List'
import Total from './Components/Total-Amount'

function App() {

  return (
    <>

    <BillProvider>
    <Total></Total>

    <div className='flex justify-center items-center flex-col '>
    <Bill/>
    <h1 className="underline text-white text-xl  items-start mt-2"> Item List </h1>
    <List/>


   </div>


    </BillProvider>
   
     
    </>
  )
}

export default App
