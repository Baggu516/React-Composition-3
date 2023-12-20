import React,{useState} from 'react'

const Tooltip = ({text,children}) => {
    const [display,setDisplay]=useState(false)
  return (
    <div>
        {!display?<h1 onMouseOver={() =>setDisplay(true)} className='tooltip' >{children}</h1>:<h1 className='tooltip-text'>{text}</h1>}
    </div>
  )
}

export default Tooltip