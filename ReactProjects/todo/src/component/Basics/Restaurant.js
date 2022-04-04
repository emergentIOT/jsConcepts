import React from 'react';
import '../Basics/style.css'

export const Restaurant = () => {
    const image = {};
  return (
    <div className='card-container'>
        <div className='card'>
            <div className='card-body'>
                <span className='card-number card-circle subtle'>1</span>
                <span className='card-author subtle'>Breakfast</span>
                <h2 className="card-title">Maggi</h2>
                <span  className='card-description subtle'>
                    I love maggi and trying to learn Reac js</span>
                <div className='card-read'>Read</div>               
            </div>
            <img src={image} alt="images" className='card-media'/>
            <span className='card-tag subtle'>Order now</span>
        </div>
    </div>
  )
}

//export default Restaurant""