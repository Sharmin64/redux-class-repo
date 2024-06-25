import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/features/counterSlice"




const App = () => {
  const {count}=useSelector((state)=>state.counter)

  const dispatch = useDispatch()



  return (
    <div className="h-svh w-full flex justify-center items-center">
      <div className="w-3/6 mx-auto  border-4 border-y-violet-400 border-x-purple-400 px-16 py-10 flex rounded-md bg-zinc-500">
        <button onClick={()=>dispatch(increment())} className="px-4 py-2 rounded-lg bg-green-700 text-xl font-semibold text-orange-600">Increment</button>
        <h1 className="font-extrabold text-6xl mx-4 ">{count}</h1>
        <button onClick={()=> dispatch(decrement())} className="px-4 py-2 rounded-lg bg-red-400 text-xl font-semibold text-gray-300">Decrement</button>
      </div>
    </div>
  )
}

export default App