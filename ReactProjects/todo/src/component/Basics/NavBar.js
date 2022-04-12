import React from 'react'

const NavBar = ({ filterItem, menuList }) => {
    console.log("menulist", menuList);
  return (
    <>
        {/**NAVIGATION HEADER */}
        <nav className='navbar'>

        <div className='btn-group'>
            {
                menuList.map((currElem)=>{
                    return(
                        <>
                             <button className='btn-group__item' onClick={() => filterItem(currElem)}>{currElem}</button>
                             </>
                    );
                })
            }
          
        </div>
    </nav>
    </>
  )
}

export default NavBar