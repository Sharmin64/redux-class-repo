
import { decrement, increment, incrementByValue } from "./redux/features/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hook"




const App = () => {
  const {count}=useAppSelector((state)=>state.counter)

  const dispatch = useAppDispatch()



  return (
    <div className="h-svh w-full flex justify-center items-center">
      <div className="w-3/6 mx-auto  border-4 border-y-violet-400 border-x-purple-400 px-16 py-10 flex rounded-md bg-zinc-500">
        <button onClick={()=>dispatch(incrementByValue(5))} className="px-4 py-2 rounded-lg bg-lime-400 text-xl font-semibold text-orange-900 mr-5">Increment by 5</button>
        <button onClick={()=>dispatch(increment())} className="px-4 py-2 rounded-lg bg-green-700 text-xl font-semibold text-orange-600">Increment</button>
        <h1 className="font-extrabold text-6xl mx-4 ">{count}</h1>
        <button onClick={()=> dispatch(decrement())} className="px-4 py-2 rounded-lg bg-red-400 text-xl font-semibold text-gray-300">Decrement</button>
      </div>
    </div>
  )
}

export default App



// <div>
//         <h1 onClick={() => dispatch(addBox())}>{number}</h1>
//       </div>
//       <div>
//         {boxes.map((box) => (
//           <div key={box.id} style={{ width: '50px', height: '50px', border: '1px solid black', margin: '5px' }}>
//             Box {box.id + 1}
//           </div>
//         ))}
//       </div>