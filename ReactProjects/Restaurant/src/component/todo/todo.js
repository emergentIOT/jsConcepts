import React, {useState} from 'react'
import './style.css'

const Todo = () => {
    const[inputData, setInputData] = useState("hello");
    const[items, setItems] = useState([]);

    const addItem = () => {
        if(!inputData) {
            alert('Please fill the data');
        } else {
            const myNewInputData = {
                id : new Date().getTime().toString(),
                name : inputData
            }
            setItems([...items, myNewInputData]);
            setInputData("");
        }
    }

    //Delete items
    const deleteItem = (id) => {
        const remainingElement = items.filter((currElem)=>{
            return currElem.id !== id;
        })
    setItems(remainingElement);
    }

    //Remove all
    const removeAll = () => {
        setItems([]);
    }

  return (
    <>
    <div className='main-div'>
        <div className='child-div'>
            <figure>
                <img src="./images/todo.svg" alt="todo Logo" />
                <figcaption>Add your list here</figcaption>
            </figure>    
            <div className='addItems'>
                <input type="text" placeholder='Add items' className='form-control' 
                value={inputData} onChange={(event) => setInputData(event.target.value)} />
                <i className='fa fa-plus' add-btn onClick={addItem}></i>
            </div>
            
            {/** show our items */}
            <div className='showItems'>
                {items.map((curElem, index) => {
                    return(
                        <div className='eachItem' key={curElem.id}>
                        <h3>{curElem.name}</h3>
                        <div className='todo-btn'>
                           <i className='far fa-edit' add-btn></i>
                           <i className='far fa-trash-alt' add-btn onClick={()=>deleteItem(curElem.id)}></i>
                        </div>
                  </div>
                )
                      
            })}
              
            </div>

            {/**remove all items */}
            
            <div className='showItems'>
                <button className='btn effect04' data-sm-link-text="REMOVE ALL" onClick={removeAll}>
                    <span>CHECKLIST</span>
                </button>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Todo