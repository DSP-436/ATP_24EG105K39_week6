import {useContext} from 'react'
import { counterContextObj } from '../contexts/ContextProvider'

function Home() {

  const {counter,incrementCounter,decrementCounter}=useContext(counterContextObj)

  return (
    <div>
      <h1 className='text-4xl mb-4'>Counter: {counter}</h1>
      <div className="flex gap-4 mt-4">
        <button onClick={incrementCounter} className='bg-green-500 text-white font-bold px-6 py-3 rounded text-xl hover:bg-green-600 transition-colors'>+</button>
        <button onClick={decrementCounter} className='bg-red-500 text-white font-bold px-6 py-3 rounded text-xl hover:bg-red-600 transition-colors'>-</button>
      </div>
    </div>
  )
}

export default Home