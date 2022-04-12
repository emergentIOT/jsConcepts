import React from 'react'
import '../Hooks/style.css'

const useState = () => {
    const initialData = 3;
    const [myNum, setMyNum] = React.useState(initialData);
  return (
      <>
    <div className="center_div">
        <p>{myNum}</p>
        <div className='button2' onClick={() => setMyNum(myNum + 1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INC
        </div>    
        <div className='button2' onClick={() => myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DEC
        </div>  
    </div>
    </>
  )
}

export default useState