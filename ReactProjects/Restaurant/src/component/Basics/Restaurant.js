import React, { useState } from 'react';
import '../Basics/style.css';
import Menu from './menuApi'
import MenuCard from './MenuCard';
import NavBar from './NavBar'

//Get list of categories: unique
const UniqueCategory = [...new Set(
  Menu.map((currElem) => {
    return currElem.category;
  })
), "All"];

export const Restaurant = () => {
  //useState is a hook should always be on top.
  const[menuData, setMenuData] = useState(Menu);  
  const[menuList, setMenuList] = useState(UniqueCategory);

  //Filter data based on cateogry
  const filterItem = (category) => {
    if(category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((currElem) => {
      return currElem.category === category
    })
    
    setMenuData(updatedList);
  }

  return (
    <>
    {/**PASSING PROPS THROUGH ATTRIBUTES */}
    <NavBar filterItem={filterItem} menuList={menuList}/>

    {/**PASSING PROPS THROUGH ATTRIBUTES */}
    <MenuCard menuData={menuData} />
    </>
  )
}

//export default Restaurant