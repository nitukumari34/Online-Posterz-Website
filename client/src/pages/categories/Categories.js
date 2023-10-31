import React, { useEffect, useState } from 'react';
import './Categories.scss';
import {useNavigate,useParams} from "react-router";

import Product from '../../components/product/Product'

function Categories() {
  const navigate=useNavigate();
  const params=useParams();
  const [categoryId,setCategoryId] = useState('');
   const categoryList=[
    {
      id:'comics',
      value:'Comics',
   },
    {

      id:'tv-shows',
      value:'TV Shows',

  },{
    id:'sports',
    value:'Sports',
    },
];
 useEffect(()=>{
  setCategoryId(params.categoryId);
  //api call

 },[params])

 function updateCategory(e){
  navigate('/category/${e.target.value}');

 }

  return (
    <div className='Categories'>
      <div className='container'>
      <div className='header'>
        <div className='info'>
          <h3>Explore all Print and Artwork</h3>
          <p>India's largest collection of wall posters for your bedroom,living room,kids room,kitchen
            and posters & art prints at highest quality lowest price guaranteed.
          </p>

        </div>
        <div className='sort-by'>
          <div className='sort-by-container'>
            <p className='sort-by-text'>Sort By</p>
            
              <select 
              className='select-sort-by' 
              name='sort-by'
               id='sort-by'
                >
              <option value='relavance'> Relavance</option>
              <option value='newest-first'>Newest First</option>
              <option value='price-lth'>Price-Low To High</option>
              </select>
            

          </div>

        </div>

      </div>

      <div className='content'>
        <div className='filter-box'>
          <div className='category-filter'>
            <h3>Category</h3>

            {categoryList.map((item)=>(
               <div key={item.id} className='filter-radio'>
              <input
               name='category' 
               type='radio' 
               value={item.id}
                id={item.id} 
                onChange={updateCategory}
                checked={item.id===categoryId}
                
              />
              <label htmlFor={item.id}>{item.value}</label>

            </div>))}
           

          </div>
        </div>
        <div className='product-box'>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div>

      </div>            

      </div>
      
    </div>
  )
}

export default Categories



// a56bfd16a6331c2c43bc3be005ad834e57e591381d52a4e74c784732021083936ccbc09c88082a79dd959e3d1e6442885b495ba0988cba2cba90690ac31acc1849f212a7d7a7d3650e9bbc7d3c276a4432cc0176c00c355515ad0fb079ea7ad0641424078feb58a4fa6d99f69718b2ea1dccf12042264b5112a4485156f15b94