import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import {decrement, increment, selectCount} from "../../slices/counterSlice"

const Home = () => {
  const count = useSelector(selectCount)
  const dispatch = useDispatch();
  return (
    <>
      <Head>
        <title>Redux with Typescript</title>
      </Head>
      <section className='h-screen'>
        <div className='grid grid-cols-3 h-full w-1/2 mx-auto'>
          {/* <button className='width-[100px] height-[100px] rounded bg-neutral-200'>-</button>
          <h2 className='text-lg font-semibold'>The count is {count.value}</h2> */}
          <div className='w-full flex flex-row items-center justify-center'>
            <button className='w-1/3 align-middle rounded-md bg-neutral-200 font-bold text-[30px] text-green-500' onClick={()=>{dispatch(decrement())}}>-</button>
          </div>
          <div className='w-full flex flex-row items-center justify-center '>
            <h2 className='text-rose-500 text-lg font-semibold'>The count is {count.value}</h2>
          </div>
          <div className='w-full flex flex-row items-center justify-center'>
            <button className='w-1/3 align-middle rounded-md bg-neutral-200 font-semibold text-[30px] text-green-500'  onClick={()=>{dispatch(increment())}}>+</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home