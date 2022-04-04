import React, { useState } from 'react';
import '../Basics/style.css';
import Menu from './menuApi'
import MenuCard from './MenuCard';

export const Restaurant = () => {

  const[menuData, setMenuData] = useState(Menu);  

  return (
    <>
    <MenuCard menuData={menuData} />
    </>
  )
}

//export default Restaurant""