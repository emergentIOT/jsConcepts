import React, {useEffect, useState} from 'react'
import './style.css'

//get localStorage data
const getLocalData = () => {
    const lists = localStorage.getItem("myTodoList");

    if(lists) {
        return JSON.parse(lists);
    } else {
        return [];
    }

}

const Todo = () => {
    const[inputData, setInputData] = useState("hello");
    const[items, setItems] = useState(getLocalData());
    const[isEditItem, setIsEditItem] = useState();
    const[toggleButton, setToggleButton] = useState(false);

    const addItem = () => {
        if(!inputData) {
            alert('Please fill the data');
        } else if(inputData && toggleButton) {
            setItems(items.map((curElem) => {
                if(curElem.id === isEditItem) {
                    return {...curElem, name: inputData}
                }
                return curElem;
            })
            )
            setInputData([]);
            setIsEditItem(null);
            setToggleButton(false);
        }
         else {
            const myNewInputData = {
                id : new Date().getTime().toString(),
                name : inputData
            }
            setItems([...items, myNewInputData]);
            setInputData("");
        }
    }

    //edit item
    const editItem = (id) => {
        const item_todo_edited = items.find((curElem) => {
            return curElem.id == id
        })
        setInputData(item_todo_edited.name);
        setIsEditItem(id);
        setToggleButton(true);
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

    //Adding localStorage
    useEffect(() => {
        localStorage.setItem("myTodoList", JSON.stringify(items))
    }, [items])

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
                {/* if toggleButton is true  */}
                {toggleButton ? (<i className='far fa-edit' add-btn onClick={addItem}></i>) : (<i className='fa fa-plus' add-btn onClick={addItem}></i>)}
                
            </div>
            
            {/** show our items */}
            <div className='showItems'>
                {items.map((curElem, index) => {
                    return(
                        <div className='eachItem' key={curElem.id}>
                        <h3>{curElem.name}</h3>
                        <div className='todo-btn'>
                           <i className='far fa-edit' add-btn onClick={() => editItem(curElem.id)}></i>
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