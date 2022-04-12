import React, {useEffect} from 'react'
import '../Hooks/style.css'

const UseEffect = () => {
    const initialData = 3;
    const [myNum, setMyNum] = React.useState(initialData);

    // useEffect hooks
    useEffect(() => {
        document.title = `Chats(${myNum})`
    }, []);
    
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
    </div>
    </>
  )
}

export default UseEffect