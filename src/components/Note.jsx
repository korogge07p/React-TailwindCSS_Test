import React from 'react'

const Note = (props) => {
  
  return (
    <div className='p-4 rounded border bg-black'>
      <p className='text-white font-bold text-2xl'>Blog No.{props.index}</p>
      <p className='text-white font-bold'>{props.message}</p>
    </div>
  )
}

export default Note