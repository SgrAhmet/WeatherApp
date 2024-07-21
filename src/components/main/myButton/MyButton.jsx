import React from 'react'
import "./MyButton.css"

const MyButton = ({name}) => {
    
  return (
    <>
        <button className='myButton'>{name}</button>
    </>
  )
}

export default MyButton