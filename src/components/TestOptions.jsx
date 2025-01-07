import React from 'react'
import { useTypingContext } from '../context/TypingContext'

const TestOptions = ({countDown = 10}) => {

    const {testTime, setTestTime} = useTypingContext();
    
  return (
    <div className='w-full'>
        <div className='flex justify-between gap-5 px-5 py-1 rounded-lg bg-black/30 mb-2 w-full'>
              <div className='text-white p-2'>{testTime}</div>

            <div className='text-white flex gap-2'>
                  <button
                  className='font-medium p-2 hover:text-purple-500'
                    onClick={()=>{setTestTime(5)}}
                  >5s</button>
                  <button
                  className='font-medium p-2 hover:text-purple-500'
                    onClick={()=>{setTestTime(15)}}
                  >15s</button>
                  <button
                  className='font-medium p-2 hover:text-purple-500'
                    onClick={()=>{setTestTime(30)}}
                  >30s</button>
                  
                  
            </div>
        </div>
    </div>
  )
}

export default TestOptions